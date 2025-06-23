"use client";

import { FiCalendar, FiCheckSquare, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { Experience } from "../data/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{
        background: "linear-gradient(0deg,rgb(18, 26, 70), #05091c)",
        scale: 1,
      }}
      whileHover={{
        background: "linear-gradient(0deg, #304299, #05091c)",
        scale: 1.02,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col w-full rounded-[8px] shadow-md p-[24px] mb-[24px] gap-[12px] text-base-white"
    >
      {/* Card Header */}
      <span className="flex flex-col md:flex-row md:justify-between items-baseline w-full">
        <h3 className="text-s5 sm:text-s4 text-base-white">
          {experience.role}
        </h3>
        <h4 className="text-s6 sm:text-s5 text-primary-200">
          {experience.organization}
        </h4>
      </span>

      {/* Duration and Location Tag */}
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-[12px]">
        <div className="flex items-center justify-center gap-[8px] text-base-white text-s6">
          <FiCalendar className="text-[16px]" />
          <span>{experience.duration}</span>
        </div>
        <div className="flex items-center justify-center gap-[8px] text-base-white text-s6">
          <FiMapPin className="text-[16px]" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col justify-start items-start w-full gap-[12px] my-[12px]">
        {experience.descriptions.map((description, index) => (
          <div
            key={index}
            className="flex items-start justify-center gap-[8px] text-primary-200 text-b7"
          >
            <FiCheckSquare className="text-[16px]" />
            <span>{description}</span>
          </div>
        ))}

        {/* Skills Tag */}
        <div className="flex flex-wrap justify-start items-center gap-[12px] w-full mt-[12px] mb-[-12px]">
          {experience.skills.map((skill, index) => (
            <div
              key={index}
              className="px-[12px] py-[6px] bg-white/30 rounded-[99px] backdrop-blur-[5px]"
            >
              <h5 className="text-base-white text-s6">{skill}</h5>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
