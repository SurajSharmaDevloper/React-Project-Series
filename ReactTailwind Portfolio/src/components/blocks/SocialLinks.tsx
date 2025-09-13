"use client";

import { Instagram, Twitter, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const icons = [
  {
    component: Instagram,
    href: "https://instagram.com/",
    color: "text-pink-600 hover:text-pink-700",
    hoverRotate: "rotate-6",
  },
  {
    component: Twitter,
    href: "https://twitter.com/",
    color: "text-sky-500 hover:text-sky-600",
    hoverRotate: "-rotate-6",
  },
  {
    component: Github,
    href: "https://github.com/",
    color: "text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white",
    hoverRotate: "rotate-3",
  },
  {
    component: Linkedin,
    href: "https://linkedin.com/",
    color: "text-blue-600 hover:text-blue-700",
    hoverRotate: "-rotate-3",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-8 mt-6">
      {icons.map((icon, idx) => {
        const IconComp = icon.component;
        return (
          <motion.a
            key={idx}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ scale: 1.25, rotate: icon.hoverRotate === "" ? 0 : parseInt(icon.hoverRotate), boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }}
            className={`transition-transform duration-300 ease-in-out transform ${icon.color}`}
          >
            <IconComp className="w-8 h-8" />
          </motion.a>
        );
      })}
    </div>
  );
}
