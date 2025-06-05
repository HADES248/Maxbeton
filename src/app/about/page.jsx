import AboutPageDetails from './AboutPageDetails'


export const metadata = {
  title: "About MaxBeton | Trusted Construction Equipment Partner",
  description: "Learn about MaxBeton’s mission, values, and expertise in providing top-tier construction machinery for sale and rent across India.",
  keywords: [
    "About MaxBeton",
    "construction equipment experts",
    "heavy machinery company",
    "reliable construction rentals",
    "equipment suppliers India"
  ],
  openGraph: {
    title: "About MaxBeton | Leading Machinery Experts",
    description: "Discover our journey, values, and commitment to delivering high-performance construction equipment.",
    url: "https://www.maxbeton.vercel.app/about",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://images.unsplash.com/photo-1538688554366-621d446302aa",
        width: 1200,
        height: 630,
        alt: "MaxBeton team and construction site"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About MaxBeton | Reliable Construction Equipment Experts",
    description: "Meet the team behind MaxBeton and learn about our dedication to delivering high-quality construction machinery.",
  },
  alternates: {
    canonical: "https://www.maxbeton.vercel/about"
  }
};


export default function AboutPage() {
  return (
    <div>
      <AboutPageDetails />
    </div>
  )
}
