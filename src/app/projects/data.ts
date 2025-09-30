export type Project = {
  id: number;
  title: string;
  description: string;
  descriptionKey?: string; // i18n key for translated description
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export const seriousProjects: Project[] = [
  {
    id: 1,
    title: "Yano School",
    description:
      "A Nigerian school platform (KG1–SS3) with admin, teacher, and student dashboards. Students can view payments, timetables, results, and upcoming exams. Admin has full CRUD across sessions, terms, classes, subjects, fees, and more; teachers upload results and manage class records.",
    descriptionKey: "project_1_description",
    image: "/projects/yanoschool.png",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Supabase (DB/Auth/Storage)",
      "PostgreSQL",
      "Radix UI",
      "React Hook Form + Zod",
      "PDF-Lib",
    ],
    liveUrl: "https://yanoschoool.vercel.app/",
    githubUrl: "https://github.com/davidobonyano/yanoschool-next",
    featured: true,
  },
  {
    id: 2,
    title: "CareerPilot – Job Tracker",
    description:
      "A job application tracker with drag & drop Kanban board (Applied → Interviewing → Offer → Rejected), contacts manager, and tasks. Features intuitive drag-and-drop functionality for moving applications between stages. Fully client-side with offline persistence.",
    descriptionKey: "project_2_description",
    image: "/projects/careerpilot.png",
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "LocalForage (IndexedDB)",
      "@hello-pangea/dnd",
      "Framer Motion",
    ],
    liveUrl: "https://career-pilot-liard.vercel.app",
    githubUrl: "https://github.com/davidobonyano/Career-pilot",
    featured: true,
  },
  {
    id: 3,
    title: "NSDC Nigeria Website",
    description:
      "Official website for the National Sugar Development Council (NSDC) Nigeria - a government agency established to catalyze sugar industry development and achieve 70% self-sufficiency in sugar production. Features comprehensive sugar industry data, pricing information, company directories, and policy documentation.",
    descriptionKey: "project_3_description",
    image: "/projects/nscdc.png",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    liveUrl: "https://www.nsdcnigeria.org/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "FixFinder - Local Services Directory",
    description:
      "A comprehensive service marketplace connecting users with verified local professionals across 13+ categories (electricians, plumbers, tailors, hair stylists, etc.). Features geo-location filtering, professional profiles with ratings, advanced search functionality, service categories, and responsive design. Built as a modern MVP with 26+ professional profiles and plans for full backend integration.",
    descriptionKey: "project_4_description",
    image: "/projects/fixfinder.png",
    technologies: [
      "React Router",
      "Context API",
      "Geo-location API",
      "Local Storage",
      "React Icons",
    ],
    liveUrl: "https://fixfinder-cyan.vercel.app/",
    githubUrl: "https://github.com/davidobonyano/fixfinder",
    featured: true,
  },
  {
    id: 5,
    title: "Medilabs",
    description:
      "A modern hospital website featuring appointment booking system, medical services showcase, doctor profiles, and responsive design. Includes image sliders, contact forms, and professional healthcare presentation.",
    descriptionKey: "project_5_description",
    image: "/projects/medihospital.png",
    technologies: ["HTML5", "CSS3", "Javascript", "Font Awesome5"],
    liveUrl: "https://davidobonyano.github.io/medicare-/",
    githubUrl: "https://github.com/davidobonyano/medicare-",
    featured: false,
  },
]; 