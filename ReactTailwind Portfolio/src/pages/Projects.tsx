"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/blocks/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import Coursel from "@/assets/Coursel1.png";
import Coursel1 from "@/assets/Coursel2.png";
import Coursel2 from "@/assets/Coursel3.png";
import Coursel3 from "@/assets/Coursel4.png";
import Coursel4 from "@/assets/Coursel5.png";

// Example project data
const projects = [
  {
    id: 1,
    image: Coursel,
    title: "Loomora.in",
    category: "React",
    description:
      "A modern eCommerce platform built with React and Tailwind CSS, showcasing the latest fashion trends with a sleek, responsive design. The website features a smooth shopping experience with product listings, categories, and a stylish UI optimized for all devices..",
  },
  {
    id: 2,
    image: Coursel1,
    title: "pixel.io",
    category: "React",
    description:
      "An eCommerce website built with React and Tailwind CSS, designed for electronic products. It features a clean, modern layout with product categories, responsive design, and a user-friendly shopping experience optimized for all devices",
  },
  {
    id: 3,
    image: Coursel2,
    title: "FreshEat",
    category: "HTML",
    description:
      "A responsive restaurant website built with HTML, CSS, and JavaScript, featuring an elegant design with menu highlights, reservation options, and a user-friendly layout to enhance the dining experience online.",
  },
  {
    id: 4,
    image: Coursel3,
    title: "Fashion Ecommerce",
    category: "HTML",
    description:
      "A stylish fashion eCommerce website built with HTML, CSS, and JavaScript, featuring product galleries, categories, and a responsive design that delivers a smooth shopping experience across all devices.",
  },
  {
    id: 5,
    image: Coursel4,
    title: "Portfolio ",
    category: "HTML",
    description:
      "A personal portfolio website built with modern web technologies, showcasing projects, skills, and experience with a clean responsive design for an engaging user experience.",
  },
  {
    id: 6,
    image: "",
    title: "Under Progress",
    category: "Next.js",
    description:
      "A movie application built with modern web technologies, featuring movie listings, search functionality, and a responsive user interface for a seamless browsing experience.",
  },
];

// Get unique categories + add "All"
const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="bg-neutral-100 dark:bg-neutral-800 p-5">
      {/* Title Section */}
      <div className="text-center py-2">
        <motion.h1
          className="text-2xl font-semibold text-black dark:text-white mb-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects I&apos;ve Built.
        </motion.h1>
      </div>

      {/* Filter Buttons */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-3 w-[90%] mb-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "primary" : "outline"}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === cat
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="px-1 py-2 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-4 lg:py-8 sm:py-8">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
