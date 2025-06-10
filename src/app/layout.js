import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ProductProvider } from "@/hooks/products";
import { UserProvider } from "@/hooks/user";
import Script from "next/script";

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
    default: "Buy Construction Equipment Online | MaxBeton",
    template: "%s | MaxBeton",
  },
  description:
    "Buy construction equipment online from MaxBeton—India’s trusted source for high-performance machinery. Shop excavators, loaders & more. Nationwide delivery.",
  keywords: [
    "buy construction equipment online",
    "construction machinery for sale",
    "online equipment store",
    "excavators for sale",
    "loaders for sale",
    "construction equipment India",
    "MaxBeton equipment",
    "heavy machinery purchase",
    "site equipment shop",
    "infrastructure machinery online",
  ],
  metadataBase: new URL("https://www.maxbeton.in"),
  openGraph: {
    title: "Buy Construction Equipment Online | MaxBeton",
    description:
      "Explore MaxBeton's construction equipment online. Trusted by 1000+ firms across India. Fast delivery & expert support—quality machinery at your fingertips.",
    url: "https://www.maxbeton.in",
    siteName: "MaxBeton",
    images: [
      {
        url: "/Home-Image.jpeg",
        width: 1200,
        height: 630,
        alt: "MaxBeton Construction Equipment for Sale",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Construction Equipment Online | MaxBeton",
    description:
      "Shop construction machinery online with MaxBeton — top-quality equipment, secure purchase, and fast delivery across India.",
  },
  authors: [{ name: "MaxBeton Team", url: "https://maxbeton.in/about" }],
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MRQ72V1Q7F"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MRQ72V1Q7F');
        `}
        </Script>
      </head>

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
