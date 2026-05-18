import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-widest uppercase hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
          NEXGEN BUILDS
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#services" className="relative text-gray-300 hover:text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
            Services
          </Link>
          <Link href="#portfolio" className="relative text-gray-300 hover:text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
            Portfolio
          </Link>
          <Link href="#contact" className="relative text-gray-300 hover:text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
