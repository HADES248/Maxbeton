
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutPreviewSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-lg opacity-50"></div>
            <div className="relative rounded-xl shadow-lg overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kyJFSiL87As?loop=1&playlist=kyJFSiL87As&autoplay=1&mute=1&controls=0&modestbranding=1"
                title="MaxBeton Equipment Showcase"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About MaxBeton Equipment</h2>
            <p className="text-lg text-gray-600 mb-6">
              MaxBeton is your trusted partner for high-performance construction equipment. We are committed to providing durable machinery, exceptional service, and reliable support to help you complete your projects efficiently and safely.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">15+</span>
                </div>
                <span className="font-medium">Years In Industry</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">50+</span>
                </div>
                <span className="font-medium">Equipment Models</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-xl">24/7</span>
                </div>
                <span className="font-medium">Support Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">98%</span>
                </div>
                <span className="font-medium">Client Satisfaction</span>
              </div>
            </div>
            <Link href="/about">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white cursor-pointer">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
