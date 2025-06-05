import ContactPage from './ContactForm'

export const metadata = {
  title: "Contact MaxBeton | Reach Out for Equipment Rentals & Sales",
  description: "Get in touch with MaxBeton for inquiries about our construction equipment, rentals, and sales. We're here to help you find the right machine for the job.",
  keywords: [
    "Contact MaxBeton",
    "construction equipment inquiry",
    "equipment support",
    "machinery rental contact",
    "sales support MaxBeton"
  ],
  openGraph: {
    title: "Contact MaxBeton | We're Here to Help",
    description: "Have questions or need assistance with equipment? Contact MaxBeton today.",
    url: "https://www.maxbeton.vercel.app/contact",
    siteName: "MaxBeton",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MaxBeton | Sales & Rental Assistance",
    description: "Connect with our team for expert help on construction equipment rentals or purchases.",
  },
  alternates: {
    canonical: "https://www.maxbeton.vercel.app/contact"
  }
};


export default function Contact() {
  return (
    <div>
      <ContactPage />
    </div>
  )
}
