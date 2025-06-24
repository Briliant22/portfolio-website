"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

type NavigationButtonProps = {
  link: string;
  text: string;
};

export default function NavigationButton({
  link,
  text,
}: NavigationButtonProps) {
  return (
    <a
      href={link}
      className="flex justify-start items-center w-fit gap-[12px] group"
    >
      <h2 className="text-b6 sm:text-b5 text-primary-200 group-hover:text-base-white transition-colors duration-300">
        {text}
      </h2>
      <motion.div
        animate={{
          x: [-8, 0, -8],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <FiArrowRight className="text-primary-200 group-hover:text-base-white transition-colors duration-300 text-[24px]" />
      </motion.div>
    </a>
  );
}
