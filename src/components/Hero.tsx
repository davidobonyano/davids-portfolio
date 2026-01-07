"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrambleText from './ScrambleText';

const VerticalCharacterStack = ({ char, delay }: { char: string; delay: number }) => {
    return (
        <div className="relative overflow-hidden h-full inline-flex flex-col">
            <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                    delay: delay,
                    repeat: Infinity,
                    repeatDelay: 5,
                    repeatType: "loop"
                }}
                className="inline-block text-[#E2E1DF] absolute top-full leading-[0.85]"
            >
                {char}
            </motion.span>
            <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                    delay: delay
                }}
                className="inline-block text-[#E2E1DF] leading-[0.85]"
            >
                {char}
            </motion.span>
        </div>
    );
};

const ExperienceTicker = () => {
    return (
        <div className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 h-[300px] lg:h-[400px] overflow-hidden hidden md:block select-none pointer-events-none mix-blend-overlay opacity-30">
            <div className="vertical-rl transform rotate-180 flex items-center gap-4">
                <div className="ticker-column">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-sans whitespace-nowrap py-12">
                        Full Stack Engineer • Creative Developer • UI/UX Designer •
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-sans whitespace-nowrap py-12">
                        Full Stack Engineer • Creative Developer • UI/UX Designer •
                    </span>
                </div>
            </div>
        </div>
    );
};


const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const nameParts = ["DAVID", "OBONYANO"];

    return (
        <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col justify-center bg-black text-[#E2E1DF] selection:bg-[#9EFF00] selection:text-black overflow-hidden px-4 sm:px-6 lg:px-7">

            {/* Background Gradient Mesh (Subtle) */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0" />
            <div className="absolute top-[-20%] right-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-[#9EFF00]/5 blur-[120px] lg:blur-[150px] rounded-full pointer-events-none z-0" />

            {/* Left Vertical Ticker */}
            <ExperienceTicker />

            {/* Main Layout Content */}
            <div className="relative z-30 w-full max-w-[1400px] mx-auto flex flex-col">

                {/* Core Responsive Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-x-12 lg:gap-16 gap-y-12 lg:gap-y-16 pl-0 lg:pl-10">

                    {/* 1. Branding - LARGE STACK (Adjusted Size - FORCED 2 LINES) */}
                    <div className="xl:col-span-2 order-1 uppercase flex flex-col gap-0 tracking-tighter select-none w-full">
                        {/* Line 1: DAVID */}
                        <div className="flex flex-nowrap items-end gap-x-1 sm:gap-x-2 h-[10vw] sm:h-[9vw] lg:h-[5.5rem] w-full">
                            {nameParts[0].split("").map((char, i) => (
                                <div key={`p1-${i}`} className="text-[10vw] sm:text-[9vw] lg:text-[6rem] font-display font-bold leading-[0.8] tracking-[-0.05em]">
                                    <VerticalCharacterStack char={char} delay={0.1 + i * 0.04} />
                                </div>
                            ))}
                        </div>
                        {/* Line 2: OBONYANO - Forced Break */}
                        <div className="flex flex-nowrap items-end gap-x-1 sm:gap-x-2 mt-2 sm:mt-3 lg:-mt-4 h-[10vw] sm:h-[9vw] lg:h-[5.5rem] w-full">
                            {nameParts[1].split("").map((char, i) => (
                                <div key={`p2-${i}`} className="text-[10vw] sm:text-[9vw] lg:text-[6rem] font-display font-bold leading-[0.8] tracking-[-0.05em]">
                                    <VerticalCharacterStack key={`p2-${i}`} char={char} delay={0.4 + i * 0.04} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Bio - Moved to LEFT (Order 2) under name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="xl:col-span-2 order-3 xl:order-2 mt-8 lg:mt-12 max-w-[480px]"
                    >
                        <p className="text-base sm:text-lg lg:text-[16px] font-sans leading-relaxed tracking-tight text-[#E2E1DF]/80">
                            <ScrambleText
                                text="Full-stack engineer focused on performance, interactivity, and high-end aesthetics. I build digital experiences that are fast, accessible, and visually stunning."
                                delay={1500}
                                speed={30}
                            />
                        </p>
                    </motion.div>

                    {/* 3. Awards & Info - Moved to RIGHT (Order 3) */}
                    <div className="xl:col-span-2 xl:col-start-3 order-2 xl:order-3 flex flex-row gap-8 lg:gap-16 lg:mt-0 items-start xl:pl-12 xl:justify-end">

                        {/* Status Cluster */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-col gap-1.5"
                        >
                            <span className="text-[10px] sm:text-[13px] uppercase tracking-[0.25em] font-medium text-[#E2E1DF]">Recognition</span>
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-sans text-[#E2E1DF]/60">3x Hackathon Winner</span>
                        </motion.div>

                        {/* Expertise List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="flex-1"
                        >
                            <ul className="flex flex-col gap-2 sm:gap-3">
                                {["Full Stack", "Creative Dev", "UI/UX Design", "Performance"].map((service) => (
                                    <li key={service} className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-[#E2E1DF] list-none">
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hero;
