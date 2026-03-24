const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Discovery & Strategy",
    desc: "We deep-dive into your goals, audience, and competitors to craft a clear digital strategy tailored to your success.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    num: "02",
    icon: "🎨",
    title: "Design & Prototype",
    desc: "Our designers craft pixel-perfect wireframes and interactive prototypes in Figma before a single line of code is written.",
    color: "from-violet-500 to-purple-500",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Develop & Test",
    desc: "We build with clean, scalable code using modern frameworks, with rigorous testing across all devices and browsers.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch & Grow",
    desc: "We deploy, monitor, and optimize your product post-launch, ensuring peak performance and continuous improvement.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Process({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-slate-50";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-slate-200";
  const ctaBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-slate-100 border-slate-200";

  return (
    <section id="process" className={`relative py-28 ${sectionBgClass} overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-green-400/50"}`}>
            <span>🗺️</span> Our Process
          </div>
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-4 tracking-tight`}>
            How We{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className={`${subTextClass} text-lg max-w-2xl mx-auto`}>
            A refined, transparent process that ensures every project is
            delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group relative flex flex-col items-center text-center p-6 rounded-3xl ${cardBgClass} hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-500 ${isDarkMode ? "border-white/[0.07]" : "border-slate-300"}`}
              >
                {/* Step number bubble */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Number tag */}
                <div className={`text-xs font-black mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent tracking-widest`}>
                  STEP {step.num}
                </div>

                <h3 className={`font-bold text-lg mb-3 group-hover:text-indigo-300 transition-colors duration-300 ${textClass}`}>
                  {step.title}
                </h3>
                <p className={`${subTextClass} text-sm leading-relaxed`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className={`mt-16 p-8 rounded-3xl ${ctaBgClass} border ${isDarkMode ? "border-indigo-500/20" : "border-slate-300"} flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div>
            <h3 className={`font-black text-2xl mb-1 ${textClass}`}>Ready to get started?</h3>
            <p className={`${subTextClass} text-sm`}>Let's kick off your project today. Free consultation included.</p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-pointer shrink-0 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Book Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}
