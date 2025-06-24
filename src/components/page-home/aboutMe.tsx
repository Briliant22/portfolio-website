"use client";

import NavigationButton from "../common/navigationButton";
import SocialLinks from "./socialLinks";
import { useEffect, useState } from "react";

export default function AboutMeSection() {
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

  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 500);
      }
    }, 1000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col gap-[48px]">
      <style jsx global>{`
        @keyframes glitch-anim-1 {
          0%,
          100% {
            clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
          }
          10% {
            clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%);
          }
          20% {
            clip-path: polygon(0 30%, 100% 30%, 100% 40%, 0 40%);
          }
          30% {
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
          }
          40% {
            clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
          }
          50% {
            clip-path: polygon(0 10%, 100% 10%, 100% 15%, 0 15%);
          }
          60% {
            clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
          }
          70% {
            clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
          }
          80% {
            clip-path: polygon(0 65%, 100% 65%, 100% 70%, 0 70%);
          }
          90% {
            clip-path: polygon(0 85%, 100% 85%, 100% 90%, 0 90%);
          }
        }

        @keyframes glitch-anim-2 {
          0%,
          100% {
            clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
          }
          10% {
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
          }
          20% {
            clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%);
          }
          30% {
            clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
          }
          40% {
            clip-path: polygon(0 40%, 100% 40%, 100% 45%, 0 45%);
          }
          50% {
            clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%);
          }
          60% {
            clip-path: polygon(0 35%, 100% 35%, 100% 40%, 0 40%);
          }
          70% {
            clip-path: polygon(0 10%, 100% 10%, 100% 15%, 0 15%);
          }
          80% {
            clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%);
          }
          90% {
            clip-path: polygon(0 55%, 100% 55%, 100% 60%, 0 60%);
          }
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          left: 4px;
          text-shadow: -4px 0 #ff00c1;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          animation: glitch-anim-1 0.6s infinite;
        }

        .glitch-text::after {
          left: -4px;
          text-shadow: 4px 0 #00fff9;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          animation: glitch-anim-2 0.6s infinite;
        }
      `}</style>

      <div className="flex flex-col gap-[24px]">
        <div className="relative">
          <h1
            className={`text-h3 sm:text-h2 text-primary-200 tracking-[0.4em] relative inline-block ${
              glitchActive ? "glitch-text" : ""
            }`}
            data-text="I'M NAJMI BRILIANT"
          >
            <span className="relative z-10">I&apos;M NAJMI BRILIANT</span>
          </h1>

          {/* Additional glitch effect on hover */}
          <div className="absolute top-0 left-0 w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-h3 sm:text-h2 tracking-[0.4em] text-transparent relative">
              <span
                className="absolute top-0 left-0 text-primary-200"
                style={{
                  textShadow: "5px 0 #ff00c1",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  animation: "glitch-anim-1 0.5s infinite",
                }}
              >
                I&apos;M NAJMI BRILIANT
              </span>
              <span
                className="absolute top-0 left-0 text-primary-200"
                style={{
                  textShadow: "-5px 0 #00fff9",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  animation: "glitch-anim-2 0.5s infinite reverse",
                }}
              >
                I&apos;M NAJMI BRILIANT
              </span>
            </div>
          </div>
        </div>

        <span className="text-b5 text-primary-200 leading-[2.5em]">
          As an Information Systems student at the University of Indonesia,
          I&apos;m driven to build impactful digital products and refine my
          skills as a software engineer. My learning journey emphasizes hands-on
          projects, which are key to enhancing my proficiency and expanding my
          technical expertise at the intersection of technology, design, and
          business. I effectively manage my time to balance academic excellence
          with diverse practical experiences. Additionally, my involvement in
          various organizational activities has honed my leadership and
          communication abilities, crucial for successful team collaboration.
        </span>
      </div>

      <NavigationButton link="/projects" text="See My Projects" />

      <div className="flex gap-[36px]">
        {socialLinks.map((link, index) => (
          <SocialLinks key={index} socialLink={link} />
        ))}
      </div>
    </section>
  );
}
