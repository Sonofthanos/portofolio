/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Core", href: "#competencies" },
    { name: "Impact", href: "#experience" },
    { name: "AI/Data", href: "#projects" },
    { name: "Creative", href: "#feeds" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 px-4"
    >
      <nav className="glass px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl relative transition-all duration-300">
        <a href="#home" className="flex items-center group cursor-pointer h-7 sm:h-8">
          <img 
            src="/ttd.svg" 
            alt="Adlan Azzikra" 
            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <span style={{ display: 'none' }} className="font-bold text-base tracking-tight text-slate-800 dark:text-white">
            Adlan Azzikra
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-slate-900 dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 dark:after:bg-purple-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="h-4 w-[1px] bg-slate-200 dark:bg-white/10" />
          {/* Theme Toggle Button Desktop */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-slate-900/10 dark:bg-white/10 hover:bg-purple-600/20 dark:hover:bg-purple-600/30 text-slate-800 dark:text-white font-bold px-4 py-2 rounded-full transition-all border border-slate-200 dark:border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.05)] dark:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 mx-2 p-6 rounded-2xl glass flex flex-col gap-4 md:hidden z-50 border border-slate-200/50 dark:border-white/10"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-base font-semibold py-2 border-b border-slate-200/50 dark:border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-slate-900/10 dark:bg-purple-600/30 hover:bg-purple-600/20 dark:hover:bg-purple-600/50 text-slate-800 dark:text-white font-bold py-3 rounded-xl border border-slate-200/50 dark:border-purple-500/40 shadow-lg shadow-purple-500/5 dark:shadow-purple-500/10 mt-2 transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
