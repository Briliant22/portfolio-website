"use client";

import { FaFigma, FaJava, FaReact } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import {
  SiCss3,
  SiDart,
  SiDjango,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function SkillsSection() {
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
      className="flex w-full lg:w-2/3 justify-start items-start flex-col gap-[24px] p-[24px] rounded-[8px]"
    >
      <div className="flex items-center justify-center gap-[8px] text-base-white">
        <FiChevronDown className="text-s4 sm:text-s3" />
        <h2 className="text-s4 sm:text-s3">Skills and Expertise</h2>
      </div>

      {/* Programming Languages */}
      <div className="flex flex-col w-full gap-[8px] pl-[32px] justify-start items-start">
        <h3 className="text-s6 sm:text-s5 text-primary-200">
          Programming Languages
        </h3>
        <div className="w-full h-[1px] bg-primary-200"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[32px] gap-y-[8px] w-full">
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <FaJava className="text-[16px]" />
            <p>Java</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiPython className="text-[16px]" />
            <p>Python</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiJavascript className="text-[16px]" />
            <p>JavaScript</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiTypescript className="text-[16px]" />
            <p>TypeScript</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiHtml5 className="text-[16px]" />
            <p>HTML</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiCss3 className="text-[16px]" />
            <p>CSS</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiDart className="text-[16px]" />
            <p>Dart</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiMongodb className="text-[16px]" />
            <p>MongoDB</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiPostgresql className="text-[16px]" />
            <p>PostgreSQL</p>
          </span>
        </div>
      </div>

      {/* Frameworks */}
      <div className="flex flex-col w-full gap-[8px] pl-[32px] justify-start items-start">
        <h3 className="text-s6 sm:text-s5 text-primary-200">Frameworks</h3>
        <div className="w-full h-[1px] bg-primary-200"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[32px] gap-y-[8px] w-full">
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <FaReact className="text-[16px]" />
            <p>React</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiNextdotjs className="text-[16px]" />
            <p>Next.js</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiSpring className="text-[16px]" />
            <p>Spring Boot</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiDjango className="text-[16px]" />
            <p>Django</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiFastapi className="text-[16px]" />
            <p>FastAPI</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiFlutter className="text-[16px]" />
            <p>Flutter</p>
          </span>
        </div>
      </div>

      {/* Other Skills */}
      <div className="flex flex-col w-full gap-[8px] pl-[32px] justify-start items-start">
        <h3 className="text-s6 sm:text-s5 text-primary-200">Other Skills</h3>
        <div className="w-full h-[1px] bg-primary-200"></div>

        <div className="grid grid-cols-1 gap-x-[32px] gap-y-[8px] w-full">
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <SiGit className="text-[16px]" />
            <p>Git</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <FaFigma className="text-[16px]" />
            <p>Figma</p>
          </span>
          <span className="flex items-center gap-[8px] text-primary-200 text-b6">
            <MdLanguage className="text-[16px]" />
            <p>IELTS English Proficiency (8.0)</p>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
