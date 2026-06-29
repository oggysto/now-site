"use client";

import Image from "next/image";
import { Episode } from "@/lib/rss";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div
      onClick={() => window.open(episode.link, "_blank")}
      className="group flex-shrink-0 w-72 bg-white border border-[#E8D8FF] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(123,94,175,0.15)] hover:border-[#C4A8E8]"
    >
      {/* Episode image */}
      <div className="relative w-full aspect-square bg-[#EDE0FF]">
        {episode.image ? (
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            className="object-cover"
            sizes="288px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-black text-[#C4A8E8]">NOW</span>
          </div>
        )}
        {/* Episode number badge */}
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wider">
          EP {episode.episodeNumber}
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-[#3D3545] leading-snug mb-1.5 line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-xs text-[#9B7DC8] font-medium mb-3">{episode.guest}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#C4A8E8] font-semibold">{episode.duration}</span>
          <div className="w-7 h-7 rounded-full bg-[#EDE0FF] flex items-center justify-center text-[10px] text-[#7B5EAF] group-hover:bg-[#9B7DC8] group-hover:text-white transition-colors">
            ▶
          </div>
        </div>
      </div>
    </div>
  );
}
