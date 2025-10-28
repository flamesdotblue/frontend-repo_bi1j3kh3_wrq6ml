import { Palette, Code2, ShoppingCart, Shield } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX & Visual Design',
    desc: 'Beautiful, brand‑aligned interfaces that feel effortless and elevate your story.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Fast, accessible, SEO‑ready sites built with modern, scalable tech.',
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce',
    desc: 'Conversion‑focused storefronts with smooth checkout and analytics baked in.',
  },
  {
    icon: Shield,
    title: 'Performance & Support',
    desc: 'Optimizations, audits, and ongoing care so your site stays secure and speedy.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Services</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Everything you need to launch, scale, and refine your digital presence.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
