import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Video, Lock, Zap, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <header className="relative bg-gradient-to-r from-brand-blue-600 via-brand-blue-700 to-brand-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left column: copy */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Turn any projector into a smart classroom with <span className="text-brand-orange-300">ClassNova</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-lg sm:text-xl text-blue-50/90 max-w-xl leading-relaxed font-medium"
          >
            Affordable hardware + powerful local AI — whiteboarding, recording, class management, and cloud sync — all designed for low-resource classrooms and teachers who want simplicity with control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-bold bg-white text-brand-blue-700 hover:bg-blue-50 hover:text-brand-blue-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Get ClassNova
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg font-bold border-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 rounded-2xl transition-all bg-transparent"
            >
              Learn more
              <Play className="ml-2 h-5 w-5 fill-current" />
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl text-sm font-medium text-blue-100"
          >
            <li className="flex items-center gap-2">
              <Presentation className="w-4 h-4 text-brand-orange-300" />
              Whiteboard
            </li>
            <li className="flex items-center gap-2">
              <Video className="w-4 h-4 text-brand-orange-300" />
              Screen recording
            </li>
            <li className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-orange-300" />
              Local-first AI
            </li>
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-orange-300" />
              Low-cost deployment
            </li>
          </motion.ul>
        </div>

        {/* Right column: device mockup */}
        <div className="relative flex justify-center lg:justify-end perspective-1000">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, rotateY: 10 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md lg:max-w-lg bg-white/10 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl border border-white/20 ring-1 ring-white/10"
          >
            {/* Simple projector + screen mockup */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-white/10">
              <div className="p-6 bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 text-white relative overflow-hidden">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

                <div className="h-44 sm:h-56 bg-slate-950/80 backdrop-blur rounded-xl flex items-center justify-center border border-white/10 shadow-inner relative z-10">
                  <div className="text-center px-4">
                    <div className="font-bold text-xl tracking-tight">ClassNova Smart Board</div>
                    <div className="text-sm mt-2 text-blue-200 font-medium">Live whiteboard • Recordings • Teacher controls</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-medium text-blue-100 relative z-10">
                  <div className="bg-white/10 rounded-lg p-2 text-center hover:bg-white/20 transition-colors cursor-default border border-white/5">Notes</div>
                  <div className="bg-white/10 rounded-lg p-2 text-center hover:bg-white/20 transition-colors cursor-default border border-white/5">Gallery</div>
                  <div className="bg-white/10 rounded-lg p-2 text-center hover:bg-white/20 transition-colors cursor-default border border-white/5">Cloud</div>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-blue-200 font-medium bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Connected • Local AI
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full border border-white/10">Version 1.0</div>
              </div>
            </div>
          </motion.div>

          {/* decorative floating badge */}
          <motion.div
            initial={{ x: 30, y: -30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-6 left-6 bg-brand-orange-400 text-white px-4 py-2 rounded-full font-bold shadow-lg border-2 border-white/20 flex items-center gap-2"
          >
            <span className="bg-white text-brand-orange-500 text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider">New</span>
            Classroom Edition
          </motion.div>
        </div>
      </div>

      {/* subtle wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white opacity-10"></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440 120 L0 120 Z" fill="white" />
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
