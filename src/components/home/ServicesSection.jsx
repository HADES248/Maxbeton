
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Layers, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesSection = ({ products }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const icons = [
    <HardHat className="h-10 w-10 text-blue-600" />,
    <Layers className="h-10 w-10 text-purple-600" />,
    <Truck className="h-10 w-10 text-indigo-600" />,
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Equipment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Featured Description
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              variants={fadeIn}
              className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl flex flex-col"
            >
              <div className="mb-6 inline-block p-4 bg-gray-50 rounded-lg">{icons[index % icons.length]}</div>
              <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{product.description.substring(0, 120)}...</p>
              <Link href={`/${product._id}`} className="mt-auto">
                <Button variant="outline" className="w-full group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
         <div className="text-center mt-16">
           <Link href="/products">
             <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
               View All Products
             </Button>
           </Link>
         </div>
      </div>
    </section>
  );
};

export default ServicesSection;
