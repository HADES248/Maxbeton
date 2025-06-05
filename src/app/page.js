import HomePage from "./HomePage";

export const metadata = {
  title: "MaxBeton | Buy Construction Equipment Online in India",
  description:
    "MaxBeton—India’s trusted source for construction equipment. Shop excavators, loaders & cranes. Fast delivery, secure checkout & expert support.",
  keywords: [
    "buy construction equipment online",
    "construction machinery for sale",
    "excavators for sale",
    "cranes for sale",
    "loaders online",
    "heavy equipment purchase India",
    "MaxBeton machinery",
    "construction equipment store",
    "online construction equipment",
    "infrastructure equipment sales",
    "MaxBeton"
  ],
  openGraph: {
    title: "MaxBeton | Shop Construction Equipment Online",
    description:
      "Browse and buy premium construction machinery online at MaxBeton. Trusted by 1000+ companies for excavators, loaders, cranes & more.",
    url: "https://www.maxbeton.vercel.app",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603814744247-ca3e77714471",
        width: 1200,
        height: 630,
        alt: "MaxBeton Construction Machinery for Sale"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Heavy Construction Equipment Online | MaxBeton",
    description:
      "Explore a wide range of construction equipment for sale online at MaxBeton. Top quality, reliable service, and quick delivery across India.",
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
