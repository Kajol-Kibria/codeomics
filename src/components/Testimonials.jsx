const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaPay",
    avatar: "SM",
    color: "from-indigo-500 to-violet-500",
    text: "Codeomics didn't just build our platform — they transformed our vision into a product that our users genuinely love. The attention to detail and the speed of delivery were exceptional.",
    stars: 5,
  },
  {
    name: "James Thornton",
    role: "Founder, LuxeShop",
    avatar: "JT",
    color: "from-rose-500 to-pink-500",
    text: "Working with Codeomics was a game-changer for our e-commerce business. Conversions increased by 43% after launch. Absolutely phenomenal work and communication throughout.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "CTO, TaskFlow Pro",
    avatar: "PS",
    color: "from-cyan-500 to-teal-500",
    text: "From architecture to deployment, the Codeomics team demonstrated mastery at every level. Clean code, outstanding design, and real-time features that impressed our entire engineering team.",
    stars: 5,
  },
  {
    name: "Marcus Lee",
    role: "Marketing Director, Luminary",
    avatar: "ML",
    color: "from-amber-500 to-orange-500",
    text: "Our new landing page scored 98 on Lighthouse and our bounce rate dropped by 60%. Codeomics delivered exactly what we dreamed of — and more. Will absolutely work together again.",
    stars: 5,
  },
  {
    name: "Aisha Okonkwo",
    role: "COO, MedTrack AI",
    avatar: "AO",
    color: "from-green-500 to-emerald-500",
    text: "The team at Codeomics understood our complex healthcare requirements instantly and delivered a robust, secure, and beautiful platform. Highly recommended for any serious web project.",
    stars: 5,
  },
  {
    name: "Ryan Kowalski",
    role: "Product Lead, GearUp",
    avatar: "RK",
    color: "from-purple-500 to-violet-500",
    text: "Incredible creativity paired with solid technical depth. Codeomics brought our gaming store to life with features we hadn't even imagined. They're a true product partner.",
    stars: 5,
  },
];

export default function Testimonials({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-white";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-slate-50 border-slate-200";
  const trustBgClass = isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200";

  return (
    <section id="testimonials" className={`relative py-28 ${sectionBgClass} overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-pink-500/50" : "via-pink-400/30"} to-transparent`} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-pink-400/50"}`}>
            <span>💬</span> Testimonials
          </div>
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-4 tracking-tight`}>
            Loved by{" "}
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <p className={`${subTextClass} text-lg max-w-2xl mx-auto`}>
            Don't take our word for it — hear from the visionaries we've built alongside.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative p-7 rounded-3xl ${cardBgClass} hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? "border-white/[0.08]" : "border-slate-200"}`}
            >
              {/* Quote mark */}
              <div className={`text-5xl font-black ${isDarkMode ? "text-indigo-500/20" : "text-indigo-400/30"} leading-none mb-4`}>"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <p className={`${subTextClass} text-sm leading-relaxed mb-6 italic`}>"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className={`font-bold text-sm ${textClass}`}>{t.name}</div>
                  <div className={`${subTextClass} text-xs`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className={`mt-16 p-8 rounded-3xl ${trustBgClass} border ${isDarkMode ? "border-indigo-500/20" : "border-slate-300"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "100%", label: "On-Time Delivery" },
              { value: "40+", label: "Happy Clients" },
              { value: "0", label: "Refunds Issued" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {item.value}
                </div>
                <div className={`${subTextClass} text-sm`}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-pink-500/50" : "via-pink-400/30"} to-transparent`} />
    </section>
  );
}
