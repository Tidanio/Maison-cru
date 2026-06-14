"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { products, type ProductSpan } from "@/lib/products";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const spanClasses: Record<ProductSpan, string> = {
  feature: "col-span-2 row-span-2",
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export default function ProductGrid() {
  return (
    <section
      id="collection"
      className="relative mx-auto w-full max-w-container scroll-mt-28 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-sans text-xs uppercase tracking-luxe text-stone">
            The Collection
          </p>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight text-ink md:text-6xl">
            Ready-to-wear
          </h2>
        </div>
        <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-graphite/70">
          Seven essentials cut from wool, cashmere and silk — an exercise in
          proportion, drape and the discipline of the unembellished.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-flow-row-dense auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] md:auto-rows-[16rem] md:grid-cols-4 md:gap-4"
      >
        {products.map((p) => (
          <motion.article
            key={p.id}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`group relative overflow-hidden rounded-sm bg-sand ${spanClasses[p.span]}`}
          >
            <a
              href="#"
              className="block h-full w-full focus-visible:outline-none"
              aria-label={`${p.name} — ${p.price}`}
            >
              {/* Secondary image (revealed beneath) */}
              <Image
                src={p.imageAlt}
                alt=""
                fill
                aria-hidden
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.04]"
              />
              {/* Primary image — fades out on hover to reveal the second shot */}
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-all duration-[1200ms] ease-silk group-hover:scale-[1.04] md:group-hover:opacity-0"
              />

              {/* Gradient scrim — always on (mobile), reveal on hover (desktop) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

              {/* Meta */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                <div className="translate-y-0 opacity-100 transition-all duration-500 ease-silk md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="font-sans text-[10px] uppercase tracking-wide2 text-paper/70">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-tight text-paper md:text-xl">
                    {p.name}
                  </h3>
                </div>
                <span className="shrink-0 translate-y-0 font-sans text-sm tabular-nums text-paper opacity-100 transition-all duration-500 ease-silk md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {p.price}
                </span>
              </div>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
