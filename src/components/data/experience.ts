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
    organization:
      "Lab Information Retrieval & Natural Language Processing, Universitas Indonesia",
    duration: "Feb 2025 - June 2025 · 5 mos",
    location: "Depok, West Java, Indonesia",
    descriptions: [
      "Developed a sentiment analysis web application using Next.js, FastAPI, and Python, enabling real-time sentiment insights from Twitter data.",
      "Defined product requirements and user flows in collaboration with academic advisors, ensuring alignment with research objectives and usability goals.",
      "Created documentation and onboarding material for future development teams, improving handover efficiency and long-term maintainability of the product.",
    ],
    skills: [
      "Next.js",
      "FastAPI",
      "Python",
      "Product Requirements",
      "Sentiment Analysis",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    role: "Product Delivery Intern",
    organization: "AI Rudder",
    duration: "Aug 2024 - Nov 2024 · 4 mos",
    location: "Jakarta, Indonesia",
    descriptions: [
      "Collaborated with product delivery and engineering teams to optimize AI-powered voice and chatbot solutions, improving response accuracy by 20% and enhancing user experience.",
      "Conducted detailed flow and data analysis of voice and chatbot interactions, identifying key inefficiencies and implementing improvements that increased automation success rates by 15%.",
      "Analyzed voice bot recordings to maintain high-quality interactions, contributing to a 30% reduction in chatbot error rates and ensuring seamless customer communication.",
      "Assisted in refining NLP models and conversation flows, leading to a 25% improvement in intent recognition accuracy for voice and chatbot interactions.",
    ],
    skills: [
      "AI",
      "Chatbot",
      "Voice Solutions",
      "Data Analysis",
      "Natural Language Processing (NLP)",
      "Product Delivery",
      "Quality Assurance",
    ],
  },
  {
    role: "Vice Director of Business Growth & Partnerships",
    organization: "RISTEK Fakultas Ilmu Komputer Universitas Indonesia",
    duration: "Feb 2024 - Feb 2025 · 1 yr 1 mo",
    location: "Depok, West Java, Indonesia · Hybrid",
    descriptions: [
      "Secured and maintained strategic partnerships with international partners, achieving an 80% increase from previous years and unlocking new opportunities for RISTEK and its members.",
      "Oversaw the RISTEK x DataCamp Donates Scholarship Program, distributing scholarships worth 120+ million rupiah, enabling members to upskill in data science.",
      "Led the organization of Sisters in Tech 2023, a mentorship program that grew participation by 50% compared to previous years, empowering more women to enter the tech industry.",
      "Improved productivity and infrastructure within RISTEK by providing essential tools and resources, enhancing efficiency and collaboration among members.",
    ],
    skills: [
      "Strategic Partnerships",
      "Event Organization",
      "Business Development",
    ],
  },
  {
    role: "Teaching Assistant of Programming Foundations 2",
    organization: "Faculty of Computer Science, Universitas Indonesia",
    duration: "Jan 2024 - Jun 2024 · 6 mos",
    location: "Depok, West Java, Indonesia · Hybrid",
    descriptions: [
      "Assisted in teaching foundational programming concepts using Java to 400+ students, improving overall class comprehension and coding proficiency.",
      "Collaborated with the lecturer and fellow teaching assistants to prepare and grade 50+ assignments and labs, ensuring fair and consistent evaluation.",
      "Provided 1-on-1 and group mentoring sessions, helping students debug code and refine problem-solving skills, leading to a 100% student assignment completion rates.",
      "Conducted weekly tutorial sessions, resolving 90% of student queries related to coursework and programming projects, enhancing their understanding of Java.",
    ],
    skills: [
      "Java",
      "Teaching",
      "Mentoring",
      "Curriculum Development",
      "Debugging",
      "Problem-Solving",
      "Education",
    ],
  },
  {
    role: "Staff of Web Development",
    organization: "Pesta Rakyat Komputer",
    duration: "Dec 2023 - May 2024 · 6 mos",
    location: "Depok, West Java, Indonesia · Hybrid",
    descriptions: [
      "Developed REST APIs for the event website using Django REST Framework, ensuring seamless data exchange and improved user interaction.",
      "Engineered robust backend solutions, enhancing website functionality and user experience, resulting in faster load times and higher user satisfaction.",
      "Designed and implemented scalable APIs that supported high-traffic events, ensuring 99% uptime and optimal application performance.",
      "Collaborated with front-end teams to ensure efficient code integration.",
    ],
    skills: [
      "Back-End Web Development",
      "Django REST Framework",
      "Django",
      "Software Development",
      "Web Development",
      "REST APIs",
    ],
  },
  {
    role: "PIC of Event",
    organization: "Open House Fasilkom UI",
    duration: "Dec 2022 - Nov 2023 · 1 yr",
    location: "Depok, West Java, Indonesia · Hybrid",
    descriptions: [
      "Responsible for managing Division of Event at Open House Fasilkom UI 2023.",
      "Responsible for planning and executing the Main Event of Open House Fasilkom UI 2023.",
    ],
    skills: [
      "Event Management",
      "Event Planning",
      "Project Coordination",
      "Team Leadership",
    ],
  },
];
