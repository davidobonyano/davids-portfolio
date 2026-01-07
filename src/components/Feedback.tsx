"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';

export default function Feedback() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    // Use ref to track if we've already triggered it once to prevent re-opening on scroll
    const hasTriggered = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            // If already triggered (opened once), don't check anymore
            if (hasTriggered.current) return;

            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                // Show when the bottom of projects section is entering the view or user has scrolled past it
                if (rect.bottom < window.innerHeight) {
                    hasTriggered.current = true;
                    setIsOpen(true);
                }
            } else {
                // Fallback: Show after scrolling 70% of the page
                const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
                if (scrollPercentage > 0.7) {
                    hasTriggered.current = true;
                    setIsOpen(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Check initially
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleVote = (vote: 'yes' | 'no') => {
        setHasVoted(true);

        const serviceId = 'service_573veza';
        const templateId = 'template_2qsawal';
        const publicKey = '6Q4DdR03xq4twi3Nj';

        // Fire and forget email, don't wait for it
        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: 'Portfolio Visitor',
                from_email: 'feedback@portfolio.com',
                subject: 'Portfolio Feedback',
                message: `User voted: ${vote.toUpperCase()} to "Do you like this portfolio?"`,
                to_name: 'David Obonyano'
            },
            publicKey
        ).catch(error => console.error('Error sending feedback:', error));

        // Close strictly after 4 seconds
        setTimeout(() => {
            setIsOpen(false);
        }, 4000);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2"
            >
                {/* Close Button */}
                {!hasVoted && (
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/40 hover:text-white mb-1 mr-1"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                )}

                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs">
                    {!hasVoted ? (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#E2E1DF]/10 flex items-center justify-center text-[#E2E1DF]">
                                    <FontAwesomeIcon icon={faHeart} className="text-sm" />
                                </div>
                                <span className="font-sans text-sm font-medium text-white">Do you like this portfolio?</span>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleVote('yes')}
                                    className="flex-1 py-2 px-4 bg-[#E2E1DF] hover:bg-white text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => handleVote('no')}
                                    className="flex-1 py-2 px-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors border border-white/10"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center gap-2 text-center py-2"
                        >
                            <span className="text-xl">🎉</span>
                            <span className="text-sm font-medium text-white">Thanks for your feedback!</span>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
