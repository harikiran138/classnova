import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Presentation, Video, Lock, Zap, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Subtle parallax for the visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 30 });

  return (
    <header
      ref={ref}
      className="relative min-h-[100vh] flex items-center bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Abstract Background Shapes - Cleaner & Lighter */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-blue-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-orange-50 rounded-full blur-[80px] opacity-60 -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="section-shell pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: Content */}
        <motion.div
          style={{ y, opacity }}
          className="space-y-8 max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-600"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-brand-blue-700 uppercase">
              Classroom OS v2.0
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8"
            >
              Smart Classrooms for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-orange-600">
                ₹12,000.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              ClassNova transforms any ordinary projector into an advanced interactive smart classroom. Designed for <span className="font-bold text-slate-900">Colleges, Schools, and NGOs</span> to modernize education instantly.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-base font-bold bg-brand-orange-500 hover:bg-brand-orange-600 text-white rounded-xl shadow-lg shadow-brand-orange-500/20 transition-all hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base font-bold border-2 border-slate-200 text-slate-700 hover:border-brand-blue-200 hover:bg-brand-blue-50 hover:text-brand-blue-700 rounded-xl transition-all"
            >
              Watch Demo
              <Play className="ml-2 h-4 w-4 fill-current" />
            </Button>
          </motion.div>

          {/* Trust/Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 flex flex-col sm:flex-row gap-6 text-sm font-medium text-slate-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-blue-600" />
              <span>Works with any projector</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-blue-600" />
              <span>Setup in 10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-blue-600" />
              <span>Lifetime updates</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Clean 3D Visual */}
        <div className="relative perspective-1000 h-[500px] flex items-center justify-center lg:justify-end">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ scale: 0.9, opacity: 0, rotateY: -10 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative w-full max-w-[550px] aspect-[16/10]"
          >
            {/* Main Device Frame - Clean & White */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              {/* Header Bar */}
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>

              {/* Screen Content */}
              <div className="p-6 h-full bg-slate-50/50 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

                <div className="grid grid-cols-12 gap-4 h-full pb-8">
                  {/* Sidebar Mockup */}
                  <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 p-3 space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue-100 flex items-center justify-center">
                      <Presentation className="w-4 h-4 text-brand-blue-600" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      <Video className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Main Canvas Mockup */}
                  <div className="col-span-9 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Connected
                      </div>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 flex items-center justify-center shadow-lg shadow-brand-blue-500/20 mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Ready to Teach</h3>
                    <p className="text-sm text-slate-500 mt-1">Projector detected. AI Engine active.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              style={{ translateZ: 40 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-orange-50 flex items-center justify-center">
                <Video className="w-5 h-5 text-brand-orange-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recording</div>
                <div className="text-sm font-bold text-slate-900">Active • 04:20</div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              style={{ translateZ: 30 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue-50 flex items-center justify-center">
                <Lock className="w-5 h-5 text-brand-blue-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Privacy</div>
                <div className="text-sm font-bold text-slate-900">Local-Only</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
