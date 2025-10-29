import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignShowcase from './components/DesignShowcase';
import AIServices from './components/AIServices';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Replaced the tactile keyboard section with a new Spline-based design showcase */}
        <DesignShowcase />
        <AIServices />
      </main>
    </div>
  );
}

export default App;
