import { useState } from "react";

const premiumTagStyle = {
   background: "rgba(0,212,255,0.15)", color: "var(--cyan)" 
};

type Project = {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  bg: string;
  accent: string;
  thumbnail?: string;
  duration?: string;
  videoPreview?: string;
  analyticsImage?: string;
  stats: {
    retention: number;
    views: string;
    rewatches: string;
    delivery: string;
    avgWatch: string;
    likes: string;
  };
  chartBars: number[];
};

const projects: Project[] = [
  {
    title: "A Strange Creature in the Snow!!??? ❄️",
    description: "Create a strong first-second hook that grabs attention, builds curiosity, and keeps viewers watching until the end.",
    metric: "240k",
    metricLabel: "likes",
    bg: "linear-gradient(135deg, #0a0d1a 0%, #0d1a2d 100%)",
    accent: "var(--cyan)",
    thumbnail: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Snow%20thumbnails.png",
    videoPreview: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Snow.mp4",
    analyticsImage: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Snow%20Stat.png",
    stats: { retention: 92.3, views: "5.55 M", rewatches: "4.2×", delivery: "36h", avgWatch: "0:48", likes: "240 K" },
    chartBars: [100, 95, 90, 85, 80, 74, 70, 68, 68, 65],
  },
  {
    title: "Everyone Laughed at His Strawberry Cake 😢 ",
    description: "Transform clips from different nations into engaging, high-retention Shorts with strong hooks, fast pacing, and viral-style storytelling.",
    metric: "5 M",
    metricLabel: "views",
    bg: "linear-gradient(135deg, #0a1208 0%, #151f0e 100%)",
    accent: "var(--lime)",
    thumbnail: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Strawberry%20thumbnails.png",
    videoPreview: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Strawberry.mp4",
    analyticsImage: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Strawberry%20stat.png",
    stats: { retention: 91, views: "5 M", rewatches: "2.9×", delivery: "28h", avgWatch: "0:41", likes: "130 K" },
    chartBars: [100, 96, 91, 87, 82, 78, 75, 74, 72, 70],
  },
  {
    title: "This Technology Shoe Hack Is Truly Incredible! 🤯",
    description: "Different scenes, one powerful story—combining visuals to create an engaging advertising content.",
    metric: "105.1 %",
    metricLabel: "retention",
    bg: "linear-gradient(135deg, #1a0e08 0%, #2b1810 100%)",
    accent: "var(--coral)",
    thumbnail: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Shoe%20thumbnails.png",
    videoPreview: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Shoe.mp4",
    analyticsImage: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Shoe%20stat.png",
    stats: { retention: 105.1, views: "1.5 M", rewatches: "3.1×", delivery: "22h", avgWatch: "0:21", likes: "120 K" },
    chartBars: [100, 91, 84, 78, 72, 68, 67, 65, 63, 61],
  },
  {
    title: "Incredible way to Make French Fries 🍟",
    description: "Improved punch lines with sound effects, fast zooms, and better transitions between points.",
    metric: "122 K",
    metricLabel: "likes",
    bg: "linear-gradient(135deg, #1a0a14 0%, #2d0d1e 100%)",
    accent: "var(--coral)",
    thumbnail: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/mcd%20thumbnails.png",
    videoPreview: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/0907.mp4",
    analyticsImage: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/9138b318-9464-474f-95d9-a1c91f4b2998.png",
    stats: { retention: 90.2, views: "1.2 M", rewatches: "3.8×", delivery: "44 h", avgWatch: "0:36", likes: "122 K" },
    chartBars: [100, 92, 86, 81, 76, 71, 68, 71, 67, 64],
  },
  
  {
    title: "She Finally Got Her New Eye 🥹❤️",
    description: "Strong hooks, engaging stickers, and warm storytelling—creating the heartfelt story.",
    metric: "320 K",
    metricLabel: "likes",
    bg: "linear-gradient(135deg, #08100f 0%, #0d1e1c 100%)",
    accent: "var(--cyan)",
    thumbnail: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Eye%20thumbnails.png",
    videoPreview: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Eye.mp4",
    analyticsImage: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Eye%20stat.png",
    stats: { retention: 103.5, views: "2.3 M", rewatches: "5.1×", delivery: "48h", avgWatch: "0:23", likes: "320 K" },
    chartBars: [100, 97, 94, 90, 87, 83, 80, 79, 79, 78],
  },
  {
    title: "Plush dog instead of a real one 🥺",
    description: "Strong hooks, smooth transitions, and impactful sound effects come together with warm storytelling to create a heartfelt story.",
    metric: "102.2 %",
    metricLabel: "retention",
    bg: "linear-gradient(135deg, #180f00 0%, #271900 100%)",
    accent: "var(--lime)",
    thumbnail: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Dog%20thumbnails.png",
    videoPreview: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Dog.mp4",
    analyticsImage: "https://vjnxorjlyokpexhethrm.supabase.co/storage/v1/object/public/portfolio-media/Dog%20stat.png",
    stats: { retention: 102.2, views: "1.4 M", rewatches: "3.6×", delivery: "40h", avgWatch: "0:43", likes: "23 K" },
    chartBars: [100, 93, 87, 80, 74, 68, 66, 65, 64, 62],
  },
];

function AnalyticsPlaceholder({ accent }: { accent: string }) {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #16142c, #0d0b1f)", border: "1px dashed var(--border)" }}>
      <div className="absolute inset-x-5 top-5 h-10 rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="absolute left-5 right-5 top-20 h-28 rounded-lg" style={{ background: `linear-gradient(90deg, ${accent}22, rgba(255,255,255,0.04))` }}>
        <div className="absolute left-4 right-4 bottom-4 flex items-end gap-1 h-16">
          {[64, 78, 54, 88, 70, 96, 62, 76].map((height, index) => (
            <span key={index} className="flex-1 rounded-t" style={{ height: `${height}%`, background: index % 2 === 0 ? "var(--lime)" : accent, opacity: 0.7 }} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <div>
          <p className="text-xs font-black uppercase tracking-wider mb-2" style={{ color: accent }}>YouTube Analytics Screenshot</p>
          <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Replace this area with your real screenshot proof.</p>
        </div>
      </div>
    </div>
  );
}

function VideoPlaceholder({ project, fullscreen = false }: { project: Project; fullscreen?: boolean }) {
  const videoSource = project.videoPreview;

  if (!fullscreen) {
    return (
      <div
        className="relative w-full max-w-[210px] mx-auto aspect-[9/16] overflow-hidden rounded-2xl"
        style={{ background: "#05050A", border: "1px solid var(--border)" }}
      >
        <img src="/samples/short-sample-placeholder.svg" alt={`${project.title} short video placeholder`} className="block w-full h-full object-cover opacity-95" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4 text-xs font-black px-2.5 py-1 rounded-full" style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}44` }}>
          SHORT SAMPLE
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-transform hover:scale-105" style={{ background: "var(--lime)", color: "#000", boxShadow: "0 0 28px rgba(202,255,0,0.35)" }}>
            ▶
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-[min(420px,calc(100vw-2rem))] max-h-[82vh] mx-auto aspect-[9/16] overflow-hidden rounded-2xl"
      style={{ background: "#05050A", border: "1px solid var(--border)" }}
    >
      <video
        src={videoSource}
        className="block w-full h-full object-contain bg-black"
        controls
        autoPlay
        playsInline
        preload="auto"
      />
    </div>
  );
}

function ProjectProof({ project }: { project: Project }) {
  return (
    <div className="border-t p-4" style={{ background: "var(--secondary)", borderColor: "var(--border)" }}>
      {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black px-2 py-0.5 rounded" style={premiumTagStyle}>📊 ANALYTICS SNAPSHOT</span>
          </div>
        </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Views", val: project.stats.views, color: "var(--coral)"},
            { label: "Retention", val: `${project.stats.retention}%`, color: "var(--lime)" },
            { label: "Likes", val: project.stats.likes, color: "var(--cyan)" },
            { label: "Avg Watch", val: project.stats.avgWatch, color: "var(--purple)" },
          ].map(({ label, val, color }) => (
            <div key={label} className="rounded-xl p-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <p className="text-2xl md:text-2xl font-black leading-none mb-2" style={{ fontFamily: "Manrope, sans-serif", color }}>{val}</p>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--muted-foreground)" }}>{label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          {project.analyticsImage ? (
            <img src={project.analyticsImage} alt={`${project.title} YouTube analytics screenshot`} className="block w-full h-full object-cover" />
          ) : (
            <AnalyticsPlaceholder accent={project.accent} />
          )}
        </div>
      </div>
    </div>
  );
}

function FullscreenVideo({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-6" role="dialog" aria-modal="true" aria-label={`${project.title} fullscreen short sample`}>
      <button className="absolute inset-0 cursor-default" style={{ background: "rgba(3,2,10,0.9)", backdropFilter: "blur(12px)" }} onClick={onClose} aria-label="Close video preview" />

      <div className="relative w-full flex flex-col items-center gap-4">
        <button
          onClick={onClose}
          className="absolute right-0 -top-1 z-10 text-sm font-black px-3 py-2 rounded-lg transition-all hover:brightness-110"
          style={{ background: "var(--secondary)", color: "var(--foreground)", border: "1px solid var(--border)" }}
        >
          ✕ Close
        </button>
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-black leading-tight" style={{ fontFamily: "Manrope, sans-serif", color: "var(--foreground)" }}>{project.title}</h2>
          <p className="mt-2 text-sm font-semibold" style={{ color: "var(--muted-foreground)" }}>
            *The short may take a few seconds to load in full quality.
          </p>
        </div>
        <VideoPlaceholder project={project} fullscreen />
      </div>
    </div>
  );
}

export default function PastWork() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const toggleStats = (project: Project) => {
    setExpandedProject((current) => {
      if (current === project.title) return null;
      return project.title;
    });
  };

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-black px-2 py-0.5 rounded" style={{ background: "rgba(255,92,71,0.15)", color: "var(--coral)" }}>PORTFOLIO</span>
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{projects.length} completed projects</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-[1.08] tracking-normal mb-5" style={{ fontFamily: "Manrope, sans-serif" }}>
          Shorts that performed.
        </h1>
        <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
          List of client projects, supported by verified YouTube Analytics. Click the preview to view the short fullscreen, or open the stats proof.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {projects.map((project, i) => {
            const isOpen = expandedProject === project.title;

            return (
              <div
                key={i}
                className="h-full rounded-2xl overflow-hidden transition-all flex flex-col"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: "none",
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-[278px] cursor-pointer group" style={{ background: "#05050A" }}
                  onClick={() => setSelectedVideo(project)}
                >
                  {project.thumbnail && (
                    <div
                      role="img"
                      aria-label={`${project.title} thumbnail`}
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("${project.thumbnail}")`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    />
                  )}
                  {!project.thumbnail && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-35">
                      <img src="/samples/short-sample-placeholder.svg" alt={`${project.title} thumbnail placeholder`} className="h-full w-auto object-contain" />
                    </div>
                  )}
                  {/* Metric badge */}
                  <div className="absolute bottom-3 right-3 rounded-xl px-3 py-2 text-right" style={{ background: "rgba(13,11,31,0.85)", backdropFilter: "blur(8px)", border: "1px solid var(--border)" }}>
                    <p className="text-base font-black leading-none" style={{ fontFamily: "Manrope, sans-serif", color: "var(--lime)" }}>{project.metric}</p>
                    <p className="text-[13px] mt-0.5" style={{ color: "var(--muted-foreground)" }}>{project.metricLabel}</p>
                  </div>
                  {project.duration && (
                    <div className="absolute bottom-3 left-3 rounded-lg px-2 py-1 text-xs font-black" style={{ background: "rgba(0,0,0,0.82)", color: "var(--foreground)" }}>
                      {project.duration}
                    </div>
                  )}
                  {/* Hover play */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ border: "3px solid" }}>
                      <span>▶</span>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
                </div>

                {/* Info */}
                <div className="p-5 min-h-[240px] flex flex-col" style={{ background: "var(--card)" }}>
                  <h3 className="font-black text-base mb-1.5 leading-snug min-h-[2.75rem]" style={{ fontFamily: "Manrope, sans-serif" }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 min-h-[6rem]" style={{ color: "var(--muted-foreground)" }}>{project.description}</p>
                  <button
                    onClick={() => toggleStats(project)}
                    className="mt-auto flex w-fit items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-90"
                    style={{
                      background: isOpen ? `${project.accent}20` : "var(--secondary)",
                      color: "var(--muted-foreground)",
                      border: `1px solid ${isOpen ? project.accent + "40" : "var(--border)"}`,
                    }}
                  >
                    <span>{isOpen ? "▲" : "▼"}</span>
                    {isOpen ? "Hide Stats" : "View Stats"}
                  </button>
                </div>

                {expandedProject === project.title && (
                  <ProjectProof project={project} />
                )}
              </div>
            );
          })}
        </div>

      </section>

      {selectedVideo && <FullscreenVideo project={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </div>
  );
}
