'use client';

import React, { useContext, useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedEquipmentSection from '@/components/home/FeaturedEquipmentSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import { ProductContext } from '@/hooks/products';

// export const metadata = {
//   title: 'MaxBeton - Quality Construction Equipment',
//   description: 'Explore high-quality construction equipment including excavators, bulldozers, loaders, and cranes.',
//   keywords:
//     'construction equipment, heavy machinery, excavator, bulldozer, loader, crane, maxbeton, heracles h130, tracked dumper, electric wheelbarrow',
// };

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useContext(ProductContext);


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

  const featuredProductIds = ['heracles-h130', '1-ton-tracked-dumper', 'electric-wheelbarrow'];
  const featuredProducts = products.filter((p) => featuredProductIds.includes(p.id));

  const heraclesH130 = products.find((p) => p.id === 'heracles-h130');
  const aboutPreviewImage = heraclesH130?.images[0]?.url || 'https://images.unsplash.com/photo-1603814744247-ca3e77714471';

  return (
    <div>
      <HeroSection />
      {loading ? (
        <p className="text-center text-gray-500 text-lg py-8 animate-pulse">
          Loading content, please wait...
        </p>
      ) : (
        <>
          <FeaturedEquipmentSection
            products={featuredProducts.length > 0 ? featuredProducts : products.slice(0, 3)}
          />
          <AboutPreviewSection imageSrc={aboutPreviewImage} />
        </>
      )}
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;