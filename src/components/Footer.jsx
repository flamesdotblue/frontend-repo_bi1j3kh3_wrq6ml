import { Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const socials = [
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' },
    { Icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer id="contact" className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Let’s build something great</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-md">
              Tell us about your goals and we’ll craft a tailored plan. Expect a response within 24 hours.
            </p>
            <a
              href="mailto:hello@openlabssystems.com"
              className="mt-5 inline-block rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-medium shadow-sm hover:opacity-90 transition"
            >
              hello@openlabssystems.com
            </a>
          </div>

          <div className="md:justify-self-end">
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Open Labs Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
