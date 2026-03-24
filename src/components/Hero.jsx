import { useEffect, useState } from "react";

const words = ["Websites", "Web Apps", "Digital Products", "Portfolio", "E-Commerce"];

export default function Hero({ isDarkMode }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-slate-50";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const subTextLightClass = isDarkMode ? "text-gray-500" : "text-slate-500";
  const glassBgClass = isDarkMode ? "bg-white/5 border-white/10" : "bg-white/70 border-slate-200";
  const glassHoverClass = isDarkMode ? "hover:border-indigo-500/30" : "hover:border-indigo-500/50";
  const buttonSecondaryClass = isDarkMode
    ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-indigo-500/50"
    : "bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200 hover:border-indigo-500";

  return (
    <section
      id="home"
      className={`relative h-screen flex items-center justify-center overflow-hidden ${sectionBgClass}`}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDarkMode ? "opacity-[0.03]" : "opacity-[0.02]"}`}
        style={{
          backgroundImage: isDarkMode
            ? "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)"
            : "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-indigo-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 left-16 w-2 h-2 bg-violet-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-24 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm ${isDarkMode ? "" : "border-indigo-400/50"}`}>
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Available for New Projects
        </div>

        {/* Headline */}
        <h1 className={`text-5xl md:text-7xl font-black ${textClass} leading-tight mb-4 tracking-tight`}>
          We Build Stunning
          <br />
          <span
            className={`bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-400 ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ display: "inline-block", transition: "opacity 0.4s, transform 0.4s" }}
          >
            {words[wordIndex]}
          </span>
        </h1>

        <p className={`${subTextClass} text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed`}>
          Codeomics crafts high-performance, visually striking web solutions that
          drive growth, delight users, and transform your digital presence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll("portfolio")}
            className="cursor-pointer group px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1 text-base"
          >
            View Our Work
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className={`cursor-pointer px-8 py-4 ${buttonSecondaryClass} font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 text-base`}
          >
            Start a Project
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "2+", label: "Years Experience" },
            { value: "40+", label: "Happy Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-4 rounded-2xl ${glassBgClass} border backdrop-blur-sm ${glassHoverClass} transition-all duration-300`}
            >
              <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className={`${subTextLightClass} text-sm mt-1`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${subTextClass}`}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className={`w-px h-10 bg-gradient-to-b ${isDarkMode ? "from-gray-600" : "from-slate-600"} to-transparent animate-pulse`} />
      </div>
    </section>
  );
}
