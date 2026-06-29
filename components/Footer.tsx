import { SiSpotify, SiApplepodcasts, SiYoutube } from "react-icons/si";

const platforms = [
  { name: "Spotify", href: "https://open.spotify.com/show/nowpodcast", icon: SiSpotify },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/fr/podcast/now", icon: SiApplepodcasts },
  { name: "YouTube", href: "https://youtube.com/@nowpodcast", icon: SiYoutube },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "linear-gradient(135deg, #2A2233 0%, #1C1525 100%)" }}
      className="px-6 pt-10 pb-7"
    >
      <div className="max-w-3xl mx-auto">
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <span className="text-2xl font-black text-white tracking-[-0.05em]">NOW</span>
            <p className="text-white/35 text-xs mt-1 tracking-wide">Le podcast de notre vingtaine</p>
          </div>

          <div className="flex items-center gap-4">
            {platforms.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-5" />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Now Podcast</p>
          <p className="text-white/20 text-xs">Fait avec ❤️ à l'INSA Lyon</p>
        </div>
      </div>
    </footer>
  );
}
