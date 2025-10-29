import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyboardShowcase from './components/KeyboardShowcase';
import AIServices from './components/AIServices';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Use the previously implemented tilt‑based keyboard component */}
        <KeyboardShowcase />
        <AIServices />
      </main>
    </div>
  );
}

export default App;
