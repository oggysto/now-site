import Image from "next/image";
import Nav from "@/components/Nav";
import EpisodeCarousel from "@/components/EpisodeCarousel";
import PlatformBadges from "@/components/PlatformBadges";
import Footer from "@/components/Footer";
import { getEpisodes } from "@/lib/rss";

export default async function HomePage() {
  const episodes = await getEpisodes();
  const latest = episodes[0];

  return (
    <main>
      {/* ─── HERO — plein écran ─────────────────────────────────────── */}
      <section
        className="relative flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, #C4A8E8 0%, #9B7DC8 50%, #7B5EAF 100%)",
        }}
      >
        {/* Watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[clamp(200px,35vw,400px)] font-black text-white/[0.07] tracking-[-0.05em] select-none overflow-hidden leading-none"
        >
          NOW
        </span>

        <Nav />

        {/* Contenu centré */}
        <div className="relative flex flex-col items-center text-center px-6 pt-16 pb-20" style={{ minHeight: "65vh", justifyContent: "center" }}>
          <p className="text-xs tracking-[0.35em] uppercase text-white/60 font-medium mb-6">
            ETIC INSA Technologies
          </p>
          <h1
            className="font-black text-white leading-none tracking-[-0.05em] mb-6"
            style={{ fontSize: "clamp(72px, 14vw, 140px)" }}
          >
            NOW
          </h1>
          <p className="text-sm tracking-[0.2em] uppercase text-white/65 font-medium mb-10">
            Le podcast de notre vingtaine
          </p>
          <PlatformBadges />
        </div>

      </section>

      {/* ─── ÉPISODES ───────────────────────────────────────────────── */}
      <section className="bg-[#F5EEFF] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-2xl font-black text-[#3D3545] tracking-tight">
              Tous les épisodes
            </h2>
            <span className="text-xs font-semibold text-[#C4A8E8] tracking-wider uppercase">
              {episodes.length} épisode{episodes.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        <EpisodeCarousel episodes={episodes} />
      </section>

      {/* ─── DERNIER ÉPISODE ────────────────────────────────────────── */}
      {latest && (
        <section
          className="bg-white py-20 px-6"
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-10 items-center">
            {/* Photo */}
            <a
              href={latest.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden group shadow-[0_24px_56px_rgba(0,0,0,0.5)]"
            >
              {latest.image && (
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="256px"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-[#7B5EAF] text-xl ml-1">▶</span>
                </div>
              </div>
            </a>

            {/* Texte */}
            <div className="flex-1 sm:text-left text-center">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#9B7DC8] block mb-4">
                Dernier épisode
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#3D3545] leading-snug mb-3">
                {latest.title}
              </h2>
              <p className="text-[#7B5EAF] font-semibold mb-1">{latest.guest}</p>
              <p className="text-[#3D3545]/40 text-sm mb-8">{latest.duration}</p>
              <a
                href={latest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#7B5EAF] hover:bg-[#9B7DC8] transition-colors"
              >
                <span>▶</span> Écouter maintenant
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
