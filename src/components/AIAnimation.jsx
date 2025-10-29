import { Sparkles } from 'lucide-react';

export default function AIAnimation() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated nodes */}
        <div className="absolute left-1/4 top-1/3 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />
        <div className="absolute left-2/3 top-1/4 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl animate-pulse" style={{ animationDelay: '400ms' }} />
        <div className="absolute left-1/2 top-2/3 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl animate-pulse" style={{ animationDelay: '800ms' }} />

        {/* Animated circuit lines */}
        <svg className="absolute inset-0 opacity-40" width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200" stroke="url(#g1)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M0,350 C250,250 450,450 700,350 C900,250 1100,450 1400,350" stroke="url(#g1)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="7s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-cyan-300" />
            3D‑inspired AI animation
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Neural Motion</h2>
          <p className="mt-3 text-white/80">
            Subtle, system‑friendly motion evokes neural pathways and signal flow. This pairs well with the interactive 3D hero and AI service cards.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Latency‑aware", "GPU‑friendly", "Theme‑adaptive"].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-white/70">Built with CSS/SVG so it looks great and stays smooth on a wide range of devices.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
