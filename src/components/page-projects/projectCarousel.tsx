"use client";

import { useEffect, useState } from "react";
import { Project } from "../data/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  project: Project;
};

export default function ProjectCarousel({ project }: ProjectCarouselProps) {
  const images = project.images ?? [project.thumbnail];
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrentIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full flex flex-col items-center gap-4">
      <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
        {/* Carousel image */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Project Image ${currentIndex + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows inside image (desktop only) */}
        <div className="hidden md:flex absolute top-1/2 left-0 z-10 transform -translate-y-1/2 p-2">
          <button
            onClick={() => paginate(-1)}
            className="p-2 bg-primary-200/20 hover:bg-primary-500/30 rounded-full backdrop-blur"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="hidden md:flex absolute top-1/2 right-0 z-10 transform -translate-y-1/2 p-2">
          <button
            onClick={() => paginate(1)}
            className="p-2 bg-primary-200/20 hover:bg-primary-500/30 rounded-full backdrop-blur"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary-200 opacity-100"
                  : "bg-primary-500/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile nav buttons below image */}
      <div className="flex md:hidden items-center justify-center gap-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 bg-primary-200/20 hover:bg-primary-500/30 rounded-full backdrop-blur"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-2 bg-primary-200/20 hover:bg-primary-500/30 rounded-full backdrop-blur"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
