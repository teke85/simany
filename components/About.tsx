"use client";

import imgURL from "../public/assets/images/image_1.jpeg";
import Image from "next/image";
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

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container font-[family-name:var(--font-lora)] mx-auto px-4">
        <div className="max-w-full md:max-w-5xl mx-auto flex gap-4 font-[family-name:var(--font-rethink)]">
          <div className="flex w-full gap-10 flex-col md:justify-between mx-auto md:flex-row">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:max-w-md flex text-gray-500 flex-col"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-8 text-[#022461] text-left"
              >
                About Simany
              </motion.h2>
              <motion.p variants={itemVariants} className="text-md mb-8">
                Simany Professional Driving School is centrally situated in the
                Hub of Mongu at Napsa House (Near Barotse Shopping Mall).
              </motion.p>
              <motion.p variants={itemVariants} className="text-md">
                It is headed by Mr Akabeswa Imasiku with an instructors rating
                with Class B. He is a holder of a Zambian Driving Licence for
                Fifty Two (52) years.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="font-bold text-xl mt-8"
              >
                Akabeswa Imasiku, Director Operations
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:max-w-md"
            >
              <Image
                src={imgURL || "/placeholder.svg"}
                alt="instructor image"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
