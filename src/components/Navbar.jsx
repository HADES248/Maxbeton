'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/navbar/MobileMenu';
import Logo from '@/components/navbar/Logo';
import NavLinks from '@/components/navbar/NavLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Correct way to get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItemsConfig = [
    { nameKey: 'Home', path: '/' },
    { nameKey: 'Products', path: '/products' },
    { nameKey: 'About', path: '/about' },
    { nameKey: 'Contact', path: '/contact' },
  ];

  const navItems = navItemsConfig.map(item => ({
    ...item,
    name: item.nameKey,
  }));

  const isActive = (path) => {
    if (path === '/products') {
      return pathname.startsWith('/products');
    }
    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Logo />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLinks navItems={navItems} isActive={isActive} motionLayoutIdPrefix="navbar-indicator-desktop" />
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white cursor-pointer">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} isActive={isActive} />
    </nav>
  );
};

export default Navbar;