"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const technologies = [
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
];

const TechTicker = () => {
    return (
        <div className="w-full overflow-hidden py-12">
            <motion.div
                className="flex items-center gap-24 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {[...technologies, ...technologies].map((tech, i) => (
                    <div key={`${tech.name}-${i}`} className="flex items-center gap-6 group">
                        <div className="relative w-12 h-12 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <span className="text-sm font-sans font-black uppercase tracking-[0.2em] text-dark-text">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


const About = () => {
    return (
        <section id="about" className="relative py-20 lg:py-56 bg-medium-gray text-dark-text border-t border-dark-text/10 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 mb-0 lg:mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Heading & Philosophy */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-dark-text" />
                                <span className="text-[10px] uppercase tracking-[0.5em] text-dark-text font-black">THE STUDIO</span>
                                <div className="h-[1px] w-16 bg-dark-text/20" />
                            </div>
                            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-display uppercase leading-[0.8] tracking-tighter">
                                <span className="block">Engineering</span>
                                <span className="block opacity-30 italic">Perspective</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 lg:mt-16 text-dark-text">
                            <p className="text-xl lg:text-3xl font-sans leading-[1.1] tracking-tight text-balance">
                                Based in Nigeria and working globally, I approach every project with a blend of engineering precision and creative intuition.
                            </p>
                            <div className="flex flex-col gap-8 self-end">
                                <p className="text-sm font-black leading-relaxed font-sans max-w-[320px]">
                                    With over 4 years of experience shipping production-grade applications, I specialize in the React/Next.js ecosystem, cloud architecture, and high-performance UI interactions.
                                </p>

                                {/* CV / Resume Button */}
                                <div>
                                    <a
                                        href="/david-cv.pdf"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.5em] text-dark-text hover:opacity-60 transition-colors group cursor-pointer border-b border-dark-text/20 pb-2"
                                    >
                                        <span>VIEW RESUME</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Profile Image & Capabilities */}
                    <div className="lg:col-span-4 flex flex-col items-center justify-center bg-dark-text/[0.05] border border-dark-text/10 rounded-[32px] lg:rounded-[40px] p-8 lg:p-12 overflow-hidden relative">
                        {/* Profile Image - Moved Here */}
                        <div className="mb-12 flex flex-col items-center gap-4 relative z-10 w-full">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-dark-text/10 filter grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="/david-photo.jpeg"
                                    alt="David Obonyano"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-handwriting text-2xl text-dark-text/60">David O.</span>
                        </div>

                        <div className="relative z-10 w-full">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-dark-text/40 font-black mb-8 block text-center">Capabilities</span>

                            <div className="flex flex-col gap-6">
                                {[
                                    { title: "Web Development", desc: "Next.js, React, TypeScript, Node.js" },
                                    { title: "UI/UX Engineering", desc: "Framer Motion, GSAP, Tailwind CSS" },
                                    { title: "Backend Systems", desc: "Supabase, Docker, Go, Python" },
                                ].map((item, i) => (
                                    <div key={i} className="group flex flex-col gap-1 text-center">
                                        <h3 className="text-lg font-display uppercase tracking-tight text-dark-text">{item.title}</h3>
                                        <span className="text-[10px] font-sans font-black text-dark-text/40 tracking-wider uppercase">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Aesthetic Overlays */}
                        <div className="absolute top-0 right-0 p-8">
                            <div className="w-2 h-2 rounded-full bg-dark-text/40" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Tech Ticker */}
            <div className="w-full">
                <TechTicker />
            </div>
        </section>
    );
};

export default About;
