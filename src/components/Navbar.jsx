import { useState, useEffect } from "react";

const navLinks = ["Home", "Services", "Portfolio", "About", "Contact"];

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBgClass = isDarkMode
    ? scrolled
      ? "bg-[#0a0a0f]/90 border-indigo-900/30"
      : "bg-transparent"
    : scrolled
      ? "bg-white/90 border-slate-200"
      : "bg-transparent";

  const navTextClass = isDarkMode ? "text-white" : "text-slate-900";
  const navSubTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const mobileMenuBgClass = isDarkMode ? "bg-[#0a0a0f]/95" : "bg-white/95";
  const hoverBgClass = isDarkMode ? "hover:bg-white/5" : "hover:bg-slate-100";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${navBgClass} ${
        scrolled ? "shadow-[0_4px_30px_rgba(99,102,241,0.15)] border-b" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNav("Home")}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/40 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-black text-sm">Co</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-extrabold text-xl tracking-tight leading-none ${navTextClass}`}>
              Code<span className="text-indigo-400">omics</span>
            </span>
            <span className={`text-[0.65rem] font-medium tracking-wider uppercase mt-0.5 ${navSubTextClass}`}>
              by kibria
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  active === link
                    ? "text-white bg-indigo-600/30 shadow-inner shadow-indigo-500/20"
                    : `${navSubTextClass} ${hoverBgClass}`
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side - Theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 transition-all duration-300 group cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNav("Contact")}
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Get a Quote
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-0.5 ${isDarkMode ? "bg-white" : "bg-slate-900"} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 ${isDarkMode ? "bg-white" : "bg-slate-900"} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 ${isDarkMode ? "bg-white" : "bg-slate-900"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        <div className={`px-6 flex flex-col gap-1 ${mobileMenuBgClass} backdrop-blur-xl`}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === link
                  ? "text-white bg-indigo-600/30"
                  : `${navSubTextClass} ${hoverBgClass}`
              }`}
            >
              {link}
            </button>
          ))}
          <div className="flex gap-2 mt-2">
            <button
              onClick={toggleTheme}
              className="flex-1 px-4 py-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
              <span className="text-sm font-medium">Theme</span>
            </button>
            <button
              onClick={() => handleNav("Contact")}
              className="flex-1 px-5 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-xl cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
