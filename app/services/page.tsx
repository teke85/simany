"use client";

import type React from "react";
import { Car, RefreshCw, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-red-600 text-white items-center text-center justify-center w-16 h-16 bg-primary rounded-full mb-4"
    >
      {icon}
    </motion.div>
    <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </motion.div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Comprehensive Motor Vehicle Driving",
      description:
        "Master the art of driving with our in-depth course covering all aspects of vehicle operation, road safety, and defensive driving techniques.",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Short Refresher Courses",
      description:
        "Brush up on your driving skills or address specific areas of improvement with our targeted, efficient refresher courses.",
      icon: <RefreshCw className="w-8 h-8" />,
    },
    {
      title: "Road Language",
      description:
        "Become fluent in the language of the road, including signs, markings, and etiquette, ensuring smooth communication with other drivers and pedestrians.",
      icon: <BookOpen className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        className="container font-[family-name:var(--font-rethink)] mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-8 text-[#022461]"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          We offer a range of driving courses tailored to meet your needs,
          whether you are a beginner or looking to refine your skills.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="font-[family-name:var(--font-rethink)] mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-semibold py-3 px-6 rounded-full bg-red-600 hover:bg-red-600/80 transition-colors duration-300 inline-block"
          >
            Book a Course
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
