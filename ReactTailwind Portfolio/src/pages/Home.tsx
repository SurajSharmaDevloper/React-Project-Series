"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ProfileImg from "@/assets/profile.jpg";
import { ChevronDown, CodeXml, Lightbulb, Wallpaper } from "lucide-react";
import ReactIcon from "@/images/ReactIcon.png";
import Tailwind from "@/images/TailwindIcon.png";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import SkillsHome from "@/components/blocks/SkillsHome";

export default function Home() {
  return (
    <>
      <section
        className={cn(
          "relative min-h-[calc(100dvh-68px)] flex flex-col items-center justify-center px-4 text-center bg-neutral-100 dark:bg-neutral-800 py-5",
          "bg-neutral-50 text-neutral-800", // Light mode default
          "dark:bg-neutral-800 dark:text-neutral-50" // Dark mode styles
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
          className="text-2xl sm:text-2xl md:text-3xl text-glow font-semibold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-neutral-800 dark:text-neutral-100">
            Hi, I’m{" "}
          </span>
          <span className="text-indigo-500">Suraj Sharma</span>
        </motion.h1>

        <motion.h2
          className="mt-2 text-3xl sm:text-3xl md:text-5xl font-semibold text-glow text-neutral-700 dark:text-neutral-400"
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
              Download C.V
            </Button>
          </a>
          <NavLink to="/contact">
            <Button
              variant="outline"
              className="px-6 py-3 font-semibold transition-transform duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </NavLink>
        </motion.div>
        <div className="flex justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <p className="text-glow font-semibold text-indigo-400  mb-2">
              Scroll Down
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-indigo-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}

      <section
        id="about"
        className={cn(
          "relative min-h-screen flex items-center justify-center px-6 py-16",
          "bg-neutral-50 text-neutral-900",
          "dark:bg-neutral-900 dark:text-neutral-50"
        )}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Heading */}
          <h1 className="text-5xl text-neutral-900 dark:text-neutral-100 font-semibold ">
            About <span className="text-indigo-500">Me</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            Hi, I’m <span className="font-semibold">Suraj Sharma</span>, a
            passionate{" "}
            <span className="text-primary font-semibold">
              Frontend Developer
            </span>{" "}
            who loves building clean, modern, and user-friendly web experiences.
            My mission is to combine creativity and technology to design
            websites that are both functional and visually stunning.
          </p>

          <div>
            <h1 className="text-indigo-500 text-2xl font-semibold mt-3">
              Expertise in
            </h1>
            <div className="mt-5 flex justify-center items-center space-x-3 font-semibold text-neutral-900 dark:text-neutral-100">
              <span className="flex items-center justify-center gap-3 text-xl ">
                <img className="h-7" src={ReactIcon} alt="" /> React
              </span>
              <span>+</span>
              <span className="flex items-center justify-center gap-3 text-xl ">
                {" "}
                <img className="h-6" src={Tailwind} alt="" /> Tailwind
              </span>
            </div>
          </div>

          {/* Skills / Highlights */}
          <div className="grid gap-6 md:grid-cols-3 mt-10">
            <Card className="shadow-md hover:shadow-lg transition flex flex-col ">
              <CardContent className="p-3 flex items-center justify-center flex-col h-full">
                <h2 className="text-xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
                  <CodeXml /> Devlopment
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Skilled in React, Next.js, Tailwind CSS, and shadcn/ui to
                  craft responsive, modern interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition flex flex-col ">
              <CardContent className="p-3 flex items-center justify-center flex-col h-full">
                <h2 className="text-xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
                  <Wallpaper /> Design
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Focused on clean design and great user experience, balancing
                  aesthetics with usability.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition flex flex-col ">
              <CardContent className="p-3 flex items-center justify-center flex-col h-full">
                <h2 className="text-xl font-semibold text-primary mb-2 flex items-center justify-center gap-2">
                  <Lightbulb /> Problem-Solving
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Always eager to learn and tackle challenges with modern web
                  technologies and best practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <p className="text-glow font-semibold  text-indigo-600 dark:text-indigo-400  mb-2">
                Click here to know more
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-8 h-8 text-indigo-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="mt-5 flex justify-center gap-4">
            <NavLink to="/about">
              <Button className="px-6 py-3 text-neutral-100  dark:text-neutral-900 ">
                Click me
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Skills / Highlights */}

      <section
        id="about"
        className={cn(
          "relative min-h-screen flex items-center justify-center px-6 py-16",
          "bg-neutral-50 text-neutral-900",
          "dark:bg-neutral-800 dark:text-neutral-50"
        )}
      >
        <div className="w-[85%] mx-auto p-5">
          {/* Heading */}
          <h1 className="text-5xl mb-5 text-center text-neutral-900 dark:text-neutral-100 font-semibold ">
            Skills & <span className="text-indigo-500">Education</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            I completed my <span className="font-semibold">BCA</span>, building
            a strong foundation in computer applications and programming. I
            specialize in{" "}
            <span className="text-primary font-semibold">
              frontend development
            </span>{" "}
            with HTML, CSS, JavaScript, TypeScript, React, Tailwind, and
            Bootstrap — focusing on creating responsive, user-friendly, and
            optimized web applications.
          </p>

          {/* Skills / Highlights */}
          <div className="mt-10 flex justify-center">
            <SkillsHome />
          </div>
          
        </div>
      </section>
    </>
  );
}
