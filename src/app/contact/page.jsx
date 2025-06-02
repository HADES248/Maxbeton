import Navbar from '@/components/Navbar'
import ContactPage from './ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

// export const metadata = {
//   title: 'MaxBeton - Quality Construction Equipment',
//   description: 'Explore high-quality construction equipment including excavators, bulldozers, loaders, and cranes.',
//   keywords:
//     'construction equipment, heavy machinery, excavator, bulldozer, loader, crane, maxbeton, heracles h130, tracked dumper, electric wheelbarrow',
// };

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactPage />
      <Footer/>
      <WhatsAppButton />
    </div>
  )
}
