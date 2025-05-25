
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 flex flex-col"
    >
      <div className="mb-6 inline-block p-4 bg-gray-50 rounded-lg w-fit">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
        Learn More
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
