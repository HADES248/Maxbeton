import ProductDetailPage from './ProductsDetails'

export const metadata = {
  title: "Buy Construction Equipment Online | MaxBeton Product Details",
  description:
    "Explore detailed specs, features, and pricing for MaxBeton's top-quality construction machinery. Buy excavators, loaders, and more online with nationwide delivery.",
  keywords: [
    "buy construction equipment online",
    "product details construction machinery",
    "excavator specs",
    "heavy machinery for sale",
    "MaxBeton product specifications",
    "construction equipment pricing",
    "equipment features",
    "online construction machinery store"
  ],
  openGraph: {
    title: "MaxBeton Equipment Details | Buy Online with Specs & Pricing",
    description:
      "Get complete details, specs, and images of high-performance construction equipment. Purchase online with confidence at MaxBeton.",
    url: "https://www.maxbeton.in",
    siteName: "MaxBeton",
    images: [
      {
        url: "Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "Construction equipment product detail view"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Equipment Specs & Pricing | MaxBeton",
    description:
      "See specifications, images, and prices for durable construction equipment. Shop online at MaxBeton for nationwide delivery and expert support.",
  },
  alternates: {
    canonical: "https://www.maxbeton.in"
  }
};

export default function productDetail() {
  return (
    <div>
      <ProductDetailPage />
    </div>
  )
}
