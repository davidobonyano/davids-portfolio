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
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      {splashDone && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <MainPortfolio />
        </motion.div>
      )}
    </ErrorBoundary>
  );
}
