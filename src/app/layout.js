import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ProductProvider } from "@/hooks/products";
import { UserProvider } from "@/hooks/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MaxBeton | Reliable Construction Equipment Rentals & Sales",
    template: "%s | MaxBeton",
  },
  description: "MaxBeton is a leading provider of construction equipment for rent and sale, offering a wide range of machinery to support builders, contractors, and infrastructure projects across India.",
  keywords: [
    "MaxBeton",
    "construction equipment rental",
    "construction machinery",
    "equipment for builders",
    "excavator rental",
    "loader hire",
    "heavy machinery India",
    "construction tools",
    "infrastructure equipment",
    "contractor equipment supply",
  ],
  metadataBase: new URL("https://maxbeton.vercel.app"),
  openGraph: {
    title: "MaxBeton | Reliable Construction Equipment Rentals & Sales",
    description: "Explore MaxBeton's extensive range of construction machinery available for rent and purchase — trusted by professionals across India.",
    url: "https://maxbeton.vercel.app",
    siteName: "MaxBeton",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603814744247-ca3e77714471", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "MaxBeton Construction Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxBeton | Reliable Construction Equipment Rentals & Sales",
    description: "Top-quality construction equipment for rent and sale from MaxBeton. Discover machinery built for performance and reliability.",
    images: ["https://images.unsplash.com/photo-1603814744247-ca3e77714471"],
  },
  authors: [{ name: "MaxBeton Team", url: "https://maxbeton.vercel.app" }],
  creator: "MaxBeton Team",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ProductProvider>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
          </ProductProvider>
        </UserProvider>
      </body>
    </html>
  );
}
