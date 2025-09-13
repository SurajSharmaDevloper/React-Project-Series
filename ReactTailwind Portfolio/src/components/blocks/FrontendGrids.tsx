"use client";

import { motion } from "framer-motion";

export default function FrontendGrid() {
  const skills = [
    {
      title: "Web Development",
      desc: "Building responsive, fast, and accessible websites using HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      title: "UI/UX Implementation",
      desc: "Turning designs into pixel-perfect, interactive interfaces with React, Tailwind CSS, and modern styling tools.",
    },
    {
      title: "Performance & Optimization",
      desc: "Writing clean, maintainable code and ensuring smooth performance across devices and browsers.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 px-6">
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-neutral-200 dark:bg-neutral-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-100">
              {skill.title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-400 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
