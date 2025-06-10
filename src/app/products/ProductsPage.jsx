'use client';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Grid, List } from 'lucide-react';
import Link from 'next/link';
import { ProductContext } from '@/hooks/products';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [loading, setLoading] = useState(false);
  const { products, setProducts } = useContext(ProductContext);

  // API call for all products
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

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
      <section className="py-20 flex justify-center items-center">
        <div className="container mr-4 ml-4 mx-auto">
          <div className="flex justify-end mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="mr-1 cursor-pointer"
              >
                <Grid className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="cursor-pointer"
              >
                <List className="h-4 w-4 mr-2" />
                List
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-gray-500 text-lg py-10">Loading products...</div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-6'}
            >
              {products.map((product) => (
                <motion.div
                  key={product._id}

                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row'
                    }`}
                >
                  <div className={viewMode === 'grid' ? "h-60" : "h-48 w-64"}>
                    <img
                      className="w-full h-full object-cover"
                      alt={product.images[0].alt}
                      src={product.images[0].url}
                    />
                  </div>
                  <div className={`p-6 flex flex-col flex-grow ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {viewMode === 'grid'
                        ? `${product.description.substring(0, 100)}...`
                        : product.description
                      }
                    </p>
                    <Link href={`/${product._id}`}>
                      <Button className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group text-white cursor-pointer">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
