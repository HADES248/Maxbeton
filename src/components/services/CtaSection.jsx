
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 md:p-16 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
              <p className="text-xl opacity-90 mb-8">
                Schedule a free consultation with our experts to discuss your business needs and how our services can help you achieve your goals.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Contact Us Today
                </Button>
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-white/10 rounded-xl transform rotate-3"></div>
              <img  alt="Team discussing strategy on whiteboard" className="relative rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1623652554515-91c833e3080e" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
