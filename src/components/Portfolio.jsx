import { useState } from "react";

const filters = ["All", "Web App", "E-Commerce", "Landing Page", "SaaS"];

const projects = [
  {
    title: "NovaPay Dashboard",
    category: "SaaS",
    desc: "A sleek fintech SaaS dashboard with real-time analytics, transaction management, and multi-currency support.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    color: "from-indigo-600 to-violet-600",
    accent: "#6366f1",
    emoji: "💳",
    tag: "SaaS",
  },
  {
    title: "LuxeShop",
    category: "E-Commerce",
    desc: "A premium fashion e-commerce platform with 3D product views, wishlist, and instant Stripe checkout.",
    tech: ["React", "Shopify", "Stripe"],
    color: "from-rose-500 to-pink-600",
    accent: "#f43f5e",
    emoji: "👗",
    tag: "E-Commerce",
  },
  {
    title: "TaskFlow Pro",
    category: "Web App",
    desc: "A productivity web app with drag-and-drop task boards, team collaboration, and real-time notifications.",
    tech: ["React", "Node.js", "Socket.io"],
    color: "from-cyan-500 to-teal-600",
    accent: "#06b6d4",
    emoji: "📋",
    tag: "Web App",
  },
  {
    title: "Luminary Agency",
    category: "Landing Page",
    desc: "A high-converting creative agency landing page with micro-animations and a 95+ Lighthouse score.",
    tech: ["Next.js", "Tailwind", "Framer"],
    color: "from-amber-500 to-orange-500",
    accent: "#f59e0b",
    emoji: "✨",
    tag: "Landing Page",
  },
  {
    title: "MedTrack AI",
    category: "SaaS",
    desc: "Healthcare management SaaS featuring AI-powered symptom tracking, patient records, and appointment scheduling.",
    tech: ["Next.js", "OpenAI", "PostgreSQL"],
    color: "from-green-500 to-emerald-600",
    accent: "#10b981",
    emoji: "🏥",
    tag: "SaaS",
  },
  {
    title: "GearUp Store",
    category: "E-Commerce",
    desc: "A gaming accessories store with dynamic filtering, loyalty rewards, and a custom CMS backend.",
    tech: ["React", "WooCommerce", "GraphQL"],
    color: "from-purple-500 to-violet-600",
    accent: "#8b5cf6",
    emoji: "🎮",
    tag: "E-Commerce",
  },
];

export default function Portfolio({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-slate-50";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-slate-200";
  const tagBgClass = isDarkMode ? "bg-white/10 border-white/10 text-gray-400" : "bg-slate-100 border-slate-200 text-slate-600";
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="portfolio" className={`relative py-28 ${sectionBgClass} overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-violet-500/50" : "via-violet-400/30"} to-transparent`} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-violet-400/50"}`}>
            <span>🚀</span> Our Portfolio
          </div>
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-4 tracking-tight`}>
            Work That{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Speaks for Itself
            </span>
          </h2>
          <p className={`${subTextClass} text-lg max-w-2xl mx-auto`}>
            A curated selection of projects where creativity meets technical excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === f
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
                  : `${isDarkMode ? "bg-white/5 border-white/10 text-gray-400" : "bg-slate-100 border-slate-200 text-slate-600"} hover:text-indigo-400 hover:border-indigo-400/50`
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden ${cardBgClass} hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
            >
              {/* Project preview */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                {/* Abstract shapes */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white/10 rotate-45" />
                <span className="relative z-10 text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                  {project.emoji}
                </span>

                {/* Tag badge */}
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`font-bold text-xl mb-2 group-hover:text-indigo-300 transition-colors duration-300 ${textClass}`}>
                  {project.title}
                </h3>
                <p className={`${subTextClass} text-sm leading-relaxed mb-4`}>{project.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg ${tagBgClass} text-xs font-medium border`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View button */}
                <button className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/btn">
                  View Case Study
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <button className={`px-8 py-4 ${isDarkMode ? "bg-white/5 border-white/10 text-white" : "bg-slate-100 border-slate-200 text-slate-900"} hover:bg-indigo-600 hover:text-white border hover:border-indigo-600 font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1`}>
            View All Projects →
          </button>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-violet-500/50" : "via-violet-400/30"} to-transparent`} />
    </section>
  );
}
