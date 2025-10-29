import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function DesignShowcase() {
  // Community design requested by user
  const sceneUrl = 'https://prod.spline.design/e66a92b9-55bb-44ad-91e1-46fe740558bd/scene.splinecode';

  return (
    <section id="design" className="relative bg-neutral-50 dark:bg-neutral-950 py-20 sm:py-24" aria-label="Design Showcase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-neutral-700 dark:text-white/90 shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-cyan-500" />
            Interactive 3D Design
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Immersive Experience Section</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A live, interactive 3D canvas powered by Spline. Drag, orbit, and explore the composition.
          </p>
        </div>

        <div className="mt-10">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
            {/* Spline canvas */}
            <div className="absolute inset-0">
              <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Gradient glow overlays; keep pointer-events disabled so Spline remains interactive */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/15 to-emerald-400/15 blur-2xl" />
              <div className="absolute inset-0" style={{
                background:
                  'radial-gradient(50% 60% at 15% 10%, rgba(0,255,209,0.10) 0%, rgba(0,0,0,0) 60%),\nradial-gradient(60% 60% at 85% 20%, rgba(140,0,255,0.12) 0%, rgba(0,0,0,0) 60%)',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
