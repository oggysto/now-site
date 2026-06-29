import { XMLParser } from 'fast-xml-parser';

export interface Episode {
  guid: string;
  episodeNumber: number;
  title: string;
  guest: string;
  description: string;
  duration: string;
  link: string;
  pubDate: string;
  image: string;
}

function parseDuration(seconds: number | string): string {
  const s = Number(seconds);
  if (isNaN(s)) return String(seconds);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  if (h > 0) return `${h}h${String(m % 60).padStart(2, '0')}`;
  return `${m} min`;
}

function parseEpisodeTitle(raw: string): { episodeNumber: number; title: string; guest: string } {
  // Format: "#5 Firstname Lastname – Role – Tagline"
  const numMatch = raw.match(/^#(\d+)\s+(.+)/);
  if (!numMatch) return { episodeNumber: 0, title: raw, guest: '' };

  const episodeNumber = parseInt(numMatch[1], 10);
  const rest = numMatch[2];

  // Guest name = everything before first "–" or "-" separator
  const separatorMatch = rest.match(/^(.+?)\s*[–-]\s*/);
  const guest = separatorMatch ? separatorMatch[1].trim() : rest.trim();

  // Title = everything after the guest name (keep the full tagline)
  const title = rest.replace(/^.+?\s*[–-]\s*/, '').trim() || rest.trim();

  return { episodeNumber, title, guest };
}

export async function getEpisodes(): Promise<Episode[]> {
  const url = process.env.REDCIRCLE_RSS_URL;
  if (!url) throw new Error('REDCIRCLE_RSS_URL is not set');

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);

  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    cdataPropName: '__cdata',
  });

  const parsed = parser.parse(xml);
  const items: Record<string, unknown>[] = parsed?.rss?.channel?.item ?? [];

  return items.map((item) => {
    const rawTitle = String(item['itunes:title'] || item['title'] || '');
    const { episodeNumber, title, guest } = parseEpisodeTitle(rawTitle);

    const imageHref =
      (item['itunes:image'] as { '@_href': string } | undefined)?.['@_href'] ?? '';
    const enclosureUrl =
      (item['enclosure'] as { '@_url': string } | undefined)?.['@_url'] ?? '';

    return {
      guid: String(item['guid'] ?? enclosureUrl),
      episodeNumber,
      title,
      guest,
      description: String((item['description'] as Record<string, unknown>)?.['__cdata'] ?? item['description'] ?? ''),
      duration: parseDuration(item['itunes:duration'] as number | string ?? 0),
      link: String(item['link'] ?? ''),
      pubDate: String(item['pubDate'] ?? ''),
      image: imageHref,
    };
  });
}
