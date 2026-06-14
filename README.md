# Maison Écru — High-End Fashion E-commerce

An editorial, minimalist landing page for a fictional couture house, built as a
showcase of premium UI/UX with motion and 3D.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3.4** (custom couture design tokens)
- **Framer Motion** — entrance, stagger and hover micro-interactions
- **React Three Fiber / three.js** + **@react-three/drei** — the 3D hero backdrop

## Design language

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#0B0B0B` | Primary text, dark surfaces |
| `paper` | `#F4F1EA` | Off-white ("écru") background |
| `stone` / `taupe` | `#8C857B` / `#A89F92` | Muted labels, 3D form |
| `sand` | `#D9CFC1` | Card backing |

- **Display type:** Bodoni Moda (high-contrast didone — the couture voice)
- **UI / body type:** Jost (geometric sans)
- Motion stays within 150–450ms, uses transform/opacity only, and respects
  `prefers-reduced-motion`.

## Sections

1. **Hero** (`components/Hero.tsx` + `components/HeroCanvas.tsx`) — full-viewport
   3D backdrop: a softly distorting sphere that self-rotates and parallaxes
   toward the cursor, behind oversized Bodoni type and an animated CTA.
2. **Marquee** — a quiet brand-values band (`app/page.tsx`).
3. **Collection** (`components/ProductGrid.tsx`) — a Framer-Motion bento grid;
   cards stagger in on scroll and reveal a second image, scrim and metadata on
   hover (always visible on touch).
4. **Navbar** (`components/Navbar.tsx`) — a floating glassmorphism pill that
   intensifies its blur/shadow on scroll.
5. **Footer** (`components/Footer.tsx`) — minimal links + newsletter on ink.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Imagery

Product imagery uses deterministic monochrome placeholders from
`picsum.photos` (see `lib/products.ts`). Swap the `image` / `imageAlt` URLs for
your real product photography — add the host to `images.remotePatterns` in
`next.config.mjs`.
