export type ProductSpan = "feature" | "tall" | "wide" | "normal";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  /** Primary editorial image (shown at rest). */
  image: string;
  /** Secondary image revealed on hover. */
  imageAlt: string;
  /** Bento footprint. */
  span: ProductSpan;
};

// Monochrome editorial placeholders (deterministic via seed). Swap `image` /
// `imageAlt` for your real product photography CDN when wiring up the catalog.
const shot = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1000/1250?grayscale`;

export const products: Product[] = [
  {
    id: "wool-overcoat",
    name: "The Wool Overcoat",
    category: "Outerwear",
    price: "€1,890",
    image: shot("ecru-coat-a"),
    imageAlt: shot("ecru-coat-b"),
    span: "feature",
  },
  {
    id: "cashmere-knit",
    name: "Cashmere Rib Knit",
    category: "Knitwear",
    price: "€640",
    image: shot("ecru-knit-a"),
    imageAlt: shot("ecru-knit-b"),
    span: "tall",
  },
  {
    id: "silk-slip",
    name: "Silk Slip Dress",
    category: "Dresses",
    price: "€820",
    image: shot("ecru-silk-a"),
    imageAlt: shot("ecru-silk-b"),
    span: "normal",
  },
  {
    id: "pleated-trouser",
    name: "Pleated Trouser",
    category: "Tailoring",
    price: "€490",
    image: shot("ecru-trouser-a"),
    imageAlt: shot("ecru-trouser-b"),
    span: "normal",
  },
  {
    id: "leather-derby",
    name: "Leather Derby",
    category: "Footwear",
    price: "€720",
    image: shot("ecru-derby-a"),
    imageAlt: shot("ecru-derby-b"),
    span: "wide",
  },
  {
    id: "linen-shirt",
    name: "Linen Shirt",
    category: "Shirting",
    price: "€310",
    image: shot("ecru-linen-a"),
    imageAlt: shot("ecru-linen-b"),
    span: "tall",
  },
  {
    id: "structured-tote",
    name: "Structured Tote",
    category: "Leather Goods",
    price: "€1,250",
    image: shot("ecru-tote-a"),
    imageAlt: shot("ecru-tote-b"),
    span: "normal",
  },
];
