import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { useTranslation, Trans } from 'react-i18next'; // Import Trans
import Link from 'next/link';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="hero-pattern absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <Trans i18nKey="home.heroTitle">
                 Top Quality <span className="gradient-text">Construction Equipment</span>
              </Trans>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
               {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg px-8 py-6">
                   {t('home.viewProducts')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="group text-lg px-8 py-6">
                   {t('home.requestQuote')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                 {/* Use img-replace for new images */}
                <img  alt="Client profile 1" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1614138124127-1ef955e7c43a" />
                <img  alt="Client profile 2" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1674790611956-94b63eaf041c" />
                <img  alt="Client profile 3" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1649767590910-367f54f3d0e3" />
                <img  alt="Client profile 4" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1635249578213-68b0aa67fdf7" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <Trans i18nKey="home.trustedBy">
                    Trusted by <span className="font-semibold text-gray-900">1000+</span> construction firms
                  </Trans>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-3"></div>
            {/* Use img-replace for new images */}
            <img  alt="Various construction equipment on site" className="relative rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1603814744247-ca3e77714471" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
