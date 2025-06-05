import ProductsPage from "./ProductsPage"

export const metadata = {
  title: "MaxBeton Products | Construction Equipment for Sale & Rent",
  description: "Browse MaxBeton's wide range of construction equipment including excavators, cranes, loaders, and more. Available for both sale and rental.",
  keywords: [
    "MaxBeton products",
    "excavators for sale",
    "cranes for rent",
    "heavy equipment listings",
    "construction machinery catalog"
  ],
  openGraph: {
    title: "MaxBeton Products | Browse Construction Equipment",
    description: "Explore our catalog of high-quality construction machinery ready for your next project.",
    url: "https://www.maxbeton.vercel.app/products",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/88bcfb3f-12fd-4bc9-b718-5984c3deca52/1a92250ba4931d951bc73645d814a420.png",
        width: 1200,
        height: 630,
        alt: "Various construction equipment for sale and rent"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore MaxBeton Products | Machinery Sales & Rentals",
    description: "Find the right construction equipment for your needs from our featured listings.",
  },
  alternates: {
    canonical: "https://www.maxbeton.vercel.app/products"
  }
};



export default function page() {
  return (
    <div>
      <ProductsPage />
    </div>
  )
}
