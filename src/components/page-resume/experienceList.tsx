import { FiChevronDown } from "react-icons/fi";
import { experiences } from "../data/experience";
import ExperienceCard from "./experienceCard";

export default function ExperienceList() {
  return (
    <section className="flex flex-col gap-[16px] w-full justify-start items-start rounded-[8px]">
      <div className="flex items-center justify-center gap-[8px] text-base-white">
        <FiChevronDown className="text-s4 sm:text-s3" />
        <h2 className="text-s4 sm:text-s3">Experience</h2>
      </div>

      {/* List of Experiences */}
      <div className="flex flex-col w-full pl-[12px] sm:pl-[32px]">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex justify-start items-start w-full gap-[24px] h-full"
          >
            <span className="absolute left-[-6px] top-[0px] h-[15px] w-[15px] border-[2px] border-base-white bg-base-white rounded-full z-10" />
            <div className="flex flex-col w-full h-full justify-start items-start gap-[12px] pl-[12px] sm:pl-[24px] border-l-[2px] border-primary-200">
              {/* Experience Card */}
              <ExperienceCard experience={experience} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
