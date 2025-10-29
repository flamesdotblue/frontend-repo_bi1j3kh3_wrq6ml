import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function LaptopShowcase() {
  const heroScene = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode';

  return (
    <section id="laptop" className="relative bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-24" aria-label="Laptop Design Showcase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-neutral-700 dark:text-white/90 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-cyan-500" />
            Immersive 3D
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Immersive Laptop Experience</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Explore our interactive 3D object in a clean, distraction‑free canvas. Ideal for product demos, portfolios, and tech showcases.
          </p>
        </div>

        {/* Pure 3D canvas — no framing box */}
        <div className="mt-10">
          <div className="relative mx-auto w-full max-w-6xl aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-950">
            {/* Interactive Spline scene */}
            <div className="absolute inset-0">
              <Spline scene={heroScene} style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Subtle atmospheric overlays that do not block interactions */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -inset-10 rounded-[1.5rem] bg-gradient-to-tr from-cyan-400/15 via-fuchsia-400/10 to-emerald-400/10 blur-2xl" />
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(60% 80% at 10% 0%, rgba(0,255,209,0.10) 0%, rgba(0,0,0,0) 60%),\nradial-gradient(60% 80% at 90% 10%, rgba(140,0,255,0.12) 0%, rgba(0,0,0,0) 60%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
