'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import productsData from '../app/products/products';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const address = 'C-159, Naraina Industrial Area Phase I, New Delhi - 110028, India';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const phone = '+91-96504 41666';
  const email = 'info@maxbeton.in';

  // Split products into two columns
  const midPoint = Math.ceil(productsData.length / 2);
  const firstColumnProducts = productsData.slice(0, midPoint);
  const secondColumnProducts = productsData.slice(midPoint);

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-l from-purple-600 to-blue-600 bg-clip-text text-transparent">MaxBeton</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 pr-4">Providing high-quality construction equipment for projects of all sizes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/heracles.india/" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/conteknik-enterprise/" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {firstColumnProducts.map((product) => (
                <li key={product.id}>
                  <Link href={`/products/${product.id}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-2">
              {secondColumnProducts.map((product) => (
                <li key={product.id}>
                  <Link href={`/products/${product.id}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
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