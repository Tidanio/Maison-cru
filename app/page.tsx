import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const marqueeItems = [
  "Free Global Shipping",
  "Crafted in Italy",
  "Natural Fibres",
  "Carbon-Neutral Delivery",
  "Lifetime Repairs",
];

function Marquee() {
  return (
    <section
      id="atelier"
      aria-label="Maison values"
      className="overflow-hidden border-y border-ink/10 bg-cream py-5"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1}
            className="flex items-center"
          >
            {marqueeItems.map((label) => (
              <li
                key={`${dup}-${label}`}
                className="flex items-center font-sans text-xs uppercase tracking-luxe text-stone"
              >
                {label}
                <span className="mx-8 text-taupe">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
