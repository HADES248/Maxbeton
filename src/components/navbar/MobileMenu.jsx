import React from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MobileMenu = ({ isOpen, setIsOpen, navItems, productsData, isActive, t }) => {
  const navigate = useRouter();

  const handleMobileProductClick = (productId) => {
    navigate(`/products/${productId}`);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden mt-4 pb-4 overflow-hidden"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.path}>
                  <Link
                    to="/"
                    className={`block px-4 py-2 rounded-md font-medium ${
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-8 mt-1 space-y-1">
                    {productsData.map(p => (
                      <Link
                        key={p.id}
                        to={`/products/${p.id}`}
                        className="block px-4 py-1 rounded-md text-sm text-foreground hover:bg-muted"
                        onClick={() => handleMobileProductClick(p.id)}
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-2 rounded-md font-medium ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="px-4 pt-2">
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
