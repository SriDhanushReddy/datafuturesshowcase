import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import ParticleCanvas from '../components/ParticleCanvas';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
    )
      .fromTo(
        line1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        line2Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        bodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#current-trends');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ background: '#060B14' }}
    >
      {/* Particle Canvas Background */}
      <ParticleCanvas />

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span
          ref={eyebrowRef}
          className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-[#7A8BA5] mb-3 opacity-0"
        >
          Data Futures Showcase
        </span>

        <p className="text-sm text-[#3B82F6] font-medium mb-6">
          Presented by Sri Dhanush Reddy Kondapalli
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight tracking-tight mb-6">
          <span ref={line1Ref} className="block text-[#E8ECF1] opacity-0">
            The Future of
          </span>
          <span ref={line2Ref} className="block text-gradient-blue opacity-0">
            Data Intelligence
          </span>
        </h1>

        <p
          ref={bodyRef}
          className="text-base sm:text-lg text-[#7A8BA5] max-w-[640px] mx-auto mb-10 leading-relaxed opacity-0"
        >
          An exploration of how data warehousing and mining are reshaping our world —
          and where we're headed next.
        </p>

        <a
          ref={ctaRef}
          href="#current-trends"
          onClick={handleExplore}
          className="inline-block px-8 py-4 text-sm font-semibold text-white bg-gradient-blue rounded-full transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] opacity-0"
        >
          Explore the Trends
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#7A8BA5]" />
      </div>
    </section>
  );
}
