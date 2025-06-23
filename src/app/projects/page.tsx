import ProjectCard from "@/components/page-projects/projectCard";
import { projects } from "@/components/data/projects";
import Header from "@/components/text/header";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-start justify-start w-full pt-[140px] lg:px-[60px] gap-[64px]">
      <Header title="Projects." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
