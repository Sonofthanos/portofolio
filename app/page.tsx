import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Feeds from "@/components/Feeds";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-12 overflow-hidden selection:bg-purple-500/30 selection:text-purple-800 dark:selection:text-purple-200 w-full relative">
      
      {/* Global Background Glow Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-purple-300/20 dark:bg-purple-900/10 blur-[130px] rounded-full transition-colors duration-300" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-indigo-300/20 dark:bg-indigo-900/10 blur-[150px] rounded-full transition-colors duration-300" />
        <div className="absolute bottom-[20%] left-[15%] w-[450px] h-[450px] bg-teal-300/15 dark:bg-teal-900/10 blur-[140px] rounded-full transition-colors duration-300" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        <Hero />
        <Competencies />
        <Experience />
        <Projects />
        <Feeds />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full text-center py-10 text-xs text-slate-500 dark:text-slate-500 mt-12 border-t border-slate-200 dark:border-white/5 bg-slate-200/10 dark:bg-slate-950/40 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Muhammad Adlan Azzikra. All Rights Reserved.</p>
          <p className="text-slate-550 dark:text-slate-600 font-medium">AI Technologist & Strategic Leader</p>
        </div>
      </footer>
    </main>
  );
}
