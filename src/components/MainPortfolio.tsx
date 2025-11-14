"use client";

import AboutMe from "./AboutMe";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFolderOpen, faUser, faEnvelope, faCogs, faHeart, faThumbsUp, faFrown, faAngry, faCheck, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import emailjs from '@emailjs/browser';

export default function MainPortfolio() {
  const { t } = useLocale();
  const [activeSection, setActiveSection] = useState("home");
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  
  // Feedback form state
  const [selectedReaction, setSelectedReaction] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [showFeedbackForm, setShowFeedbackForm] = useState<boolean>(false);
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState<boolean>(false);
  const [feedbackSubmitStatus, setFeedbackSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const navItems = [
    { key: "nav_home", href: "#home", icon: faHome },
    { key: "nav_about", href: "#about", icon: faUser },
    { key: "nav_projects", href: "#projects", icon: faFolderOpen },
    { key: "nav_contact", href: "#contact", icon: faEnvelope }
  ];

  // Auto-rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 5); // 5 testimonials total
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Handle feedback submission
  const handleFeedbackSubmit = async () => {
    if (!feedback.trim()) {
      alert('Please provide some feedback!');
      return;
    }

    setIsSubmittingFeedback(true);

    try {
      // Use the same EmailJS configuration as the contact form
      const serviceId = 'service_573veza';
      const templateId = 'template_2qsawal';
      const publicKey = '6Q4DdR03xq4twi3Nj';

      const templateParams = {
        from_name: 'Portfolio Feedback',
        from_email: 'portfolio@feedback.com',
        subject: `Portfolio Feedback - ${selectedReaction}`,
        message: `Reaction: ${selectedReaction}\n\nFeedback: ${feedback}`,
        to_name: 'David Obonyano'
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        // Reset form and show confirmation
        setSelectedReaction('');
        setFeedback('');
        setShowFeedbackForm(false);
        setFeedbackSubmitStatus('success');
        
        // Reset success status after 3 seconds
        setTimeout(() => {
          setFeedbackSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send feedback');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setFeedbackSubmitStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setFeedbackSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmittingFeedback(false);
    }
  };


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
                key={item.key}
                href={item.href}
                onClick={() => setActiveSection(item.key)}
                className={`flex items-center space-x-2 px-2 py-2 md:px-4 rounded-full transition-all duration-300 ${
                  activeSection === item.key
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden md:inline text-sm font-medium capitalize">
                  {t(item.key)}
                </span>
              </motion.a>
            ))}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
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
          {t("basedIn")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: t("qualityHeadline")
                .replace("{a}", `<span class="text-gradient-ice">${t("design")}</span>`)
                .replace("{b}", `<span class="text-gradient-ice">${t("webDev")}</span>`),
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-4xl text-gray-200 text-xl md:text-2xl leading-relaxed font-medium"
        >
          {t("intro")}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 mb-16 flex flex-col sm:flex-row gap-4 items-center relative z-30"
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
            {t("seeMyWork")}
          </button>
          
          <button 
            className="px-8 py-4 border-2 border-blue-500 hover:border-blue-400 bg-transparent hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            onClick={() => {
              // Open CV in new tab for viewing
              window.open('/david-cv.pdf', '_blank');
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t("viewCv")}
          </button>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 mb-20 flex flex-col items-center px-2 sm:px-4"
        >
          {/* Profile Pictures */}
          <div className="relative flex items-center justify-center mb-8">
            {[
              { 
                name: "Wale", 
                role: "Senior Developer, NSDC", 
                testimonial: "I led the NSDC website build and David, as a young dev then, consistently delivered clean, reliable features. His hunger to learn and speed of iteration made a real impact on our timelines.",
                image: "/testimonials/wale.JPG"
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
                name: "Orezi", 
                role: "Mena247 Hairs", 
                testimonial: "We shipped a solid MVP fast. David combines product sense with strong engineering, setting us up with a codebase that's scalable and easy to extend.",
                image: "/testimonials/koyin.jpg"
              }
            ].map((client, index) => (
              <motion.div
                key={client.name}
                className="relative group cursor-pointer"
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
                onClick={() => setActiveTestimonial(activeTestimonial === index ? -1 : index)}
              >
                {/* Profile Image with fallback to initials */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white/20">
                  <Image 
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        const initials = client.name.split(' ').map(n => n.charAt(0)).join('').slice(0,2).toUpperCase();
                        parent.innerHTML = `
                          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
      
      {/* Services Section */}
      <Services />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Portfolio Feedback Section */}
      <section className="py-20 px-4 relative bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Professional Icons */}
            <div className="flex gap-4 order-1 md:order-2">
              {[
                { icon: faHeart, label: 'Love it!', value: 'love' },
                { icon: faThumbsUp, label: 'Great!', value: 'great' },
                { icon: faFrown, label: 'Sad', value: 'sad' },
                { icon: faAngry, label: 'Angry', value: 'angry' }
              ].map((reaction, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedReaction(reaction.value);
                    setShowFeedbackForm(true);
                  }}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white hover:animate-bounce"
                  title={reaction.label}
                >
                  <FontAwesomeIcon icon={reaction.icon} className="text-xl" />
                </button>
              ))}
            </div>

            {/* Feedback Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-4 w-full max-w-80 order-2 md:order-1">
              {feedbackSubmitStatus === 'success' ? (
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faCheck} className="text-green-400 text-xl" />
                  </div>
                  <h3 className="text-green-400 text-lg font-semibold mb-2">Thanks for your feedback!</h3>
                  <p className="text-gray-300 text-sm">I really appreciate you taking the time to share your thoughts.</p>
                </div>
              ) : feedbackSubmitStatus === 'error' ? (
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-400 text-xl" />
                  </div>
                  <h3 className="text-red-400 text-lg font-semibold mb-2">Oops! Something went wrong</h3>
                  <p className="text-gray-300 text-sm">Please try again in a moment.</p>
                </div>
              ) : !showFeedbackForm ? (
                <h2 className="text-white text-lg">Like my portfolio?</h2>
              ) : (
                <div className="space-y-3">
                  
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell me what you think..."
                    className="w-full h-16 bg-white/5 border border-white/10 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm"
                  />
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setShowFeedbackForm(false);
                        setSelectedReaction('');
                        setFeedback('');
                      }}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded text-sm transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleFeedbackSubmit}
                      disabled={isSubmittingFeedback}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white py-2 px-3 rounded text-sm transition-colors"
                    >
                      {isSubmittingFeedback ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
