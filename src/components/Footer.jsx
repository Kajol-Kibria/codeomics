const links = {
  Services: ["Web Development", "UI/UX Design", "E-Commerce", "Cloud & DevOps", "API Integration"],
  Company: ["About Us", "Portfolio", "Blog", "Careers", "Press Kit"],
  Support: ["FAQ", "Documentation", "Contact", "Privacy Policy", "Terms of Service"],
};

export default function Footer({ isDarkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const footerBgClass = isDarkMode ? "bg-[#060609] border-white/[0.06]" : "bg-slate-100 border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-500" : "text-slate-500";
  const linkTextClass = isDarkMode ? "text-gray-500 hover:text-indigo-400" : "text-slate-500 hover:text-indigo-600";
  const inputBgClass = isDarkMode ? "bg-white/5 border-white/10 text-white placeholder-gray-600" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400";
  const bottomTextClass = isDarkMode ? "text-gray-600" : "text-slate-400";
  const bottomBorderClass = isDarkMode ? "border-white/[0.06]" : "border-slate-200";
  const headingClass = isDarkMode ? "text-white" : "text-slate-800";
  const labelClass = isDarkMode ? "text-gray-400" : "text-slate-600";

  return (
    <footer className={`relative ${footerBgClass} border-t pt-20 pb-8 overflow-hidden shadow-2xl ${isDarkMode ? "shadow-black/40" : "shadow-slate-200/60"}`}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                <span className="text-white font-black text-sm">Co</span>
              </div>
              <span className={`font-extrabold text-xl tracking-tight ${textClass}`}>
                Codeo<span className="text-indigo-400">mics</span>
              </span>
            </div>
            <p className={`${subTextClass} text-sm leading-relaxed max-w-xs mb-6`}>
              Building the future of the web, one project at a time. We craft
              digital experiences that captivate, convert, and scale.
            </p>

            {/* Newsletter */}
            <div>
              <p className={`${labelClass} text-sm font-semibold mb-3`}>Stay in the loop</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`flex-1 px-4 py-2.5 rounded-xl ${inputBgClass} border text-sm focus:outline-none focus:border-indigo-500/50 transition-all`}
                />
                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className={`${headingClass} font-bold text-sm mb-4 tracking-wide`}>{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button className={`${linkTextClass} text-sm transition-colors duration-200 text-left`}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t ${bottomBorderClass} flex flex-col md:flex-row items-center justify-between gap-4`}>
          <p className={`${bottomTextClass} text-sm`}>
            © {new Date().getFullYear()} Codeomics. All rights reserved. Built with ❤️ and code.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <button
                key={s}
                className={`${linkTextClass} text-sm transition-colors duration-200`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
