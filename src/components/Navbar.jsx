import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-neutral-900 dark:text-white">Open Labs Systems</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              Start a Project
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-md px-3 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                onClick={() => setOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
