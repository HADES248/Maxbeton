import HomePage from "./HomePage";

export const metadata = {
  title: "MaxBeton | Reliable Construction Equipment Sales & Rentals",
  description: "MaxBeton offers high-performance construction equipment for every job site. Browse our selection of excavators, cranes, loaders, and more—available for sale or rent.",
  keywords: [
    "MaxBeton",
    "construction equipment",
    "heavy machinery",
    "excavators",
    "loaders",
    "bulldozers",
    "cranes",
    "construction rentals",
    "machinery sales"
  ],
  openGraph: {
    title: "MaxBeton | Reliable Construction Equipment Experts",
    description: "Get powerful and durable machines for your construction needs. MaxBeton supplies premium-grade equipment for rent and sale.",
    url: "https://www.maxbeton.com",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://www.maxbeton.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaxBeton construction equipment on site"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxBeton | Construction Equipment for Every Job Site",
    description: "Explore heavy-duty machinery from MaxBeton. We offer top-tier excavators, loaders, cranes, and more—available for purchase or rental.",
  },
  alternates: {
    canonical: "https://www.maxbeton.com"
  }
};

export default function Home() {
  return (
    <HomePage />
  );
}
