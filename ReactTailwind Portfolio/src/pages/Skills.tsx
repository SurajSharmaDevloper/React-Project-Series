"use client";

import { useState } from "react";
import SkillCard from "@/components/blocks/SkillCard";
import HTML from "@/images/Html.png";
import CSS from "@/images/CssIcon.png";
import JS from "@/images/JsIcon.png";
import ReactLogo from "@/images/ReactIcon.png";
import Tailwind from "@/images/TailwindIcon.png";
import Bootstrap from "@/images/BootstrapIcon.png";
import Git from "@/images/GitIcon.png";
import Github from "@/images/GithubIcon.png";
import Gitlab from "@/images/GitlabIcon.png";
import Ts from "@/images/TsIcon.png";
import FramerMotion from "@/images/FramerMotionIcon.png";
import Gsap from "@/images/GsapIcon.png";
import Jest from "@/images/JestIcon.png";
import Tanstack from "@/images/TanstackIcon.png";
import Next from "@/images/NextIcon.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Skill type
export type Skill = {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
  percent: number;
  category: string;
};

// Skills array with id and category
export const skills: Skill[] = [
  { id: 1, imageSrc: HTML, name: "HTML", description: "Markup language for structuring web content", percent: 90, category: "Languages" },
  { id: 2, imageSrc: CSS, name: "CSS", description: "Styling language to design modern responsive layouts", percent: 85, category: "Languages" },
  { id: 3, imageSrc: JS, name: "JavaScript", description: "Core programming language of the web", percent: 65, category: "Languages" },
  { id: 4, imageSrc: ReactLogo, name: "React", description: "Library for building component-driven UIs", percent: 65, category: "Frameworks" },
  { id: 5, imageSrc: Tailwind, name: "Tailwind CSS", description: "Utility-first CSS framework for fast design", percent: 70, category: "Frameworks" },
  { id: 6, imageSrc: Bootstrap, name: "Bootstrap", description: "Frontend framework with prebuilt responsive components", percent: 60, category: "Frameworks" },
  { id: 7, imageSrc: Git, name: "Git", description: "Version control system to track code changes", percent: 60, category: "Tools" },
  { id: 8, imageSrc: Github, name: "GitHub", description: "Platform to host and collaborate on code repositories", percent: 60, category: "Tools" },
  { id: 9, imageSrc: Gitlab, name: "GitLab", description: "DevOps platform for git repos and CI/CD", percent: 60, category: "Tools" },
  { id: 10, imageSrc: Ts, name: "TypeScript", description: "Typed superset of JavaScript for scalable apps", percent: 60, category: "Languages" },
  { id: 11, imageSrc: FramerMotion, name: "Framer Motion", description: "Animation library for React components", percent: 65, category: "Libraries" },
  { id: 12, imageSrc: Gsap, name: "GSAP", description: "High-performance JavaScript animation library", percent: 60, category: "Libraries" },
  { id: 13, imageSrc: Jest, name: "Jest", description: "Testing framework for JavaScript and TypeScript", percent: 50, category: "Tools" },
  { id: 14, imageSrc: Tanstack, name: "TanStack", description: "Powerful tools like Query and Table for React apps", percent: 65, category: "Libraries" },
  { id: 15, imageSrc: Next, name: "Next.js", description: "React framework for SSR, SSG, and app directory", percent: 60, category: "Frameworks" },
];

// Categories for filter
const categories = ["All", "Languages", "Frameworks", "Libraries", "Tools"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="w-full py-5 bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl font-semibold tracking-tight mb-4 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Can Do.
        </motion.h2>

        {/* Filter Bar */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <Button
              variant={selectedCategory === cat ? "primary" : "outline"}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill: Skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
