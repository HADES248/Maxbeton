
import React from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import {
  BarChart2, TrendingUp, Users, Lightbulb, Shield, Award
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
     {
      icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
      title: "Business Consulting",
      description: "Comprehensive business analysis and strategic guidance to optimize operations, increase efficiency, and drive growth.",
      features: [
        "Business model evaluation",
        "Competitive analysis",
        "Growth strategy development",
        "Operational efficiency assessment",
      ]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
      title: "Financial Advisory",
      description: "Expert financial planning, analysis, and management services to ensure sustainable profitability and sound investments.",
      features: [
        "Financial health assessment",
        "Cash flow optimization",
        "Investment strategy",
        "Cost reduction analysis",
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: "Team Development",
      description: "Build high-performing teams through effective leadership training, organizational development, and talent management.",
      features: [
        "Leadership coaching",
        "Team building programs",
        "Talent acquisition strategy",
        "Performance management systems",
      ]
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
      title: "Innovation Strategy",
      description: "Develop forward-thinking approaches to product development, service delivery, and business models.",
      features: [
        "Innovation workshops",
        "Product development roadmaps",
        "Digital transformation strategy",
        "Market trend analysis",
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Risk Management",
      description: "Identify and mitigate potential risks to protect your business assets, reputation, and ensure business continuity.",
      features: [
        "Risk assessment framework",
        "Compliance review",
        "Crisis management planning",
        "Business continuity strategy",
      ]
    },
    {
      icon: <Award className="h-10 w-10 text-indigo-600" />,
      title: "Quality Assurance",
      description: "Implement robust quality control systems and processes to deliver excellence in all business areas.",
      features: [
        "Quality management systems",
        "Process standardization",
        "Customer experience optimization",
        "Continuous improvement programs",
      ]
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
