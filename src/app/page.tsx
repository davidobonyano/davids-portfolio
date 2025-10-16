"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import MainPortfolio from "@/components/MainPortfolio";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false);

  // Disable page scroll while splash screen is visible
  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const body = document.body;

    if (!splashDone) {
      const prevHtmlOverflow = html.style.overflow;
      const prevBodyOverflow = body.style.overflow;

      html.style.overflow = "hidden";
      body.style.overflow = "hidden";

      return () => {
        html.style.overflow = prevHtmlOverflow;
        body.style.overflow = prevBodyOverflow;
      };
    }
  }, [splashDone]);

  return (
    <ErrorBoundary>
      {/* Keep main content mounted underneath to avoid flash */}
      <div className="relative min-h-screen">
        {/* Main content layer */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          <MainPortfolio />
        </motion.div>

        {/* Splash overlay layer */}
        {!splashDone && (
          <div className="fixed inset-0 z-50">
            <SplashScreen onFinish={() => setSplashDone(true)} />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
