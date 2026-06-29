"use client";

import { useState } from "react";
import Image from "next/image";
import { Episode } from "@/lib/rss";

const CARD_W = 300;
const STEP = CARD_W + 24;

function circularDist(i: number, active: number, n: number) {
  let d = i - active;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
}

export default function EpisodeCarousel({ episodes }: { episodes: Episode[] }) {
  const [active, setActive] = useState(0);
  const n = episodes.length;

  const navigate = (dir: 1 | -1) => {
    setActive((prev) => ((prev + dir) % n + n) % n);
  };

  return (
    <div className="relative py-8 select-none">
      {/* Conteneur avec hauteur fixe — les cartes sont positionnées en absolu */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          height: `${CARD_W + 140}px`,
          maxWidth: `${STEP * 3 + 40}px`,
        }}
      >
        {episodes.map((ep, i) => {
          const d = circularDist(i, active, n);
          const isCenter = d === 0;
          const isSide = Math.abs(d) === 1;
          const visible = Math.abs(d) <= 2;

          const scale = isCenter ? 1 : isSide ? 0.82 : 0.65;
          const opacity = isCenter ? 1 : isSide ? 0.55 : 0;
          const x = d * STEP;

          return (
            <div
              key={ep.guid}
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                width: `${CARD_W}px`,
                transform: `translateX(calc(-50% + ${x}px)) scale(${scale})`,
                opacity,
                transition:
                  "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.42s ease",
                transformOrigin: "center top",
                zIndex: isCenter ? 10 : isSide ? 5 : 1,
                cursor: visible ? "pointer" : "default",
                pointerEvents: visible ? "auto" : "none",
              }}
              onClick={() => {
                if (isCenter) window.open(ep.link, "_blank");
                else if (d < 0) navigate(-1);
                else navigate(1);
              }}
            >
              <div className="bg-white border border-[#E8D8FF] rounded-2xl overflow-hidden shadow-sm">
                {/* Image */}
                <div
                  className="relative bg-[#EDE0FF]"
                  style={{ aspectRatio: "1" }}
                >
                  {ep.image && (
                    <Image
                      src={ep.image}
                      alt={ep.title}
                      fill
                      className="object-cover"
                      sizes={`${CARD_W}px`}
                    />
                  )}
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wider">
                    EP {ep.episodeNumber}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#3D3545] leading-snug mb-1 line-clamp-2">
                    {ep.title}
                  </h3>
                  <p className="text-xs text-[#9B7DC8] font-medium mb-3">
                    {ep.guest}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#C4A8E8] font-semibold">
                      {ep.duration}
                    </span>
                    {isCenter && (
                      <div className="w-7 h-7 rounded-full bg-[#EDE0FF] flex items-center justify-center text-[10px] text-[#7B5EAF]">
                        ▶
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Flèches */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#E8D8FF] shadow-md flex items-center justify-center text-[#7B5EAF] hover:bg-[#EDE0FF] transition-colors"
      >
        ←
      </button>
      <button
        onClick={() => navigate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#E8D8FF] shadow-md flex items-center justify-center text-[#7B5EAF] hover:bg-[#EDE0FF] transition-colors"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {episodes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? "24px" : "6px",
              height: "6px",
              background: i === active ? "#9B7DC8" : "#C4A8E8",
            }}
          />
        ))}
      </div>
    </div>
  );
}
