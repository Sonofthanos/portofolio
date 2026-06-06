/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon, Maximize2, ExternalLink } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Feeds() {
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    category: string;
    src: string;
    filename: string;
    link?: string;
  } | null>(null);

  const feedItems = [
    {
      title: "Open Recruitment BPH BEM KM Fasilkom Unsri 2025",
      category: "Organizational Campaign",
      src: "/oprec.png",
      filename: "oprec bph bem ilkom 2025",
      description: "A bold, modern typography campaign designed to capture attention and drive recruitment for the student board."
    },
    {
      title: "Flipside HMIF 2024",
      category: "Social Media Feed",
      src: "/flipside.png",
      filename: "flipside hmif 2024",
      link: "https://www.instagram.com/flipside.hmif/",
      description: "An aesthetic social media layout crafted to establish HMIF's visual identity and community branding."
    }
  ];

  return (
    <section id="feeds" className="py-16 px-6 w-full max-w-5xl mx-auto relative select-none">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/5 blur-[140px] rounded-full pointer-events-none transition-colors" />

      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-4"
        >
          Creative Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg transition-colors"
        >
          Branding campaigns, visual templates, and digital media designs.
        </motion.p>
      </div>

      {/* Simplified 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {feedItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            onClick={() => setSelectedItem(item)}
            className="group glass rounded-3xl p-5 border border-slate-200/50 dark:border-white/10 flex flex-col gap-4 hover:border-purple-500/30 hover:bg-white/60 dark:hover:bg-[#111622] transition-all duration-300 shadow-xl cursor-pointer"
          >
            {/* Browser Mockup container */}
            <div className="aspect-square w-full rounded-2xl overflow-hidden relative bg-slate-900/10 dark:bg-slate-950/40 border border-slate-200/50 dark:border-white/10 flex flex-col group-hover:border-slate-350 dark:group-hover:border-white/20 transition-all duration-350">
              
              {/* Browser Header Bar */}
              <div className="h-7 w-full bg-slate-200/50 dark:bg-slate-900/50 border-b border-slate-200/40 dark:border-white/5 flex items-center px-3 gap-1.5 shrink-0 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-slate-550 dark:text-slate-400 ml-2 overflow-hidden truncate max-w-[200px]">
                  {item.filename}
                </span>
              </div>

              {/* Mockup Image */}
              <div className="flex-1 w-full relative overflow-hidden bg-slate-950/10">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                
                {/* Fallback image wrapper */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-purple-500/5 via-indigo-500/5 to-slate-900/10"
                  style={{ display: "none" }}
                >
                  <ImageIcon className="text-purple-500 dark:text-purple-400 w-8 h-8 mb-2 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-350 mb-1">
                    Missing: {item.filename}
                  </span>
                </div>

                {/* Hover Maximize Overlay Button */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-slate-900/90 border border-white/10 text-white flex items-center gap-2 text-xs font-semibold shadow-lg hover:scale-105 transition-transform">
                    <Maximize2 size={13} />
                    <span>View Design</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Info details */}
            <div className="text-left mt-1">
              <span className="text-[9.5px] font-bold text-purple-650 dark:text-purple-400 uppercase tracking-widest block mb-1 font-mono">
                {item.category}
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-light">
                {item.description}
              </p>

              {/* Instagram link action */}
              {item.link && (
                <div className="mt-4 flex" onClick={(e) => e.stopPropagation()}>
                  <Magnetic>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-slate-250 dark:border-white/10 rounded-full transition-all cursor-pointer hover:scale-105"
                    >
                      <ExternalLink size={10} className="text-pink-650 dark:text-pink-400" />
                      <span>Instagram Link</span>
                    </a>
                  </Magnetic>
                </div>
              )}
            </div>

          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full glass rounded-[2.5rem] border border-slate-200/50 dark:border-white/10 p-4 shadow-2xl flex flex-col z-10 max-h-[88vh] bg-white/95 dark:bg-[#0b0f19]/95 overflow-hidden"
            >
              {/* Header with Close & Instagram Link */}
              <div className="flex justify-between items-center mb-3 px-2">
                <div className="flex items-center gap-3 min-w-0 text-left">
                  <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-white truncate">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] sm:text-xs text-pink-650 dark:text-pink-400 font-semibold hover:underline shrink-0"
                    >
                      <span>@flipside.hmif</span>
                      <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* High-res Image Wrapper */}
              <div className="flex-1 overflow-auto rounded-xl bg-slate-950/10 dark:bg-slate-950/55 border border-slate-200/50 dark:border-white/5 flex items-center justify-center p-2 min-h-0">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[68vh] w-auto object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="hidden flex-col items-center justify-center p-8 text-center text-slate-500">
                  <ImageIcon size={36} className="text-slate-400 dark:text-slate-650 mb-2" />
                  <p className="text-xs font-semibold">Could not load preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
