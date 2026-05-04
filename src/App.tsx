import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import CurrentTrends from './sections/CurrentTrends';
import FuturePredictions from './sections/FuturePredictions';
import EthicalConsiderations from './sections/EthicalConsiderations';
import InnovativeSolutions from './sections/InnovativeSolutions';
import Reflection from './sections/Reflection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Refresh ScrollTrigger after all content loads
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#060B14' }}>
      <Navigation />
      <main>
        <Hero />
        <CurrentTrends />
        <FuturePredictions />
        <EthicalConsiderations />
        <InnovativeSolutions />
        <Reflection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
