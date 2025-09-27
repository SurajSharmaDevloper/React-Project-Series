import React, { useEffect, useState } from "react";
import {
  Banner_1,
  Banner_2,
  Banner_3,
  Banner_4,
  Banner_5,
  Banner_6,
  Banner_7,
  Banner_8,
  Banner_9,
  Banner_10,
} from "../../data/images";
import Button from "../base/Button";

const images = [Banner_1, Banner_2, Banner_3, Banner_4, Banner_5];

const Mobileimages = [Banner_6, Banner_7, Banner_8, Banner_9, Banner_10];

export default function HomePagesBanner() {
  const [current, setCurrent] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setCurrentMobile((prev1) => (prev1 + 1) % Mobileimages.length);
    }, 4000); // auto slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] sm:h-[40vh] md:h-[70vh] lg:h-[70vh] overflow-hidden">
      <div className="block max-[860px]:hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* For Mobile Screen  */}

      <div className="hidden max-[860px]:block">
        {Mobileimages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentMobile ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute flex flex-col gap-5 bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 ">
        <Button variant="outline" >Shop Now</Button>
        <div className="flex space-x-2 sm:space-x-3">
          {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full border-2 border-neutral-600 dark: transition-all duration-300 ${
              index === current ? "bg-neutral-600 scale-110" : "bg-transparent"
            }`}
          />
        ))}
        </div>
        
      </div>
    </div>
  );
}
