const stack = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟩" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◈" },
  { name: "AWS", icon: "☁" },
];

const values = [
  {
    icon: "🎯",
    title: "Precision-Driven",
    desc: "Every pixel and line of code is intentional, crafted for performance and clarity.",
  },
  {
    icon: "🔥",
    title: "Innovation First",
    desc: "We embrace cutting-edge technologies to future-proof every solution we deliver.",
  },
  {
    icon: "🤝",
    title: "Partnership Mindset",
    desc: "We treat every client as a long-term partner, not just a transaction.",
  },
  {
    icon: "⚡",
    title: "Speed & Quality",
    desc: "Fast delivery without compromising on code quality, security, or scalability.",
  },
];

export default function About({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-white";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-slate-50 border-slate-200";
  const valueBgClass = isDarkMode ? "bg-white/5" : "bg-slate-100";
  const statBgClass = isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200";
  const skillBgClass = isDarkMode ? "bg-white/5" : "bg-slate-100";
  const skillFillClass = "bg-gradient-to-r from-indigo-500 to-violet-500";

  return (
    <section id="about" className={`relative py-28 ${sectionBgClass} overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-cyan-500/50" : "via-cyan-400/30"} to-transparent`} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            {/* Main card */}
            <div className={`relative rounded-3xl ${cardBgClass} border ${isDarkMode ? "border-indigo-500/20" : "border-slate-300"} p-8 backdrop-blur-sm`}>
              {/* Logo / Brand block */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40">
                  <span className="text-white font-black text-2xl">Co</span>
                </div>
                <div>
                  <div className={`font-black text-2xl ${textClass}`}>Codeomics</div>
                  <div className="text-indigo-400 text-sm">Web Solutions Provider</div>
                </div>
              </div>

              {/* Tech stack chips */}
              <div className="mb-6">
                <p className={`${subTextClass} text-xs font-semibold uppercase tracking-widest mb-3`}>
                  Our Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${isDarkMode ? "bg-white/5 border-white/10 text-gray-300" : "bg-slate-100 border-slate-200 text-slate-700"} text-xs font-medium hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-300 cursor-default`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {[
                  { label: "Frontend Development", pct: 98 },
                  { label: "Backend & APIs", pct: 92 },
                  { label: "UI/UX Design", pct: 90 },
                  { label: "DevOps & Deployment", pct: 85 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className={`${subTextClass} text-xs font-medium`}>{item.label}</span>
                      <span className="text-indigo-400 text-xs font-bold">{item.pct}%</span>
                    </div>
                    <div className={`h-1.5 ${skillBgClass} rounded-full overflow-hidden`}>
                      <div
                        className={`h-full rounded-full ${skillFillClass}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl px-4 py-3 shadow-2xl shadow-indigo-500/40">
              <div className="text-white font-black text-2xl">5+</div>
              <div className="text-indigo-200 text-xs">Years</div>
            </div>
            <div className={`absolute -bottom-6 -left-6 ${statBgClass} border rounded-2xl px-4 py-3 shadow-2xl`}>
              <div className={`font-black text-2xl ${textClass}`}>150+</div>
              <div className={`${subTextClass} text-xs`}>Projects Done</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-cyan-400/50"}`}>
              <span>💡</span> About Codeomics
            </div>

            <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-6 leading-tight tracking-tight`}>
              Turning Ideas Into
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Realities
              </span>
            </h2>

            <p className={`${subTextClass} text-base leading-relaxed mb-6`}>
              Codeomics is a full-service web solutions studio born from a passion for clean code
              and beautiful design. We partner with startups, growing businesses, and enterprises
              to build digital products that users love.
            </p>
            <p className={`${subTextClass} text-base leading-relaxed mb-8`}>
              Our multidisciplinary team of designers, developers, and strategists brings together
              deep technical expertise and creative vision to deliver solutions that go beyond
              expectations — on time, every time.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className={`p-4 rounded-2xl ${valueBgClass} border ${isDarkMode ? "border-white/[0.08]" : "border-slate-300"} hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group cursor-default`}
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className={`font-bold text-sm mb-1 ${textClass} group-hover:text-indigo-300 transition-colors`}>
                    {v.title}
                  </div>
                  <div className={`${subTextClass} text-xs leading-relaxed`}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-cyan-500/50" : "via-cyan-400/30"} to-transparent`} />
    </section>
  );
}
