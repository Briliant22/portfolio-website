export type Experience = {
  role: string;
  organization: string;
  duration: string;
  location: string;
  descriptions: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    organization: "Tech Solutions Inc.",
    duration: "Feb - Jun 2025",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    skills: ["JavaScript", "React", "Node.js", "Git"],
  },
  {
    role: "Frontend Developer",
    organization: "Creative Agency Ltd.",
    duration: "Jan - Dec 2024",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Designed and implemented user interfaces for various client projects.",
      "Optimized web applications for maximum speed and scalability.",
      "Worked closely with designers to create responsive layouts.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    role: "Full Stack Developer",
    organization: "Innovative Tech Co.",
    duration: "Jul - Dec 2023",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Built full-stack applications using MERN stack (MongoDB, Express, React, Node.js).",
      "Integrated RESTful APIs and managed database operations.",
      "Ensured code quality through testing and debugging processes.",
    ],
    skills: ["MERN Stack", "API Integration", "Testing", "Debugging"],
  },
];
