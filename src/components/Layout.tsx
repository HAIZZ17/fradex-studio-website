import { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { discordMessageUrl } from "../contactConfig";

const navLinks = [
  { to: "/", label: "Home", icon: "⌂" },
  { to: "/services", label: "Services", icon: "◈" },
  { to: "/past-work", label: "Past Work", icon: "◉" },
  { to: "/about", label: "About", icon: "◎" },
  { to: "/contact", label: "Contact", icon: "◆" },
];

function BrandLogo({ size = "header" }: { size?: "header" | "footer" }) {
  const logoSize = size === "header" ? "w-9 h-9" : "w-5 h-5";

  return (
    <span className={`${logoSize} rounded-lg overflow-hidden shrink-0 flex items-center justify-center`} style={{ background: "#0b0b0d" }}>
      <img src="/brand/fradex-logo.png" alt="FRADEX logo" className="w-full h-full object-cover" />
    </span>
  );
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-full flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", background: "rgba(13,11,31,0.92)", backdropFilter: "blur(16px)" }}>
        <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <BrandLogo />
            <div className="flex flex-col leading-none">
              <span className="font-black text-sm tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>FRADEX</span>
              <span className="text-[9px] font-bold tracking-[0.15em]" style={{ color: "var(--purple)" }}>STUDIO · LVL 12</span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className="px-3.5 py-2 text-sm font-medium rounded-lg transition-all"
                style={({ isActive }) => ({
                  color: isActive ? "var(--lime)" : "var(--muted-foreground)",
                  background: isActive ? "rgba(202,255,0,0.09)" : "transparent",
                  boxShadow: isActive ? "inset 0 0 0 1px rgba(202,255,0,0.18)" : "none",
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--lime)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>Available</span>
            </div>
            <a
              href={discordMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold px-4 py-2 rounded-lg transition-all hover:brightness-110 active:scale-95"
              style={{ background: "linear-gradient(135deg, var(--lime) 0%, #a8e600 100%)", color: "#000", boxShadow: "0 0 16px rgba(202,255,0,0.25)" }}
            >
              Discord ↗
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block w-5 h-0.5 rounded transition-all" style={{ background: mobileOpen ? "var(--lime)" : "var(--foreground)" }} />
              ))}
            </div>
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden border-t px-5 py-4 flex flex-col gap-1" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
            {navLinks.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg"
                style={({ isActive }) => ({
                  color: isActive ? "var(--lime)" : "var(--foreground)",
                  background: isActive ? "rgba(202,255,0,0.07)" : "transparent",
                })}
                onClick={() => setMobileOpen(false)}
              >
                <span style={{ color: "var(--muted-foreground)" }}>{icon}</span>
                {label}
              </NavLink>
            ))}
            <a href={discordMessageUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm font-bold px-4 py-3 rounded-lg text-center" style={{ background: "var(--lime)", color: "#000" }}>
              Message on Discord ↗
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t mt-20" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BrandLogo size="footer" />
            <span className="font-black text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>FRADEX STUDIO</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: "rgba(155,109,255,0.18)", color: "var(--purple)" }}>LVL 12</span>
          </div>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>© 2026 FRADEX Studio · Commentary shorts studio</p>
          <div className="flex items-center gap-4">
            {navLinks.slice(1).map(({ to, label }) => (
              <NavLink key={to} to={to} className="text-xs hover:opacity-80 transition-opacity" style={{ color: "var(--muted-foreground)" }}>{label}</NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
