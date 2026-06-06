/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Palette, 
  Briefcase, 
  ChevronRight,
  Database,
  BrainCircuit,
  Eye,
  MessageSquare,
  Compass,
  Video,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Megaphone
} from "lucide-react";

// Helper component to render specific logos/icons for apps and languages
function SkillIcon({ skill }: { skill: string }) {
  const iconClass = "w-4 h-4 shrink-0 transition-transform duration-300 group-hover/tag:scale-110";
  switch (skill) {
    case "Python":
      return (
        <svg viewBox="0 0 110 110" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.3 0.1C23.9 0.1 26.2 12.3 26.2 12.3L26.3 25.1H52.9V28.8H15.6C15.6 28.8 0 26.9 0 55.4C0 83.9 13.6 81.3 13.6 81.3L24.3 81.4V66.2C24.3 66.2 23.6 48.6 41.1 48.6H67.8C67.8 48.6 83.4 48.2 83.4 31.9V13.8C83.4 13.8 86.8 0.1 52.3 0.1Z" fill="#3776AB" />
          <path d="M57.7 109.9C86.1 109.9 83.8 97.7 83.8 97.7L83.7 84.9H57.1V81.2H94.4C94.4 81.2 110 83.1 110 54.6C110 26.1 96.4 28.7 96.4 28.7L85.7 28.6V43.8C85.7 43.8 86.4 61.4 68.9 61.4H42.2C42.2 61.4 26.6 61.8 26.6 78.1V96.2C26.6 96.2 23.2 109.9 57.7 109.9Z" fill="#FFD343" />
          <circle cx="39.8" cy="13.9" r="4.2" fill="#EBF3F9" />
          <circle cx="70.2" cy="96.1" r="4.2" fill="#3776AB" />
        </svg>
      );
    case "SQL":
      return <Database className={`${iconClass} text-blue-500 dark:text-blue-400`} />;
    case "PyTorch":
      return (
        <svg viewBox="0 0 170 170" className={iconClass} xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M84.2 168.2C81.4 168.2 78.6 167.4 76.2 165.8C52.2 149.8 17 114 17 83.2C17 48.6 42.6 19.8 77.2 15C81.8 14.4 86.6 14.4 91.2 15C125.8 19.8 151.4 48.6 151.4 83.2C151.4 114 116.2 149.8 92.2 165.8C89.8 167.4 87 168.2 84.2 168.2Z" fill="#EE4C2C"/>
          <path d="M84.2 135C66.2 135 51.6 120.4 51.6 102.4C51.6 84.4 84.2 47.4 84.2 47.4C84.2 47.4 116.8 84.4 116.8 102.4C116.8 120.4 102.2 135 84.2 135Z" fill="white"/>
        </svg>
      );
    case "Deep Learning":
      return <BrainCircuit className={`${iconClass} text-purple-500 dark:text-purple-400`} />;
    case "NLP":
      return <MessageSquare className={`${iconClass} text-indigo-500 dark:text-indigo-400`} />;
    case "Computer Vision":
      return <Eye className={`${iconClass} text-amber-500 dark:text-amber-400`} />;
    case "UI/UX Principles":
      return <Compass className={`${iconClass} text-cyan-500 dark:text-cyan-400`} />;
    case "Figma":
      return (
        <svg viewBox="0 0 38 57" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0C13.75 0 9.5 4.25 9.5 9.5C9.5 14.75 13.75 19 19 19H28.5V9.5C28.5 4.25 24.25 0 19 0Z" fill="#F24E1E"/>
          <path d="M9.5 28.5C9.5 23.25 13.75 19 19 19H28.5V38H19C13.75 38 9.5 33.75 9.5 28.5Z" fill="#A259FF"/>
          <path d="M9.5 47.5C9.5 42.25 13.75 38 19 38V47.5C19 52.75 14.75 57 9.5 57C4.25 57 0 52.75 0 47.5C0 42.25 4.25 38 9.5 38Z" fill="#0ACF83"/>
          <path d="M19 19C13.75 19 9.5 23.25 9.5 28.5C9.5 33.75 13.75 38 19 38H28.5V19H19Z" fill="#1ABCFE"/>
          <path d="M28.5 38C33.75 38 38 33.75 38 28.5C38 23.25 33.75 19 28.5 19V38Z" fill="#FF7262"/>
        </svg>
      );
    case "Canva":
      return (
        <svg viewBox="0 0 100 100" className={iconClass} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="50%" stopColor="#7D2AE8" />
              <stop offset="100%" stopColor="#FF4F99" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#canvaGrad)" />
          <path d="M68 62 C 60 70, 40 70, 32 60 C 24 50, 24 35, 34 26 C 44 17, 58 22, 64 30 C 66 33, 63 35, 61 33 C 55 26, 44 23, 37 30 C 28 39, 29 52, 36 60 C 43 68, 59 66, 65 58 C 66 56, 69 57, 68 62 Z" fill="white" />
        </svg>
      );
    case "CapCut":
      return (
        <svg viewBox="0 0 100 100" className={iconClass} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="28" fill="#0f172a" />
          <path d="M30 30H45L60 50L45 70H30L45 50L30 30Z" fill="#00E5FF" />
          <path d="M70 70H55L40 50L55 30H70L55 50L70 70Z" fill="#FF007F" />
        </svg>
      );
    case "Multimedia Production":
      return <Video className={`${iconClass} text-rose-500 dark:text-rose-400`} />;
    case "Project Management":
      return <Calendar className={`${iconClass} text-teal-500 dark:text-teal-400`} />;
    case "KPI Evaluations":
      return <TrendingUp className={`${iconClass} text-amber-500 dark:text-amber-400`} />;
    case "Talent Development":
      return <Users className={`${iconClass} text-violet-500 dark:text-violet-400`} />;
    case "Strategic Planning":
      return <Target className={`${iconClass} text-red-500 dark:text-red-400`} />;
    case "Digital Advocacy":
      return <Megaphone className={`${iconClass} text-emerald-500 dark:text-emerald-400`} />;
    default:
      return <ChevronRight size={10} className="text-slate-400 dark:text-slate-500 shrink-0" />;
  }
}

export default function Competencies() {
  const [activeCat, setActiveCat] = useState("ai");

  const categories = [
    {
      key: "ai",
      title: "AI & Data",
      icon: <Brain className="text-purple-650 dark:text-purple-400 w-6 h-6" />,
      description: "Developing intelligent models, processing pipelines, and deployment architectures.",
      skills: ["Python", "SQL", "PyTorch", "Deep Learning", "NLP", "Computer Vision"],
      glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.15)] dark:shadow-[0_0_35px_rgba(168,85,247,0.2)]",
      borderColor: "border-purple-500/30",
      accentBg: "bg-purple-500/5 dark:bg-purple-500/10",
      accentBorder: "border-purple-500/20 dark:border-purple-500/20",
      tagHover: "hover:border-purple-500/30 dark:hover:border-purple-400/30 hover:bg-purple-500/10 dark:hover:bg-purple-400/10 hover:text-purple-700 dark:hover:text-purple-300"
    },
    {
      key: "design",
      title: "Design & Media",
      icon: <Palette className="text-cyan-600 dark:text-cyan-400 w-6 h-6" />,
      description: "Creating engaging digital visual identities, branding structures, and user experiences.",
      skills: ["UI/UX Principles", "Figma", "Canva", "CapCut", "Multimedia Production"],
      glowColor: "shadow-[0_0_35px_rgba(6,182,212,0.15)] dark:shadow-[0_0_35px_rgba(6,182,212,0.2)]",
      borderColor: "border-cyan-500/30",
      accentBg: "bg-cyan-500/5 dark:bg-cyan-500/10",
      accentBorder: "border-cyan-500/20 dark:border-cyan-500/20",
      tagHover: "hover:border-cyan-500/30 dark:hover:border-cyan-400/30 hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 hover:text-cyan-700 dark:hover:text-cyan-300"
    },
    {
      key: "leadership",
      title: "Leadership",
      icon: <Briefcase className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />,
      description: "Managing teams, operations, performance evaluation frameworks, and strategic planning.",
      skills: ["Project Management", "KPI Evaluations", "Talent Development", "Strategic Planning", "Digital Advocacy"],
      glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.15)] dark:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
      borderColor: "border-emerald-500/30",
      accentBg: "bg-emerald-500/5 dark:bg-emerald-500/10",
      accentBorder: "border-emerald-500/20 dark:border-emerald-500/20",
      tagHover: "hover:border-emerald-500/30 dark:hover:border-emerald-400/30 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 hover:text-emerald-700 dark:hover:text-emerald-300"
    }
  ];

  const currentCat = categories.find(c => c.key === activeCat) || categories[0];

  return (
    <section id="competencies" className="py-16 px-6 w-full max-w-6xl mx-auto relative">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-4"
        >
          Core Competencies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg transition-colors duration-300"
        >
          Key areas of expertise in artificial intelligence, layout design, and organizational leadership.
        </motion.p>
      </div>

      {/* Orbit System Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.85fr] gap-12 items-center w-full mt-12">
        
        {/* Left: Orbital Diagram Selector */}
        <div className="flex flex-col items-center justify-center relative w-full h-[320px] max-w-[320px] mx-auto select-none shrink-0">
          
          {/* Connection Lines & Rings SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
            {/* Orbital path ring */}
            <circle cx="150" cy="150" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-white/5" strokeDasharray="5 5" />
            
            {/* Connection lines from center to nodes */}
            {/* AI Node (purple line) */}
            <line x1="150" y1="150" x2="213" y2="87" stroke="currentColor" strokeWidth="1.5" className={activeCat === "ai" ? "text-purple-500" : "text-slate-200 dark:text-white/5"} strokeDasharray={activeCat === "ai" ? "none" : "3 3"} />
            {/* Design Node (cyan line) */}
            <line x1="150" y1="150" x2="60" y2="150" stroke="currentColor" strokeWidth="1.5" className={activeCat === "design" ? "text-cyan-500" : "text-slate-200 dark:text-white/5"} strokeDasharray={activeCat === "design" ? "none" : "3 3"} />
            {/* Leadership Node (emerald line) */}
            <line x1="150" y1="150" x2="213" y2="213" stroke="currentColor" strokeWidth="1.5" className={activeCat === "leadership" ? "text-emerald-500" : "text-slate-200 dark:text-white/5"} strokeDasharray={activeCat === "leadership" ? "none" : "3 3"} />
          </svg>

          {/* Central Core Orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-900 dark:bg-white border border-slate-250 dark:border-white/10 flex items-center justify-center shadow-lg z-10 p-2 overflow-hidden">
            <img src="/ttd.svg" alt="Signature" className="w-full h-full object-contain dark:invert transition-all duration-300" />
          </div>

          {/* Node 1: AI & Data (Top Right) */}
          <motion.button
            onClick={() => setActiveCat("ai")}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-[59px] right-[59px] w-14 h-14 rounded-full flex flex-col items-center justify-center border backdrop-blur-md transition-all duration-350 cursor-pointer ${
              activeCat === "ai"
                ? "bg-purple-500/10 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                : "bg-slate-200/40 dark:bg-slate-900/40 border-slate-250 dark:border-white/10 hover:border-purple-500/50"
            }`}
          >
            <Brain className={`w-5.5 h-5.5 ${activeCat === "ai" ? "text-purple-500" : "text-slate-600 dark:text-slate-400"}`} />
            <span className="text-[7.5px] uppercase font-mono tracking-wider font-bold mt-1 text-slate-500 dark:text-slate-400">AI</span>
          </motion.button>

          {/* Node 2: Design & Media (Middle Left) */}
          <motion.button
            onClick={() => setActiveCat("design")}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className={`absolute top-[122px] left-[32px] w-14 h-14 rounded-full flex flex-col items-center justify-center border backdrop-blur-md transition-all duration-350 cursor-pointer ${
              activeCat === "design"
                ? "bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                : "bg-slate-200/40 dark:bg-slate-900/40 border-slate-250 dark:border-white/10 hover:border-cyan-500/50"
            }`}
          >
            <Palette className={`w-5.5 h-5.5 ${activeCat === "design" ? "text-cyan-500" : "text-slate-600 dark:text-slate-400"}`} />
            <span className="text-[7.5px] uppercase font-mono tracking-wider font-bold mt-1 text-slate-500 dark:text-slate-400">Design</span>
          </motion.button>

          {/* Node 3: Leadership (Bottom Right) */}
          <motion.button
            onClick={() => setActiveCat("leadership")}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className={`absolute bottom-[59px] right-[59px] w-14 h-14 rounded-full flex flex-col items-center justify-center border backdrop-blur-md transition-all duration-350 cursor-pointer ${
              activeCat === "leadership"
                ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                : "bg-slate-200/40 dark:bg-slate-900/40 border-slate-250 dark:border-white/10 hover:border-emerald-500/50"
            }`}
          >
            <Briefcase className={`w-5.5 h-5.5 ${activeCat === "leadership" ? "text-emerald-500" : "text-slate-600 dark:text-slate-400"}`} />
            <span className="text-[7.5px] uppercase font-mono tracking-wider font-bold mt-1 text-slate-500 dark:text-slate-400">Lead</span>
          </motion.button>

        </div>

        {/* Right: Immersive Details Pane */}
        <div className="w-full relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCat.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className={`glass rounded-[2.5rem] p-6 md:p-8 border border-slate-200/50 dark:border-white/10 shadow-2xl flex flex-col justify-between text-left w-full h-full min-h-[260px] ${currentCat.glowColor} ${currentCat.borderColor}`}
            >
              
              {/* Content Panel */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${currentCat.accentBg} ${currentCat.accentBorder}`}>
                    {currentCat.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-3 leading-none">
                    {currentCat.title}
                  </h3>
                  
                  <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed mb-6 font-light">
                    {currentCat.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-slate-200 dark:bg-white/5 mb-4" />
                  <div className="flex flex-wrap gap-1.5">
                    {currentCat.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className={`flex items-center gap-1.5 text-xxs font-medium text-slate-600 dark:text-slate-300 bg-slate-900/5 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 px-2.5 py-1.5 rounded-xl transition-all duration-300 group/tag ${currentCat.tagHover}`}
                      >
                        <SkillIcon skill={skill} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
