import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? "bg-[#0a0a0f] text-slate-100"
    : "bg-slate-50 text-slate-900";

  return (
    <div className={`font-sans antialiased min-h-screen transition-colors duration-300 ${themeClasses}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] transition-opacity duration-500">
          <div className="text-center w-full max-w-md px-8">
            <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Codeomics
            </div>
            <div className="text-slate-400 text-sm md:text-base tracking-wider animate-pulse mb-8">
              Crafting Digital Excellence
            </div>
            <div className="w-full h-1 bg-indigo-400/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full animate-pulse" style={{width: '100%', animation: 'loadingbar 2s ease-in-out infinite'}}></div>
            </div>
          </div>
        </div>
      )}

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <Hero isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Portfolio isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Process isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/25 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Go to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
