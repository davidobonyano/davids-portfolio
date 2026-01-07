"use client";

import { seriousProjects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, use } from 'react';

// Animation variants for reveal effect
const revealVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = seriousProjects.find(p => p.id === parseInt(id));
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (!project) {
    return notFound();
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-[#E2E1DF]">
      <Navbar />

      <main className="pt-32 lg:pt-40 pb-24 px-6 lg:px-16 max-w-[1600px] mx-auto">

        {/* Navigation Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16 lg:mb-24"
        >
          <Link href="/#projects" className="group inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-white/40 hover:text-[#E2E1DF] transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-1 transition-transform" />
            <span>All Projects</span>
          </Link>
        </motion.div>

        {/* 1. HERO SPLIT SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24 lg:mb-40">

          {/* Left: Metadata & Context (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-12 lg:gap-20">

            {/* Title Block */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={revealVar}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-4"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[#E2E1DF] font-medium border border-[#E2E1DF]/20 px-3 py-1 rounded-full">{project.category}</span>
                <span className="text-xs font-mono text-white/40">{project.year}</span>
              </motion.div>

              <motion.h1
                variants={revealVar}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-[-0.02em] leading-[0.85]"
              >
                {project.title}
              </motion.h1>
            </div>

            {/* The Brief - Storyline Hook */}
            <motion.div
              variants={revealVar}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg md:text-xl text-white/80 font-sans leading-relaxed max-w-lg">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#E2E1DF] text-black font-display uppercase tracking-widest hover:bg-white transition-colors">
                  Visit Live Site
                </a>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 text-white font-display uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Github
                  </a>
                )}
              </div>
            </motion.div>

            {/* Metadata Grid */}
            <motion.div
              variants={revealVar}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-y-8 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2E1DF]">Services</span>
                <span className="text-sm text-white/60">UI/UX Design</span>
                <span className="text-sm text-white/60">Development</span>
                <span className="text-sm text-white/60">Strategy</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2E1DF]">Tech Stack</span>
                {project.technologies.slice(0, 4).map(t => (
                  <span key={t} className="text-sm text-white/60">{t}</span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right: Media & Deep Dive */}
          <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32 mt-12 lg:mt-0">

            {/* Main Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative w-full aspect-video lg:aspect-[4/3] bg-[#111] overflow-hidden rounded-sm"
            >
              <Image
                src={(project as any).gallery?.[0] || project.image}
                alt="Hero Detail"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* STORYLINE: The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-3xl lg:text-5xl font-display uppercase">The Challenge</h3>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-sans max-w-2xl">
                {(project as any).challenge || "Every project begins with a problem. Our goal was to identify the core friction points in the user journey and resolve them through intuitive design and robust engineering."}
              </p>
            </motion.div>

            {/* Gallery Image 1 (Secondary) */}
            {(project as any).gallery && (project as any).gallery[1] && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-video bg-[#111] overflow-hidden rounded-sm"
              >
                <Image
                  src={(project as any).gallery[1]}
                  alt="Secondary View"
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}

            {/* STORYLINE: The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-3xl lg:text-5xl font-display uppercase text-[#E2E1DF]">The Solution</h3>
              <p className="text-lg lg:text-xl text-white/60 leading-relaxed font-sans max-w-2xl">
                {(project as any).solution || "We crafted a solution that merges style with substance. By leveraging modern frameworks and improved data architecture, we delivered a product that is fast, scalable, and a joy to use."}
              </p>
            </motion.div>

            {/* Gallery Image 2 (Detail) - Optional */}
            {(project as any).gallery && (project as any).gallery[0] && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-[16/10] bg-[#111] overflow-hidden rounded-sm"
              >
                <Image
                  src={(project as any).gallery[0]}
                  alt="Detail View"
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}

          </div>

        </div>

        {/* Next Project / Footer Area */}
        <div className="border-t border-white/10 pt-24 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4 block">Next Case Study</span>
          {/* Simple logical next project could go here */}
          <Link href="/#projects" className="text-4xl lg:text-6xl font-display uppercase hover:text-[#E2E1DF] transition-colors">
            View All Work
          </Link>
        </div>

      </main>

      <Contact />
      <Footer />
    </div>
  );
}