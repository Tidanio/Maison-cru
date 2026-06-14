"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shirt, Scissors, BookOpen, Mail, Search, ShoppingBag } from "lucide-react";
import { ExpandableTabs, type TabItem } from "@/components/ui/expandable-tabs";

const navTabs: TabItem[] = [
  { title: "Collection", icon: Shirt, href: "#collection" },
  { title: "Atelier", icon: Scissors, href: "#atelier" },
  { title: "Journal", icon: BookOpen, href: "#journal" },
  { title: "Contact", icon: Mail, href: "#contact" },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (index: number | null) => {
    if (index === null) return;
    const tab = navTabs[index];
    if (tab && tab.type !== "separator" && tab.href) {
      document
        .querySelector(tab.href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex w-full max-w-container items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 md:px-5 ${
          scrolled
            ? "border-ink/10 bg-paper/70 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-white/30 bg-paper/25 backdrop-blur-md"
        }`}
      >
        <a
          href="#"
          className="font-display tracking-tight text-ink"
          aria-label="Maison Écru — home"
        >
          <span className="text-lg sm:hidden">Écru</span>
          <span className="hidden text-xl sm:inline">Maison Écru</span>
        </a>

        <div className="flex items-center gap-2">
          <ExpandableTabs tabs={navTabs} onChange={handleChange} activeColor="text-ink" />

          <div className="mx-0.5 hidden h-6 w-px bg-ink/15 sm:block" aria-hidden="true" />

          <button
            type="button"
            aria-label="Search"
            className="hidden h-9 w-9 place-items-center rounded-full text-stone transition-colors hover:bg-ink/[0.04] hover:text-ink sm:grid"
          >
            <Search size={18} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Shopping bag, 0 items"
            className="relative grid h-9 w-9 place-items-center rounded-full text-stone transition-colors hover:bg-ink/[0.04] hover:text-ink"
          >
            <ShoppingBag size={18} strokeWidth={1.4} />
            <span className="absolute right-1 top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-ink text-[8px] font-medium tabular-nums text-paper">
              0
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
