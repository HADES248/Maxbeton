import ProductDetailPage from './ProductsDetails'

export const metadata = {
  title: "Product Details | MaxBeton Construction Equipment",
  description: "View detailed specifications, features, and availability of MaxBeton's high-performance construction machinery. Available for both sale and rental.",
  keywords: [
    "construction equipment details",
    "MaxBeton product info",
    "heavy machinery specifications",
    "equipment rental features",
    "construction machinery overview"
  ],
  openGraph: {
    title: "MaxBeton Equipment Details | Specs & Availability",
    description: "Discover in-depth information about our construction equipment—reliable machines for any job site.",
    url: "https://www.maxbeton.in",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581093448795-ff3e4f67c92b",
        width: 1200,
        height: 630,
        alt: "Detailed view of MaxBeton construction equipment"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxBeton Product Details | Durable & Powerful Equipment",
    description: "Explore specs, images, and pricing info for construction machines offered by MaxBeton.",
  },
  alternates: {
    canonical: "https://www.maxbeton.vercel.app"
  }
};


export default function productDetail() {
  return (
    <div>
      <ProductDetailPage />
    </div>
  )
}
