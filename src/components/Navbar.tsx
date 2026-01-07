"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const menuItems = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" }
    ];

    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                when: "beforeChildren",
                staggerChildren: 0.08
            }
        },
        exit: {
            opacity: 0,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                when: "afterChildren",
                staggerChildren: 0.04,
                staggerDirection: -1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                    className="fixed inset-0 z-[200] bg-black bg-grid flex flex-col p-8 lg:hidden"
                >
                    {/* Header inside Menu */}
                    <div className="flex justify-between items-center mb-24">
                        <span className="font-display font-bold text-xl tracking-tighter text-[#E2E1DF]">CAPTAIN DAVE</span>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex flex-col justify-center items-center gap-2"
                        >
                            <motion.span
                                animate={{ rotate: 45, y: 5 }}
                                className="w-8 h-0.5 bg-white"
                            />
                            <motion.span
                                animate={{ rotate: -45, y: -5 }}
                                className="w-8 h-0.5 bg-white"
                            />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-6 flex-1 justify-center">
                        {menuItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                variants={itemVariants}
                                className="text-5xl font-display uppercase tracking-tighter text-[#E2E1DF] hover:text-white transition-all duration-300"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="/david-cv.pdf"
                            target="_blank"
                            variants={itemVariants}
                            className="text-5xl font-display uppercase tracking-tighter text-[#E2E1DF] hover:text-white transition-all duration-300 mt-4"
                        >
                            View CV
                        </motion.a>
                    </div>

                    {/* Footer inside Menu */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col gap-6 pt-12 border-t border-white/5"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-sans">Contact</span>
                            <a href="mailto:davidobonyanoefe@gmail.com" className="text-sm font-sans text-white/60">davidobonyanoefe@gmail.com</a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const NavLink = ({ item, href, active }: { item: string; href: string; active?: boolean }) => {
    return (
        <a
            href={href}
            className={`group flex items-center gap-2 transition-colors duration-300 ${active ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
        >
            <span
                className={`font-mono text-[14px] transition-all duration-300 ${active
                    ? 'opacity-100 translate-x-0 text-[#E2E1DF]'
                    : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-white/40'
                    }`}
            >
                [
            </span>

            <span className="font-mono text-[13px] tracking-wider uppercase">
                {item}
            </span>

            <span
                className={`font-mono text-[14px] transition-all duration-300 ${active
                    ? 'opacity-100 translate-x-0 text-[#E2E1DF]'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-white/40'
                    }`}
            >
                ]
            </span>
        </a>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["home", "about", "projects", "contact"];
            const scrollPos = window.scrollY + 100;

            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const desktopLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex justify-between items-center">
                    <a href="/#home" className="hover:opacity-70 transition-opacity flex items-center gap-1">
                        <span className="font-display font-bold text-2xl tracking-tighter text-[#E2E1DF]">CAPTAIN</span>
                        <span className="font-display font-bold text-2xl tracking-tighter text-[#888]">DAVE</span>
                        <div className="w-2 h-2 rounded-full bg-[#E2E1DF] mt-1" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10 bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
                        {desktopLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                item={link.name}
                                href={link.href}
                                active={activeSection === link.name}
                            />
                        ))}
                    </div>

                    {/* Right Side - CV Button */}
                    <div className="hidden lg:block">
                        <a
                            href="/david-cv.pdf"
                            target="_blank"
                            className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-black transition-colors border border-white/10 px-4 py-2 rounded hover:bg-[#E2E1DF] hover:border-[#E2E1DF]"
                        >
                            View CV
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                    >
                        <span className="w-8 h-0.5 bg-white opacity-80" />
                        <span className="w-6 h-0.5 bg-white opacity-80 ml-auto" />
                        <span className="w-8 h-0.5 bg-white opacity-80" />
                    </button>
                </div>
            </motion.nav>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;
