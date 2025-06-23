"use client";

import { useRouter } from "next/navigation";
import { Project } from "../data/projects";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [showName, setShowName] = useState(true);

  const handleClick = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      if (isActive) {
        router.push(`/projects/${project.path}`);
      } else {
        setIsActive(true);
      }
    } else {
      router.push(`/projects/${project.path}`);
    }
  };

  useEffect(() => {
    if (isActive) {
      setShowName(false);
    } else {
      const timeout = setTimeout(() => {
        setShowName(true);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <motion.div
      className="relative"
      animate={isActive ? "active" : "inactive"}
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Pulsating border */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-[24px] border-[4px] border-primary-500 pointer-events-none z-20"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: [1, 0, 1],
            scale: [1, 1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Main card */}
      <motion.div
        className="relative h-[400px] rounded-[24px] shadow-md p-[24px] flex flex-col justify-end bg-cover bg-center bg-no-repeat overflow-hidden cursor-pointer"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
        onHoverStart={() => {
          if (window.innerWidth >= 769) setIsActive(true);
        }}
        onHoverEnd={() => {
          if (window.innerWidth >= 769) setIsActive(false);
        }}
        onClick={handleClick}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 rounded-[24px] z-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13, 24, 70, 0.00) 0.15%, #0D1846 111.29%)",
          }}
        />

        {/* Name at bottom (only visible when not active) */}
        <div className="relative z-10 mt-auto">
          {showName && !isActive && (
            <h3 className="text-h4 text-base-white pb-[8px]">{project.name}</h3>
          )}
        </div>

        {/* Animated content */}
        <motion.div
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{
            duration: isActive ? 0.3 : 0.6,
            ease: "easeInOut",
          }}
          className={`absolute bottom-0 left-0 right-0 p-[24px] flex flex-col gap-[12px] z-10 ${
            isActive ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <h3 className="text-h4 text-base-white">{project.name}</h3>
          <p className="text-b5 text-base-white">{project.hook}</p>
            <div className="flex flex-wrap justify-start items-center gap-[12px] w-full">
            {project.skills?.slice(0, 4).map((skill, index) => (
              <div
              key={index}
              className="px-[12px] py-[6px] bg-white/30 rounded-[99px] backdrop-blur-[5px]"
              >
              <h5 className="text-base-white text-s6">{skill}</h5>
              </div>
            ))}
            </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
