'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Clock } from 'lucide-react';

const AboutPageDetails = () => {

  const teamMembers = [
    { name: 'Alex Johnson', position: 'CEO & Founder', image: 'Professional portrait of company CEO' },
    { name: 'Samantha Lee', position: 'Head of Sales', image: 'Portrait of female sales manager' },
    { name: 'David Chen', position: 'Chief Engineer', image: 'Portrait of male chief engineer' },
    { name: 'Maria Rodriguez', position: 'Operations Manager', image: 'Portrait of female operations manager' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="gradient-text">MaxBeton</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              We are a bunch of crazy ones and misfits who want to change the material handling on the work sites and industries through super efficient equipment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To empower construction professionals with the most reliable and efficient equipment, enabling them to
                build the future safely and sustainably.
              </p>
              <h2 className="text-3xl font-bold mt-10 mb-6">Our Core Values</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" /> <span className="font-medium">Quality & Reliability:</span>{' '}
                  Uncompromising standards in every machine.
                </li>
                <li className="flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" /> <span className="font-medium">Customer Focus:</span> Your success is
                  our priority.
                </li>
                <li className="flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" /> <span className="font-medium">Innovation:</span> Constantly improving
                  for better performance.
                </li>
                <li className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-3" /> <span className="font-medium">Integrity:</span> Operating with honesty
                  and transparency.
                </li>
              </ul>
            </motion.div>
            <div className="container mx-auto px-4 text-center mt-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-4xl font-bold mb-6"
              >
                Our Blog
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl text-gray-600 max-w-2xl mx-auto mb-8"
              >
                Stay updated with the latest trends, insights, and innovations in the construction equipment industry.
              </motion.p>
              <motion.a
                href="https://inumac.beehiiv.com/"
                target='_blank'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group text-white py-3 px-6 rounded-lg"
              >
                Visit Our Blog
              </motion.a>
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">A brief look at key milestones in MaxBeton's history.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>

            {/* Timeline Items */}
            {[
              { title: "Foundation", description: "MaxBeton founded with a vision to provide superior construction equipment." },
              { title: "Innovation", description: "Launch India's most convenient and easy to use electric wheelbarrow model MaxBeton MB500E" },
              { title: "Expansion", description: "Expanded the product line to self loading 800kg tracked dumper MaxBeton MB800" },
              { title: "Future is Bright", description: "Plans to launch 1.5ton Ride On Dumper in both diesel and electric options." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:justify-between`}
              >
                <div className="hidden md:block w-5/12"></div> {/* Spacer */}
                {/* Circle */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                  <div className="w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
                </div>
                {/* Mobile Line & Circle */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200 md:hidden ml-2"></div>
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 z-10 md:hidden ml-2"></div>

                {/* Content */}
                <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg border border-gray-100 ml-8 md:ml-0">
                  <span className="text-sm font-semibold text-primary mb-1 block">{item.year}</span>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">The dedicated professionals behind MaxBeton's success.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gray-100">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1694388001616-1176f534d72f"
                  />
                </div>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-primary">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPageDetails;