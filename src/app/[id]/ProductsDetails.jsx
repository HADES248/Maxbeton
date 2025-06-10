'use client';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import EnquiryModal from '@/components/EnquiryModal';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ArrowLeft, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const route = useParams();
  const productId = route.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // API call for single product
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: productId }),
        });

        if (response.ok) {
          const data = await response.json();
          setProduct(data.product);
        } else {
          console.error("Failed to Fetch Product");
        }
      } catch (err) {
        console.error("Failed to Fetch Product", err);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [productId]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Head>
          <title>Loading Product - MaxBeton</title>
        </Head>
        <h1 className="text-3xl font-bold mb-4">Loading product...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Head>
          <title>Product Not Found - MaxBeton</title>
        </Head>
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <Link href="/products">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  const hasVideos = product.videoUrls && product.videoUrls.length > 0;
  const currentVideo = hasVideos ? product.videoUrls[currentVideoIndex] : null;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <Head>
        <title>{`${product.title} - MaxBeton Construction Equipment`}</title>
        <meta name="description" content={product.description} />
        {product.metaKeywords && <meta name="keywords" content={product.metaKeywords} />}
      </Head>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="mb-8">
          <Link href="/products">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Images + Videos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-4 aspect-video overflow-hidden rounded-lg shadow-lg">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]?.url}
                  alt={product.images[currentImageIndex]?.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <Button className="text-white absolute right-0 cursor-pointer opacity-70 hover:opacity-100 "><Link href={product.images[currentImageIndex]?.url}>View Full Image</Link></Button>
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
                    onClick={prevImage}
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
                    onClick={nextImage}
                    aria-label="Next Image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 flex-shrink-0 ${currentImageIndex === index ? 'border-primary' : 'border-transparent'} transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${image.alt || 'Product thumbnail ' + (index + 1)}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {hasVideos && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Product Videos</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                  <iframe
                    key={currentVideoIndex}
                    width="100%"
                    height="100%"
                    src={currentVideo.url}
                    title={currentVideo.title || `${product.title} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                {product.videoUrls.length > 1 && (
                  <div className="flex flex-wrap gap-2">
                    {product.videoUrls.map((video, index) => (
                      <Button
                        key={index}
                        variant={currentVideoIndex === index ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentVideoIndex(index)}
                      >
                        {video.title || `Video ${index + 1}`}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Right: Description + Specs + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            {product.brochureUrl && (
              <div className="mb-8">
                <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer" download>
                  <Button variant="outline" className="w-full md:w-auto group">
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>
                </a>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Specifications</h3>
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableBody>
                    {product.specifications.map((spec, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <TableCell className="font-medium py-3 px-4">{spec.name}</TableCell>
                        <TableCell className="py-3 px-4">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <EnquiryModal productName={product.title}>
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg py-6 text-white cursor-pointer">
                Send Query
              </Button>
            </EnquiryModal>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}