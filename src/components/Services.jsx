const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Custom, scalable websites and web applications built with modern frameworks like Next.js, React, and TypeScript.",
    tags: ["Next.js", "React", "TypeScript"],
    gradient: "from-indigo-500 to-blue-500",
    glow: "shadow-indigo-500/20",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Intuitive, visually compelling interfaces crafted with Figma and design systems that convert visitors to customers.",
    tags: ["Figma", "Tailwind", "Design Systems"],
    gradient: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with seamless checkout, inventory management, and payment integrations.",
    tags: ["Shopify", "WooCommerce", "Stripe"],
    gradient: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Reliable deployment pipelines, hosting infrastructure, and CI/CD workflows for zero-downtime delivery.",
    tags: ["AWS", "Vercel", "Docker"],
    gradient: "from-cyan-500 to-teal-500",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Pixel-perfect experiences across all screen sizes — mobile, tablet, and desktop — with flawless performance.",
    tags: ["Mobile-First", "PWA", "Performance"],
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
  {
    icon: "🔌",
    title: "API & Integrations",
    desc: "Seamless third-party integrations, REST & GraphQL APIs, and backend services to power your digital ecosystem.",
    tags: ["REST API", "GraphQL", "Node.js"],
    gradient: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/20",
  },
];

export default function Services({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-slate-50";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-slate-200";
  const tagBgClass = isDarkMode ? "bg-white/5 border-white/10 text-gray-400" : "bg-slate-100 border-slate-200 text-slate-600";
  const arrowColorClass = isDarkMode ? "text-gray-700" : "text-slate-400";

  return (
    <section id="services" className={`relative py-28 ${sectionBgClass} overflow-hidden`}>
      {/* Background decoration */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-indigo-500/50" : "via-indigo-400/30"} to-transparent`} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-indigo-400/50"}`}>
            <span>⚡</span> What We Do
          </div>
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-4 tracking-tight`}>
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className={`${subTextClass} text-lg max-w-2xl mx-auto`}>
            From concept to deployment, we deliver end-to-end web solutions that
            are built to scale, designed to impress, and engineered to last.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`group relative p-7 rounded-3xl ${cardBgClass} hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${svc.glow} backdrop-blur-sm cursor-pointer`}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {svc.icon}
              </div>

              <h3 className={`font-bold text-xl mb-3 group-hover:text-indigo-300 transition-colors duration-300 ${textClass}`}>
                {svc.title}
              </h3>
              <p className={`${subTextClass} text-sm leading-relaxed mb-5`}>{svc.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full ${tagBgClass} text-xs font-medium group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all duration-300`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className={`absolute top-7 right-7 ${arrowColorClass} group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}>
                →
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-indigo-500/50" : "via-indigo-400/30"} to-transparent`} />
    </section>
  );
}
