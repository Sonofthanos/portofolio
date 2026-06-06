"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Send, Download } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "adlnzkra@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 w-full max-w-4xl mx-auto relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-600/5 blur-[130px] rounded-full pointer-events-none transition-colors" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass rounded-[2.5rem] p-8 md:p-12 border border-slate-200/50 dark:border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 shadow-2xl items-center"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 blur-2xl rounded-full transition-colors" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 dark:bg-purple-500/10 blur-2xl rounded-full transition-colors" />

        {/* Left Column: Let's Connect Info */}
        <div className="flex flex-col items-start text-left max-w-md w-full">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 transition-colors">
            <Send className="text-purple-650 dark:text-purple-400 w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 transition-colors">
            Let&apos;s Connect
          </h2>

          <p className="text-slate-655 dark:text-slate-350 text-sm md:text-base leading-relaxed mb-6 font-light transition-colors duration-300">
            Thank you for reviewing my portfolio. I am always open to discussing technical collaborations, AI challenges, leadership opportunities, and data-driven ideas.
          </p>

          {/* Copy-able Email Card */}
          <div className="flex items-center justify-between gap-3 bg-slate-200/40 dark:bg-slate-950/80 border border-slate-300/40 dark:border-white/5 px-4.5 py-2.5 rounded-full w-full transition-colors select-none">
            <div className="flex items-center gap-2 min-w-0">
              <Mail size={15} className="text-purple-650 dark:text-purple-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 select-all truncate">
                {email}
              </span>
            </div>
            
            <button
              onClick={copyToClipboard}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white p-1.5 hover:bg-slate-300/40 dark:hover:bg-white/5 rounded-full transition-all cursor-pointer relative shrink-0"
              title="Copy email to clipboard"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                   <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Copy size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Right Column: Actions & Social Stack */}
        <div className="flex flex-col gap-4 w-full h-full justify-center">
          {/* Download CV Button */}
          <Magnetic className="w-full">
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-550 hover:to-indigo-550 dark:from-purple-650 dark:to-indigo-650 text-white px-6 py-4 rounded-2xl transition-all w-full cursor-pointer hover:scale-[1.01] shadow-md hover:shadow-lg font-bold text-sm"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
          </Magnetic>

          <div className="grid grid-cols-3 gap-3 w-full">
            {/* LinkedIn Button */}
            <Magnetic className="w-full">
              <a
                href="https://linkedin.com/in/muhammad-adlan-azzikra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 bg-slate-900/5 dark:bg-white/5 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/10 border border-slate-250 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-cyan-400/30 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all w-full cursor-pointer text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 dark:text-cyan-400 w-4 h-4 sm:w-[18px] sm:h-[18px]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="text-[10px] sm:text-xs font-bold mt-0.5 sm:mt-1">LinkedIn</span>
              </a>
            </Magnetic>

            {/* Instagram Button */}
            <Magnetic className="w-full">
              <a
                href="https://instagram.com/adlnzkra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 bg-slate-900/5 dark:bg-white/5 hover:bg-pink-500/5 dark:hover:bg-pink-500/10 border border-slate-250 dark:border-white/10 hover:border-pink-500/40 dark:hover:border-pink-400/30 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 transition-all w-full cursor-pointer text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600 dark:text-pink-400 w-4 h-4 sm:w-[18px] sm:h-[18px]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="text-[10px] sm:text-xs font-bold mt-0.5 sm:mt-1">Instagram</span>
              </a>
            </Magnetic>

            {/* GitHub Button */}
            <Magnetic className="w-full">
              <a
                href="https://github.com/Sonofthanos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 bg-slate-900/5 dark:bg-white/5 hover:bg-slate-900/10 dark:hover:bg-white/10 border border-slate-250 dark:border-white/10 hover:border-slate-500 dark:hover:border-white/30 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all w-full cursor-pointer text-center"
              >
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" className="text-slate-800 dark:text-slate-200 w-4 h-4 sm:w-[18px] sm:h-[18px]">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-[10px] sm:text-xs font-bold mt-0.5 sm:mt-1">GitHub</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
