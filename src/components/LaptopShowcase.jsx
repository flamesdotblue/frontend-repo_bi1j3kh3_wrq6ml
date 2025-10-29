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
            New Laptop Design
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Immersive Laptop Experience</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Explore our interactive hero object inside a sleek laptop frame — perfect for product showcases and portfolios.
          </p>
        </div>

        <div className="mt-10">
          {/* Laptop frame */}
          <div className="relative mx-auto w-full max-w-5xl select-none">
            {/* Screen ratio wrapper */}
            <div className="relative mx-auto w-full aspect-[16/10] rounded-t-2xl border-x border-t border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl">
              {/* Bezel */}
              <div className="absolute inset-0 rounded-t-2xl p-3 sm:p-4 bg-neutral-900">
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                  {/* Interactive Spline inside the screen */}
                  <div className="absolute inset-0">
                    <Spline scene={heroScene} style={{ width: '100%', height: '100%' }} />
                  </div>

                  {/* Subtle screen glare overlays - keep interactive */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -inset-8 rounded-[1.25rem] bg-gradient-to-tr from-cyan-400/15 via-fuchsia-400/10 to-emerald-400/10 blur-2xl" />
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

              {/* Camera dot */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-neutral-700 dark:bg-neutral-600 shadow-inner" />
            </div>

            {/* Hinge */}
            <div className="h-3 bg-gradient-to-b from-neutral-300/70 to-neutral-200/60 dark:from-neutral-800 dark:to-neutral-900 border-x border-neutral-200 dark:border-neutral-800 mx-auto rounded-b-[8px]" />

            {/* Base with keyboard silhouette */}
            <div className="relative mx-auto w-[95%] sm:w-[90%] md:w-[85%] h-24 rounded-b-2xl bg-neutral-200/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-48 rounded bg-neutral-300 dark:bg-neutral-800" />
              <div className="absolute inset-x-6 top-4 grid grid-cols-8 gap-2">
                {Array.from({ length: 8 * 3 }).map((_, i) => (
                  <span key={i} className="h-3 rounded bg-neutral-300/80 dark:bg-neutral-800/90" />
                ))}
              </div>
              <div className="absolute inset-x-10 bottom-4 h-3 rounded bg-neutral-300/80 dark:bg-neutral-800/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
