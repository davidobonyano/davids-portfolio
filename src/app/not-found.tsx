"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#33373A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="text-[12rem] lg:text-[16rem] font-display font-bold tracking-tighter text-[#E2E1DF] leading-none">
            404
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-32 bg-[#E2E1DF] mx-auto"
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-display uppercase tracking-tight text-[#E2E1DF] mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-white/60 font-sans leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-12 py-5 bg-[#E2E1DF] text-black font-display uppercase tracking-widest hover:text-[#E2E1DF] transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10">Return Home</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 bg-[#33373A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-mono uppercase tracking-widest"
        >
          <Link href="/#projects" className="text-white/40 hover:text-[#E2E1DF] transition-colors">
            View Projects
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/#contact" className="text-white/40 hover:text-[#E2E1DF] transition-colors">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
