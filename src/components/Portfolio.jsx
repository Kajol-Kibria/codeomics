import react, { useEffect, useState } from "react";

const projects = [
  {
    title: "UniClub Kibria",
    category: "E-Commerce",
    desc: "A modern clothing ecommerce platform featuring fast performance and responsive design.",
    tech: ["React.js", "Tailwind CSS"],
    tag: "E-Commerce",
    link: "https://uniclub-kibria.vercel.app",
    image: "/images/monochrome.png",
  },
  {
    title: "Kibria Shoes",
    category: "E-Commerce",
    desc: "A modern and unique clothing ecommerce platform with fast, responsive design.",
    tech: ["Next.js", "Stripe", "Vercel"],
    tag: "E-Commerce",
    link: "https://kibria-shoes.vercel.app",
    image: "/images/kibria-shoes.png",
  },
  {
    title: "Dark Mono Kibria",
    category: "E-Commerce",
    desc: "Minimal and unique clothing ecommerce with fast performance and responsive design.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    tag: "E-Commerce",
    link: "https://dark-mono-kibria.vercel.app",
    image: "/images/dark-monochrome.png",
  },
  {
    title: "Admin Kibria",
    category: "Dashboard",
    desc: "A fast and responsive admin panel for ecommerce statistics and management.",
    tech: ["React", "Ant Design", "Chart.js"],
    tag: "Dashboard",
    link: "https://admin-kibria.vercel.app",
    image: "/images/fashion-dashboard.png",
  },
  {
    title: "Evanik App",
    category: "SaaS",
    desc: "A sleek fintech SaaS dashboard with real-time analytics, transaction management, and multi-currency support.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    tag: "SaaS",
    link: "https://evanik.vercel.app",
    image: "/images/evanik.png",
  },
  {
    title: "Kibria Admin",
    category: "Dashboard",
    desc: "Admin dashboard for Kibria platform with blazing fast performance and rich controls.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    tag: "Dashboard",
    link: "https://kibria-admin.vercel.app",
    image: "/images/evanik-dashboard.png",
  },

  {
    title: "Kibria Judiciary",
    category: "Dashboard",
    desc: "Custom judiciary portal for legal case management and workflow tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    tag: "Dashboard",
    link: "https://kibria-judiciary.vercel.app",
    image: "/images/kibria-judiciary.png",
  },

  {
    title: "Dental Kibria",
    category: "Landing Page",
    desc: "Minimalist dental clinic solution for multilingual appointment booking and clinical records.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    tag: "Landing Page",
    link: "https://dental-kibria.vercel.app",
    image: "/images/dental-kibria.png",
  },
  {
    title: "Furniture Kibria",
    category: "E-Commerce",
    desc: "Contemporary furniture online store with smart recommendations and smooth checkout.",
    tech: ["Next.js", "React", "Stripe"],
    tag: "E-Commerce",
    link: "https://furniture-kibria.vercel.app",
    image: "/images/furniture.png",
  },
  {
    title: "Noir Kibria",
    category: "E-Commerce",
    desc: "A premium black-themed e-commerce experience for fashion and lifestyle brands.",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    tag: "E-Commerce",
    link: "https://noir-kibria.vercel.app",
    image: "/images/nior-kibria.png",
  },
  {
    title: "Kibs Shoes",
    category: "E-Commerce",
    desc: "A bright, energetic multi-brand shoe store with modern e-commerce features.",
    tech: ["Next.js", "Tailwind CSS", "Stripe"],
    tag: "E-Commerce",
    link: "https://kibs-shoes.vercel.app",
    image: "/images/kibs-shoes.png",
  },

  {
    title: "Builder Kibria",
    category: "Landing Page",
    desc: "A lightning-fast, fully responsive landing page crafted for engineers and developers to showcase their work and services.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    tag: "Landing Page",
    link: "https://builder-kibria.vercel.app",
    image: "/images/builder.png",
  },
  {
    title: "Mediomics",
    category: "SaaS",
    desc: "A smart SaaS platform that suggests personalized food, diet, and medication options based on a user's signs and symptoms, empowering better health decisions.",
    tech: ["Next.js", "TypeScript", "Chakra UI"],
    tag: "SaaS",
    link: "https://mediomics.vercel.app",
    image: "/images/mediomics.png",
  },
];

// Dynamically generate filters based on tags in projects (including All)
const tagSet = new Set(projects.map((p) => p.tag));
const filters = ["All", ...Array.from(tagSet)];

const SHOW_COUNT = 6; // number to show initially, chunk size for "Show more"

export default function Portfolio({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-slate-50";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode
    ? "bg-white/[0.03] border-white/[0.08]"
    : "bg-white border-slate-200";
  const tagBgClass = isDarkMode
    ? "bg-white/10 border-white/10 text-gray-400"
    : "bg-slate-100 border-slate-200 text-slate-600";
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(SHOW_COUNT);

  // Reset visibleCount when filter changes
  // eslint-disable-next-line
  useEffect(() => {
    setVisibleCount(SHOW_COUNT);
  }, [active]);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  const shownProjects = filtered.slice(0, visibleCount);

  const hasMore = visibleCount < filtered.length;

  function handleShowMore(e) {
    e.preventDefault();
    setVisibleCount((c) => Math.min(filtered.length, c + SHOW_COUNT));
  }

  return (
    <section
      id="portfolio"
      className={`relative py-28 ${sectionBgClass} overflow-hidden`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-violet-500/50" : "via-violet-400/30"
          } to-transparent`}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-violet-400/50"
              }`}
          >
            <span>🚀</span> Our Portfolio
          </div>
          <h2
            className={`text-4xl md:text-5xl font-black ${textClass} mb-4 tracking-tight`}
          >
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
              className={`cursor-pointer px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${active === f
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
                : `${isDarkMode
                  ? "bg-white/5 border-white/10 text-gray-400"
                  : "bg-slate-100 border-slate-200 text-slate-600"
                } hover:text-indigo-400 hover:border-indigo-400/50`
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shownProjects.map((project, i) => (
            <a
              href={project.link}
              target="_blank">


              <div
                key={i}
                className={`group relative rounded-3xl overflow-hidden ${cardBgClass} hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer`}
              >
                {/* Project preview */}
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                  {/* <div className="absolute inset-0 bg-black/20" /> */}
                  {/* Abstract shapes */}
                  {/* <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white/10 rotate-45" />
                <span className="relative z-10 text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                  {project.emoji}
                </span> */}

                  {/* Tag badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`font-bold text-xl mb-2 group-hover:text-indigo-300 transition-colors duration-300 ${textClass}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${subTextClass} text-sm leading-relaxed mb-4`}
                  >
                    {project.desc}
                  </p>

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

                  {/* View button, now links to project.link in new tab */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/btn"
                  >
                    Live preview
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          {hasMore && (
            <a
              href="#portfolio"
              onClick={handleShowMore}
              className={`px-8 py-4 ${isDarkMode
                ? "bg-white/5 border-white/10 text-white"
                : "bg-slate-100 border-slate-200 text-slate-900"
                } hover:bg-indigo-600 hover:text-white border hover:border-indigo-600 font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              Show more
            </a>
          )}
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-violet-500/50" : "via-violet-400/30"
          } to-transparent`}
      />
    </section>
  );
}
