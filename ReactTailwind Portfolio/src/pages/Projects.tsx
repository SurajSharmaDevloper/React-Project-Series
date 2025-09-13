"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/blocks/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

// Example project data
const projects = [
  { id: 1, title: "Portfolio Website", category: "React", description: "A personal portfolio website." },
  { id: 2, title: "E-commerce Store", category: "Next.js", description: "An online shopping platform." },
  { id: 3, title: "Landing Page", category: "HTML", description: "A responsive marketing page." },
  { id: 4, title: "Dashboard App", category: "React", description: "Admin dashboard with charts." },
  { id: 5, title: "Blog Platform", category: "Next.js", description: "A blog with CMS features." },
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
    <section className="bg-neutral-100 dark:bg-neutral-900 p-5">
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
