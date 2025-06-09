
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const testimonials = [
    {
      name: "General Manager (Plant & Machinery)",
      position: "Kalpataru Group, Mumbai",
      image: "Construction project manager in hard hat",
      quote: "The MaxBeton team is available to assist, day or night, whenever we need them. Their ability to strategically source materials has been a terrific benefit to us and it is appreciated."
    },
    {
      name: "Addl. GM (Plant & Machinery) ",
      position: "Shapoorji Pallonji Group, Mumbai",
      image: "Female architect reviewing blueprints",
      quote: "MaxBeton machines address a niche in the market which is not serviced by anyone else. Their machines are high quality workhorses with technical superiority and handle tough conditions with ease. "
    },
    {
      name: "Cluster Head, North",
      position: "L&T Ltd., Construction, Chennai",
      image: "business meetings",
      quote: "The MaxBeton team is professional and organized in their approach and have helped us many times by organizing the right machinery at critical times."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who rely on MaxBeton equipment for their critical projects.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="testimonial-card bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
