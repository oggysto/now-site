"use client";

import { Episode } from "@/lib/rss";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div
      onClick={() => window.open(episode.link, "_blank")}
      className="group bg-white border border-[#E8D8FF] rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(123,94,175,0.14)] hover:border-[#C4A8E8]"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-bold tracking-widest text-[#C4A8E8] uppercase">
          EP {episode.episodeNumber}
        </span>
        <span className="text-xs font-semibold text-[#C4A8E8]">
          {episode.duration}
        </span>
      </div>

      <h3 className="text-base font-bold text-[#3D3545] leading-snug mb-2 line-clamp-2">
        {episode.title}
      </h3>

      <p className="text-sm text-[#9B7DC8] font-medium">{episode.guest}</p>

      <div className="flex justify-end mt-4">
        <div className="w-8 h-8 rounded-full bg-[#EDE0FF] flex items-center justify-center text-xs text-[#7B5EAF] group-hover:bg-[#9B7DC8] group-hover:text-white transition-colors">
          ▶
        </div>
      </div>
    </div>
  );
}
