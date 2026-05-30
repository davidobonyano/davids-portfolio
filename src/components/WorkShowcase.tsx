"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPuzzlePiece,
  faCalculator,
  faFilm,
  faCloudSun,
  faStopwatch,
  faGamepad,
  faDesktop,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

// --- SERIOUS Data (Trepz Showcase Style) ---
import { seriousProjects } from '@/data/projects';


// --- FUN Data (Phone Style) ---
const funProjects = [
  {
    id: 1,
    name: "Tic Tac Toe",
    icon: faPuzzlePiece,
    color: "from-blue-500 to-cyan-500",
    description: "Classic game with AI opponent",
    tech: "JavaScript",
    url: "https://davidobonyano.github.io/tik-tak-toe/",
    githubUrl: "https://github.com/davidobonyano/tik-tak-toe",
  },
  {
    id: 2,
    name: "Calculator",
    icon: faCalculator,
    color: "from-gray-600 to-gray-800",
    description: "Advanced calculator with history",
    tech: "React",
    url: "https://davidobonyano.github.io/calculatorr-assignment/   ",
    githubUrl: "https://github.com/davidobonyano/calculatorr-assignment ",
  },
  {
    id: 3,
    name: "Movie Trailer App",
    icon: faFilm,
    color: "from-red-500 to-pink-500",
    description: "Browse and watch movie trailers",
    tech: "javascript",
    url: "https://davidobonyano.github.io/movie-trailers-",
    githubUrl: "https://github.com/davidobonyano/movie-trailers-",
  },
  {
    id: 4,
    name: "Weather App",
    icon: faCloudSun,
    color: "from-yellow-400 to-orange-500",
    description: "Real-time weather updates",
    tech: "JavaScript",
    url: "https://davidobonyano.github.io/weather-app/",
    githubUrl: "https://github.com/davidobonyano/weather-app",
  },
  {
    id: 5,
    name: "Stopwatch",
    icon: faStopwatch,
    color: "from-green-500 to-emerald-500",
    description: "Precise stopwatch with lap times",
    tech: "JavaScript",
    url: "https://davidobonyano.github.io/clock-js",
    githubUrl: "https://github.com/davidobonyano/clock-js",
  },
  {
    id: 6,
    name: "Rock Paper Scissors",
    icon: faGamepad,
    color: "from-fuchsia-500 to-violet-600",
    description: "Play RPS with live score",
    tech: "JavaScript",
    url: "http://davidobonyano.github.io/rock-paper-scissors-game",
    githubUrl: "https://github.com/davidobonyano/rock-paper-scissors-game",
  },
  {
    id: 7,
    name: "Portfolio Site",
    icon: faDesktop,
    color: "from-indigo-500 to-purple-600",
    description: "Personal portfolio website",
    tech: "Next.js",
    url: "https://david-obonyano.vercel.app/",
    githubUrl: "https://github.com/davidobonyano/davids-portfolio",
  },
];

const ProjectCard = ({ project, index, onClick }: { project: typeof seriousProjects[0], index: number, onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-6 cursor-pointer text-left w-full"
    >
        {/* Image Container with Cool Frame */}
        <div className="relative aspect-video overflow-hidden bg-[#0a0a0a] p-2 rounded-lg border border-white/5">
          {/* Animated Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E2E1DF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E2E1DF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E2E1DF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E2E1DF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#33373A]/0 group-hover:bg-[#33373A]/20 transition-colors duration-500 pointer-events-none" />

          {/* Image Wrapper */}
          <div className="relative w-full h-full overflow-hidden rounded">
            <div className="relative h-full w-full">
              {/* Fallback to gradient/icon if no image, but we expect images for these */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-center"
                />
              ) : (
                <div className="w-full h-full bg-[#222] flex items-center justify-center">
                  <FontAwesomeIcon icon={faCode} className="text-4xl text-white/20" />
                </div>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                <span className="text-white text-xs font-mono tracking-widest uppercase">Read Case Study</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start border-t border-white/10 pt-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2E1DF] font-medium">{project.category}</span>
            <h3 className="text-2xl font-display uppercase tracking-tight text-[#E2E1DF]">{project.title}</h3>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-mono text-[12px] opacity-30">{project.year}</span>
            <div className="flex gap-2">
              {project.technologies.slice(0, 3).map(t => (
                <span key={t} className="text-[9px] text-white/40 border border-white/10 px-1.5 py-0.5 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
  );
};

const WorkShowcase = () => {
  const [activeTab, setActiveTab] = useState<"serious" | "fun">("serious");
  const [selectedApp, setSelectedApp] = useState<{ id: number; name: string; url: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof seriousProjects[0] | null>(null);

  // Phone App Click Handler
  const handleAppClick = (app: typeof funProjects[0]) => {
    setSelectedApp(app);
  };

  return (
    <section id="projects" className="relative py-10 lg:py-20 bg-medium-gray overflow-hidden">
      <div className="bg-dark rounded-[32px] lg:rounded-[80px] mx-1 sm:mx-2 lg:mx-4 py-16 lg:py-40 px-4 sm:px-6 lg:px-12 overflow-hidden z-20 shadow-2xl">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 lg:mb-24 gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#EFEEEC] font-black opacity-80">[ WORK ]</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display uppercase leading-tight tracking-tighter text-[#EFEEEC]">
                Selected <br /> <span className="opacity-30 text-[#EFEEEC]">Showcase</span>
              </h2>
            </div>


            {/* Tab Switcher */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("serious")}
                className={`px-6 py-2 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${activeTab === 'serious' ? 'bg-[#E2E1DF] text-black border-[#E2E1DF]' : 'hover:bg-white/5 text-white/60'}`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab("fun")}
                className={`px-6 py-2 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${activeTab === 'fun' ? 'bg-[#E2E1DF] text-black border-[#E2E1DF]' : 'hover:bg-white/5 text-white/60'}`}
              >
                Playground
              </button>
            </div>
          </div>

          {/* Content Area */}
          <AnimatePresence mode='wait'>
            {activeTab === "serious" ? (
              <motion.div
                key="serious"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  {seriousProjects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} onClick={() => setSelectedProject(project)} />
                  ))}
                </div>

                {/* View All CTA */}
                <div className="mt-24 lg:mt-32 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://github.com/davidobonyano', '_blank')}
                    className="group relative px-12 py-5 border border-white/10 hover:border-[#E2E1DF] transition-colors duration-500"
                  >
                    <span className="relative z-10 text-[10px] uppercase tracking-[0.5em] font-mono group-hover:text-black transition-colors">View Github Archive</span>
                    <div className="absolute inset-0 bg-[#E2E1DF] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="fun"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                {/* Phone Frame - High End Design */}
                <div className="relative transform hover:rotate-1 transition-transform duration-700">
                  {/* Bezel Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-b from-[#333] to-black rounded-[3.2rem] blur-[2px]" />

                  <div className="relative w-[280px] sm:w-[340px] h-[560px] sm:h-[680px] bg-[#050505] rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-[#222] ring-1 ring-white/5">
                    {/* Inner Screen Border */}
                    <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative border border-[#1a1a1a]">

                      {/* Status Bar */}
                      <div className="absolute top-0 w-full z-20 flex justify-between items-center px-6 py-4">
                        <span className="text-white text-[12px] font-sans font-medium">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 bg-black/20 backdrop-blur rounded-full" />
                          <div className="w-6 h-3 border border-white/30 rounded-[4px] relative">
                            <div className="absolute inset-[1px] bg-white rounded-[2px] w-[80%]" />
                          </div>
                        </div>
                      </div>

                      {/* Notch/Camera Area */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                      {/* Screen Content */}
                      <div className="w-full h-full bg-[#0a0a0a] pt-14">
                        {!selectedApp ? (
                          <div className="px-6 h-full flex flex-col">
                            <h3 className="text-white text-xl font-display uppercase tracking-wide mb-8 text-center mt-4">David's OS</h3>
                            <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                              {funProjects.map((app) => (
                                <button
                                  key={app.id}
                                  onClick={() => handleAppClick(app)}
                                  className="flex flex-col items-center gap-2 group w-full"
                                >
                                  <div className={`w-[60px] h-[60px] bg-gradient-to-br ${app.color} rounded-[14px] flex items-center justify-center shadow-lg group-active:scale-95 transition-transform duration-200 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <FontAwesomeIcon icon={app.icon} className="text-white text-2xl drop-shadow-md" />
                                  </div>
                                  <span className="text-[10px] font-sans text-white/90 font-medium tracking-tight text-center leading-tight">{app.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full relative flex flex-col bg-white">
                            {/* App Header/Controls */}
                            <div className="absolute top-4 left-4 z-30">
                              <button
                                onClick={() => setSelectedApp(null)}
                                className="w-8 h-8 flex items-center justify-center bg-black/80 rounded-full text-white backdrop-blur-md shadow-lg"
                              >
                                ←
                              </button>
                            </div>

                            <div className="w-full h-full">
                              <iframe
                                src={selectedApp.url}
                                className="w-full h-full border-0 bg-white"
                                title={selectedApp.name}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Serious Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-md border border-white/10"
              >
                ✕
              </button>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto min-h-0 w-full relative">
                {/* Header Image */}
                <div className="relative w-full h-[250px] sm:h-[400px] bg-black">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
                </div>

                <div className="p-6 sm:p-10 -mt-20 relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2E1DF] font-medium drop-shadow-md">{selectedProject.category}</span>
                  <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white mb-6 drop-shadow-lg">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-y-2 mb-8">
                    {selectedProject.technologies.map((t, index) => (
                      <div key={t} className="flex items-center">
                        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-mono text-[#E2E1DF]/60">
                          {t}
                        </span>
                        {index < selectedProject.technologies.length - 1 && (
                          <span className="mx-3 text-white/20 text-xs font-mono">/</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-white/90 font-sans mb-10 leading-relaxed max-w-3xl">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-10">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest rounded transition-transform hover:scale-105"
                      >
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 bg-[#222] text-white font-mono text-xs uppercase tracking-widest border border-white/10 rounded hover:bg-[#333] transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#E2E1DF]/80 font-sans leading-relaxed text-sm sm:text-base pt-10 border-t border-white/10">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5 h-full">
                      <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-[10px]">The Challenge</h4>
                      <p className="text-sm opacity-80">{selectedProject.challenge}</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5 h-full">
                      <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-[10px]">The Solution</h4>
                      <p className="text-sm opacity-80">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkShowcase;
