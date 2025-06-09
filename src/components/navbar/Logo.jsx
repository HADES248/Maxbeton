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
        className="mr-10 mt-2 w-50 h-14 rounded-lg flex items-center justify-center"
      >
        <img src="/icon.png" alt="Website Icon" />
      </motion.div>
    </Link>
  );
};

export default Logo;
