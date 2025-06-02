import Navbar from '@/components/Navbar'
import ProductDetailPage from './ProductsDetails'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

// export const metadata = {
//   title: 'MaxBeton - Quality Construction Equipment',
//   description: 'Explore high-quality construction equipment including excavators, bulldozers, loaders, and cranes.',
//   keywords:
//     'construction equipment, heavy machinery, excavator, bulldozer, loader, crane, maxbeton, heracles h130, tracked dumper, electric wheelbarrow',
// };

export default function productDetail() {
  return (
    <div>
      <Navbar />
      <ProductDetailPage />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
