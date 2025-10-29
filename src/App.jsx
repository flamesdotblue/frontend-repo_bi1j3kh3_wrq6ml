import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIServices from './components/AIServices';
import KeyboardShowcase from './components/KeyboardShowcase';
import AIAnimation from './components/AIAnimation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <KeyboardShowcase />
        <AIServices />
        <AIAnimation />
        <Services />

        {/* Work teaser section */}
        <section id="work" className="py-20 sm:py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                A glimpse at recent launches. Case studies available on request.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
                >
                  <div className="h-40 rounded-xl bg-gradient-to-tr from-blue-500/20 via-cyan-400/20 to-purple-500/20" />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Project {i}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Website redesign</p>
                    </div>
                    <a href="#contact" className="text-sm font-medium text-blue-600 hover:underline">
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
