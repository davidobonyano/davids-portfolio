"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';

export default function Feedback() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const triggerRef = useRef(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const testimonialSection = document.getElementById('testimonials');
            if (testimonialSection) {
                const rect = testimonialSection.getBoundingClientRect();
                // Show when the bottom of testimonials section has passed (user is moving into contact)
                const isPastTestimonials = rect.bottom < window.innerHeight;

                if (isPastTestimonials && !triggerRef.current && !hasVoted) {
                    triggerRef.current = true;
                    setIsVisible(true);
                    setTimeLeft(10);
                } else if (!isPastTestimonials && triggerRef.current) {
                    // Reset trigger when scrolling back up so it can re-appear when scrolling down again
                    triggerRef.current = false;
                    setIsVisible(false);
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasVoted]);

    // Timer Logic
    useEffect(() => {
        if (isVisible && !hasVoted && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsVisible(false);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isVisible, hasVoted, timeLeft]);

    const handleVote = (vote: 'yes' | 'no') => {
        setHasVoted(true);
        if (timerRef.current) clearInterval(timerRef.current);

        const serviceId = 'service_573veza';
        const templateId = 'template_2qsawal';
        const publicKey = '6Q4DdR03xq4twi3Nj';

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

        // Close after 3 seconds showing the thanks message
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2"
                >
                    <div className="bg-[#0A0A0A] border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-xl max-w-[280px] relative overflow-hidden group">

                        {/* Timer Progress Bar */}
                        {!hasVoted && (
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 10, ease: "linear" }}
                                className="absolute bottom-0 left-0 h-1 bg-[#E2E1DF]/30"
                            />
                        )}

                        {/* Close Button */}
                        {!hasVoted && (
                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute top-3 right-3 text-white/20 hover:text-white transition-colors"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-xs" />
                            </button>
                        )}

                        {!hasVoted ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#E2E1DF]/5 flex items-center justify-center text-[#E2E1DF] shrink-0 border border-white/5">
                                        <FontAwesomeIcon icon={faHeart} className="text-sm animate-pulse" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-sans text-[13px] font-bold text-white leading-tight">Quick Check</span>
                                        <span className="font-sans text-[11px] text-white/50 lowercase tracking-tight">Do you like the portfolio?</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 relative z-10">
                                    <button
                                        onClick={() => handleVote('yes')}
                                        className="flex-1 py-2.5 px-4 bg-[#E2E1DF] hover:bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-lg transition-all active:scale-95"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => handleVote('no')}
                                        className="flex-1 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-lg transition-all border border-white/10 active:scale-95"
                                    >
                                        No
                                    </button>
                                </div>

                                <div className="flex items-center justify-center gap-2 pt-1 opacity-40">
                                    <FontAwesomeIcon icon={faHourglassHalf} className="text-[10px]" />
                                    <span className="text-[9px] font-mono tracking-tighter uppercase font-bold">{timeLeft}s remaining</span>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-2 text-center py-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-1">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <span className="text-[14px] font-display uppercase tracking-wider text-white">Appreciated!</span>
                                <span className="text-[10px] font-sans text-white/40 uppercase tracking-[0.1em]">Your vote was cast.</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
