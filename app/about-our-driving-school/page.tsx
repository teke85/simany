"use client";

import { motion } from "framer-motion";
import { AboutSection } from "@/components/about-section";
import { KeyValues } from "@/components/key-values";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "About Us | Simany Driving School Mongu",
  description:
    "Learn about Simany Driving School in Mongu. Our experienced instructors, teaching methodology, and commitment to road safety education.",
  keywords: [
    "about Simany",
    "driving instructors Mongu",
    "driving school history",
    "Simany team",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
      <main className="container py-12 px-5">
        <motion.section
          className="mb-12 font-[family-name:var(--font-rethink)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={itemVariants}
          >
            Simany Driving School has been a pioneer in the field of driving
            training since 2008
          </motion.h2>
          <motion.p className="mb-6 text-gray-600" variants={itemVariants}>
            At Simany Driving School, we are dedicated to enhancing road safety
            in Zambia. Annually, statistics reveal 280,000 car crashes, with 600
            fatalities and countless injuries resulting from motor
            vehicle-related activities.
          </motion.p>
          <motion.p className="mb-6 text-gray-600" variants={itemVariants}>
            Our driving schools commitment is unwavering - to reduce and
            ultimately eliminate these incidents from ever occurring. At the
            core of our mission lies a team of dedicated individuals who embody
            professionalism, love, and compassion towards all our students.
            Recognizing the profound importance of imparting essential skills to
            our students, we equip them with the knowledge and mindset for safe
            and defensive driving.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Furthermore, at our driving school, we emphasize the significance of
            courtesy and respect towards fellow drivers on the road. Together,
            lets pave the way to a safer future on the road. Join us in our
            journey to drive the future forward with safety in mind.
          </motion.p>
        </motion.section>
        <motion.section
          className="mb-5 font-[family-name:var(--font-rethink)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-6 text-3xl font-bold"
            variants={itemVariants}
          >
            Serving Western Province, Mongu
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Our driving school remains committed to providing comprehensive
            driver education services to Mongu residents. Our experienced
            instructors understand the local roads, traffic patterns, and
            driving challenges unique to this region. We ensure that our
            students are well-prepared to navigate safely and confidently.
          </motion.p>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Join us at SIMANY DRIVING SCHOOL as we collaborate to make the roads
            of Western Province safer for everyone.
          </motion.p>
        </motion.section>
      </main>
      <KeyValues />
    </div>
  );
}
