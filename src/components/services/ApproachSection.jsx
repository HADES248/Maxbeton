
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Zap, RefreshCw } from 'lucide-react';

const ApproachSection = () => {
  const steps = [
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Discovery",
      description: "We begin by thoroughly understanding your business, challenges, goals, and unique market position."
    },
    {
      icon: <Target className="h-10 w-10 text-purple-600" />,
      title: "Strategy",
      description: "We develop a customized strategy and action plan tailored to your specific needs and objectives."
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: "Implementation",
      description: "We work alongside your team to implement solutions and drive meaningful change."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-blue-600" />,
      title: "Optimization",
      description: "We continuously monitor progress, measure results, and refine our approach to maximize impact."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md relative"
            >
              <div className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="mb-6 inline-block p-4 bg-gray-50 rounded-lg">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
