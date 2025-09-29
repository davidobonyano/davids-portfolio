"use client";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolderOpen, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MainPortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

  const navItems = [
    { name: "home", href: "#home", icon: faHome },
    { name: "about", href: "#about", icon: faUser },
    { name: "projects", href: "#projects", icon: faFolderOpen },
    { name: "contact", href: "#contact", icon: faEnvelope }
  ];

  return (
    <div className="min-h-screen bg-grid text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-full max-w-fit mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 md:px-8 md:py-4 w-full"
        >
          <div className="flex items-center justify-center space-x-1 md:space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center space-x-2 px-2 py-2 md:px-4 rounded-full transition-all duration-300 ${
                  activeSection === item.name
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden md:inline text-sm font-medium capitalize">
                  {item.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32 md:pt-40 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="uppercase tracking-widest text-gray-400 mt-8 mb-6 md:mt-0 text-xl md:text-2xl font-semibold"
        >
          Based in Nigeria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Quality <span className="text-gradient-ice">Design</span> &{" "}
          <span className="text-gradient-ice">Web Development</span> Synergy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-4xl text-gray-200 text-xl md:text-2xl leading-relaxed font-medium"
        >
          Hi, I&apos;m David. A full-stack developer with expertise in <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, and <span className="font-semibold">TypeScript</span>. I create intuitive, visually stunning and highly functional web applications that deliver exceptional user experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 mb-16 flex flex-col sm:flex-row gap-4 items-center"
        >
          <button 
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            See My Work →
          </button>
          
          <button 
            className="px-8 py-4 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            onClick={() => {
              // Open CV in new tab for viewing
              window.open('/david-cv.pdf', '_blank');
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View CV
          </button>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 mb-20 flex flex-col items-center px-2 sm:px-4"
        >
          {/* Profile Pictures */}
          <div className="relative flex items-center justify-center mb-8">
            {[
              { 
                name: "Wale", 
                role: "Senior Developer, NSDC", 
                testimonial: "I led the NSDC website build and David, as a young dev then, consistently delivered clean, reliable features. His hunger to learn and speed of iteration made a real impact on our timelines.",
                image: "/testimonials/wale.jpg"
              },
              { 
                name: "Alhaja", 
                role: "Staff, Yano School", 
                testimonial: "Our school portal became so much easier to use. Payments, timetables and results are clear and fast. David listened to our needs and shipped exactly what helped the team.",
                image: "/testimonials/alaha.jpg"
              },
              { 
                name: "Mrs Diamond", 
                role: "Proprietor & Head of School, Yano School", 
                testimonial: "From stability to usability, David delivered a system we trust every day. Parents, teachers and students all found it intuitive and it truly elevated our operations.",
                image: "/testimonials/mrsdiamond.jpg"
              },
              { 
                name: "Joy", 
                role: "Owner, Deluxe Store (E‑commerce)", 
                testimonial: "David built our online store with great attention to speed and conversion. The checkout is smooth, and our catalog management is a breeze now.",
                image: "/testimonials/joy.jpg"
              },
              { 
                name: "Driven", 
                role: "Tech Startup", 
                testimonial: "We shipped a solid MVP fast. David combines product sense with strong engineering, setting us up with a codebase that’s scalable and easy to extend.",
                image: "/testimonials/koyin.jpg"
              }
            ].map((client, index) => (
              <motion.div
                key={client.name}
                className="relative cursor-pointer group"
                style={{
                  marginLeft: index > 0 ? '-20px' : '0',
                  zIndex: 5 - index
                }}
                whileHover={{ 
                  scale: 1.1,
                  zIndex: 10,
                  rotate: [0, -2, 2, -2, 2, 0],
                  transition: { duration: 0.5 }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                onClick={() => setActiveTestimonial(activeTestimonial === index ? null : index)}
              >
                {/* Profile Image with fallback to initials */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
                  <Image 
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        const initials = client.name.split(' ').map(n => n.charAt(0)).join('').slice(0,2).toUpperCase();
                        parent.innerHTML = `
                          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            ${initials}
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                {/* Individual Testimonial Card */}
                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-72 sm:w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg p-4 shadow-2xl pointer-events-none transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'opacity-100 -translate-y-2 scale-100' 
                    : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:scale-100'
                }`}>
                  <div className="text-white text-center">
                    <p className="font-medium text-blue-400 mb-1 text-sm">{client.name}</p>
                    <p className="text-gray-400 text-xs mb-2">{client.role}</p>
                    <p className="text-gray-200 leading-relaxed text-xs">&quot;{client.testimonial}&quot;</p>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Info */}
          <p className="text-gray-500 text-sm">
            <span className="text-blue-400 font-semibold">5+</span> Happy Clients • 
            <span className="text-blue-400 font-semibold"> 100%</span> Satisfaction Rate
          </p>
        </motion.div>
      </div>
      
      {/* About Me Section */}
      <AboutMe />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
