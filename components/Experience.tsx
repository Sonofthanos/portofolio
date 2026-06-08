/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users2, Award, Target, Calendar, X, ExternalLink, Image as ImageIcon } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [activeGalleryOrg, setActiveGalleryOrg] = useState<string | null>(null);

  const experiences = [
    {
      role: "Vice President",
      organization: "BEM KM Fasilkom UNSRI",
      details: "Led 12 departments and 200+ staff members. Spearheaded technology empowerment and digital advocacy platforms to enhance student involvement and digital readiness.",
      stats: [
        { label: "Staff Led", value: "200+" },
        { label: "Programs Held", value: "60+" }
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
      details: "Coordinated 150 members for a national-scale IT seminar and exhibitions. Managed partnership acquisitions (20+ partnerships) and secured 200+ national attendees.",
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
                        }}
                        className={`group/gallery-btn flex items-center gap-1.5 px-4 py-2 text-[10px] sm:text-xs font-semibold text-white rounded-full transition-all cursor-pointer shadow-sm hover:scale-105 ${
                          activeIdx === 0 ? "bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-650 dark:to-indigo-650" :
                          activeIdx === 1 ? "bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-650 dark:to-blue-650" :
                          "bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-650 dark:to-teal-650"
                        }`}
                      >
                        <Award size={12} className="group-hover/gallery-btn:scale-110 transition-transform" />
                        <span>Certificate</span>
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>      {/* Certificate Modal popup overlay */}
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
                    <p className="text-xxs sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-mono">
                      Official Certificate
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveGalleryOrg(null)}
                  className="p-2.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer shrink-0"
                >
                  <X size={20} />
                </button>
              </div>              {/* Modal Main Slider / Layout */}
              <div className="flex-1 flex flex-col md:flex-row gap-6 items-stretch justify-between overflow-hidden min-h-0">
                {/* Main Large Image Box (Left) */}
                <div className="flex-1 relative aspect-video md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-950/40 flex items-center justify-center group/cert cursor-zoom-in">
                  <a href={`/gallery/${activeGalleryOrg}/1.jpg`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 w-full h-full">
                    <img
                      src={`/gallery/${activeGalleryOrg}/1.jpg`}
                      alt={`${currentOrg.organization} Certificate`}
                      className="w-full h-full object-cover group-hover/cert:scale-[1.02] transition-transform duration-500"
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
                        Certificate Not Found
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-4">
                        Please upload your certificate image inside the project&apos;s public folder at:
                      </p>
                      <code className="bg-slate-200 dark:bg-slate-900 px-3 py-1.5 rounded-lg text-purple-650 dark:text-purple-300 font-mono text-[10px] select-all max-w-[90%] break-all">
                        public/gallery/{activeGalleryOrg}/1.jpg
                      </code>
                    </div>
                    
                    {/* Hover Overlay info */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-sm gap-2 backdrop-blur-[2px]">
                      <ExternalLink size={16} />
                      Open Full Resolution
                    </div>
                  </a>
                </div>

                {/* Sidebar (Right) */}
                <div className="flex flex-col w-full md:w-[280px] shrink-0 overflow-y-auto pr-1 text-left justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider font-mono">
                      Certificate Details
                    </h4>
                    
                    <div className="bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 mb-4 font-sans">
                      <span className="text-xxs font-mono font-bold uppercase tracking-wider text-purple-650 dark:text-purple-400 block mb-1">
                        Credential Role
                      </span>
                      <p className="text-sm font-bold text-slate-850 dark:text-white leading-snug">
                        {currentOrg.role}
                      </p>
                    </div>

                    <div className="bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 mb-4 font-sans">
                      <span className="text-xxs font-mono font-bold uppercase tracking-wider text-purple-650 dark:text-purple-400 block mb-1">
                        Tenure Period
                      </span>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white leading-none font-mono">
                        Year {currentOrg.period}
                      </p>
                    </div>

                    {/* Stats details */}
                    <div className="grid grid-cols-2 gap-2 mb-4 font-sans">
                      {currentOrg.stats.map((stat, idx) => (
                        <div
                          key={stat.label}
                          className={`flex flex-col bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 rounded-2xl p-3 ${
                            currentOrg.stats.length % 2 !== 0 && idx === currentOrg.stats.length - 1
                              ? "col-span-2 text-center items-center"
                              : ""
                          }`}
                        >
                          <span className="text-sm font-mono leading-none text-slate-800 dark:text-white font-bold">
                            {stat.value}
                          </span>
                          <span className="text-[9px] text-slate-505 dark:text-slate-400 uppercase tracking-wider font-bold mt-1.5 truncate">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-200/50 dark:border-white/5 flex flex-col gap-2 font-sans">
                    <a
                      href={`/gallery/${activeGalleryOrg}/1.jpg`}
                      download={`${currentOrg.organization}_Certificate.jpg`}
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-700 dark:bg-purple-650 dark:hover:bg-purple-600 text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] cursor-pointer text-center"
                    >
                      <Award size={14} />
                      Download Certificate
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
