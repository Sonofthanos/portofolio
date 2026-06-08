"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Binary, Eye, CloudSun, Award, ExternalLink, X, ChevronRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";

interface ProjectData {
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  color: string;
  glowColor: string;
  borderColor: string;
  hoverTitle: string;
  btnHover: string;
  details: {
    fullDescription: string;
    features: string[];
    github?: string;
    publication?: string;
  };
}

export default function Projects() {
  const projects: ProjectData[] = [
    {
      title: "Text Simplification Using BART-base",
      category: "Deep Learning & NLP",
      icon: <Binary className="text-purple-650 dark:text-purple-400 w-5 h-5" />,
      description: "Implemented an automated text simplification system by fine-tuning the BART model to enhance content readability.",
      tags: ["Python", "PyTorch", "Transformers", "BART", "Hugging Face"],
      color: "from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20",
      glowColor: "shadow-[0_0_35px_rgba(168,85,247,0.15)] dark:shadow-[0_0_35px_rgba(168,85,247,0.2)]",
      borderColor: "border-purple-500/30",
      hoverTitle: "text-purple-650 dark:text-purple-300",
      btnHover: "bg-purple-500/5 dark:bg-purple-500/10 border-purple-500/20 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white hover:border-purple-600 dark:hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]",
      details: {
        fullDescription: "An automated text simplification system aimed at enhancing content readability. The core of this project involved fine-tuning the pre-trained BART model on the WikiLarge dataset. By utilizing Python, Hugging Face Transformers, and PyTorch, I developed a robust sequence-to-sequence model specifically tuned for linguistic complexity reduction without losing the original semantic context.",
        features: [
          "Fine-tuning sequence-to-sequence BART model",
          "Implementation using Python, Hugging Face Transformers, and PyTorch",
          "Extensive training and evaluation on the WikiLarge dataset",
          "Automated conversion of complex sentences"
        ],
        github: "https://github.com/Sonofthanos/Text-Simplification-BART-base",
        publication: "https://repository.unsri.ac.id/193167/"
      }
    },
    {
      title: "Weather Prediction Using XGBoost",
      category: "Machine Learning",
      icon: <CloudSun className="text-emerald-600 dark:text-emerald-400 w-5 h-5" />,
      description: "Developed and optimized a multi-class classification model using XGBoost to predict 5 distinct weather conditions.",
      tags: ["XGBoost", "Python", "Flask"],
      color: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20",
      glowColor: "shadow-[0_0_35px_rgba(16,185,129,0.15)] dark:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
      borderColor: "border-emerald-500/30",
      hoverTitle: "text-emerald-600 dark:text-emerald-300",
      btnHover: "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/20 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 dark:hover:bg-emerald-550 hover:text-white dark:hover:text-white hover:border-emerald-600 dark:hover:border-emerald-550 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]",
      details: {
        fullDescription: "A machine learning project focused on environmental data, utilizing the XGBoost classifier to build a highly accurate multi-class prediction model. The system evaluates meteorological parameters such as precipitation, temperature ranges, and wind speed to forecast 5 distinct weather conditions. To make the model accessible, it was fully deployed into a responsive web application built with the Flask framework.",
        features: [
          "Multi-class classification optimization using XGBoost",
          "Accurate prediction of 5 distinct weather conditions",
          "Processing of precipitation, temperature, and wind speed",
          "Full deployment into a responsive web application using Flask"
        ],
        github: "https://github.com/Sonofthanos/Weather-Prediction"
      }
    },
    {
      title: "Real-Time Age & Gender Detection",
      category: "Computer Vision",
      icon: <Eye className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />,
      description: "Utilized OpenCV DNN and pre-trained Caffe models to estimate age bracket and gender from images or real-time camera feeds.",
      tags: ["OpenCV", "Deep Learning", "Tkinter", "Python"],
      color: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20",
      glowColor: "shadow-[0_0_35px_rgba(6,182,212,0.15)] dark:shadow-[0_0_35px_rgba(6,182,212,0.2)]",
      borderColor: "border-cyan-500/30",
      hoverTitle: "text-cyan-600 dark:text-cyan-300",
      btnHover: "bg-cyan-500/5 dark:bg-cyan-500/10 border-cyan-500/20 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-white hover:border-cyan-600 dark:hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)]",
      details: {
        fullDescription: "An AI-based demographic estimation tool built with computer vision technologies. By leveraging OpenCV's Deep Neural Network (DNN) module and pre-trained Caffe models, the application accurately detects faces and estimates both age brackets and gender. The logic is wrapped in a clean, responsive graphical user interface (GUI) built with Tkinter, supporting both local image files and real-time webcam feeds.",
        features: [
          "Integration of OpenCV DNN with pre-trained Caffe models",
          "Simultaneous face detection, age bracket, and gender classification",
          "Clean and responsive Tkinter GUI",
          "Toggling between local images and webcam capture"
        ],
        github: "https://github.com/Sonofthanos/Age-and-Gender-Detection",
        publication: "https://jurnal.unived.ac.id/index.php/jmi/article/view/5998"
      }
    }
  ];

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-16 px-6 w-full max-w-6xl mx-auto relative select-none">
      {/* Visual background lights */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/5 blur-[150px] rounded-full pointer-events-none transition-colors" />
      <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none transition-colors" />

      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent mb-4"
        >
          Technical AI Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg transition-colors"
        >
          Hands-on machine learning, deep learning, and predictive modeling projects.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 w-full items-stretch">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            onClick={() => setSelectedProject(proj)}
            className="h-full cursor-pointer"
          >
            <div className={`group/card glass rounded-[2.5rem] p-6 md:p-8 border border-slate-200/50 dark:border-white/10 flex flex-col justify-between hover:bg-white/60 dark:hover:bg-slate-900/40 transition-all duration-300 relative overflow-hidden shadow-2xl h-full ${proj.glowColor} ${proj.borderColor}`}>
              
              {/* Top gradient blur overlay */}
              <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${proj.color} blur-2xl rounded-full opacity-35 group-hover/card:opacity-60 transition-opacity pointer-events-none`} />

              {/* Card Header & Content */}
              <div className="text-left w-full">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/5 dark:bg-white/5 border border-purple-500/10 dark:border-white/10 flex items-center justify-center mb-5 group-hover/card:scale-105 transition-transform duration-300">
                  {proj.icon}
                </div>

                <span className="text-[9.5px] font-bold text-purple-650 dark:text-purple-400 uppercase tracking-widest block mb-2.5 font-mono">
                  {proj.category}
                </span>

                <h3 className={`text-lg sm:text-xl font-extrabold leading-snug mb-3 transition-colors ${proj.hoverTitle}`}>
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-light mb-6">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[8.5px] bg-slate-900/5 dark:bg-white/5 border border-slate-250/50 dark:border-white/5 px-2 py-0.5 rounded text-slate-500 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Actions */}
              <div className="w-full mt-auto">
                
                {/* Actions row */}
                <div className="w-full flex items-center justify-between gap-3 pt-4 border-t border-slate-200/50 dark:border-white/5" onClick={(e) => e.stopPropagation()}>
                  <div className="flex-1">
                    <Magnetic className="w-full">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs border transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 hover:scale-[1.02] shadow-sm group/btn ${proj.btnHover}`}
                      >
                        <span>Specifications</span>
                        <ChevronRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </Magnetic>
                  </div>

                  {/* Direct Repository Link icons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {proj.details.github && (
                      <Magnetic>
                        <a
                          href={proj.details.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-slate-250 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
                          title="GitHub Repository"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      </Magnetic>
                    )}
                    {proj.details.publication && (
                      <Magnetic>
                        <a
                          href={proj.details.publication}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-slate-250 dark:border-white/10 hover:border-slate-350 dark:hover:border-white/20 text-slate-500 dark:text-cyan-400 hover:text-slate-900 dark:hover:text-cyan-350 transition-all cursor-pointer"
                          title="Journal Publication"
                        >
                          <Award size={14} />
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/40 dark:bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass relative max-w-2xl w-full rounded-[2.5rem] p-6 md:p-10 border border-slate-200/50 dark:border-white/10 shadow-2xl overflow-y-auto max-h-[90vh] bg-white/95 dark:bg-[#0b0f19]/95 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Category */}
              <span className="text-xxs font-semibold text-purple-650 dark:text-purple-300/80 bg-purple-500/5 dark:bg-white/5 border border-purple-500/10 dark:border-white/5 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block font-mono">
                {selectedProject.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white mb-6">
                {selectedProject.title}
              </h3>

              {/* Full Description */}
              <div className="mb-6 text-left">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">Project Description</h4>
                <p className="text-slate-655 dark:text-slate-350 text-sm leading-relaxed font-light">
                  {selectedProject.details.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6 text-left">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">Key Features & Scope</h4>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-350 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>



              {/* Technologies */}
              <div className="mb-8 text-left">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-200 dark:border-white/10 w-full">
                {selectedProject.details.github && (
                  <Magnetic className="w-full sm:w-auto">
                    <a
                      href={selectedProject.details.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-850 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-full text-sm font-semibold transition-all w-full sm:w-auto hover:scale-105 cursor-pointer shadow-md"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>View Repository</span>
                    </a>
                  </Magnetic>
                )}
                {selectedProject.details.publication && (
                  <Magnetic className="w-full sm:w-auto">
                    <a
                      href={selectedProject.details.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-cyan-500/10 dark:bg-cyan-500/10 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-350 px-6 py-3 rounded-full text-sm font-semibold transition-all w-full sm:w-auto hover:scale-105 cursor-pointer shadow-sm"
                    >
                      <Award size={16} className="text-cyan-600 dark:text-cyan-400" />
                      <span>Journal Paper</span>
                      <ExternalLink size={12} className="opacity-55" />
                    </a>
                  </Magnetic>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
