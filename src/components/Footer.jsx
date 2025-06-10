'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ProductContext } from '@/hooks/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const address = 'C-159, Naraina Industrial Area Phase I, New Delhi - 110028, India';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const phone = '+91-96504 41666';
  const email = 'info@maxbeton.in';

  //Split products into two columns
  const midPoint = Math.ceil(products.length / 2);
  const firstColumnProducts = products.slice(0, midPoint);
  const secondColumnProducts = products.slice(midPoint);

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="w-42 h-14 rounded-lg flex items-center justify-center">
              <img src="/icon.png" alt="Website Icon" />
            </div>

            <p className="text-gray-600 text-sm mb-4 pr-4">Providing high-quality construction equipment for projects of all sizes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/maxbetonmachines?utm_source=qr&igsh=dnN0eHhha2ttcGxs" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/107507331/admin/dashboard/" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-gray-500 text-sm py-10 col-span-full">Loading products...</div>
          ) : (
            <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  {firstColumnProducts.map((product) => (
                    <li key={product._id}>
                      <Link href={`/${product._id}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 hidden sm:block md:invisible">&nbsp;</h3>
                <ul className="space-y-2">
                  {secondColumnProducts.map((product) => (
                    <li key={product._id}>
                      <Link href={`/${product._id}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <a href={googleMapsUrl} className="text-primary mt-1 flex-shrink-0">
                  <MapPin size={20} />
                </a>
                <a href={googleMapsUrl} className="text-gray-600 text-sm hover:text-primary transition-colors">
                  {address}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-gray-600 text-sm hover:text-primary transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-600 text-sm hover:text-primary transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} MaxBeton. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
