"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCheckCircle,
  faExclamationCircle,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as faLinkedinBrand,
  faGithub as faGithubBrand,
  faTwitter as faTwitterBrand,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    {
      icon: faLinkedinBrand,
      label: "LinkedIn",
      handle: "David Obonyano",
      url: "https://www.linkedin.com/in/david-obonyano-bb3478256",
    },
    {
      icon: faGithubBrand,
      label: "GitHub",
      handle: "@davidobonyano",
      url: "https://github.com/davidobonyano",
    },
    {
      icon: faTwitterBrand,
      label: "X (Twitter)",
      handle: "@davidalocaefe",
      url: "https://x.com/davidalocaefe",
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = 'service_573veza';
      const templateId = 'template_2qsawal';
      const publicKey = '6Q4DdR03xq4twi3Nj';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'David Obonyano'
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-40 bg-[#0A0A0A] text-[#EFEEEC] overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D0E0FF]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-6 mb-20 lg:mb-32">
          <div className="flex items-center gap-6">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#EFEEEC] font-black opacity-80">[ CONTACT ]</span>
            <div className="h-[1px] w-16 bg-[#EFEEEC]/10" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-display uppercase leading-[0.85] tracking-tighter">
            Let's <br /> <span className="opacity-30 italic">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column: Socials */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <p className="text-xl text-white/40 font-sans leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="flex flex-col gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start gap-1 p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#EFEEEC]/20 transition-all duration-500 overflow-hidden relative"
                >
                  <div className="flex justify-between w-full items-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFEEEC]/40 font-black">{social.label}</span>
                    <FontAwesomeIcon icon={social.icon} className="text-[#EFEEEC]/20 group-hover:text-[#EFEEEC]/60 transition-colors" />
                  </div>
                  <span className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter text-[#EFEEEC] group-hover:translate-x-2 transition-transform duration-500">{social.handle}</span>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EFEEEC]/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-16 rounded-[32px] lg:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-sm relative overflow-hidden">
              {/* Aesthetic Glow for form */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D0E0FF]/10 blur-[80px] rounded-full" />

              <h3 className="text-3xl font-display uppercase tracking-tight mb-12">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:outline-none focus:border-[#EFEEEC] transition-all font-sans text-xl rounded-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:outline-none focus:border-[#EFEEEC] transition-all font-sans text-xl rounded-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:outline-none focus:border-[#EFEEEC] transition-all font-sans text-xl rounded-none"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-white/10 focus:outline-none focus:border-[#EFEEEC] transition-all font-sans text-xl resize-none rounded-none"
                    placeholder="Tell me more..."
                  />
                </div>

                {/* Submit Area */}
                <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
                  <MagneticButton strength={0.4}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-12 py-5 bg-[#EFEEEC] text-black font-display uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      {!isSubmitting && <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </MagneticButton>

                  <AnimatePresence mode="wait">
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center gap-3 text-red-400 font-sans text-xs uppercase tracking-widest"
                      >
                        <FontAwesomeIcon icon={faExclamationCircle} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex items-center gap-3 text-green-400 font-sans text-xs uppercase tracking-widest"
                      >
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span>Success! Talk soon.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

