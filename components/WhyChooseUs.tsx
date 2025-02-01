"use client";
import { SquareCheckBig } from "lucide-react";
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

const WhyChooseUs = () => {
  return (
    <section className="w-full h-full px-5 bg-slate-400/10 py-10">
      <div className="container h-full grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="flex items-center justify-center text-blue-900 font-semibold text-4xl py-10"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Why Choose Us
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
            {[
              "We facilitate the final road transport safety agency examination leading to certification and award of a Drivers Licence class B rating.",
              "We offer personalized instructions according to needs",
              "We allow flexible time options to suit even workers time schedules.",
              "We offer in addition to the Drivers Licence an in house certification of attendance.",
              "We offer short refresher courses for both individuals and institutions. i.e Defensive driving to lessen Road Traffic Accidents.",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex gap-3 font-[family-name:var(--font-rethink)]"
                variants={itemVariants}
              >
                <span className="text-red-500 flex-shrink-0">
                  <SquareCheckBig />
                </span>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
