'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedEquipmentSection from '@/components/home/FeaturedEquipmentSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import { useTranslation } from 'react-i18next';
import products from './products/products';

export const metadata = {
  title: 'MaxBeton - Quality Construction Equipment',
  description: 'Explore high-quality construction equipment including excavators, bulldozers, loaders, and cranes.',
  keywords:
    'construction equipment, heavy machinery, excavator, bulldozer, loader, crane, maxbeton, heracles h130, tracked dumper, electric wheelbarrow',
};

const HomePage = () => {
  const { t } = useTranslation();

  const featuredProductIds = ['heracles-h130', '1-ton-tracked-dumper', 'electric-wheelbarrow'];
  const featuredProducts = products.filter((p) => featuredProductIds.includes(p.id));

  const heraclesH130 = products.find((p) => p.id === 'heracles-h130');
  const aboutPreviewImage = heraclesH130?.images[0]?.url || 'https://images.unsplash.com/photo-1603814744247-ca3e77714471';

  return (
    <div>
      <HeroSection />
      <FeaturedEquipmentSection products={featuredProducts.length > 0 ? featuredProducts : products.slice(0, 3)} />
      <AboutPreviewSection imageSrc={aboutPreviewImage} />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;