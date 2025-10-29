import { Keyboard, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function KeyboardShowcase() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotY = ((x - midX) / midX) * 8; // tilt left/right
    const rotX = -((y - midY) / midY) * 8; // tilt up/down
    el.style.setProperty('--rx', `${rotX}deg`);
    el.style.setProperty('--ry', `${rotY}deg`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="keyboard" className="relative py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-neutral-700 dark:text-white/90 shadow-sm backdrop-blur">
            <Zap size={14} className="text-amber-500" />
            Hardware-inspired 3D accent
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Tactile Keyboard Object</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A lightweight, CSS-driven 3D keyboard card with parallax tilt. Built to echo the earlier keyboard object while keeping performance silky-smooth.
          </p>
        </div>

        <div className="mt-10 grid place-items-center">
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-xl"
            style={{
              transform: 'perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
              transition: 'transform 200ms ease',
            }}
            aria-label="3D Keyboard"
          >
            {/* Back glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/10 to-emerald-400/10 blur-xl" />

            {/* Simple 3D keyboard composed of keys */}
            <div className="relative z-10 p-6">
              <div className="mx-auto max-w-2xl">
                <div className="grid grid-cols-14 gap-1.5">
                  {Array.from({ length: 14 * 4 }).map((_, i) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="h-6 rounded bg-neutral-200 dark:bg-neutral-800 shadow-sm"
                      style={{
                        boxShadow:
                          '0 1px 0 rgba(255,255,255,0.3) inset, 0 8px 12px rgba(0,0,0,0.25)',
                      }}
                    />
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-12 gap-1.5">
                  <div className="col-span-2 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="col-span-8 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="col-span-2 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
                </div>
                <div className="mt-2 grid grid-cols-12 gap-1.5">
                  <div className="col-span-3 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="col-span-6 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="col-span-3 h-6 rounded bg-neutral-200 dark:bg-neutral-800" />
                </div>
              </div>

              {/* Icon badge */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/70 text-white px-3 py-1 text-xs backdrop-blur">
                <Keyboard size={14} />
                Live tilt
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
