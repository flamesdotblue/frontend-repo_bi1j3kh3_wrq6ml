import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 shadow-sm">
              <Sparkles size={14} className="text-amber-500" />
              Design & Build with precision
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Open Labs Systems
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl">
              We design and develop modern, high‑performing websites for ambitious brands. From concept to code, we ship experiences that convert.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-medium shadow-md hover:opacity-90 transition"
              >
                Start a project
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-5 py-3 font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <span>Web Design</span>
              <span>•</span>
              <span>Development</span>
              <span>•</span>
              <span>Branding</span>
              <span>•</span>
              <span>Performance</span>
            </div>
          </div>

          <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-purple-500/10 pointer-events-none rounded-2xl" />
            <div className="h-[420px] md:h-[520px] rounded-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
