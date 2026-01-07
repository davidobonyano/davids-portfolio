"use client";

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WorkShowcase from './WorkShowcase';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Feedback from './Feedback';

export default function MainPortfolio() {
  return (
    <div className="min-h-screen bg-black text-[#E2E1DF]">
      <Navbar />
      <Hero />
      <About />
      <WorkShowcase />
      <Testimonials />

      {/* 
        NOTE: Ideally we would refactor Contact/Footer to match the new design system fully.
        For now, they will inherit the global font changes.
      */}
      <Contact />
      <Footer />
      <Feedback />
    </div>
  );
}
