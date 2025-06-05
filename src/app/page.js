import HomePage from "./HomePage";

export const metadata = {
  title: "MaxBeton | Reliable Construction Equipment Sales & Rentals",
  description: "MaxBeton is your trusted source for high-performance construction equipment, offering a wide range of excavators, loaders, bulldozers, cranes, and more. Whether you need to rent or purchase machinery, we provide reliable solutions tailored for every job site and project size.",
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
    url: "https://www.maxbeton.vercel.app",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603814744247-ca3e77714471",
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
    canonical: "https://www.maxbeton.vercel.app"
  }
};

export default function Home() {
  return (
    <HomePage />
  );
}
