import { Project } from "./projects";

type ProjectDescriptionProps = {
  project: Project;
};

export default function ProjectDescription({
  project,
}: ProjectDescriptionProps) {
  return (
    <section className="flex flex-col md:flex-row justify-start items-start w-full gap-[24px] h-full">
      {/* Features */}
      <div className="flex flex-col justify-start items-start w-full h-full">
        <h2 className="text-h3 text-primary-200 mb-[24px]">Features</h2>
        {project.features.map((feature, index) => (
          <div
            key={index}
            className="relative flex justify-start items-start w-full gap-[24px] h-full"
          >
            <span className="absolute left-[-7px] top-[0px] h-[15px] w-[15px] border-[2px] border-base-white bg-primary-900 rounded-full z-10" />
            <div className="flex flex-col w-full h-full justify-start items-start gap-[12px] pl-[24px] border-l border-primary-200">
              <h3 className="text-s5 sm:text-s4 text-primary-200">
                {feature.title}
              </h3>
              <p className="text-b7 sm:text-b6 text-primary-200 mb-[36px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Techstack */}
      <div className="flex flex-col justify-start items-start w-full h-full">
        <h2 className="text-h3 text-primary-200 mb-[24px]">Techstack</h2>
        {project.techstacks.map((techstack, index) => (
          <div
            key={index}
            className="relative flex justify-start items-start w-full gap-[24px] h-full"
          >
            <span className="absolute left-[-7px] top-[0px] h-[15px] w-[15px] border-[2px] border-base-white bg-primary-900 rounded-full z-10" />
            <div className="flex flex-col w-full h-full justify-start items-start gap-[12px] pl-[24px] border-l border-primary-200">
              <h3 className="text-s5 sm:text-s4 text-primary-200">
                {techstack.title}
              </h3>
              <p className="text-b7 sm:text-b6 text-primary-200 mb-[36px]">
                {techstack.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
