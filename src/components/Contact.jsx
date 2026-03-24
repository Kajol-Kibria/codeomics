import { useState } from "react";

// ─── Google Apps Script ────────────────────────────────────────
// Paste your deployed Google Apps Script web app URL below.
// See google-apps-script.js in the project root for the script code & setup steps.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwwpSaeixNHsANJTxftf6mrzriYMTfWSSjoMNmAcKxPieaofKDeRFQmBNReYiWwK1OhAQ/exec";

export default function Contact({ isDarkMode }) {
  const sectionBgClass = isDarkMode ? "bg-[#0a0a0f]" : "bg-slate-50";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBgClass = isDarkMode ? "bg-white/[0.03] border-white/[0.08]" : "bg-white border-slate-200";
  const inputBgClass = isDarkMode ? "bg-white/5 border-white/10 text-white placeholder-gray-500" : "bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-500";
  const budgetBgClass = isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200";
  const budgetActiveClass = "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30";

  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        budget: form.budget || "Not specified",
        message: form.message,
      }),
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to send message. Please try again or email us directly.");
        console.error("Form submission error:", err);
      });
  };

  const budgets = ["৳ 5000 – ৳ 15,000", "৳ 15,000 – ৳ 30,000", "৳ 30,000+", "Let's Discuss"];

  return (
    <section id="contact" className={`relative py-28 ${sectionBgClass} overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDarkMode ? "via-indigo-500/50" : "via-indigo-400/30"} to-transparent`} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6 ${isDarkMode ? "" : "border-indigo-400/50"}`}>
            <span>📬</span> Get In Touch
          </div>
          <h2 className={`text-4xl md:text-5xl font-black ${textClass} mb-4 tracking-tight`}>
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className={`${subTextClass} text-lg max-w-2xl mx-auto`}>
            Have a project in mind? We'd love to hear about it. Drop us a message and
            we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              {
                icon: "📧",
                label: "Email Us",
                value: "kajolkibria95@gmail.com",
                sub: "We reply within 24 hours",
                gradient: "from-indigo-600/20 to-violet-600/20",
                border: "border-indigo-500/20",
              },
              {
                icon: "💬",
                label: "Live Chat",
                value: "Start a conversation",
                sub: "Available Mon–Fri, 9AM–6PM",
                gradient: "from-cyan-600/20 to-teal-600/20",
                border: "border-cyan-500/20",
              },
              {
                icon: "📍",
                label: "Studio",
                value: "Remote-First, Global Reach",
                sub: "Serving clients worldwide",
                gradient: "from-violet-600/20 to-purple-600/20",
                border: "border-violet-500/20",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`p-5 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.border} hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className={`${subTextClass} text-xs font-semibold uppercase tracking-widest mb-1`}>
                      {item.label}
                    </div>
                    <div className={`font-bold text-sm ${textClass}`}>{item.value}</div>
                    <div className={`${subTextClass} text-xs mt-0.5`}>{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            {/* <div>
              <p className={`${subTextClass} text-xs font-semibold uppercase tracking-widest mb-3`}>
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { icon: "𝕏", label: "Twitter" },
                  { icon: "in", label: "LinkedIn" },
                  { icon: "◻", label: "GitHub" },
                  { icon: "▶", label: "YouTube" },
                ].map((s) => (
                  <button
                    key={s.label}
                    className={`w-10 h-10 rounded-xl ${isDarkMode ? "bg-white/5 border-white/10 text-gray-400" : "bg-slate-100 border-slate-200 text-slate-600"} border hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white text-xs font-bold transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className={`p-8 rounded-3xl ${cardBgClass} backdrop-blur-sm`}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className={`font-black text-2xl mb-2 ${textClass}`}>Message Sent!</h3>
                  <p className={`${subTextClass}`}>
                    Thanks for reaching out! We'll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", budget: "", message: "" }); }}
                    className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block ${subTextClass} text-sm font-medium mb-2`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl ${inputBgClass} focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm`}
                      />
                    </div>
                    <div>
                      <label className={`block ${subTextClass} text-sm font-medium mb-2`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Your email address"
                        className={`w-full px-4 py-3 rounded-xl ${inputBgClass} focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm`}
                      />
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div>
                    <label className={`block ${subTextClass} text-sm font-medium mb-2`}>
                      Project Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${form.budget === b
                            ? budgetActiveClass
                            : `${budgetBgClass} ${isDarkMode ? "text-gray-400" : "text-slate-600"} border hover:border-indigo-500/40 hover:text-indigo-400`
                            }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block ${subTextClass} text-sm font-medium mb-2`}>
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                      className={`w-full px-4 py-3 rounded-xl ${inputBgClass} focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed text-base cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 60" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>

                  {error && (
                    <p className="text-red-400 text-sm text-center font-medium">
                      {error}
                    </p>
                  )}

                  <p className={`${subTextClass} text-xs text-center`}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
