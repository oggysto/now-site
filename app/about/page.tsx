import Nav from "@/components/Nav";
import Link from "next/link";

const SPOTIFY_URL = "https://open.spotify.com/show/nowpodcast";
const APPLE_URL = "https://podcasts.apple.com/fr/podcast/now/id1234567890";

export default function AboutPage() {
  return (
    <main>
      {/* Hero — même style que la homepage */}
      <div
        className="relative"
        style={{
          background: "linear-gradient(135deg, #C4A8E8 0%, #9B7DC8 50%, #7B5EAF 100%)",
        }}
      >
        <Nav />
        <div className="relative text-center px-6 pt-32 pb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-white/65 font-medium mb-3">
            NOW
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            À propos
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-14">

        {/* Description du podcast */}
        <section className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9B7DC8] block mb-5">
            Le podcast
          </span>
          <p className="text-[#3D3545] text-lg leading-relaxed font-medium mb-4">
            <strong>NOW</strong> est le podcast de notre vingtaine.
          </p>
          <p className="text-[#3D3545]/70 leading-relaxed">
            Animé par <strong>Oggy</strong> et <strong>Thomas</strong>, deux étudiants
            de la Junior-Entreprise de l&apos;INSA Lyon, il explore cette période de vie
            où l&apos;on se pose mille questions&nbsp;: les études, l&apos;argent, les premiers
            jobs, les ambitions… et les doutes.
          </p>
          <p className="text-[#3D3545]/70 leading-relaxed mt-3">
            À travers des échanges avec des entrepreneurs, dirigeants ou artistes,
            on cherche à comprendre leurs parcours, leurs choix et leurs réflexions
            pour s&apos;en inspirer.
          </p>
        </section>

        {/* Les hosts */}
        <section className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9B7DC8] block mb-6">
            Les hosts
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-[#E8D8FF] rounded-2xl p-6">
              <div
                className="w-16 h-16 rounded-full mb-4"
                style={{
                  background: "linear-gradient(135deg, #C4A8E8, #7B5EAF)",
                }}
              />
              <h3 className="font-black text-[#3D3545] text-lg">Oggy</h3>
              <p className="text-[#9B7DC8] text-sm font-medium mb-3">Co-host</p>
              <p className="text-[#3D3545]/60 text-sm leading-relaxed">
                Étudiant à l&apos;INSA Lyon, passionné par l&apos;entrepreneuriat et les
                parcours inspirants.
              </p>
            </div>
            <div className="bg-white border border-[#E8D8FF] rounded-2xl p-6">
              <div
                className="w-16 h-16 rounded-full mb-4"
                style={{
                  background: "linear-gradient(135deg, #C4A8E8, #7B5EAF)",
                }}
              />
              <h3 className="font-black text-[#3D3545] text-lg">Thomas</h3>
              <p className="text-[#9B7DC8] text-sm font-medium mb-3">Co-host</p>
              <p className="text-[#3D3545]/60 text-sm leading-relaxed">
                Étudiant à l&apos;INSA Lyon, curieux des trajectoires de vie et des
                leçons qu&apos;elles portent.
              </p>
            </div>
          </div>
        </section>

        {/* Écouter */}
        <section className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9B7DC8] block mb-5">
            Écouter
          </span>
          <div className="flex gap-3 flex-wrap">
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#7B5EAF] hover:bg-[#9B7DC8] transition-colors"
            >
              🎵 Spotify
            </a>
            <a
              href={APPLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold text-[#7B5EAF] border border-[#C4A8E8] hover:bg-[#EDE0FF] transition-colors"
            >
              🎙 Apple Podcasts
            </a>
          </div>
        </section>

        <Link
          href="/"
          className="text-sm font-semibold text-[#9B7DC8] hover:text-[#7B5EAF] transition-colors"
        >
          ← Voir tous les épisodes
        </Link>
      </div>
    </main>
  );
}
