"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import ServicesGrid from "@/src/components/ServicesGrid";
import Contact from "../src/components/Contact";

const PerformanceCharts = dynamic(() => import('@/src/components/PerformanceCharts'), { ssr: false });

export default function Home() {
  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative min-h-screen flex flex-col pt-32 bg-[#030303] overflow-x-hidden font-sans selection:bg-white/20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-[120px] rounded-full opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 -left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-900/20 to-transparent blur-[120px] rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 -right-[20%] w-[600px] h-[600px] bg-gradient-to-tl from-slate-900/30 to-transparent blur-[120px] rounded-full opacity-50 pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Agency Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">NexGen Builds</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="font-jakarta text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-8 leading-[1.1] pb-2">
          Data. Automation. <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
            Web.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="max-w-2xl text-lg sm:text-xl text-gray-400 mb-12 font-light leading-relaxed">
          Elite Data Scraping, Python Automation, and Custom Web Solutions designed to future-proof your enterprise.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="https://hub.nexgenbuilds.tech/welcome"
              className="group relative flex items-center justify-center gap-3 h-14 w-full px-8 rounded-full bg-white text-black font-semibold shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] active:scale-95 transition-all duration-300"
            >
              Access Client Hub
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="https://wa.me/923345678101"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 w-full px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 backdrop-blur-md active:scale-95 transition-all duration-300"
            >
              WhatsApp Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Data Visualization Section */}
        <motion.div variants={itemVariants} className="w-full py-20">
          <PerformanceCharts />
        </motion.div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className="w-full">
          <ServicesGrid />
          <Contact />
        </motion.div>
      </motion.main>
    </div>
  );
}
