import DownloadResume from "@/components/page-resume/downloadResume";
import ExperienceList from "@/components/page-resume/experienceList";
import ProfileSection from "@/components/page-resume/profileSection";
import SkillsSection from "@/components/page-resume/skillsSection";
import Header from "@/components/text/header";

export default function AboutMePage() {
  return (
    <div className="flex flex-col items-start justify-start w-full pt-[140px] lg:px-[20px] gap-[32px]">
      <Header title="Resume." />
      <DownloadResume />
      <section className="flex flex-col lg:flex-row items-stretch justify-start w-full gap-[24px]">
        <ProfileSection />
        <SkillsSection />
      </section>
      <ExperienceList />
    </div>
  );
}
