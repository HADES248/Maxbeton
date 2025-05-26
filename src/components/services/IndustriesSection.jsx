import React from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing",
    "Retail", "Education", "Hospitality", "Real Estate",
    "Construction", "Energy", "Logistics", "Automotive" // Added more relevant industries
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have expertise across a wide range of industries, allowing us to provide specialized solutions for your specific sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:bg-gray-50 transition-all cursor-pointer"
            >
              <h3 className="font-medium text-gray-900">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
