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
    <section id="contact" className="relative py-24 lg:py-32 bg-black text-[#E2E1DF] overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#33373A]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-6 mb-20 lg:mb-32">
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#E2E1DF] font-medium">[ CONTACT ]</span>
            <div className="h-[1px] w-16 bg-[#E2E1DF]/30" />
          </div>
          <h2 className="text-6xl lg:text-[7rem] font-display uppercase leading-[0.85] tracking-tighter">
            Let's <br /> <span className="opacity-30 italic">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column: Socials */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <p className="text-lg text-white/60 font-sans leading-relaxed">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="flex flex-col gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#E2E1DF]/50 transition-all duration-500"
                >
                  <div className="text-2xl text-white/40 group-hover:text-[#E2E1DF] transition-colors">
                    <FontAwesomeIcon icon={social.icon} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-[#E2E1DF] mb-1">{social.label}</span>
                    <span className="font-display text-xl uppercase tracking-wide text-white group-hover:tracking-wider transition-all">{social.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-8 lg:p-12 border border-white/10 bg-[#050505]">
              <h3 className="text-3xl font-display uppercase tracking-tight mb-12">Send a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/40 font-mono">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#E2E1DF] transition-colors font-sans text-lg rounded-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/40 font-mono">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#E2E1DF] transition-colors font-sans text-lg rounded-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-white/40 font-mono">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#E2E1DF] transition-colors font-sans text-lg rounded-none"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/40 font-mono">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#E2E1DF] transition-colors font-sans text-lg resize-none rounded-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Feedback Area */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-3 text-red-400 font-mono text-sm py-2"
                    >
                      <FontAwesomeIcon icon={faExclamationCircle} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-3 text-[#E2E1DF] font-mono text-sm py-2"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span>Message sent successfully. I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <div className="mt-4">
                  <MagneticButton strength={0.4}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-10 py-5 bg-[#E2E1DF] text-black font-display uppercase tracking-widest text-sm hover:bg-[#33373A] hover:text-[#E2E1DF] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </button>
                  </MagneticButton>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

