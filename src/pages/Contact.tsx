import { useState } from "react";
import { discordMessageUrl } from "../contactConfig";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const projectTypes = ["Single Short", "Batch Edit (7 shorts)", "Monthly Creator Package (30 shorts)", "Not sure yet"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", channelLink: "", projectType: "", deadline: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [focused, setFocused] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const filled = [form.name, form.email, form.projectType, form.message].filter(Boolean).length;
  const progress = Math.round((filled / 4) * 100);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    if (!isSupabaseConfigured || !supabase) {
      setSubmitError("Contact form is not connected yet. Please message me on Discord instead.");
      setSubmitting(false);
      return;
    }

    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      package: form.projectType,
      message: form.message.trim(),
    });

    if (error) {
      setSubmitError("Message could not be sent. Please try again or message me on Discord.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  const baseInput = {
    background: "var(--secondary)",
    color: "var(--foreground)",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 14,
    width: "100%",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  };

  function fieldStyle(name: string) {
    const active = focused === name;
    return {
      ...baseInput,
      border: active ? "1px solid var(--lime)" : "1px solid var(--border)",
      boxShadow: active ? "0 0 0 3px rgba(202,255,0,0.1)" : "none",
    };
  }

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(255,92,71,0.15)", color: "var(--coral)" }}>CONTACT</span>
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>New client quest</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.08] tracking-normal mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
          Let's talk<br />about your shorts.
        </h1>
        <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
          Fill out the form or jump straight to Discord — whichever is faster for you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 mt-5">
          {/* Form */}
          <div className="rounded-2xl p-8" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl" style={{ background: "rgba(202,255,0,0.12)", border: "1px solid var(--lime)", boxShadow: "0 0 24px rgba(202,255,0,0.2)" }}>
                  ✓
                </div>
                <span className="inline-block text-xs font-black px-2 py-0.5 rounded mb-3" style={{ background: "rgba(202,255,0,0.15)", color: "var(--lime)" }}>QUEST ACCEPTED</span>
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "Manrope, sans-serif", color: "var(--lime)" }}>Message sent.</h3>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>We'll get back to you within a few hours. If it's urgent, shoot us on Discord.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Progress bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold" style={{ color: "var(--muted-foreground)" }}>Form completion</span>
                    <span className="text-xs font-black" style={{ color: "var(--lime)" }}>{progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: "linear-gradient(90deg, var(--lime), var(--cyan))", boxShadow: progress > 0 ? "0 0 8px rgba(202,255,0,0.4)" : "none" }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>Name</label>
                    <input name="name" type="text" required placeholder="Your name or handle" value={form.name} onChange={handleChange}
                      style={fieldStyle("name")} onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>Email</label>
                    <input name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange}
                      style={fieldStyle("email")} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>Project Type</label>
                  <select name="projectType" required value={form.projectType} onChange={handleChange}
                      style={{ ...fieldStyle("projectType"), appearance: "none" as const }}
                      onFocus={() => setFocused("projectType")} onBlur={() => setFocused("")}>
                      <option value="" disabled>Select a package</option>
                      {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your requirements, questions, and how we can reach you..." value={form.message} onChange={handleChange}
                    style={{ ...fieldStyle("message"), resize: "vertical" }}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
                </div>

                <button type="submit" className="w-full text-sm font-black py-4 rounded-xl transition-all hover:brightness-110 active:scale-95"
                  disabled={submitting}
                  style={{ background: "linear-gradient(135deg, var(--lime), #a8e600)", color: "#000", boxShadow: "0 0 24px rgba(202,255,0,0.25)", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}>
                  {submitting ? "Sending..." : "Send Message →"}
                </button>
                {submitError && (
                  <p className="text-sm font-semibold text-center" style={{ color: "var(--coral)" }}>{submitError}</p>
                )}
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-6" style={{ background: "var(--secondary)", border: "1px solid var(--border)", boxShadow: "0 0 24px rgba(202,255,0,0.06)" }}>
              <span className="inline-block text-xs font-black px-2 py-0.5 rounded mb-3" style={{ background: "rgba(202,255,0,0.15)", color: "var(--lime)" }}>⚡ FASTEST RESPONSE</span>
              <h3 className="font-black text-lg mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>Message on Discord</h3>
              <p className="text-sm mb-5" style={{ color: "var(--muted-foreground)" }}>
                Discord is the fastest way to reach me — I reply within a few hours, and sharing files is easier.
              </p>
              <a href={discordMessageUrl} target="_blank" rel="noopener noreferrer"
                className="block text-center text-sm font-black px-5 py-3 rounded-xl transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, var(--lime), #a8e600)", color: "#000", boxShadow: "0 0 16px rgba(202,255,0,0.25)" }}>
                Message me on Discord ↗
              </a>
            </div>

            <div className="rounded-2xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: "var(--muted-foreground)" }}>What to include</p>
              <ul className="space-y-3">
                {[
                  { icon: "🎬", label: "How many shorts", detail: "Single, batch, or monthly?" },
                  { icon: "📅", label: "Timeline", detail: "When do you need them?" },
                  { icon: "⭐", label: "Reference short", detail: "Optional style reference" },
                ].map(({ icon, label, detail }) => (
                  <li key={label} className="flex items-start gap-2.5">
                    <span className="text-sm shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <p className="text-sm font-semibold">{label}</p>
                      <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-4 flex items-center gap-3" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,212,255,0.12)", color: "var(--cyan)" }}>⚡</div>
              <div>
                <p className="font-bold text-sm">Fast replies</p>
                <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>Usually within a few hours, same day most times</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
