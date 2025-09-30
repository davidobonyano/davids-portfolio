"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGamepad, 
  faFutbol, 
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const technologies = [
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
];

export default function AboutMe() {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Grid background with gradient fade */}
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-20% to-black to-40%"></div>
      
      <div id="about-section" className="max-w-7xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image with Unique Design */}
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Circles */}
                <div className="absolute inset-0 rounded-full bg-gray-800 opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gray-700 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-4 rounded-full bg-gray-600 opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main Profile Circle */}
                <div className="relative w-full h-full rounded-full bg-gray-800 p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    {/* Your actual photo */}
                    <Image 
                      src="/david-photo.jpeg" 
                      alt="David Obonyano"
                      fill
                      sizes="200px"
                      className="object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gray-900 flex items-center justify-center">
                              <div class="text-center">
                                <div class="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-6xl font-bold text-white">
                                  DO
                                </div>
                                <p class="text-gray-400 text-sm">Add david-photo.jpeg to public folder</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FontAwesomeIcon icon={faGamepad} className="text-white text-sm" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <FontAwesomeIcon icon={faFutbol} className="text-white text-sm" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    x: [0, -5, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} className="text-white text-xs" />
                </motion.div>
              </motion.div>
            </div>

            {/* Personal Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  David Obonyano
                </h3>
                <p className="text-xl font-semibold mb-2 text-gradient-ice">
                  Full-Stack Developer
                </p>
                <p className="text-gray-400 text-lg">
                  4+ {t("yearsExperience")}
                </p>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <p className="text-gray-400 italic text-lg">
                  Pro COD Player • Video Games • Barca Fan
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Current <span className="text-gradient-ice">{t("technologiesWord")}</span>
              </h3>
              <p className="text-gray-400 text-lg mb-4">
                {t("about_currentTechParagraph")}
              </p>
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="relative group cursor-pointer"
                >
                  <div className={`bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-lg transition-all duration-300 hover:border-blue-500 ${
                    hoveredTech === tech.name ? 'shadow-2xl border-blue-500' : ''
                  }`}>
                    <div className="flex flex-col items-center space-y-2">
                      <Image 
                        src={tech.logo} 
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="object-contain"
                        onError={(e) => {
                          // Fallback to a simple text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const fallbackText = tech.name
                              .split(' ')
                              .map(word => word.charAt(0))
                              .join('');
                            parent.innerHTML = `<div class="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold">${fallbackText}</div>`;
                          }
                        }}
                      />
                      <span className="text-white font-semibold text-sm text-center">
                        {tech.name}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <FontAwesomeIcon icon={faHeart} className="text-white text-xs" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Experience Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              <div className="text-center bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-gradient-ice mb-2">4+</div>
                <div className="text-gray-400">{t("yearsExperience")}</div>
              </div>
              <div className="text-center bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-gradient-ice mb-2">50+</div>
                <div className="text-gray-400">{t("projectsCompleted")}</div>
              </div>
              <div className="text-center bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-gradient-ice mb-2">100%</div>
                <div className="text-gray-400">{t("clientSatisfaction")}</div>
              </div>
              <div className="text-center bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-gradient-ice mb-2">24/7</div>
                <div className="text-gray-400">{t("available")}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
