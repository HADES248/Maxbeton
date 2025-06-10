
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 md:p-16 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Reliable Construction Equipment?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Explore our full product range or contact our expert team today for a personalized quote and consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 cursor-pointer">
                Browse Equipment
              </Button>
            </Link>
             <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 cursor-pointer">
                Contact Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
