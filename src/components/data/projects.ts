export type Project = {
  name: string;
  hook: string;
  path: string;
  description: string;
  thumbnail: string;
  images?: string[];
  link: string;
  skills?: string[];
  contributions: string[];
  techstacks: ProjectTechstack[];
};

export type ProjectTechstack = {
  title: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "SiJagung - Daily Fresh Internal System",
    hook: "Digitalizing and centralizing production, warehouse, and purchasing processes for enhanced efficiency and data accuracy.",
    path: "sijagung-dailyfresh",
    description:
      "Developed 'SiJagung,' a comprehensive internal information system for PT. Daily Fresh Indonesia, aimed at digitalizing and centralizing critical business processes across production, warehouse, and purchasing.  The system was designed to enhance operational efficiency and data accuracy in stock management and food production, moving away from manual record-keeping to a real-time, integrated digital platform.  Key functionalities include real-time stock monitoring, reduced data discrepancies between production and warehouse, optimized buffer stock management, and streamlined raw material purchasing.  The system also provides the accounting division with cross-check visibility into operational data.  Utilizing a 3-tier architecture for scalability and security, the web application features a Next.js frontend, a Spring Boot backend with RESTful APIs, and a PostgreSQL database, all hosted on Google Cloud Platform.  The development followed an Agile methodology with Scrum framework, completed over three sprints, ensuring iterative development and user feedback integration to meet specific business needs. ",
    thumbnail: "/images/sijagung/thumbnail.png",
    images: [
      "/images/sijagung/image1.png",
      "/images/sijagung/thumbnail.png",
      "/images/sijagung/image2.png",
      "/images/sijagung/image3.png",
      "/images/sijagung/image4.png",
      "/images/sijagung/image5.png",
      "/images/sijagung/image6.png",
    ],
    link: "N/A (Internal Project)",
    skills: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Docker",
      "Agile (Scrum)",
      "RESTful API Development",
      "Google Cloud Platform",
      "CI/CD",
    ],
    contributions: [
      "Led the development of 'SiJagung,' an internal information system to digitalize and centralize production, warehouse, and purchasing operations for PT. Daily Fresh Indonesia. ",
      "Implemented features for real-time stock monitoring, management of raw materials and finished goods, and streamlined purchasing processes, aiming to reduce human error and increase efficiency by up to 90%. ",
      "Designed and built the system with a 3-tier architecture, utilizing Next.js for the front-end, Spring Boot for RESTful APIs in the back-end, and PostgreSQL for the database, deployed on Google Cloud Platform. ",
      "Collaborated within an Agile (Scrum) framework, delivering the system in three sprints and incorporating user feedback to ensure alignment with operational needs. ",
      "Provided accounting oversight with integrated data for cross-checking operational insights. ",
    ],
    techstacks: [
      {
        title: "Spring Boot",
        description:
          "A framework for building robust, stand-alone, production-grade Spring-based applications.",
      },
      {
        title: "Java",
        description:
          "A high-level, class-based, object-oriented programming language widely used for building enterprise applications.",
      },
      {
        title: "PostgreSQL",
        description:
          "A powerful, open-source object-relational database system.",
      },
      {
        title: "Next.js",
        description:
          "A React framework for server-side rendering and static site generation.",
      },
      {
        title: "TypeScript",
        description:
          "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development.",
      },
      {
        title: "Google Cloud Platform",
        description:
          "A suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
      },
      {
        title: "Docker",
        description:
          "A platform for developing, shipping, and running applications in containers, ensuring consistent environments across different stages. ",
      },
      {
        title: "Gitlab",
        description:
          "A web-based platform for version control and collaboration, using Git. ",
      },
    ],
  },
  {
    name: "Web Sentiment Analyzer",
    hook: "Automated sentiment analysis of textual data from social media for data-driven insights.",
    path: "web-sentiment-analyzer",
    description:
      "Developed a web-based sentiment analysis platform, 'Web Sentiment Analyzer', to automate sentiment classification from textual data, particularly tweets. This application provides a comprehensive solution for researchers, brands, and organizations to gain data-driven insights into public sentiment. It features a robust role-based authentication system for Admin and User roles, comprehensive account management, and collaborative project management with tiered analytic limits based on subscription plans. The core functionality includes sentiment analysis from various input sources (CSV upload and copy-paste), visualized through interactive dashboards displaying sentiment-labeled tweet tables, word clouds, and time-series graphs to track sentiment trends. Built on a scalable 3-tier architecture, the front-end is developed with Next.js, the back-end comprises a Web API and specialized Classifier and Statistics microservices using FastAPI, and data is stored in MongoDB. The entire system is containerized with Docker and deployed on the Kawung Fasilkom UI server. ",
    thumbnail: "/images/analyzer-ui/thumbnail.png",
    images: [
      "/images/analyzer-ui/image1.png",
      "/images/analyzer-ui/thumbnail.png",
      "/images/analyzer-ui/image2.png",
      "/images/analyzer-ui/image3.png",
      "/images/analyzer-ui/image4.png",
      "/images/analyzer-ui/image5.png",
      "/images/analyzer-ui/image6.png",
    ],
    link: "https://analyzer.cs.ui.ac.id/",
    skills: [
      "Next.js",
      "FastAPI",
      "MongoDB",
      "Python",
      "TypeScript",
      "NLP (Natural Language Processing)",
      "Machine Learning (Keras/TensorFlow)",
      "Docker",
      "Swagger UI",
      "Figma",
    ],
    contributions: [
      "Developed 'Web Sentiment Analyzer', a web-based platform for automated sentiment analysis of textual data, specifically tweets, enabling data-driven insights into public opinion. ",
      "Implemented a secure role-based authentication system (Admin and User) and comprehensive account management features. ",
      "Designed and integrated collaborative project management functionalities, allowing users to create, manage, and share analytic projects with tiered access based on subscription plans. ",
      "Enabled flexible data input methods, including CSV file uploads and direct text copy-paste, for sentiment analysis. ",
      "Created interactive analytic dashboards featuring sentiment-labeled tweet tables, dynamic word clouds for key insights, and time-series graphs to visualize sentiment trends over time. ",
      "Architected the system on a scalable 3-tier model, utilizing Next.js for the front-end, FastAPI for the Web API and dedicated Classifier/Statistics microservices, and MongoDB as the NoSQL database. ",
      "Managed the deployment of all application components using Docker containers on the Kawung Fasilkom UI server, ensuring consistent and portable environments. ",
    ],
    techstacks: [
      {
        title: "Next.js",
        description:
          "A React framework for server-side rendering and static site generation. ",
      },
      {
        title: "TypeScript",
        description:
          "A strongly typed superset of JavaScript that compiles to plain JavaScript. ",
      },
      {
        title: "Python",
        description:
          "A high-level, general-purpose programming language widely used for web development, data analysis, and machine learning. ",
      },
      {
        title: "FastAPI",
        description:
          "A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. ",
      },
      {
        title: "MongoDB",
        description:
          "A NoSQL document database known for its flexibility and scalability for unstructured data. ",
      },
      {
        title: "Keras/TensorFlow",
        description:
          "An open-source machine learning framework for building and training neural networks, used for sentiment classification models. ",
      },
      {
        title: "Docker",
        description:
          "A platform for developing, shipping, and running applications in containers, ensuring consistent environments across different stages. ",
      },
      {
        title: "GitHub",
        description:
          "A web-based platform for version control and collaboration, using Git. ",
      },
      {
        title: "Swagger UI",
        description:
          "An interactive API documentation tool that automatically generates documentation from OpenAPI specifications. ",
      },
      {
        title: "Figma",
        description:
          "A cloud-based design tool for UI/UX design and prototyping. ",
      },
    ],
  },
  {
    name: "Volker Dashboard",
    hook: "Streamline team collaboration and financial management with a responsive dashboard.",
    path: "volker-dashboard",
    description:
      "Developed an internal project tracking and financial dashboard to streamline team collaboration, expense management, and incentive distribution, using Remix, TypeScript, and Tailwind CSS for a responsive and scalable interface. Implemented role-based access control with SSO integration, ensuring secure authentication and tailored workflows for approval hierarchies, financial monitoring, and project assignments. Designed real-time financial dashboards with dynamic charts and exportable reports (Excel), enabling teams to track income, outcomes, and pending transactions, while automating incentive calculations for finished projects.",
    thumbnail: "/images/volker-dashboard/thumbnail.png",
    images: [
      "/images/volker-dashboard/thumbnail.png",
      "/images/volker-dashboard/image1.png",
      "/images/volker-dashboard/image2.png",
    ],
    link: "https://example.com/project1",
    skills: ["Remix", "TypeScript", "Tailwind CSS", "Express.js"],
    contributions: [
      "Developed an internal project tracking and financial dashboard to streamline team collaboration, expense management, and incentive distribution.",
      "Implemented role-based access control with SSO integration, ensuring secure authentication and tailored workflows for approval hierarchies, financial monitoring, and project assignments.",
      "Designed real-time financial dashboards with dynamic charts and exportable reports (Excel), enabling teams to track income, outcomes, and pending transactions, while automating incentive calculations for finished projects.",
    ],
    techstacks: [
      {
        title: "Remix",
        description:
          "A React framework for server-side rendering and static site generation.",
      },
      {
        title: "TypeScript",
        description:
          "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development.",
      },
      {
        title: "Express.js",
        description:
          "A fast, unopinionated, minimalist web framework for Node.js.",
      },
      {
        title: "GitHub",
        description:
          "A web-based platform for version control and collaboration, using Git. ",
      },
    ],
  },
  {
    name: "Volker Indonesia Company Profile & CMS Website",
    hook: "Company profile website with a CMS for Volker Indonesia.",
    path: "volker-comprof-cms",
    description:
      "Developed a Company Profile Website and Content Management System using Next.js, TypeScript, and Tailwind CSS, delivering a fast, scalable, and visually appealing user interface. Collaborated with the UI/UX Designer to translate Figma wireframes into pixel-perfect, interactive web pages, achieving a 100% design-to-implementation accuracy and responsiveness on all platforms. Collaborated closely with the Project Manager to align front-end development with project goals, timelines, and client requirements, successfully meeting 100% of client specifications and delivering on time.",
    thumbnail: "/images/volker-comprof/thumbnail.png",
    images: [
      "/images/volker-comprof/thumbnail.png",
      "/images/volker-comprof/image1.png",
      "/images/volker-comprof/image2.png",
    ],
    link: "https://volkerindonesia.com/",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    contributions: [
      "Developed a Company Profile Website and Content Management System using Next.js, TypeScript, and Tailwind CSS, delivering a fast, scalable, and visually appealing user interface.",
      "Collaborated with the UI/UX Designer to translate Figma wireframes into pixel-perfect, interactive web pages, achieving a 100% design-to-implementation accuracy and responsiveness on all platforms.",
      "Collaborated closely with the Project Manager to align front-end development with project goals, timelines, and client requirements, successfully meeting 100% of client specifications and delivering on time.",
    ],
    techstacks: [
      {
        title: "Next.js",
        description:
          "A React framework for server-side rendering and static site generation.",
      },
      {
        title: "TypeScript",
        description:
          "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development.",
      },
      {
        title: "GitHub",
        description:
          "A web-based platform for version control and collaboration, using Git. ",
      },
    ],
  },
  {
    name: "Unicorn Indonesia Company Profile & CMS Website",
    hook: "Company profile website with a CMS for Unicorn Indonesia.",
    path: "unicorn-comprof-cms",
    description:
      "Developed a Company Profile Website and Content Management System using Next.js, TypeScript, and Tailwind CSS, delivering a responsive, high-performance user interface. Teamed up with the UI/UX Designer to implement pixel-perfect, interactive web pages from Figma wireframes, achieving 100% design-to-implementation accuracy and full cross-platform responsiveness. Collaborated with the Project Manager to ensure front-end development aligned with project objectives, timelines, and client requirements, successfully delivering 100% of client expectations on schedule.",
    thumbnail: "/images/unicorn-comprof/thumbnail.png",
    images: [
      "/images/unicorn-comprof/thumbnail.png",
      "/images/unicorn-comprof/image1.png",
      "/images/unicorn-comprof/image2.png",
    ],
    link: "https://unicornindo.com/",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    contributions: [
      "Developed a Company Profile Website and Content Management System using Next.js, TypeScript, and Tailwind CSS, delivering a responsive, high-performance user interface.",
      "Teamed up with the UI/UX Designer to implement pixel-perfect, interactive web pages from Figma wireframes, achieving 100% design-to-implementation accuracy and full cross-platform responsiveness.",
      "Collaborated with the Project Manager to ensure front-end development aligned with project objectives, timelines, and client requirements, successfully delivering 100% of client expectations on schedule.",
    ],
    techstacks: [
      {
        title: "Next.js",
        description:
          "A React framework for server-side rendering and static site generation.",
      },
      {
        title: "TypeScript",
        description:
          "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development.",
      },
      {
        title: "GitHub",
        description:
          "A web-based platform for version control and collaboration, using Git. ",
      },
    ],
  },
];
