import { Brain, Bot, Cpu, Database } from 'lucide-react';

const services = [
  {
    title: 'AI Strategy & Discovery',
    desc: 'Identify high‑impact AI use‑cases across your product and operations with measurable ROI.',
    icon: Brain,
  },
  {
    title: 'Custom Model Development',
    desc: 'Fine‑tune and distill models for speed, cost, and accuracy on your domain data.',
    icon: Cpu,
  },
  {
    title: 'Agentic Workflows & Bots',
    desc: 'Automate complex workflows with reliable, observable, and debuggable AI agents.',
    icon: Bot,
  },
  {
    title: 'Data Pipelines & RAG',
    desc: 'Ingest, clean, embed, and retrieve knowledge with production‑grade evaluation gates.',
    icon: Database,
  },
];

export default function AIServices() {
  return (
    <section id="ai-services" className="py-20 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">AI Services</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            From idea to production: we design, build, and scale AI features that delight users and drive outcomes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
            >
              <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-cyan-400/15 via-fuchsia-400/15 to-emerald-400/15 blur-xl" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
