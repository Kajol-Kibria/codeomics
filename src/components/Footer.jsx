import { FaFacebook } from "react-icons/fa";

const links = {
  Services: [
    "Web Development",
    "Backend & Databases",
    "UI/UX Design",
    "E-Commerce Solutions",
    "Responsive Design",
    "API Integration",
  ],
  Company: [
    { name: "About Us", anchor: "about" },
    { name: "Portfolio", anchor: "portfolio" },
  ],
  Support: [
    { name: "Contact", anchor: "contact" },
    { name: "Services", anchor: "services" },
  ],
};

export default function Footer({ isDarkMode }) {
  // Only for Services, use plain text buttons. For Company and Support, use scrollTo(id).
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const footerBgClass = isDarkMode ? "bg-[#060609] border-white/[0.06]" : "bg-slate-100 border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-500" : "text-slate-500";
  const linkTextClass = isDarkMode ? "text-gray-500 hover:text-indigo-400" : "text-slate-500 hover:text-indigo-600";
  const inputBgClass = isDarkMode
    ? "bg-white/5 border-white/10 text-white placeholder-gray-600"
    : "bg-white border-slate-300 text-slate-900 placeholder-slate-400";
  const bottomTextClass = isDarkMode ? "text-gray-600" : "text-slate-400";
  const bottomBorderClass = isDarkMode ? "border-white/[0.06]" : "border-slate-200";
  const headingClass = isDarkMode ? "text-white" : "text-slate-800";
  const labelClass = isDarkMode ? "text-gray-400" : "text-slate-600";

  return (
    <footer
      className={`relative ${footerBgClass} border-t pt-20 pb-8 overflow-hidden shadow-2xl ${isDarkMode ? "shadow-black/40" : "shadow-slate-200/60"}`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                <span className="text-white font-black text-sm">Co</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-extrabold text-xl tracking-tight leading-none ${textClass}`}>
                  Code<span className="text-indigo-400">omics</span>
                </span>
                <span className={`text-[0.65rem] font-medium tracking-wider uppercase mt-0.5 ${subTextClass}`}>
                  by kibria
                </span>
              </div>
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
                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {/* Services: render as before; Company/Support as working links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className={`${headingClass} font-bold text-sm mb-4 tracking-wide`}>{title}</h4>
              <ul className="space-y-3">
                {title === "Services"
                  ? items.map((item) => (
                      <li key={item}>
                        <button
                          className={`${linkTextClass} text-sm transition-colors duration-200 text-left cursor-pointer`}
                          // Optional: You could link these to their respective sections if you want as well
                          type="button"
                        >
                          {item}
                        </button>
                      </li>
                    ))
                  : items.map((item) => (
                      <li key={item.name}>
                        <button
                          className={`${linkTextClass} text-sm transition-colors duration-200 text-left cursor-pointer`}
                          onClick={() => scrollTo(item.anchor)}
                          type="button"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-8 border-t ${bottomBorderClass} flex flex-col md:flex-row items-center justify-between gap-4`}
        >
          <p className={`${bottomTextClass} text-sm`}>
            © {new Date().getFullYear()} Codeomics. All rights reserved. Built with ❤️ and code.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkTextClass} text-sm transition-colors duration-200`}
              aria-label="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <i>
                {/* Ensure you have installed react-icons and imported FaFacebook */}
                <FaFacebook size={20} />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
