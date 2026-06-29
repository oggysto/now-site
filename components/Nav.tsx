import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 absolute top-0 left-0 right-0 z-10">
      <Link
        href="/"
        className="text-2xl font-black text-white tracking-tight leading-none"
      >
        NOW
      </Link>
      <div className="flex gap-7">
        <Link
          href="/"
          className="text-sm font-medium text-white/75 hover:text-white transition-colors"
        >
          Épisodes
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-white/75 hover:text-white transition-colors"
        >
          À propos
        </Link>
      </div>
    </nav>
  );
}
