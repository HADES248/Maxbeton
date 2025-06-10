import ContactPage from './ContactForm'

export const metadata = {
  title: "Contact MaxBeton | Construction Equipment Sales & Rental Support",
  description:
    "Reach out to MaxBeton for expert assistance with construction equipment rentals or purchases. Our team is ready to help you choose the right machinery for your project.",
  keywords: [
    "Contact MaxBeton",
    "construction equipment inquiry",
    "buy construction machinery",
    "rental equipment support",
    "heavy equipment sales help",
    "MaxBeton customer service"
  ],
  openGraph: {
    title: "Contact MaxBeton | Request Equipment Info or Support",
    description:
      "Get in touch with MaxBeton for any questions regarding our construction machinery, sales options, or rental services. We’re here to support your project.",
    url: "https://www.maxbeton.in/contact",
    siteName: "MaxBeton",
    images: [
      {
        url: "Home-Image.jpeg", // You can change this image if you have a preferred contact-related photo
        width: 1200,
        height: 630,
        alt: "Contact MaxBeton team for equipment inquiries"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MaxBeton | Expert Guidance for Machinery Sales & Rentals",
    description:
      "Need construction equipment or support? Contact MaxBeton to talk with our experienced sales and rental specialists.",
  },
  alternates: {
    canonical: "https://www.maxbeton.in/contact"
  }
};

export default function Contact() {
  return (
    <div>
      <ContactPage />
    </div>
  )
}
