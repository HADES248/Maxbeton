import Navbar from "@/components/Navbar"
import ProductsPage from "./ProductsPage"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function page() {
  return (
    <div>
      <Navbar/>
      <ProductsPage/>
      <Footer/>
      <WhatsAppButton />
    </div>
  )
}
