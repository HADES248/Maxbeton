import ProductsPage from "./ProductsPage"

export const metadata = {
  title: "MaxBeton Products | Buy or Rent Construction Equipment Online",
  description:
    "Browse MaxBeton's catalog of construction equipment for sale & rent. Excavators, cranes, loaders & more—perfect for any project site in India. Fast delivery",
  keywords: [
    "MaxBeton products",
    "buy construction equipment",
    "rent excavators online",
    "cranes for rent India",
    "construction machinery listings",
    "heavy equipment for sale",
    "online equipment rental",
    "construction tools MaxBeton"
  ],
  openGraph: {
    title: "MaxBeton | Shop Construction Machinery Online",
    description:
      "Explore a wide selection of construction equipment available for sale or rental. MaxBeton delivers reliable machines for every job site.",
    url: "https://www.maxbeton.in/products",
    siteName: "MaxBeton",
    images: [
      {
        url: "Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "Wide selection of MaxBeton construction equipment"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxBeton Products | Heavy Equipment for Sale & Rent",
    description:
      "Discover top-quality construction machinery from MaxBeton. Shop or rent equipment for all your building needs—fast, affordable, and reliable.",
  },
  alternates: {
    canonical: "https://www.maxbeton.in/products"
  }
};



export default function page() {
  return (
    <div>
      <ProductsPage />
    </div>
  )
}
