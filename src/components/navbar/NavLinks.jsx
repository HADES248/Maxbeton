'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavLinks = ({ navItems, isActive }) => {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`relative font-medium transition-colors hover:text-primary ${
            isActive(item.path) ? 'text-primary' : 'text-foreground'
          }`}
        >
          {item.name}
          {isActive(item.path) && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{ duration: 0.3 }}
            />
          )}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;