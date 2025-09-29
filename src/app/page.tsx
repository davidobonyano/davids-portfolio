"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import MainPortfolio from "@/components/MainPortfolio";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function HomePage() {
  const [splashDone, setSplashDone] = useState(false);

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
