import AboutPageDetails from './AboutPageDetails'


export const metadata = {
  title: "About MaxBeton | Trusted Construction Equipment Experts",
  description:
    "Learn more about MaxBeton's mission, leadership, and industry experience. We specialize in supplying high-performance construction equipment across India.",
  keywords: [
    "About MaxBeton",
    "construction equipment company",
    "heavy machinery supplier India",
    "trusted construction partner",
    "MaxBeton mission and values",
    "equipment supplier team"
  ],
  openGraph: {
    title: "About MaxBeton | Reliable Equipment Suppliers in India",
    description:
      "Discover MaxBeton's story, values, and commitment to providing dependable construction machinery solutions nationwide.",
    url: "https://www.maxbeton.in/about",
    siteName: "MaxBeton",
    images: [
      {
        url: "Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "MaxBeton team and construction site"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About MaxBeton | Leaders in Construction Machinery",
    description:
      "Explore the team, values, and vision behind MaxBeton—India’s go-to supplier for durable construction equipment.",
  },
  alternates: {
    canonical: "https://www.maxbeton.in/about"
  }
};



export default function AboutPage() {
  return (
    <div>
      <AboutPageDetails />
    </div>
  )
}
