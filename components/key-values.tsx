"use client";

import { Shield, Users, UserCheck, Car } from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function KeyValues() {
  return (
    <section className="py-0">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center font-[family-name:var(--font-rethink)]"
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold" variants={itemVariants}>
            Our key values
          </motion.h2>
          <motion.p className="mt-4 text-gray-600" variants={itemVariants}>
            Our Driving School core values shape everything we do. They are the
            guiding principles that ensure you receive the highest quality
            driving education and service. Discover what drives us:
          </motion.p>
        </motion.div>
        <motion.div
          className="font-[family-name:var(--font-rethink)] mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          <ValueCard
            icon={<Shield className="h-8 w-8" />}
            title="Safety"
            description="Your safety is our top priority at our driving school. Our experienced instructors will teach you not only how to operate a vehicle but also the crucial skills and mindset needed to navigate today's roads safely."
          />
          <ValueCard
            icon={<Users className="h-8 w-8" />}
            title="Customer Service"
            description="From your initial inquiry to the moment you receive your driver's license, we're here to provide exceptional customer service and support every step of the way."
          />
          <ValueCard
            icon={<UserCheck className="h-8 w-8" />}
            title="Personalized Attention"
            description="We understand that everyone learns at their own pace. Our instructors work closely with you, providing personalized guidance and support to help you succeed."
          />
          <ValueCard
            icon={<Car className="h-8 w-8" />}
            title="Clean and Safe Vehicles"
            description="We ensure our training vehicles are impeccably clean and well-maintained, creating a comfortable and safe learning environment for every student."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={itemVariants}
    >
      <motion.div
        className="mb-4 rounded-full bg-red-600 p-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
