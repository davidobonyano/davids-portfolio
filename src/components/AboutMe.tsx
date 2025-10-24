"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGamepad, 
  faFutbol, 
  faHeart,
  faChevronDown
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
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    experience: true,
    skills: true,
    interests: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Grid background with gradient fade */}
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-20% to-black to-40%"></div>
      
      <div id="about-section" className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            {/* Profile Image with Unique Design */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                {/* Background Circles */}
                <div className="absolute inset-0 rounded-full bg-gray-800 opacity-20"></div>
                <div className="absolute inset-2 rounded-full bg-gray-700 opacity-30"></div>
                <div className="absolute inset-4 rounded-full bg-gray-600 opacity-40"></div>
                
                {/* Main Profile Circle */}
                <div className="relative w-full h-full rounded-full bg-gray-800 p-1">
                  <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
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
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faGamepad} className="text-white text-sm" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faFutbol} className="text-white text-sm" />
                </div>

                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faHeart} className="text-white text-xs" />
                </div>
              </div>
            </div>


            {/* Small About Card */}
            <div className="w-full max-w-sm bg-black/20 backdrop-blur-xl border border-gray-600/30 rounded-lg p-4 shadow-lg">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-blue-400 uppercase">ABOUT SNAPSHOT</h2>
                  <p className="text-gray-400 text-xs">Quick peek into who I am & what I do</p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs font-medium hover:bg-blue-600 transition-colors">
                  about
                </button>
              </div>

              {/* Collapsible Sections */}
              <div className="space-y-3">
                {/* About Section */}
                <div>
                  <button 
                    onClick={() => toggleSection('about')}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center">
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`mr-2 text-xs transition-transform ${expandedSections.about ? 'rotate-180' : ''}`} 
                      />
                      about
                    </span>
                  </button>
                  {expandedSections.about && (
                    <div className="ml-4 mt-2 space-y-1">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faChevronDown} className="mr-2 text-xs text-blue-400" />
                        <span className="text-gray-300 text-sm">profile</span>
                      </div>
                      <div className="ml-4 space-y-1 text-gray-400 text-sm">
                        <div><span className="text-blue-400">name:</span> David Obonyano</div>
                        <div><span className="text-blue-400">role:</span> Full-Stack Dev</div>
                        <div><span className="text-blue-400">location:</span> Lagos, Nigeria</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Experience Section */}
                <div>
                  <button 
                    onClick={() => toggleSection('experience')}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center">
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`mr-2 text-xs transition-transform ${expandedSections.experience ? 'rotate-180' : ''}`} 
                      />
                      experience
                    </span>
                  </button>
                  {expandedSections.experience && (
                    <div className="ml-4 mt-2 space-y-1">
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>5+ yrs • Web Dev</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>4+ yrs • React/Next</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>3+ yrs • Full-Stack</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Skills Section */}
                <div>
                  <button 
                    onClick={() => toggleSection('skills')}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center">
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`mr-2 text-xs transition-transform ${expandedSections.skills ? 'rotate-180' : ''}`} 
                      />
                      skills
                    </span>
                  </button>
                  {expandedSections.skills && (
                    <div className="ml-4 mt-2 space-y-1">
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>TS • React • Node</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>DB • APIs • Cloud</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>Docker • Git • Testing</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>Claude • AI • Copilot</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Interests Section */}
                <div>
                  <button 
                    onClick={() => toggleSection('interests')}
                    className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center">
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`mr-2 text-xs transition-transform ${expandedSections.interests ? 'rotate-180' : ''}`} 
                      />
                      interests
                    </span>
                  </button>
                  {expandedSections.interests && (
                    <div className="ml-4 mt-2 space-y-1">
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>💻 Code enthusiast</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>🍽️ Eating eba</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span>🎵 Listening to music</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Technologies */}
          <div className="space-y-8">
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
                <div
                  key={tech.name}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="relative group cursor-pointer hover:scale-105 hover:-translate-y-1 transition-all duration-300"
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
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faHeart} className="text-white text-xs" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
