/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState("/profile.png");
  const [typedName, setTypedName] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nameText = "M. Adlan Azzikra";

  useEffect(() => {
    let isDeleting = false;
    let currentText = "";
    let timerId: NodeJS.Timeout;

    const tick = () => {
      if (!isDeleting) {
        if (currentText.length < nameText.length) {
          currentText = nameText.substring(0, currentText.length + 1);
          setTypedName(currentText);
          timerId = setTimeout(tick, 100);
        } else {
          isDeleting = true;
          timerId = setTimeout(tick, 5000);
        }
      } else {
        if (currentText.length > 0) {
          currentText = nameText.substring(0, currentText.length - 1);
          setTypedName(currentText);
          timerId = setTimeout(tick, 50);
        } else {
          isDeleting = false;
          timerId = setTimeout(tick, 1000);
        }
      }
    };

    timerId = setTimeout(tick, 100);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x: x * 15, y: y * 15 }); // Max 15px translation
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleImageError = () => {
    if (imgSrc === "/profile.png") {
      setImgSrc("/profile.jpg");
    } else if (imgSrc === "/profile.jpg") {
      setImgSrc("/profile.webp");
    } else {
      setImageError(true);
    }
  };

  // Holographic 3D Tilt calculation
  const tiltX = mousePos.y * -1.2;
  const tiltY = mousePos.x * 1.2;

  // Responsive radial glow follow coords
  const glowX = (mousePos.x / 15 + 0.5) * 100;
  const glowY = (mousePos.y / 15 + 0.5) * 100;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 w-full select-none">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      {/* Background Blur Lights (Opposite Parallax depth) */}
      <div 
        style={{ 
          transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`,
          transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-purple-300/20 dark:bg-purple-950/10 blur-[130px] rounded-full pointer-events-none transition-colors duration-300" 
      />
      <div 
        style={{ 
          transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)`,
          transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
        }}
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-300/20 dark:bg-cyan-950/10 blur-[110px] rounded-full pointer-events-none transition-colors duration-300" 
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 mx-auto">
        
        {/* Left Column: Interactive Metadata and Intro */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-5 font-mono text-[9px] text-purple-650 dark:text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">System Initialization Completed</span>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-slate-100 dark:to-slate-400 mb-3 leading-none select-none min-h-[1.15em] flex items-center justify-center lg:justify-start"
          >
            <span>{typedName}</span>
            <span className="text-purple-500 dark:text-purple-400 animate-blink font-light ml-0.5">|</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-650 to-cyan-500 dark:from-purple-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent mb-5"
          >
            AI Engineer & Strategic Leader
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base text-slate-550 dark:text-slate-400 leading-relaxed font-light transition-colors duration-300"
          >
            Informatics Engineering graduate from Universitas Sriwijaya with a GPA of <span className="font-semibold text-slate-900 dark:text-white">3.92</span>. Bridging deep learning architectures with tactical leadership to engineer responsive, data-driven software solutions.
          </motion.p>

          {/* Sleek Interactive JSON Configuration block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="w-full glass border border-slate-200/50 dark:border-white/5 rounded-2xl p-4 font-mono text-[10px] sm:text-xs text-slate-500 dark:text-slate-455 select-none shadow-md mt-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-white/5 pb-2 mb-3">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[8.5px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">engineer_config.json</span>
            </div>
            <div className="space-y-0.5 text-left leading-normal">
              <div><span className="text-purple-650 dark:text-purple-400">{"\"candidate\""}</span>: {"{"}</div>
              <div className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">{"\"degree\""}</span>: <span className="text-emerald-600 dark:text-emerald-400">{"\"Informatics Engineering\""}</span>,</div>
              <div className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">{"\"gpa\""}</span>: <span className="text-emerald-600 dark:text-emerald-400">{"\"3.92 / 4.00\""}</span>,</div>
              <div className="pl-4"><span className="text-cyan-600 dark:text-cyan-400">{"\"specialization\""}</span>: <span className="text-slate-800 dark:text-slate-200">{"["}{"\"AI/Data\""}{", "}{"\"Creative\""}{", "}{"\"Leadership\""}{"]"}</span></div>
              <div>{"}"}</div>
            </div>
          </motion.div>



        </div>

        {/* Right Column: Holographic 3D Tilt profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center shrink-0 w-full sm:w-auto relative"
        >
          {/* Card Outer Shell with 3D Perspective */}
          <div 
            style={{
              transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
              transition: "transform 0.15s ease-out",
              transformStyle: "preserve-3d"
            }}
            className="relative w-64 h-[350px] sm:w-[280px] sm:h-[390px] md:w-[300px] md:h-[410px] rounded-[2rem] border border-slate-200/60 dark:border-white/10 glass shadow-2xl flex flex-col justify-between p-5 overflow-visible"
          >
            {/* Shifting radial glow background inside card */}
            <div 
              style={{
                background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(168,85,247,0.12) 0%, transparent 65%)`
              }}
              className="absolute inset-0 rounded-[2rem] pointer-events-none z-0 transition-all duration-300"
            />

            {/* Corner Bracket Details */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-slate-400/30 dark:border-white/20 pointer-events-none" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-slate-400/30 dark:border-white/20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-slate-400/30 dark:border-white/20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-slate-400/30 dark:border-white/20 pointer-events-none" />

            {/* Card Header readouts */}
            <div className="flex items-center justify-between w-full relative z-25 font-mono text-[8px] text-slate-400 dark:text-slate-500 px-1 select-none pointer-events-none">
              <span className="flex items-center gap-1">
                <Activity size={10} className="text-purple-500 animate-pulse" />
                <span>LATENCY: 12ms</span>
              </span>
              <span>SYS_STAT: OK</span>
            </div>

            {/* Scanning Laser Line */}
            <motion.div
              animate={{ top: ["5%", "95%", "5%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-4 right-4 h-[1px] bg-purple-500/30 dark:bg-purple-400/30 shadow-[0_0_8px_rgba(168,85,247,0.5)] z-20 pointer-events-none"
            />

            {/* Profile image wrapper positioned so head overflows the top border */}
            <div 
              style={{
                transform: "translateZ(30px)", // Elevate image slightly in 3D space
                transformStyle: "preserve-3d"
              }}
              className="absolute inset-x-5 bottom-12 h-64 sm:h-72 md:h-80 overflow-visible z-10"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-transparent via-slate-300/50 dark:via-white/25 to-transparent z-10 pointer-events-none" />

              {!imageError ? (
                <>
                  {/* Bottom portion of image (clipped inside the rounded card border) */}
                  <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden z-15">
                    <img
                      src={imgSrc}
                      alt="Muhammad Adlan Azzikra"
                      onError={handleImageError}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[125%] object-contain object-bottom origin-bottom transition-transform duration-500 select-none pointer-events-none"
                    />
                  </div>
                  {/* Top portion of image (unclipped overlay popping out of the top card border) */}
                  <img
                    src={imgSrc}
                    alt="Muhammad Adlan Azzikra"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[125%] object-contain object-bottom origin-bottom z-30 pointer-events-none select-none"
                    style={{ clipPath: "inset(0 0 20% 0)" }}
                  />
                </>
              ) : (
                /* Premium AI SVG Avatar Fallback */
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center z-15 bg-slate-900/5 dark:bg-slate-900/30 border border-slate-200/50 dark:border-white/5 shadow-inner">
                  <svg viewBox="0 0 100 100" className="w-1/3 h-1/3 text-purple-500 dark:text-purple-400 animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="50" cy="40" r="18" strokeLinecap="round" />
                    <path d="M22 82C22 68 34 58 50 58C66 58 78 68 78 82" strokeLinecap="round" />
                    <path d="M50 15V8" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="50" cy="5" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>



            {/* Card Footer readout */}
            <div className="flex items-center justify-between w-full relative z-25 font-mono text-[8px] text-slate-400 dark:text-slate-500 px-1 border-t border-slate-200/50 dark:border-white/5 pt-2.5 mt-auto select-none pointer-events-none">
              <span>CLASS: AI_DEVL_0212</span>
              <span className="text-purple-650 dark:text-purple-400 font-bold uppercase tracking-wider">HOLOGRAPHIC_ON</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}


