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
        <div className="w-full overflow-hidden py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <motion.div
                className="flex items-center gap-16 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {[...technologies, ...technologies].map((tech, i) => (
                    <div key={`${tech.name}-${i}`} className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="relative w-12 h-12">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <span className="text-sm font-mono uppercase tracking-widest text-white/60">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


const About = () => {
    return (
        <section id="about" className="relative py-24 lg:py-40 bg-black text-[#E2E1DF] border-t border-white/5 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-6 lg:px-16 mb-0 lg:mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Heading & Philosophy */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-6">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-[#E2E1DF] font-medium">[ STUDIO ]</span>
                                <div className="h-[1px] w-16 bg-[#E2E1DF]/30" />
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-display uppercase leading-tight tracking-tighter">
                                Engineering <br /> <span className="opacity-30 italic">Perspective</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-8">
                            <p className="text-lg lg:text-xl font-sans text-white/60 leading-relaxed max-w-[600px]">
                                Based in Nigeria and working with clients globally, I approach every project with a blend of engineering precision and creative intuition. My goal isn't just to write code, but to build digital ecosystems that scale, perform, and delight.
                            </p>
                            <p className="text-base font-sans text-white/40 leading-relaxed max-w-[600px]">
                                With over 4 years of experience shipping production-grade applications, I specialize in the React/Next.js ecosystem, cloud architecture, and high-performance UI interactions. I believe the best software feels invisible—it just works.
                            </p>

                            {/* CV / Resume Button */}
                            <div>
                                <a
                                    href="/david-cv.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#E2E1DF] hover:text-white transition-colors group cursor-pointer"
                                >
                                    <span>[ View CV ]</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Profile Image & Capabilities */}
                    <div className="lg:col-span-4 flex flex-col border-l border-white/10 pl-0 lg:pl-16 pt-8 lg:pt-0">
                        {/* Profile Image - Moved Here */}
                        <div className="mb-12 flex flex-col items-start gap-4">
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 filter grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="/david-photo.jpeg"
                                    alt="David Obonyano"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="font-handwriting text-2xl text-white/60">David O.</span>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono mb-8 block">Capabilities</span>

                        <div className="flex flex-col gap-8">
                            {[
                                { title: "Web Development", desc: "Next.js, React, TypeScript, Node.js" },
                                { title: "UI/UX Engineering", desc: "Framer Motion, GSAP, Tailwind CSS" },
                                { title: "Backend Architecture", desc: "Supabase, Postgres, Docker, Go, Python, Mongo, Express" },
                                { title: "Product Strategy", desc: "Technical Planning, MVP Development" }
                            ].map((item, i) => (
                                <div key={i} className="group flex flex-col gap-2 cursor-default">
                                    <h3 className="text-2xl font-display uppercase tracking-tight text-[#E2E1DF] group-hover:text-white transition-colors">{item.title}</h3>
                                    <span className="text-xs font-mono text-white/40 tracking-wider">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Tech Ticker - Unified Horizontal Scroll for ALL Screens */}
            <div className="w-full">
                <TechTicker />
            </div>

        </section>
    );
};

export default About;
