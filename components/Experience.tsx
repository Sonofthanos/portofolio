/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users2, Award, Target, Calendar, ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [activeGalleryOrg, setActiveGalleryOrg] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const experiences = [
    {
      role: "Vice President",
      organization: "BEM KM Fasilkom UNSRI",
      details: "Led 12 departments and 200+ staff members. Spearheaded technology empowerment and digital advocacy platforms to enhance student involvement and digital readiness.",
      stats: [
        { label: "Staff Led", value: "200+" },
        { label: "Departments", value: "12" }
      ],
      icon: <Users2 className="text-purple-650 dark:text-purple-400 w-5 h-5" />,
      logo: "/bem.svg",
      instagram: "https://www.instagram.com/bemilkomunsri/",
      orgKey: "bem",
      glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.15)] dark:shadow-[0_0_35px_rgba(168,85,247,0.2)]",
      borderColor: "border-purple-500/20 dark:border-purple-500/30",
      accentBg: "bg-purple-500/5 dark:bg-purple-500/10",
      period: "2025"
    },
    {
      role: "Vice Project Officer",
      organization: "SRIFOTON (Sriwijaya Informatics Exhibition)",
      details: "Coordinated 150 members for a national-scale IT seminar and exhibitions. Managed sponsor acquisitions (20+ sponsors) and secured 200+ national attendees.",
      stats: [
        { label: "Staff Managed", value: "150" },
        { label: "Attendees", value: "200+" },
        { label: "Partnerships", value: "20+" }
      ],
      icon: <Award className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />,
      logo: "/srifo.svg",
      instagram: "https://www.instagram.com/srifoton.official/",
      orgKey: "srifo",
      glowColor: "shadow-[0_0_35px_rgba(6,182,212,0.15)] dark:shadow-[0_0_35px_rgba(6,182,212,0.2)]",
      borderColor: "border-cyan-500/20 dark:border-cyan-500/30",
      accentBg: "bg-cyan-500/5 dark:bg-cyan-500/10",
      period: "2024"
    },
    {
      role: "Head of Human Resource Development",
      organization: "HMIF UNSRI (Himpunan Mahasiswa Informatika)",
      details: "Managed 114 staff members. Successfully reduced turnover rate and optimized productivity through tailored counseling strategies and strict KPI-based evaluations.",
      stats: [
        { label: "Staff Managed", value: "114" },
        { label: "Retention Rate", value: "Optimized" }
      ],
      icon: <Target className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />,
      logo: "/hmif.svg",
      instagram: "https://www.instagram.com/hmif.unsri/",
      orgKey: "hmif",
      glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.15)] dark:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
      borderColor: "border-emerald-500/20 dark:border-emerald-500/30",
      accentBg: "bg-emerald-500/5 dark:bg-emerald-500/10",
      period: "2024"
    }
  ];

  const activeOrg = experiences[activeIdx];
  const currentOrg = experiences.find((exp) => exp.orgKey === activeGalleryOrg);

  return (
    <section id="experience" className="py-16 px-6 w-full max-w-5xl mx-auto relative select-none">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none transition-colors" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-500/10 dark:bg-purple-600/5 blur-[120px] rounded-full pointer-events-none transition-colors" />

      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-4"
        >
          Leadership & Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg transition-colors"
        >
          Professional timeline, leadership roles, and strategic execution history.
        </motion.p>
      </div>

      {/* Timeline Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 w-full mt-12 items-stretch">
        
        {/* Left Column: Timeline Axis */}
        <div className="flex flex-col justify-start">
          
          {/* Desktop Vertical Timeline Track */}
          <div className="hidden lg:flex flex-col gap-8 pl-8 border-l-2 border-slate-200 dark:border-white/10 text-left py-4 relative">
            {experiences.map((exp, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={exp.orgKey} 
                  className="relative cursor-pointer select-none group/node"
                  onClick={() => {
                    setActiveIdx(idx);
                    setCurrentImageIndex(0);
                  }}
                >
                  {/* Glowing active node bullet on the line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTimelineBullet"
                      className={`absolute -left-[38px] top-1.5 w-3 h-3 rounded-full z-10 ${
                        idx === 0 ? "bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" :
                        idx === 1 ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" :
                        "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      }`}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  
                  {/* Node Text Content */}
                  <div className="transition-all duration-300">
                    <span className={`flex items-center gap-1 font-mono text-xxs font-black tracking-widest block uppercase ${
                      isActive 
                        ? (idx === 0 ? "text-purple-650 dark:text-purple-400" : idx === 1 ? "text-cyan-600 dark:text-cyan-400" : "text-emerald-600 dark:text-emerald-400")
                        : "text-slate-400 dark:text-slate-500"
                    }`}>
                      <Calendar size={10} className="shrink-0" />
                      {exp.period}
                    </span>
                    <h3 className={`text-lg font-black mt-1 transition-colors leading-tight ${
                      isActive 
                        ? "text-slate-800 dark:text-white"
                        : "text-slate-500 dark:text-slate-400 group-hover/node:text-slate-800 dark:group-hover/node:text-slate-355"
                    }`}>
                      {exp.role}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-550 font-medium mt-1">
                      {exp.organization}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Horizontal Timeline selector */}
          <div className="flex lg:hidden flex-row justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none w-full">
            {experiences.map((exp, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={exp.orgKey}
                  onClick={() => {
                    setActiveIdx(idx);
                    setCurrentImageIndex(0);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? (idx === 0 ? "bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300" : idx === 1 ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300")
                      : "bg-slate-900/5 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-500 hover:border-slate-300 dark:hover:border-white/10"
                  }`}
                >
                  {exp.period} • {exp.organization.split(" ")[0]}
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Experience Showcase Canvas */}
        <div className="w-full relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className={`glass rounded-[2.5rem] p-6 md:p-8 border border-slate-200/50 dark:border-white/10 shadow-2xl flex flex-col justify-between text-left w-full h-full relative overflow-hidden ${activeOrg.glowColor} ${activeOrg.borderColor}`}
            >
              {/* Silhouette Logo watermark background (appearing half-cut/half-overflowing) */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.04] dark:opacity-[0.05] pointer-events-none filter invert dark:invert-0 grayscale contrast-150 transition-transform duration-750 select-none">
                <img
                  src={activeOrg.logo}
                  alt=""
                  className="w-full h-full object-contain object-left"
                />
              </div>

              {/* Backglow gradient decoration */}
              <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-bl ${activeIdx === 0 ? "from-purple-500/10" : activeIdx === 1 ? "from-cyan-500/10" : "from-emerald-500/10"} to-transparent blur-2xl rounded-full pointer-events-none`} />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex justify-between items-start gap-4 mb-5">
                  <div className="text-left">
                    <span className={`flex items-center gap-1 font-mono text-[9px] font-black uppercase tracking-wider ${
                      activeIdx === 0 ? "text-purple-650 dark:text-purple-400" :
                      activeIdx === 1 ? "text-cyan-600 dark:text-cyan-400" :
                      "text-emerald-600 dark:text-emerald-400"
                    }`}>
                      <Calendar size={10} />
                      {activeOrg.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white mt-1 leading-snug">
                      {activeOrg.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                      {activeOrg.organization}
                    </p>
                  </div>
                  
                  {/* Org Logo */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200/50 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/50 overflow-hidden shrink-0 shadow-sm">
                    <img
                      src={activeOrg.logo}
                      alt=""
                      className="w-8 h-8 object-contain filter invert dark:invert-0"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-655 dark:text-slate-350 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
                  {activeOrg.details}
                </p>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {activeOrg.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl px-4 py-2 min-w-[100px]"
                    >
                      <span className={`text-sm sm:text-base font-black font-mono leading-none ${
                        activeIdx === 0 ? "text-purple-650 dark:text-purple-400" :
                        activeIdx === 1 ? "text-cyan-600 dark:text-cyan-400" :
                        "text-emerald-600 dark:text-emerald-400"
                      }`}>
                        {stat.value}
                      </span>
                      <span className="text-[9px] text-slate-500 dark:text-slate-450 uppercase tracking-wider font-bold mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Divider & Buttons */}
              <div className="w-full mt-8 pt-4 border-t border-slate-200 dark:border-white/5 relative z-20">
                <div className="flex items-center justify-between gap-3 w-full">
                  <div onClick={(e) => e.stopPropagation()}>
                    <Magnetic>
                      <a
                        href={activeOrg.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-1.5 px-3.5 py-2 text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-slate-250 dark:border-white/10 rounded-full transition-all cursor-pointer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          fill="none"
                          className="text-pink-650 dark:text-pink-400 group-hover/btn:scale-110 transition-transform duration-300"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        <span>Instagram</span>
                      </a>
                    </Magnetic>
                  </div>

                  <div onClick={(e) => e.stopPropagation()}>
                    <Magnetic>
                      <button
                        onClick={() => {
                          setActiveGalleryOrg(activeOrg.orgKey);
                          setCurrentImageIndex(0);
                        }}
                        className={`group/gallery-btn flex items-center gap-1.5 px-4 py-2 text-[10px] sm:text-xs font-semibold text-white rounded-full transition-all cursor-pointer shadow-sm hover:scale-105 ${
                          activeIdx === 0 ? "bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-650 dark:to-indigo-650" :
                          activeIdx === 1 ? "bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-650 dark:to-blue-650" :
                          "bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-650 dark:to-teal-650"
                        }`}
                      >
                        <ImageIcon size={12} className="group-hover/gallery-btn:scale-110 transition-transform" />
                        <span>Activity Gallery</span>
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Activity Gallery Modal popup overlay */}
      <AnimatePresence>
        {activeGalleryOrg && currentOrg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGalleryOrg(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Glass Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full glass rounded-[2.5rem] border border-slate-200/50 dark:border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden flex flex-col z-10 max-h-[90vh]"
            >
              {/* Backglow decoration */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 dark:bg-purple-600/15 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-600/15 blur-3xl rounded-full pointer-events-none" />

              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200/50 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/50 overflow-hidden shrink-0">
                    <img
                      src={currentOrg.logo}
                      alt=""
                      className="w-6 h-6 object-contain filter invert dark:invert-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white leading-tight">
                      {currentOrg.organization}
                    </h3>
                    <p className="text-xxs sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      Activity Gallery • 6 Photos
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveGalleryOrg(null)}
                  className="p-2.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Main Slider */}
              <div className="flex-1 flex flex-col md:flex-row gap-6 items-stretch justify-between overflow-hidden min-h-0">
                {/* Main Large Image Box */}
                <div className="flex-1 relative aspect-video md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-950/40 flex items-center justify-center">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={`/gallery/${activeGalleryOrg}/${currentImageIndex + 1}.jpg`}
                        alt={`${currentOrg.organization} Activity ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = "flex";
                        }}
                      />
                      
                      {/* Interactive styled placeholder card */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-purple-950/10 via-indigo-950/10 to-slate-900/30" style={{ display: "none" }}>
                        <div className="w-14 h-14 rounded-full bg-purple-500/5 border border-purple-500/10 flex items-center justify-center mb-4">
                          <ImageIcon className="text-purple-500 dark:text-purple-400 w-7 h-7" />
                        </div>
                        <span className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                          Activity Photo #{currentImageIndex + 1}
                        </span>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
                          Please upload your activity image inside the project&apos;s public folder at:
                        </p>
                        <code className="bg-slate-200 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-purple-650 dark:text-purple-300 font-mono text-[10px] select-all max-w-[90%] break-all">
                          public/gallery/{activeGalleryOrg}/{currentImageIndex + 1}.jpg
                        </code>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slider controls */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? 5 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-sm transition-all cursor-pointer z-20 border border-white/5 hover:scale-105"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 5 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-sm transition-all cursor-pointer z-20 border border-white/5 hover:scale-105"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Slide number badge */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/70 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono border border-white/5 z-20 shadow-md">
                    {currentImageIndex + 1} / 6
                  </div>
                </div>

                {/* Desktop sidebar thumbnails */}
                <div className="hidden md:flex flex-col w-[240px] shrink-0 overflow-y-auto pr-1">
                  <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider font-mono">
                    Activity Photos
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-950/40 shrink-0 ${
                          currentImageIndex === idx
                            ? "border-purple-500 scale-95 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                            : "border-slate-200/50 dark:border-white/5 hover:border-slate-400 dark:hover:border-white/20"
                        }`}
                      >
                        <img
                          src={`/gallery/${activeGalleryOrg}/${idx + 1}.jpg`}
                          alt=""
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallbackThumb = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallbackThumb) fallbackThumb.style.display = "flex";
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-1 bg-gradient-to-tr from-purple-950/10 to-slate-900/30 text-[9px] font-bold text-slate-500 dark:text-slate-350 rounded-xl text-center border border-dashed border-white/5" style={{ display: "none" }}>
                          <span>Photo #{idx + 1}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Thumbnail Row */}
              <div className="flex md:hidden gap-2 overflow-x-auto pt-4 mt-2 border-t border-slate-200/60 dark:border-white/5 pb-2 scrollbar-thin scrollbar-thumb-purple-500/30">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border transition-all cursor-pointer bg-slate-950/40 shrink-0 ${
                      currentImageIndex === idx
                        ? "border-purple-500 scale-95 shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                        : "border-slate-200/50 dark:border-white/5"
                    }`}
                  >
                    <img
                      src={`/gallery/${activeGalleryOrg}/${idx + 1}.jpg`}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallbackThumb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallbackThumb) fallbackThumb.style.display = "flex";
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-purple-950/10 to-slate-900/30 text-[8px] font-bold text-slate-500 dark:text-slate-355 rounded-lg text-center border border-dashed border-white/5" style={{ display: "none" }}>
                      <span>#{idx + 1}</span>
                    </div>
                  </button>
                ))}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
