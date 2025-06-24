"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function DownloadResume() {
  return (
    <a
      href="/Najmi_Briliant_Software_Engineering.pdf"
      download
      className="flex justify-start items-center w-fit gap-[12px] group"
    >
      <h2 className="text-s5 sm:text-s4 text-primary-200 group-hover:underline group-hover:text-primary-500 transition-colors duration-300">
        Download my resume
      </h2>
      <motion.div
        animate={{
          y: [-5, 0, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        <FiArrowDown className="text-primary-200 group-hover:text-primary-500 transition-colors duration-300 text-[24px]" />
      </motion.div>
    </a>
  );
}
