"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// The 3D canvas is client-only (WebGL); never server-render it.
const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full items-center overflow-hidden">
      {/* 3D backdrop + legibility washes */}
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/30 via-transparent to-paper" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper/70 via-paper/10 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-container px-6 pt-28 md:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-sans text-xs uppercase tracking-luxe text-stone"
          >
            Fall — Winter MMXXVI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.08 }}
            className="mt-6 font-display text-6xl font-light leading-[0.9] tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Beauty in
            <span className="block italic text-graphite">restraint.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-graphite/80"
          >
            Maison Écru composes quiet, architectural garments in natural fibres
            — tailored for a life lived deliberately.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <motion.a
              href="#collection"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-ink px-8 py-4"
            >
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-ink"
                initial={{ y: "101%" }}
                variants={{ hover: { y: "0%" } }}
                transition={{ duration: 0.45, ease: EASE }}
              />
              <span className="relative z-10 font-sans text-xs uppercase tracking-wide2 text-ink transition-colors duration-300 group-hover:text-paper">
                Explore the collection
              </span>
              <span className="relative z-10 text-ink transition-colors duration-300 group-hover:text-paper">
                <ArrowRight />
              </span>
            </motion.a>

            <a
              href="#atelier"
              className="group relative font-sans text-xs uppercase tracking-wide2 text-graphite"
            >
              Discover the maison
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-graphite transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-sans text-[10px] uppercase tracking-luxe text-stone">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-stone to-transparent" />
      </motion.div>
    </section>
  );
}
