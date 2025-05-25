import Link from 'next/link';
import React from 'react';


const ProductDropdown = ({ children }) => {
  return (
    <Link href="/" className="inline-block">
      {children}
    </Link>
  );
};

export default ProductDropdown;
