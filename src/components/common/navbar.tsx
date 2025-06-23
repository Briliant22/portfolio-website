"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="flex justify-between items-center text-s4 text-primary-100 py-[10px]">
      {/* Left Logo */}
      <div className="flex items-center">
        <Image src="/icons/logo.svg" alt="Logo" width={66} height={66} />
        <span className="hidden sm:flex sm:ml-[24px] text-base-white">
          Najmi Briliant
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 font-jakarta relative">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <motion.div
              key={link.name}
              className="relative group cursor-pointer"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link
                href={link.href}
                className="hover:text-primary-100 transition-colors"
              >
                {link.name}
              </Link>

              {/* Active + Hover underline */}
              <motion.span
                className="absolute bottom-0 left-1/2 h-[2px] bg-primary-300 rounded-full"
                variants={{
                  rest: {
                    width: isActive ? "100%" : "0%",
                    x: "-50%",
                  },
                  hover: {
                    width: "100%",
                    x: "-50%",
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
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
              className="fixed top-0 right-0 w-2/4 h-full border-l border-primary-800 shadow-lg z-50 px-6 py-8 flex flex-col"
              style={{
                background: "linear-gradient(0deg, #304299, #05091c)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className="self-end mb-6 text-primary-100"
                onClick={toggleSidebar}
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-6 mt-4">
                {links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.name}
                      className="relative group cursor-pointer"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      onClick={toggleSidebar}
                    >
                      <Link
                        href={link.href}
                        className="text-primary-100 text-s4"
                      >
                        {link.name}
                      </Link>

                      {/* Mobile underline (shorter) */}
                      <motion.span
                        className="absolute bottom-0 left-0 h-[2px] bg-primary-300 rounded-full"
                        variants={{
                          rest: {
                            width: isActive ? "100%" : "0%",
                          },
                          hover: {
                            width: "100%",
                          },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  );
                })}
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
