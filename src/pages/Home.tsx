import { useState } from "react";
import { Link } from "react-router";
import { discordMessageUrl } from "../contactConfig";

const homeSampleVideo = "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Snow.mp4";
const homeSampleThumbnail = "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Snow%20thumbnails.png";

const stats = [
  { val: "90 + %", label: "Avg retention rate", color: "var(--lime)"},
  { val: "48 hr", label: "Standard delivery", color: "var(--cyan)"},
  { val: "2–3×", label: "Rewatch multiplier", color: "var(--coral)"},
];

const achievements = [
  { icon: "🎯", label: "Hook Master", desc: "100+ first-3s hooks crafted", color: "var(--lime)" },
  { icon: "⚡", label: "Speed Editor", desc: "48hr guaranteed delivery", color: "var(--cyan)" },
  { icon: "🔥", label: "Retention King", desc: "100%+ Retention on Multiple Shorts", color: "var(--coral)" },
];

const reviews = [
  {
    name: "Aiden",
    quote: "The pacing felt so much cleaner. The hook landed faster, the captions matched my style, and the short was ready to post without overthinking it.",
    initial: "A",
    accent: "var(--lime)",
  },
  {
    name: "Marcus",
    quote: "My raw commentary clip was messy, but the final edit made the main point obvious in the first few seconds. The zooms and cuts hit exactly where they should.",
    initial: "M",
    accent: "var(--cyan)",
  },
  {
    name: "Chris",
    quote: "I sent a raw clip and got back a shorts that actually had structure. It kept the strongest point, removed the drag, and felt natural.",
    initial: "C",
    accent: "var(--coral)",
  },
  {
    name: "Ryan",
    quote: "The edit kept the audience focused on the story instead of the cuts. Fast turnaround, clean subtitles, and the final video matched the reference perfectly.",
    initial: "R",
    accent: "var(--purple)",
  },
  {
    name: "Daniel",
    quote: "The first three seconds felt much stronger after the edit. It cut straight into the point, and the final short felt sharper without losing my voice.",
    initial: "D",
    accent: "var(--lime)",
  },
  {
    name: "Ethan",
    quote: "The subtitles, zooms, and pacing made the idea easier to follow. It looked clean, moved fast, and still felt like my usual style.",
    initial: "E",
    accent: "var(--cyan)",
  },
];

export default function Home() {
  const [isSamplePlaying, setIsSamplePlaying] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-5 pb-15">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.08] tracking-normal mt-8 mb-7" style={{ fontFamily: "Manrope, sans-serif",lineHeight:"70px" }}>
              We Turn Clips 
              <br />
              <span style={{ color: "var(--lime)", textShadow: "0 0 30px rgba(166,232,0,0.3)" }}>Into Viral Shorts.</span>
              <br />
            </h1>

            <p className="text-lg max-w-2xl leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              We turn raw clips into scroll-stopping shorts with clean pacing, bold captions, beat-perfect cuts, zooms, and retention-focused structure.
            </p>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {achievements.map((a) => (
                <div key={a.label} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl" style={{ background: "var(--card)", border: `1px solid ${a.color}30` }}>
                  <span className="text-[21px] leading-none">{a.icon}</span>
                  <div>
                    <p className="text-[15px] font-black leading-none" style={{ color: a.color }}>{a.label}</p>
                    <p className="text-[13px] mt-1 leading-snug" style={{ color: "var(--muted-foreground)" }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-15">
              <Link
                to="/services"
                className="px-6 py-3.5 text-sm font-black rounded-xl transition-all hover:brightness-110 active:scale-95"
                style={{ background: "linear-gradient(135deg, var(--lime), #a8e600)", color: "#000", boxShadow: "0 0 24px rgba(202,255,0,0.3)" }}
              >
                View Services →
              </Link>
              <a
                href={discordMessageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold rounded-xl border transition-all hover:border-lime-400"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)", background: "var(--secondary)" }}
              >
                Message on Discord ↗
              </a>
            </div>
          </div>

          {/* Vertical short sample */}
          <div className="md:mr-8" style={{ width: 250 }}>
            <div className="relative rounded-2xl overflow-hidden border group" style={{ aspectRatio: "9/16", background: "var(--card)", borderColor: "var(--border)", boxShadow: "0 0 44px rgba(155,109,255,0.18)" }}>
              {isSamplePlaying ? (
                <video
                  src={homeSampleVideo}
                  className="block w-full h-full object-contain bg-black"
                  autoPlay
                  controls
                  playsInline
                  preload="auto"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSamplePlaying(true)}
                  className="absolute inset-0 block w-full h-full group/sample"
                  aria-label="Play sample short"
                >
                  <img src={homeSampleThumbnail} alt="Sample short thumbnail" className="block w-full h-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center transition-colors group-hover/sample:bg-black/25">
                    <span className="w-14 h-14 rounded-full flex items-center justify-center text-xl transition-transform group-hover/sample:scale-105" style={{ background: "var(--lime)", color: "#000", boxShadow: "0 0 24px rgba(202,255,0,0.35)" }}>▶</span>
                  </span>
                </button>
              )}
            </div>
            <p className="text-center mt-3 text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>Sample short preview</p>
            
          </div>
        </div>
      </section>

      {/* XP Stats row */}
      <section className="border-y" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x" style={{ "--tw-divide-opacity": 1 } as any}>
          {stats.map(({ val, label, color}) => (
            <div key={val} className="px-6 first:pl-0 last:pr-0" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-end justify-between mb-2">
                <p className="text-3xl font-black" style={{ fontFamily: "Manrope, sans-serif", color }}>{val}</p>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${color}18`, color }}></span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>{label}</p>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                <div className="h-full rounded-full" style={{ width: `${100}%`, background: color, boxShadow: `0 0 8px ${color}60` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <blockquote className="h-[54px] md:h-[62px] overflow-hidden text-[88px] md:text-[100px] leading-[0.72] font-black" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "var(--foreground)", letterSpacing: 0 }}>
          “
        </blockquote>
        <blockquote className="text-3xl leading-relaxed font-bold" style={{ fontFamily: "Manrope, sans-serif", color: "var(--foreground)" }}>
          The edit should be invisible. If a viewer is thinking about the editing, something went wrong. They should only be thinking about what you're saying.
        </blockquote>
        <p className="mt-3 text-m font-medium" style={{ color: "var(--muted-foreground)" }}>— Editing philosophy, FRADEX Studio</p>
      </section>

      {/* Client Reviews */}
      <section className="max-w-6xl mx-auto px-5 py-8">
        <div className="text-center mb-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: "var(--coral)" }}>Client Reviews</p>
          <h2 className="text-3xl md:text-5xl font-black leading-[1.08] tracking-normal mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>What clients say</h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Placeholder review cards for now. Swap these with real client feedback before publishing.
          </p>
        </div>

        <div className="review-marquee overflow-hidden">
          <div className="review-marquee-track flex gap-4">
            {[...reviews, ...reviews].map((review, index) => (
              <article key={`${review.name}-${index}`} className="min-h-[330px] w-[300px] md:w-[330px] shrink-0 rounded-2xl p-5 flex flex-col" style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: `0 0 28px ${review.accent}10` }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1" style={{ color: review.accent }}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full" style={{ color: review.accent, background: `${review.accent}16`, border: `1px solid ${review.accent}30` }}>
                    Verified
                  </span>
                </div>

                <p className="text-base leading-relaxed flex-1" style={{ color: "var(--foreground)" }}>
                  "{review.quote}"
                </p>

                <div className="flex items-center gap-3 mt-8">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black" style={{ background: review.accent, color: "#000" }}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-black text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>{review.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 mt-15">
        <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(155,109,255,0.08) 0%, transparent 70%)" }} />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(202,255,0,0.15)", color: "var(--lime)" }}>Get Started</span>
                <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>New client onboarding</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                Let’s Build Shorts That <br />Pull Viewers Into Every Second.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link to="/services" className="px-5 py-3 text-sm font-black rounded-xl transition-all hover:brightness-110" style={{ background: "linear-gradient(135deg, var(--lime), #a8e600)", color: "#000", boxShadow: "0 0 20px rgba(202,255,0,0.25)" }}>
                See Packages
              </Link>
              <Link to="/past-work" className="px-5 py-3 text-sm font-bold rounded-xl border transition-all" style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}>
                View Past Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
