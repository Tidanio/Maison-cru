"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Atelier", href: "#atelier" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" strokeLinecap="round" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
      <path d="M9 8a3 3 0 0 1 6 0" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex w-full max-w-container items-center justify-between gap-6 rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6 ${
          scrolled
            ? "border-ink/10 bg-paper/70 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-white/30 bg-paper/25 backdrop-blur-md"
        }`}
      >
        <a
          href="#"
          className="font-display text-lg tracking-tight text-ink md:text-xl"
          aria-label="Maison Écru — home"
        >
          Maison Écru
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group relative font-sans text-xs uppercase tracking-wide2 text-graphite transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ink transition-all duration-300 ease-silk group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-full text-graphite transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <IconSearch />
          </button>
          <button
            type="button"
            aria-label="Shopping bag, 0 items"
            className="relative grid h-10 w-10 place-items-center rounded-full text-graphite transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <IconBag />
            <span className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-ink text-[9px] font-medium tabular-nums text-paper">
              0
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
