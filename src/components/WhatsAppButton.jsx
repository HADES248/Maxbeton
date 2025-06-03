'use client'
import React from 'react';
import { MessageSquare as MessageSquareText } from 'lucide-react'; // Using a similar icon
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/919650441666`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-20 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageSquareText size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
