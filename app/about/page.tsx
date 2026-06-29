import Image from "next/image";
import Nav from "@/components/Nav";
import Link from "next/link";
import { SiLinkedin } from "react-icons/si";

const hosts = [
  {
    name: "Oggy",
    photo: "/oggy.jpg",
    linkedin: "https://www.linkedin.com/in/oggysto/",
  },
  {
    name: "Thomas",
    photo: "/thomas.jpg",
    linkedin: "https://www.linkedin.com/in/thomasdl/",
  },
];

export default function AboutPage() {
  return (
    <main>
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

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-14">

        {/* Description */}
        <section className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9B7DC8] block mb-5">
            Le podcast
          </span>
          <p className="text-[#3D3545] text-lg leading-relaxed font-medium mb-4">
            <strong>NOW</strong> est le podcast de notre vingtaine.
          </p>
          <p className="text-[#3D3545]/70 leading-relaxed">
            Animé par <strong>Oggy</strong> et <strong>Thomas</strong>, deux étudiants
            de l&apos;INSA Lyon, il explore cette période de vie où l&apos;on se pose mille
            questions&nbsp;: les études, l&apos;argent, les premiers jobs, les ambitions… et les doutes.
          </p>
          <p className="text-[#3D3545]/70 leading-relaxed mt-3">
            À travers des échanges avec des entrepreneurs, dirigeants ou artistes,
            on cherche à comprendre leurs parcours, leurs choix et leurs réflexions
            pour s&apos;en inspirer.
          </p>
        </section>

        {/* Hosts */}
        <section className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9B7DC8] block mb-6">
            Les hosts
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {hosts.map((host) => (
              <div key={host.name} className="bg-white border border-[#E8D8FF] rounded-2xl p-6 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#EDE0FF]">
                  <Image
                    src={host.photo}
                    alt={host.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-[#3D3545] text-lg">{host.name}</h3>
                    <a
                      href={host.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${host.name}`}
                      className="text-[#C4A8E8] hover:text-[#7B5EAF] transition-colors"
                    >
                      <SiLinkedin size={16} />
                    </a>
                  </div>
                  <p className="text-[#9B7DC8] text-sm font-medium">Co-host</p>
                </div>
              </div>
            ))}
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
