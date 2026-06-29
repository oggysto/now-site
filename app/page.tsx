import Nav from "@/components/Nav";
import EpisodeCard from "@/components/EpisodeCard";
import { getEpisodes } from "@/lib/rss";

const SPOTIFY_URL = "https://open.spotify.com/show/nowpodcast";
const APPLE_URL = "https://podcasts.apple.com/fr/podcast/now/id1234567890";

export default async function HomePage() {
  const episodes = await getEpisodes();

  return (
    <main>
      {/* Hero block — nav + hero fusionnés */}
      <div
        className="relative"
        style={{
          background: "linear-gradient(135deg, #C4A8E8 0%, #9B7DC8 50%, #7B5EAF 100%)",
        }}
      >
        {/* Watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[280px] font-black text-white/[0.06] tracking-[-0.05em] select-none overflow-hidden"
        >
          NOW
        </span>

        <Nav />

        <div className="relative text-center px-6 pt-32 pb-20">
          <h1
            className="font-black text-white leading-none tracking-[-0.05em]"
            style={{ fontSize: "clamp(80px, 16vw, 150px)" }}
          >
            NOW
          </h1>
          <p className="mt-4 mb-8 text-xs tracking-[0.35em] uppercase text-white/65 font-medium">
            Le podcast de notre vingtaine
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white border border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              🎵 Spotify
            </a>
            <a
              href={APPLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white border border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              🎙 Apple Podcasts
            </a>
          </div>
        </div>
      </div>

      {/* Episodes section */}
      <section className="px-6 sm:px-10 py-12 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-7">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9B7DC8]">
            Tous les épisodes
          </span>
          <span className="text-xs font-semibold text-[#C4A8E8]">
            {episodes.length} épisode{episodes.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.guid} episode={ep} />
          ))}
        </div>
      </section>
    </main>
  );
}
