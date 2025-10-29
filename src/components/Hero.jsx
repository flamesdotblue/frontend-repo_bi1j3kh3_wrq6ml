import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950" aria-label="Hero">
      {/* Full-width Spline cover background (interactive by cursor) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Aurora overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-10 left-0 right-0 h-[60vh] opacity-60 mix-blend-screen"
          style={{
            background:
              'radial-gradient(60% 80% at 10% 0%, rgba(0,255,209,0.25) 0%, rgba(0,0,0,0) 60%),\n                  radial-gradient(60% 80% at 90% 10%, rgba(76,0,255,0.25) 0%, rgba(0,0,0,0) 60%),\n                  radial-gradient(80% 120% at 50% -10%, rgba(0,191,255,0.35) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <div
          className="absolute top-1/3 left-0 right-0 h-48 opacity-50 blur-2xl"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,255,163,0.15), rgba(0,128,255,0.22), rgba(140,0,255,0.18))',
            maskImage:
              'radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0.9), rgba(0,0,0,0.1))',
          }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-64 opacity-40 blur-2xl"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,128,255,0.18), rgba(140,0,255,0.22), rgba(0,255,163,0.15))',
            maskImage:
              'radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0.9), rgba(0,0,0,0.1))',
          }}
        />
      </div>

      {/* Floating luminous orbs for depth */}
      <div className="pointer-events-none absolute inset-0">
        <span
          className="absolute left-[8%] top-[35%] h-24 w-24 rounded-full bg-cyan-400/30 blur-xl"
          style={{ animation: 'float1 10s ease-in-out infinite' }}
        />
        <span
          className="absolute left-[78%] top-[20%] h-28 w-28 rounded-full bg-fuchsia-500/30 blur-2xl"
          style={{ animation: 'float2 12s ease-in-out infinite' }}
        />
        <span
          className="absolute left-[20%] top-[70%] h-16 w-16 rounded-full bg-emerald-400/30 blur-lg"
          style={{ animation: 'float3 11s ease-in-out infinite' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 shadow-sm backdrop-blur">
              <Sparkles size={14} className="text-cyan-300" />
              Immersive web experiences
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Open Labs Systems
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl">
              We craft futuristic, high‑performing websites with interactive 3D and motion at their core.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium shadow-md hover:opacity-90 transition"
              >
                Start a project
                <ArrowRight size={18} />
              </a>
              <a
                href="#ai-services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10 transition backdrop-blur"
              >
                Explore AI services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
              <span>3D & WebGL</span>
              <span>•</span>
              <span>Design Systems</span>
              <span>•</span>
              <span>AI Integrations</span>
              <span>•</span>
              <span>Performance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes for subtle motion */}
      <style>{`
        @keyframes float1 { 0%,100%{ transform: translateY(0) translateX(0) } 50%{ transform: translateY(-12px) translateX(6px) } }
        @keyframes float2 { 0%,100%{ transform: translateY(0) translateX(0) } 50%{ transform: translateY(-18px) translateX(-8px) } }
        @keyframes float3 { 0%,100%{ transform: translateY(0) translateX(0) } 50%{ transform: translateY(-10px) translateX(10px) } }
      `}</style>
    </section>
  );
}
