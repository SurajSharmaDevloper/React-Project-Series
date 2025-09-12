import { useEffect } from "react";
import SocialLinks from "@/components/blocks/SocialLinks";
import FrontendGrid from "@/components/blocks/FrontendGrids";
import {Button} from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    // Toggle dark mode based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className=" min-h-[calc(100dvh-68px)] flex items-center justify-center p-4  ">
      <div className="bg-neutral-900/50 rounded-xl shadow-2xl max-w-6xl w-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <img
              src="./profile.jpg"
              alt="Profile Picture"
              className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-600 dark:border-neutral-200 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-neutral-200 mb-2">
              Suraj Sharma
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Frontend Developer</p>
           <SocialLinks/>
           <Button color="primary" className="mt-8" >Download C.V</Button>
          </div>

          {/* Right Side */}
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              "I’m a passionate Frontend Developer eager to kickstart my career in building modern, responsive, and user-friendly web applications. Skilled in React, JavaScript, and Tailwind CSS, I love turning ideas into clean, functional designs while continuously learning new technologies."
            </p>

            <FrontendGrid/>

      
          </div>
        </div>
      </div>

      {/* Inline animation style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default About