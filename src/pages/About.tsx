import { discordMessageUrl } from "../contactConfig";

const principles = [
  { title: "Clear pacing", body: "Dead air kills retention. Every edit starts with aggressive cuts, removing filler, silence, and repeated phrases.", color: "var(--coral)", icon: "⏱️" },
  { title: "Readable captions", body: "Captions are sized, weighted, and timed so they support commentary without distracting from the point.", color: "var(--cyan)", icon: "💬" },
  { title: "Strong hooks", body: "The first 3 seconds decide everything. Clips are reordered to open on tension, conflict, or a question.", color: "var(--purple)", icon: "🪝" },
  { title: "Commentary-first edit", body: "Every effect has a job: hold attention, emphasize a point, or land a joke. Nothing is added just to look busy.", color: "var(--lime)", icon: "🎯" },
];

const bestFor = [
  { label: "Creators who value premium editing", detail: "looking for advanced visuals, dynamic effects, and polished storytelling" },
  { label: "Commentary creators", detail: "who want Shorts that grab attention from the first second" },
  { label: "Growing channels", detail: "looking to improve retention, pacing, and viewer engagement" },
  { label: "Story-driven commentary", detail: "that needs strong visuals, captions, and seamless pacing" },
];


const notFor = [
  "Highly produced cinematic content (not our specialty)",
  "Pure talking-head vlogs with no commentary structure",
];

const toolStack = [
  { name: "Premiere Pro", role: "Batch export workflows", tag: "PRO" },
  { name: "CapCut", role: "Rapid caption prototyping", tag: "TOOL" },
  { name: "ElevenLabs", role: "AI VO for b-roll narration", tag: "AI" },
];

const milestones = [
  {
    year: "2024",
    label: "Growing With Creators",
    detail: "Expanded our work with YouTube creators, building a reliable process for producing high-quality content at scale.",
    color: "var(--cyan)"
  },
  {
    year: "2025",
    label: "Short-Form Specialisation",
    detail: "Focused on YouTube Shorts, refining our editing around stronger hooks, pacing, retention, and viewer engagement.",
    color: "var(--coral)"
  },
  {
    year: "2026",
    label: "Commentary Specialists",
    detail: "Dedicated our expertise to YouTube commentary Shorts, with 140+ projects delivered and a focus on content built to perform.",
    color: "var(--lime)"
  },
];


export default function About() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: "rgba(155,109,255,0.15)", color: "var(--purple)" }}>About Us</span>
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>LVL 12 SHORTS EDITOR</span>
        </div>
        </section>

      {/* Skill bars + principles */}
      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="space-y-5">
          {/* Studio card */}
          <div className="max-w-4xl rounded-2xl p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-lg overflow-hidden shrink-0 flex items-center justify-center" style={{ background: "#0b0b0d" }}>
                <img src="/brand/fradex-logo.png" alt="FRADEX logo" className="w-full h-full object-cover" />
              </span>
              <div>
                <p className="font-black text-lg md:text-xl leading-none" style={{ fontFamily: "Manrope, sans-serif" }}>FRADEX Studio</p>
                <p className="text-xs md:text-sm mt-1 font-bold" style={{ color: "var(--purple)" }}>LEVEL 12 · COMMENTARY SHORTS EDITOR</p>
              </div>
            </div>
            
              <div className="grid grid-cols-3 gap-3 md:w-[380px] gap-x-3">
              {[["142", "Projects"], ["98%", "On time"], ["4.9★", "Rating"]].map(([val, lbl]) => (
                <div key={lbl} className="rounded-xl px-3 py-2 text-center" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <p className="text-sm font-black leading-none" style={{ fontFamily: "Manrope, sans-serif", color: "var(--foreground)" }}>{val}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{lbl}</p>
                </div>
              ))}
              </div>
              
            </div>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="relative min-h-[250px] rounded-2xl p-6 flex flex-col" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="min-h-[3.5rem] flex items-start flex-col gap-3 mb-4">
                  <span className="text-3xl shrink-0 leading-none mb-5">{p.icon}</span>
                  <h3 className="font-black text-base leading-tight" style={{ fontFamily: "Manrope, sans-serif", color: p.color }}>{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best for / Not for */}
      <section className="max-w-6xl mx-auto px-5 py-5 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(0,212,255,0.15)", color: "var(--cyan)" }}>✓ BEST FIT</span>
            </div>
            <h2 className="text-2xl font-black mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>Who this is for</h2>
            <ul className="space-y-5">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <span className="mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center text-xs shrink-0" style={{ background: "rgba(0,212,255,0.15)", color: "var(--cyan)" }}>✓</span>
                  <div>
                    <p className="font-bold text-sm">{item.label}</p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(255,92,71,0.15)", color: "var(--coral)" }}>✕ NOT A FIT</span>
            </div>
            <h2 className="text-2xl font-black mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>Who this isn't for</h2>
            <ul className="space-y-5 mb-8">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <span className="mt-0.5 text-xs shrink-0" style={{ color: "var(--coral)" }}>✕</span>
                  <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{item}</p>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl p-6" style={{ background: "var(--secondary)", border: "1px solid var(--border)", boxShadow: "0 0 24px rgba(202,255,0,0.06)" }}>
              <p className="font-black text-base mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>Not sure if we're a fit?</p>
              <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>Shoot me a message on Discord. I'll give you an honest answer.</p>
              <a href={discordMessageUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-black px-5 py-2.5 rounded-xl transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg, var(--lime), #a8e600)", color: "#000" }}>
                Message on Discord
              </a>
            </div>
          </div>
        </div>

      </section>
      {/* Journey timeline */}
      <section className=" max-w-6xl mx-auto border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(99,102,241,0.12)", color: "var(--purple)" }}>JOURNEY</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-10" style={{ fontFamily: "Manrope, sans-serif" }}>How the specialisation happened</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px hidden md:block" style={{ background: "var(--border)" }} />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-xs z-10" style={{ background: m.color, color: "#fff", boxShadow: `0 0 0 4px var(--background)` }}>
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1 rounded-2xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black" style={{ color: m.color }}>{m.year}</span>
                      <span className="text-sm font-black" style={{ fontFamily: "Manrope, sans-serif" }}>{m.label}</span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Stack */}
      <section className="max-w-6xl mx-auto border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(245,158,11,0.12)", color: "var(--coral)" }}>TOOLS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: "Manrope, sans-serif" }}>Editing stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toolStack.map((t) => (
              <div key={t.name} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                  {t.tag === "PRO" ? "🎬" : t.tag === "AI" ? "🤖" : "🛠"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-black text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>{t.name}</p>
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded"
                      style={{
                        background: t.tag === "PRO" ? "rgba(61,139,255,0.12)" : t.tag === "AI" ? "rgba(99,102,241,0.12)" : "rgba(14,165,233,0.12)",
                        color: t.tag === "PRO" ? "var(--lime)" : t.tag === "AI" ? "var(--purple)" : "var(--cyan)",
                      }}>
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-xs truncate" style={{ color: "var(--muted-foreground)" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
