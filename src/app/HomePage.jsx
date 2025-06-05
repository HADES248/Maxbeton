'use client';
import React, { useContext, useEffect, useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedEquipmentSection from '@/components/home/FeaturedEquipmentSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import { ProductContext } from '@/hooks/products';

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

  const featuredProductIds = ['6838404006d5c4b4b79057f5', '68383c8a06d5c4b4b79057e0', '68383f5f06d5c4b4b79057ef'];
  const featuredProducts = products.filter((p) => featuredProductIds.includes(p._id));
  const aboutPreviewImage = featuredProducts[2]?.images[0]?.url || 'https://images.unsplash.com/photo-1603814744247-ca3e77714471';

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