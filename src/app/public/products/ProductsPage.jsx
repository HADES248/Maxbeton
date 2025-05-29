'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import products from './products';
import { Button } from '@/components/ui/button';
import { ArrowRight, Grid, List } from 'lucide-react';
import Link from 'next/link';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // API call for all products

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Construction <span className="gradient-text">Equipment</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Explore our range of high-quality construction machinery designed for performance, reliability, and efficiency.
            </motion.p>
          </div>
        </div>
      </section>

      {/* View Toggle & Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="mr-1"
              >
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' : 'space-y-6'}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row'
                  }`}
              >
                <div className={viewMode === 'grid' ? 'h-60' : 'h-48 w-64'}>
                  <img className="w-full h-full object-cover" alt={product.images[0].alt} src={product.images[0].url} />
                </div>
                <div className={`p-6 flex flex-col flex-grow ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {viewMode === 'grid' ? `${product.description.substring(0, 100)}...` : product.description}
                  </p>
                  <Link href={`/public/${product.id}`}>
                    <Button className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group text-white">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;