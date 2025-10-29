import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaptopShowcase from './components/LaptopShowcase';
import AIServices from './components/AIServices';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Laptop-focused immersive section replacing the prior design showcase */}
        <LaptopShowcase />
        <AIServices />
      </main>
    </div>
  );
}

export default App;
