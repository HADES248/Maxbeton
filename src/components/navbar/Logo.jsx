import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
      >
        <span className="text-white font-bold text-xl">MB</span>
      </motion.div>
      <span className="text-xl font-bold bg-gradient-to-l from-purple-600 to-blue-600 bg-clip-text text-transparent">MaxBeton</span>
    </Link>
  );
};

export default Logo;
