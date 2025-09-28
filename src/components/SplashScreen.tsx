"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [starPositions, setStarPositions] = useState<Array<{x: number, y: number}>>([]);

  const name = "David Obonyano";
  const letters = name.split("");

  // Set star positions after component mounts
  useEffect(() => {
    const positions = [...Array(50)].map(() => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
    }));
    setStarPositions(positions);
  }, []);

  useEffect(() => {
    // Calculate total animation time: 0.8s (dot delay) + 14 letters * 0.15s + 0.4s (last letter duration) + 0.5s buffer + 1s extra
    const totalAnimationTime = 0.8 + (letters.length * 0.15) + 0.4 + 0.5 + 1;
    
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, totalAnimationTime * 1000); // Dynamic splash time based on animation + 1s extra

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, (totalAnimationTime * 10)); // Update every 10% of total time

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onFinish, letters.length]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated background stars */}
          <div className="absolute inset-0 overflow-hidden">
            {starPositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                initial={{
                  x: pos.x,
                  y: pos.y,
                  opacity: 0
                }}
                animate={{
                  y: [pos.y, pos.y - 200],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3
                }}
              />
            ))}
            {/* Additional smaller stars */}
            {starPositions.slice(0, 30).map((pos, i) => (
              <motion.div
                key={`small-${i}`}
                className="absolute w-0.5 h-0.5 bg-blue-400/40 rounded-full"
                initial={{
                  x: pos.x + Math.random() * 100 - 50,
                  y: pos.y + Math.random() * 100 - 50,
                  opacity: 0
                }}
                animate={{
                  y: [pos.y, pos.y - 150],
                  opacity: [0, 0.8, 0],
                  scale: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 4
                }}
              />
            ))}
          </div>

          {/* Main content container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Text and dot container - centered */}
            <div className="relative flex items-center justify-center mb-8 w-full">
              {/* Hidden text to measure natural spacing */}
              <div className="text-white text-3xl sm:text-4xl md:text-5xl font-black opacity-0 absolute" style={{ fontFamily: "var(--font-inter)" }}>
                David Obonyano
              </div>
              
              {/* Dot that moves right as each letter appears */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -120 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: 250 // Move further to the end of the text with more space
                }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2,
                  x: {
                    duration: 3.5, // Longer duration to match letter animation
                    delay: 0.8,
                    ease: "easeOut"
                  }
                }}
                className="absolute w-4 h-4 bg-white rounded-full z-10"
                style={{ 
                  color: "#ffffff",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)",
                  filter: "blur(0.5px)"
                }}
              />
              
              {/* Text that gets revealed letter by letter with natural spacing */}
              <div className="flex items-center justify-center">
                {letters.map((letter, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{ 
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{ 
                        opacity: 1,
                        scale: 1
                      }}
                      transition={{ 
                        delay: 0.8 + (index * 0.15), // Start after dot appears
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="text-white text-3xl sm:text-4xl md:text-5xl font-black"
                      style={{ 
                        color: "#ffffff",
                        fontFamily: "var(--font-inter)",
                        textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                        letterSpacing: "0.02em" // Slight natural letter spacing
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
