import ProjectCarousel from "./projectCarousel";
import { Project } from "./projects";

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
          {/* {project.description} */}
          As an Information Systems student at University of Indonesia, I am
          diligently cultivating my skills to become a software engineer. My
          journey is marked by hands-on projects, enhancing my proficiency and
          broadening my technical expertise. Embracing challenges, my effective
          time management skills have been instrumental in balancing academic
          pursuits with diverse experiences. This equilibrium allows me to excel
          academically while exploring new avenues. My involvement in
          organizational activities has sharpened my leadership and
          communication skills, essential for collaborative success in team
          settings.
        </p>
      </div>
    </section>
  );
}
