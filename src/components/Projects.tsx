"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faExternalLinkAlt, 
  faPlay,
  faCode,
  faGamepad,
  faFilm,
  faTv,
  faPuzzlePiece,
  faMobile,
  faDesktop,
  faStopwatch,
  faCalculator,
  faCloudSun,
  faCloudRain
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

// Serious Projects Data
const seriousProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with Next.js, TypeScript, and Stripe API.",
    image: "gradient", // Uses gradient background
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/david/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    image: "https://picsum.photos/600/400?random=1", // Random placeholder image
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/david/task-manager",
    featured: true
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
    image: "", // No image - shows default icon
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Framer Motion"],
    liveUrl: "https://realestate-demo.vercel.app",
    githubUrl: "https://github.com/david/real-estate-platform",
    featured: false
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description: "A secure healthcare platform for patient management, appointment scheduling, and medical records with HIPAA compliance.",
    image: "https://via.placeholder.com/600x400/1f2937/ffffff?text=Healthcare+App", // Custom placeholder
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Crypto"],
    liveUrl: "https://healthcare-demo.vercel.app",
    githubUrl: "https://github.com/david/healthcare-system",
    featured: false
  }
];

// Fun Projects Data (Phone App Style)
const funProjects = [
  {
    id: 1,
    name: "Stopwatch",
    icon: faStopwatch,
    color: "from-green-500 to-emerald-500",
    description: "Precise stopwatch with lap times",
    tech: "JavaScript",
    url: "https://stopwatch-demo.vercel.app"
  },
  {
    id: 2,
    name: "Calculator",
    icon: faCalculator,
    color: "from-gray-600 to-gray-800",
    description: "Advanced calculator with history",
    tech: "React",
    url: "https://calculator-demo.vercel.app"
  },
  {
    id: 3,
    name: "Weather App",
    icon: faCloudSun,
    color: "from-yellow-400 to-orange-500",
    description: "Real-time weather updates",
    tech: "React",
    url: "https://weather-app-demo.vercel.app"
  },
  {
    id: 4,
    name: "Movie Trailer App",
    icon: faFilm,
    color: "from-red-500 to-pink-500",
    description: "Browse and watch movie trailers",
    tech: "React Native",
    url: "https://movie-app-demo.vercel.app"
  },
  {
    id: 5,
    name: "Tic Tac Toe",
    icon: faPuzzlePiece,
    color: "from-blue-500 to-cyan-500",
    description: "Classic game with AI opponent",
    tech: "JavaScript",
    url: "https://tictactoe-demo.vercel.app"
  },
  {
    id: 6,
    name: "Twitter Clone",
    icon: faTwitter,
    color: "from-sky-500 to-blue-500",
    description: "Social media platform clone",
    tech: "Next.js",
    url: "https://twitter-clone-demo.vercel.app"
  },
  {
    id: 7,
    name: "YouTube Clone",
    icon: faYoutube,
    color: "from-red-600 to-red-500",
    description: "Video sharing platform",
    tech: "React",
    url: "https://youtube-clone-demo.vercel.app"
  },
  {
    id: 8,
    name: "Netflix Clone",
    icon: faTv,
    color: "from-gray-800 to-red-600",
    description: "Streaming service interface",
    tech: "Next.js",
    url: "https://netflix-clone-demo.vercel.app"
  },
  {
    id: 9,
    name: "Gaming Hub",
    icon: faGamepad,
    color: "from-purple-500 to-pink-500",
    description: "Collection of mini games",
    tech: "JavaScript",
    url: "https://gaming-hub-demo.vercel.app"
  },
  {
    id: 10,
    name: "Portfolio Site",
    icon: faDesktop,
    color: "from-indigo-500 to-purple-600",
    description: "Personal portfolio website",
    tech: "Next.js",
    url: "https://portfolio-demo.vercel.app"
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("serious");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative bg-black">
      <div id="projects-section" className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Selected Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projects for brands and professional applications
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-full p-2">
            <button
              onClick={() => setActiveTab("serious")}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium ${
                activeTab === "serious"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("fun")}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium ${
                activeTab === "fun"
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              Side Projects
            </button>
          </div>
        </motion.div>

        {/* Serious Projects Tab */}
        {activeTab === "serious" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {seriousProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group relative bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  {project.image && project.image !== "" ? (
                    project.image === "gradient" ? (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCode} className="text-6xl text-white/80" />
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="absolute inset-0 flex items-center justify-center">
                                <svg class="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                </svg>
                              </div>
                            `;
                          }
                        }}
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCode} className="text-6xl text-gray-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-400 rounded-lg cursor-not-allowed"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Fun Projects Tab - Phone Screen Layout */}
        {activeTab === "fun" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-700">
                {/* Phone Screen */}
                <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-3 border border-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Grid */}
                  <div className="px-6 py-4">
                    <h3 className="text-white text-lg font-semibold mb-6 text-center">My Apps</h3>
                    <div className="grid grid-cols-4 gap-8">
                      {funProjects.map((app, index) => (
                        <motion.div
                          key={app.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative group cursor-pointer"
                        >
                          {/* Main App Icon - Click goes to live demo */}
                          <a
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}>
                              <FontAwesomeIcon icon={app.icon} className="text-white text-xl" />
                            </div>
                            <p className="text-white text-xs text-center mt-2 font-medium leading-tight">
                              {app.name}
                            </p>
                          </a>
                          
                          {/* GitHub Button - Top Right Corner of App Icon */}
                          <a
                            href={`https://github.com/david/${app.name.toLowerCase().replace(/\s+/g, '-')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -top-1 -right-1 w-5 h-5 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                            onClick={(e) => e.stopPropagation()}
                            title="View on GitHub"
                          >
                            <FontAwesomeIcon icon={faGithub} className="text-white text-xs" />
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
