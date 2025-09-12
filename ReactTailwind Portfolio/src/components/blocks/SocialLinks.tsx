import { Instagram, Twitter, Github, Linkedin } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-8 mt-6">
      {/* Instagram */}
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-700 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-6 hover:drop-shadow-lg"
      >
        <Instagram className="w-8 h-8" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-600 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:-rotate-6 hover:drop-shadow-lg"
      >
        <Twitter className="w-8 h-8" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-125 hover:rotate-3 hover:drop-shadow-lg"
      >
        <Github className="w-8 h-8" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:-rotate-3 hover:drop-shadow-lg"
      >
        <Linkedin className="w-8 h-8" />
      </a>
    </div>
  );
}
