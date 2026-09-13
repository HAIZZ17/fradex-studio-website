import { useState } from "react";
import { Link } from "react-router";
import { discordMessageUrl } from "../contactConfig";

const faqItems = [
  {
    q: "What type of videos do you edit?",
    a: "FRADEX Studio focuses on commentary Shorts. The edit is built around clear hooks, tighter pacing, readable captions, and motion that supports the commentary.",
  },
  {
    q: "What do I need to send before editing starts?",
    a: "Send the raw clip or source link, any script or notes, your preferred style references, and the main point you want the Short to land on.",
  },
  {
    q: "Can you edit from long-form commentary videos?",
    a: "Yes. I can pull a focused idea from longer commentary footage and structure it into a Short with a stronger opening, cleaner pacing, and a clearer payoff.",
  },
  {
    q: "How long does delivery take?",
    a: "Single Shorts usually follow the standard 48-hour delivery window. Batch and monthly projects depend on the agreed schedule and workload.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. Revisions are included based on the package selected. Revisions cover reasonable changes to pacing, captions, timing, motion, and export adjustments.",
  },
  {
    q: "What is the format of the final outcome?",
    a: "The final export is prepared in vertical 9:16 format and ready to upload to different platform unless a different format is requested.",
  },
];

const policyItems = [
  {
    title: "Project Start",
    body: "Editing starts after the required clips, notes, references, and package details are confirmed.",
    accent: "var(--lime)",
  },
  {
    title: "Revision Policy",
    body: "Revisions should stay within the original brief. Major direction changes may require a new quote or adjusted timeline.",
    accent: "var(--cyan)",
  },
  {
    title: "Delivery Policy",
    body: "Delivery timelines begin after all required project materials are received. Larger batches may follow a staged delivery schedule.",
    accent: "var(--coral)",
  },
   {
    title: "Communication",
    body: "Project questions, updates, and related communications will be conducted through Discord to ensure clear and consistent communication.",
    accent: "var(--cyan)",
  },
  {
    title: "Content Ownership",
    body: "Clients are responsible for having the rights to all footage, audio, images, and references provided for editing.",
    accent: "var(--purple)",
  },
 
];

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: 'rgba(0,212,255,0.15)', color: 'var(--cyan)'  }}>
            HELP CENTER
          </span>
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>Questions, workflow, and policies</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.08] tracking-normal mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
          Clear answers before
          <br />
          we start editing.
        </h1>
        <p className="text-lg max-w-3xl leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          A quick guide to how FRADEX Studio handles commentary Shorts projects, revisions, delivery, and client materials.
        </p>
      </section>

      <section className="max-w-6xl border-t mx-auto mb-5" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: 'rgba(155,109,255,0.15)', color: 'var(--purple)', }}>FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>Common questions</h2>
          <div className="max-w-3xl space-y-4">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;

              return (
                <div key={item.q} className="rounded-2xl overflow-hidden transition-all" style={{ background: "var(--card)", border: isOpen ? "1px solid rgba(202,255,0,0.35)" : "1px solid var(--border)" }}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="text-s font-bold pr-4">{item.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs transition-colors" style={{ background: isOpen ? "rgba(202,255,0,0.12)" : "var(--secondary)", color: isOpen ? "var(--lime)" : "var(--muted-foreground)" }}>
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-s leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className=" max-w-6xl mx-auto border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(255,92,71,0.15)", color: "var(--coral)" }}>POLICIES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>Project policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policyItems.map((item) => (
              <article key={item.title} className="rounded-2xl p-6 min-h-[190px] flex flex-col" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="w-9 h-1.5 rounded-full mb-5" style={{ background: item.accent, boxShadow: `0 0 18px ${item.accent}40` }} />
                <h3 className="text-lg font-black mb-3" style={{ fontFamily: "Manrope, sans-serif", color: item.accent }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pt-8 pb-4">
        <div className="relative rounded-2xl p-7 md:p-9 overflow-hidden" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] mb-3" style={{ color: "var(--lime)" }}>Need a specific answer?</p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Send the project details and I’ll confirm the best package.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href={discordMessageUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 text-sm font-black rounded-xl transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg, var(--lime), #a8e600)", color: "#000", boxShadow: "0 0 20px rgba(202,255,0,0.25)" }}>
                Message on Discord
              </a>
              <Link to="/contact" className="px-5 py-3 text-sm font-bold rounded-xl border transition-all" style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}>
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
