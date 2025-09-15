import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-between text-center ">
      <div className="w-full flex justify-around p-5 bg-neutral-900">
        <div>
            <p className="text-md text-gray-400   ">Connect with me on social media</p>
        </div>
        <div className="flex justify-center space-x-8">
          <Instagram className="h-5 text-neutral-300 hover:text-indigo-500" />
          <Linkedin className="h-5 text-neutral-300 hover:text-indigo-500" />
          <Github className="h-5 text-neutral-300 hover:text-indigo-500" />
          <Facebook className="h-5 text-neutral-300 hover:text-indigo-500" />
          <Twitter className="h-5 text-neutral-300 hover:text-indigo-500" />
        </div>
      </div>
      <div className="w-full p-5 flex justify-center text-sm text-gray-600 dark:text-gray-400 space-y-1 bg-neutral-950">
        <p>© 2024 Suraj Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};
