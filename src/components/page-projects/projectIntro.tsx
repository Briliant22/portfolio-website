import ProjectCarousel from "./projectCarousel";
import { Project } from "../data/projects";

type ProjectIntroProps = {
  project: Project;
};

export default function ProjectIntro({ project }: ProjectIntroProps) {
  return (
    <section className="flex flex-col justify-start items-center w-full gap-[24px]">
      <div className="flex flex-wrap justify-start items-center gap-[12px] w-full">
        {project.skills?.map((skill, index) => (
          <div
            key={index}
            className="px-[12px] py-[6px] bg-white/30 rounded-[99px] backdrop-blur-[5px]"
          >
            <h5 className="text-base-white text-s6">{skill}</h5>
          </div>
        ))}
      </div>
      <ProjectCarousel project={project} />
      <div className="flex w-full justify-start items-start">
        <p className="text-b7 sm:text-b6 text-primary-200">
          {project.description}
        </p>
      </div>
    </section>
  );
}
