"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact me", href: "/contact-me" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center text-s5 text-primary-200 py-[10px]">
      {/* Left Logo */}
      <div className="flex items-center">
        <Image src="/icons/logo.svg" alt="Logo" width={66} height={66} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 font-jakarta">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-primary-100 transition-colors relative"
          >
            {link.name}
            {link.name === "Home" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-300 rounded-full" />
            )}
          </Link>
        ))}
      </div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-primary-200"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-primary-900 border-l border-primary-800 shadow-lg z-50 px-6 py-8 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="self-end mb-6" onClick={toggleSidebar}>
                <X size={28} />
              </button>

              <div className="flex flex-col gap-6 mt-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base-white"
                    onClick={toggleSidebar}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
