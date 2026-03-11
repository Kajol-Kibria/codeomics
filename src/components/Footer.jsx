const links = {
  Services: ["Web Development", "UI/UX Design", "E-Commerce", "Cloud & DevOps", "API Integration"],
  Company: ["About Us", "Portfolio", "Blog", "Careers", "Press Kit"],
  Support: ["FAQ", "Documentation", "Contact", "Privacy Policy", "Terms of Service"],
};

export default function Footer({ isDarkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060609] border-t border-white/[0.06] pt-20 pb-8 overflow-hidden shadow-2xl shadow-black/40">
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
              <span className="text-white font-extrabold text-xl tracking-tight">
                Codo<span className="text-indigo-400">mics</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Building the future of the web, one project at a time. We craft
              digital experiences that captivate, convert, and scale.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-gray-400 text-sm font-semibold mb-3">Stay in the loop</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-all"
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
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200 text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Codomics. All rights reserved. Built with ❤️ and code.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <button
                key={s}
                className="text-gray-600 hover:text-indigo-400 text-sm transition-colors duration-200"
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
