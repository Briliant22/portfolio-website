"use client";

import SocialLinks from "@/components/page-home/socialLinks";
import Image from "next/image";
import { FiMail, FiMapPin } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function ProfileSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Briliant22",
      icon: "/icons/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-najmi-briliant/",
      icon: "/icons/linkedIn.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/najmibriliant",
      icon: "/icons/instagram.svg",
    },
  ];
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
      className="flex w-full lg:w-1/3 flex-col px-[12px] py-[24px] justify-start items-center gap-[24px] rounded-[8px]"
    >
      <div className="rounded-full border-[4px] border-primary-200 hover:border-primary-500">
        <Image
          src="/images/najmi_briliant.jpg"
          alt="Najmi Briliant"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col w-full items-center justify-start gap-[12px]">
        <h2 className="text-base-white text-s4 md:text-s3 text-center">
          Muhammad Najmi Briliant
        </h2>
        <h3 className="text-primary-200 text-s6 md:text-s5 text-center">
          Information System Fasilkom UI
        </h3>
        <div className="flex flex-col gap-[8px] mt-[8px]">
          <div className="flex items-center justify-center gap-[8px] text-primary-200 text-b7 md:text-b6">
            <FiMapPin className="text-[16px]" />
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center justify-center gap-[8px] text-primary-200 text-b7 md:text-b6">
            <PiGraduationCapBold className="text-[16px]" />
            <span>University of Indonesia</span>
          </div>
          <div className="flex items-center justify-center gap-[8px] text-primary-200 text-b7 md:text-b6">
            <FiMail className="text-[16px]" />
            <span>briliantnajmi@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex gap-[36px]">
        {socialLinks.map((link, index) => (
          <SocialLinks key={index} socialLink={link} />
        ))}
      </div>
    </motion.div>
  );
}
