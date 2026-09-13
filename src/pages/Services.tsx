import { discordMessageUrl } from '../contactConfig';

const singleShortPrice = 19;
const formatPrice = (amount: number) => `$${amount}`;

const packages = [
  {
    name: 'Single Short',
    price: formatPrice(singleShortPrice),
    per: 'per shorts',
    tag: 'Starter',
    rank: 'BRONZE',
    rankColor: '#CD7F32',
    rankBg: 'rgba(205, 127, 50, 0.16)',
    rankBorder: 'rgba(205, 127, 50, 0.36)',
    tagColor: '#ff5c47',
    description:
      'One fully edited commentary short. Hook structure, captions, motion pass, and final export.',
    features: [
      'Up to 60-second runtime',
      'Caption burn-in (styled)',
      'Dynamic transitions & motion effects',
      '1 revision rounds',
      '48hr delivery',
    ],
    highlight: false,
  },
  {
    name: 'Batch Edit',
    price: '$69',
    regularPrice: formatPrice(singleShortPrice * 7),
    savings: 'Save $64',
    per: 'per 7 shorts',
    tag: 'Most popular',
    rank: 'GOLD',
    rankColor: '#CAFF00',
    rankBg: 'rgba(202, 255, 0, 0.16)',
    rankBorder: 'rgba(202, 255, 0, 0.36)',
    tagColor: '#CAFF00',
    description:
      'Seven shorts in one production cycle — consistent style, fast cadence, best value per short.',
    features: [
      '7 shorts (up to 60s each)',
      'Consistent visual style',
      'Caption burn-in (styled)',
      'Dynamic transitions & motion effects',
      '2 revision round per shorts',
      '5-day delivery',
    ],
    highlight: true,
  },
  {
    name: 'Monthly Creator',
    price: '$249',
    regularPrice: formatPrice(singleShortPrice * 30),
    savings: 'Save $321',
    per: 'per month',
    tag: 'Max value',
    rank: 'DIAMOND',
    rankColor: '#00D4FF',
    rankBg: 'rgba(0, 212, 255, 0.16)',
    rankBorder: 'rgba(0, 212, 255, 0.36)',
    tagColor: '#00D4FF',
    description:
      'Ongoing editing partner for active commentary creators. Up to 30 shorts per month with priority turnaround.',
    features: [
      'Up to 30 shorts / month',
      'Priority queue (24hr)',
      'Dedicated style guide',
      'Captions, motion, hooks',
      '4 revision rounds per shorts',
      'Monthly review',
    ],
    highlight: false,
  },
];

const steps = [
  {
    num: '01',
    title: 'Send raw clips',
    body: 'Drop me the link of the source clips. Include any edit notes or script.',
    color: 'var(--lime)',
    icon: '📤',
  },
  {
    num: '02',
    title: 'Hook & structure edit',
    body: 'Cut for retention — open on tension, reorder for pacing, kill dead air and fillers.',
    color: 'var(--cyan)',
    icon: '✂️',
  },
  {
    num: '03',
    title: 'Captions & motion pass',
    body: 'Styled captions, emphasis zoom, smooth transitions, and dynamic motion.',
    color: 'var(--coral)',
    icon: '🎬',
  },
  {
    num: '04',
    title: 'Review & export',
    body: 'Draft link, request changes, approve, receive 9:16 final export ready for Shorts.',
    color: 'var(--purple)',
    icon: '🚀',
  },
];

export default function Services() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-xs font-black px-2 py-0.5 rounded"
            style={{ background: 'rgba(0,212,255,0.15)', color: 'var(--cyan)' }}
          >
            PACKAGES
          </span>
          <span
            className="text-xs"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Choose your loadout
          </span>
        </div>
        <h1
          className="text-4xl md:text-6xl font-black leading-[1.08] tracking-normal mb-5"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Pick a package.
          <br />
          Send your clips.
        </h1>
        <p
          className="text-lg max-w-4xl"
          style={{ color: 'var(--muted-foreground)' }}
        >
          All packages include structured editing, styled captions, smooth
          transitions, and dynamic motion designed to keep viewers engaged.
          Everything is cut by hand — no auto-edit tools.
        </p>
      </section>

      {/* Package cards */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative rounded-2xl flex flex-col p-7 transition-all hover:-translate-y-1"
              style={{
                background: pkg.highlight ? 'var(--secondary)' : 'var(--card)',
                border: pkg.highlight
                  ? `1px solid ${pkg.tagColor}50`
                  : '1px solid var(--border)',
                boxShadow: pkg.highlight
                  ? `0 0 40px ${pkg.tagColor}15`
                  : 'none',
              }}
            >
              {/* Rank badge */}
              <div
                className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                style={{
                  background: pkg.rankBg,
                  border: `1px solid ${pkg.rankBorder}`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: pkg.rankColor }}
                />
                <span
                  className="text-[10px] font-black tracking-wider"
                  style={{ color: pkg.rankColor }}
                >
                  {pkg.rank}
                </span>
              </div>

              <div className="mb-5">
                <span
                  className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-3"
                  style={{
                    background: `${pkg.tagColor}20`,
                    color: pkg.tagColor,
                  }}
                >
                  {pkg.tag}
                </span>
                <h3
                  className="text-xl font-black"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {pkg.name}
                </h3>
              </div>

              <div className="mb-4">
                {'regularPrice' in pkg && pkg.regularPrice && (
                  <div className="flex items-center gap-2 mb-1.5">
                    <p
                      className="text-lg font-black line-through decoration-2"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      {pkg.regularPrice}
                    </p>
                    <span
                      className="text-xs font-black uppercase tracking-wide px-2.5 py-1 rounded-full"
                      style={{
                        background: `${pkg.tagColor}18`,
                        color: pkg.tagColor,
                        border: `1px solid ${pkg.rankBorder}`,
                      }}
                    >
                      {pkg.savings}
                    </span>
                  </div>
                )}
                <div className="flex items-end gap-2">
                  <p
                    className="text-4xl font-black"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      color: pkg.tagColor,
                    }}
                  >
                    {pkg.price}
                  </p>
                  <div className="mb-1">
                    <p
                      className="text-xs"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {pkg.per}
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {pkg.description}
              </p>

              <ul className="flex-1 space-y-2.5 mb-7">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <span
                      className="w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0"
                      style={{
                        background: `${pkg.tagColor}18`,
                        color: pkg.tagColor,
                      }}
                    >
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={discordMessageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-black py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
                style={
                  pkg.highlight
                    ? {
                        background: `linear-gradient(135deg, ${pkg.tagColor}, #a8e600)`,
                        color: '#000',
                        boxShadow: `0 0 20px ${pkg.tagColor}30`,
                      }
                    : {
                        border: '1px solid var(--border)',
                        color: 'var(--foreground)',
                      }
                }
              >
                Message on Discord
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-6xl mx-auto border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-black px-2 py-0.5 rounded"
              style={{
                background: 'rgba(155,109,255,0.15)',
                color: 'var(--purple)',
              }}
            >
              Workflow
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black mb-12"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            4-step workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-3xl font-black"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3
                  className="font-black text-base mb-2"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    color: step.color,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {step.body}
                </p>
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-3 z-10 text-xs"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-10">
        <div
          className="relative rounded-2xl p-8 text-center overflow-hidden"
          style={{
            background: 'var(--secondary)',
            border: '1px solid var(--border)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(202,255,0,0.06) 0%, transparent 70%)',
            }}
          />
          <span
            className="relative inline-block text-xs font-black px-2 py-0.5 rounded mb-3"
            style={{ background: 'rgba(202,255,0,0.12)', color: 'var(--lime)' }}
          >
            Get Started
          </span>
          <h3
            className="relative text-2xl font-black mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Shoot us a message on Discord.
          </h3>
          <p
            className="relative text-sm mb-6 max-w-md mx-auto"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Describe your content type, how many shorts you need, and your
            timeline. I reply within a few hours.
          </p>
          <a
            href={discordMessageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-sm font-black px-6 py-3 rounded-xl transition-all hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, var(--lime), #a8e600)',
              color: '#000',
              boxShadow: '0 0 20px rgba(202,255,0,0.25)',
            }}
          >
            Message me on Discord ↗
          </a>
        </div>
      </section>
    </div>
  );
}
