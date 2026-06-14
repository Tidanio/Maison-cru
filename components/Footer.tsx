"use client";

const columns = [
  {
    title: "Shop",
    items: ["Outerwear", "Knitwear", "Tailoring", "Leather Goods"],
  },
  {
    title: "Maison",
    items: ["The Atelier", "Sustainability", "Stores", "Careers"],
  },
  {
    title: "Connect",
    items: ["Instagram", "Pinterest", "Newsletter", "Client Care"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-container px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10">
          {/* Brand + newsletter */}
          <div className="max-w-sm">
            <p className="font-display text-3xl tracking-tight md:text-4xl">
              Maison Écru
            </p>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-paper/60">
              Quiet luxury in natural fibres. Receive collection previews and
              atelier notes — never more than twice a month.
            </p>

            <form
              className="mt-8"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter sign-up"
            >
              <label
                htmlFor="newsletter"
                className="font-sans text-[10px] uppercase tracking-luxe text-paper/50"
              >
                Newsletter
              </label>
              <div className="mt-3 flex items-center border-b border-paper/30 focus-within:border-paper">
                <input
                  id="newsletter"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent py-2 font-sans text-sm text-paper placeholder:text-paper/35 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 font-sans text-xs uppercase tracking-wide2 text-paper/80 transition-colors hover:text-paper"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-sans text-[10px] uppercase tracking-luxe text-paper/40">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.items.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="font-sans text-sm font-light text-paper/70 transition-colors hover:text-paper"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-8 text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs">© 2026 Maison Écru. All rights reserved.</p>
          <ul className="flex gap-6 font-sans text-xs">
            <li><a href="#" className="transition-colors hover:text-paper">Privacy</a></li>
            <li><a href="#" className="transition-colors hover:text-paper">Terms</a></li>
            <li><a href="#" className="transition-colors hover:text-paper">Shipping</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
