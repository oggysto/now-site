"use client";

import { SiSpotify, SiApplepodcasts, SiYoutube } from "react-icons/si";

const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/nowpodcast",
    icon: <SiSpotify className="w-5 h-5" />,
    label: "Spotify",
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/fr/podcast/now",
    icon: <SiApplepodcasts className="w-5 h-5" />,
    label: "Apple Podcasts",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@nowpodcast",
    icon: <SiYoutube className="w-5 h-5" />,
    label: "YouTube",
  },
];

export default function PlatformBadges() {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={p.label}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border border-white/40 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          {p.icon}
          <span>{p.label}</span>
        </a>
      ))}
    </div>
  );
}
