import { useState, useEffect, useRef } from "react";
import Coursel from "@/assets/Coursel1.png";
import Coursel1 from "@/assets/Coursel2.png";
import Coursel2 from "@/assets/Coursel3.png";
import Coursel3 from "@/assets/Coursel4.png";
import Coursel4 from "@/assets/Coursel5.png";


interface Slide {
  title: string;
  description: string;
  image: string;
}

const slidesData: Slide[] = [
  {
    title: "Loomora.in",
    description: "A modern eCommerce platform built with React and Tailwind CSS, showcasing the latest fashion trends with a sleek, responsive design.",
    image: Coursel,
  },
  {
    title: "pixel.io",
    description: "  An eCommerce website built with React and Tailwind CSS, designed for electronic products. It features a clean, modern layout with product categories, responsive design, and a user-friendly shopping experience optimized for all devices",
    image: Coursel1,
  },
  {
    title: "FreshEat",
    description: "A responsive restaurant website built with HTML, CSS, and JavaScript, featuring an elegant design with menu highlights, reservation options, and a user-friendly layout to enhance the dining experience online.",
    image: Coursel2,
  },
  {
    title: "Fashion Ecommerce",
    description: "A stylish fashion eCommerce website built with HTML, CSS, and JavaScript, featuring product galleries, categories, and a responsive design that delivers a smooth shopping experience across all devices.",
    image: Coursel3,
  },{
    title: "Portfolio",
    description: "A personal portfolio website built with modern web technologies, showcasing projects, skills, and experience with a clean responsive design for an engaging user experience.",
    image: Coursel4,
  },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  const resetAutoAdvance = () => {
    if (autoAdvanceTimer.current) clearInterval(autoAdvanceTimer.current);
    autoAdvanceTimer.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    resetAutoAdvance();
    return () => {
      if (autoAdvanceTimer.current) clearInterval(autoAdvanceTimer.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) =>
    (touchStartX.current = e.changedTouches[0].screenX);

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) (diff > 0 ? nextSlide() : prevSlide());
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
        <div
          className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slidesData.length) * 100}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 bg-white/10 hover:bg-white/20 transition-transform active:scale-95"
        onClick={prevSlide}
        title="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 bg-white/10 hover:bg-white/20 transition-transform active:scale-95"
        onClick={nextSlide}
        title="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Track */}
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slidesData.map((slide, index) => {
          let className =
            "absolute top-0 left-0 w-full h-full transition-all duration-500";
          if (index === currentSlide) className += " opacity-100 scale-100 z-10";
          else if (index === (currentSlide + 1) % slidesData.length)
            className += " opacity-70 scale-90 z-0";
          else if (index === (currentSlide - 1 + slidesData.length) % slidesData.length)
            className += " opacity-70 scale-90 z-0";
          else className += " opacity-0 scale-80 z-0";

          return (
            <div key={index} className={className}>
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 bg-black/50 rounded-b-xl sm:rounded-b-2xl">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{slide.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            } hover:bg-white/70`}
            onClick={() => {
              setCurrentSlide(index);
              resetAutoAdvance();
            }}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
