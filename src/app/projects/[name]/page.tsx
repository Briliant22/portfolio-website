"use client";

import ProjectDescription from "@/components/page-projects/projectDescription";
import ProjectIntro from "@/components/page-projects/projectIntro";
import { Project, projects } from "@/components/data/projects";
import Header from "@/components/text/header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/common/footer";

export default function ProjectDetailPage() {
  const params = useParams();
  const name = params.name as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      projects.forEach((project) => {
        if (project.path.toLowerCase() === name.toLowerCase()) {
          setProject(project);
        }
      });
    };

    fetchProject();
  }, [name]);

  if (!project) {
    return (
      <div className="flex items-center justify-center w-full py-[140px] lg:px-[60px]">
        <p className="text-base-white">Project not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-start w-full pt-[140px] lg:px-[60px] gap-[32px] md:gap-[64px]">
      <Header title={project.name} backButton />
      <ProjectIntro project={project} />
      <ProjectDescription project={project} />
      <Footer />
    </div>
  );
}
