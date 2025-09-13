"use client";

import { useEffect } from "react";
import SocialLinks from "@/components/blocks/SocialLinks";
import FrontendGrid from "@/components/blocks/FrontendGrids";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-[calc(100dvh-68px)] flex items-center justify-center p-4 bg-neutral-100 dark:bg-neutral-900">
      {/* Card Container */}
      <motion.div
        className="bg-neutral-200 dark:bg-neutral-800 rounded-xl shadow-2xl max-w-6xl w-full p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <motion.div
            className="md:w-1/3 text-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="./profile.jpg"
              alt="Profile Picture"
              className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-600 dark:border-neutral-200 transition-transform duration-300 hover:scale-105"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.h1
              className="text-2xl font-bold text-indigo-600 dark:text-neutral-200 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Suraj Sharma
            </motion.h1>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Frontend Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <SocialLinks />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button color="primary" className="mt-8">
                Download C.V
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="md:w-2/3 md:pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-xl font-semibold text-indigo-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              "I’m a passionate Frontend Developer eager to kickstart my career
              in building modern, responsive, and user-friendly web
              applications. Skilled in React, JavaScript, and Tailwind CSS, I
              love turning ideas into clean, functional designs while
              continuously learning new technologies."
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FrontendGrid />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
