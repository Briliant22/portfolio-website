export type Project = {
  name: string;
  path: string;
  description: string;
  thumbnail: string;
  images?: string[];
  link: string;
  skills?: string[];
  features: ProjectFeature[];
  techstacks: ProjectTechstack[];
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectTechstack = {
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Volker Dashboard",
    path: "volker-dashboard",
    description: "This is a brief description of Project One.",
    thumbnail: "/images/volker-dashboard/thumbnail.png",
    images: [
      "/images/volker-dashboard/thumbnail.png",
      "/images/volker-dashboard/image1.png",
      "/images/volker-dashboard/image2.png",
    ],
    link: "https://example.com/project1",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Express.js"],
    features: [
      {
        title: "Feature 1",
        description: "This is the description for Feature 1 of Project One.",
      },
      {
        title: "Feature 2",
        description: "This is the description for Feature 2 of Project One.",
      },
    ],
    techstacks: [
      {
        title: "React",
        description: "A JavaScript library for building user interfaces.",
      },
      {
        title: "Next.js",
        description:
          "A React framework for server-side rendering and static site generation.",
      },
    ],
  },
];
