export type ProductSpan = "feature" | "tall" | "wide" | "normal";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  /** Product photograph (served from /public/products). */
  image: string;
  /** Bento footprint. */
  span: ProductSpan;
};

export const products: Product[] = [
  {
    id: "wool-overcoat",
    name: "The Wool Overcoat",
    category: "Outerwear",
    price: "€1,890",
    image: "/products/wool-overcoat.jpg",
    span: "feature",
  },
  {
    id: "cashmere-knit",
    name: "Cashmere Rib Knit",
    category: "Knitwear",
    price: "€640",
    image: "/products/cashmere-rib-knit.jpg",
    span: "tall",
  },
  {
    id: "silk-slip",
    name: "Silk Slip Dress",
    category: "Dresses",
    price: "€820",
    image: "/products/silk-slip-dress.jpg",
    span: "normal",
  },
  {
    id: "pleated-trouser",
    name: "Pleated Trouser",
    category: "Tailoring",
    price: "€490",
    image: "/products/pleated-trousers.jpg",
    span: "normal",
  },
  {
    id: "leather-derby",
    name: "Leather Derby",
    category: "Footwear",
    price: "€720",
    image: "/products/leather-derby.jpg",
    span: "wide",
  },
  {
    id: "linen-shirt",
    name: "Linen Shirt",
    category: "Shirting",
    price: "€310",
    image: "/products/linen-shirt.jpg",
    span: "tall",
  },
  {
    id: "structured-tote",
    name: "Structured Tote",
    category: "Leather Goods",
    price: "€1,250",
    image: "/products/structured-tote.jpg",
    span: "normal",
  },
];
