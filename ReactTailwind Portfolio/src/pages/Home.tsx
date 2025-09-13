"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ProfileImg from "@/assets/profile.jpg";

export default function Home() {
  return (
    <section
      className={cn(
        "relative min-h-[calc(100dvh-68px)] flex flex-col items-center justify-center px-4 text-center bg-neutral-100 dark:bg-neutral-900",
        "bg-neutral-50 text-neutral-900", // Light mode default
        "dark:bg-neutral-900 dark:text-neutral-50" // Dark mode styles
      )}
    >
      {/* Profile Image */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ProfileImg}
          alt="Suraj Sharma"
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full object-cover border-4 border-primary shadow-lg"
        />
      </motion.div>

      {/* Name & Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-neutral-800 dark:text-neutral-100">Hi, I’m </span>
        <span className="text-indigo-500">Suraj Sharma</span>
      </motion.h1>

      <motion.h2
        className="mt-2 text-2xl sm:text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Frontend Developer
      </motion.h2>

      {/* About Text */}
      <motion.p
        className="mt-4 max-w-2xl text-sm sm:text-base md:text-md text-neutral-600 dark:text-neutral-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        I design and develop modern, responsive, and user-friendly websites
        using the latest web technologies. My focus is on creating seamless
        digital experiences that are both functional and visually appealing.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="./SurajSharma_Resume.pdf " download="SurajSharma_Resume.pdf">
          <Button
            variant="primary"
            className="px-6 py-3 font-semibold transition-transform duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Button
            variant="outline"
            className="px-6 py-3 font-semibold transition-transform duration-300 hover:scale-105"
          >
            Hire Me
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
