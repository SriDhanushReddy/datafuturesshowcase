import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const predictions = [
  {
    year: '2028–2032',
    title: 'Quantum Data Processing',
    body: 'Quantum computing will not replace classical warehouses but will augment specific workloads — optimization problems, cryptographic hashing, and complex graph traversals. The real disruption? Quantum-resistant encryption will force a complete rebuild of data security infrastructure.',
    side: 'left' as const,
    confidence: 'High',
  },
  {
    year: '2030–2035',
    title: 'Neural Data Interfaces',
    body: 'Brain-computer interfaces will generate entirely new data types — neural patterns, emotional states, cognitive load metrics. Data mining will evolve from analyzing what people *do* to understanding what people *think*. The ethical implications are staggering.',
    side: 'right' as const,
    confidence: 'Medium',
  },
  {
    year: '2029–2034',
    title: 'Autonomous Data Ecosystems',
    body: 'Self-healing, self-optimizing data pipelines will emerge. AI agents will not just analyze data but architect the systems that store and process it. The role of data engineers will shift from builders to curators and governance overseers.',
    side: 'left' as const,
    confidence: 'High',
  },
  {
    year: '2027–2030',
    title: 'Synthetic Data Ubiquity',
    body: 'Gartner predicts 60% of AI training data will be synthetic by 2030. This solves privacy constraints but introduces a fundamental question: when our models train on artificial data, how do we prevent a reality-distortion feedback loop?',
    side: 'right' as const,
    confidence: 'High',
  },
  {
    year: '2035+',
    title: 'Consciousness-Aware Mining',
    body: 'The most speculative — and contested — prediction. As we map neural correlates of consciousness, data mining may begin to model subjective experience. This blurs the line between analytics and sentience in ways we\'re not prepared for.',
    side: 'left' as const,
    confidence: 'Speculative',
  },
];

export default function FuturePredictions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Timeline items animation
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const isLeft = predictions[index].side === 'left';
        gsap.fromTo(
          item,
          { opacity: 0, x: isLeft ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="future-predictions"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32"
      style={{ background: '#0A1120' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24 opacity-0">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-[#06B6D4] mb-4">
            02 / Future Predictions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8ECF1] mb-4">
            What Lies Ahead
          </h2>
          <p className="text-base md:text-lg text-[#7A8BA5] max-w-[760px] mx-auto leading-relaxed">
            Five predictions for the next decade of data intelligence — grounded in
            current trajectories, extrapolated with critical rigor.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - hidden on mobile */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, #3B82F6, #06B6D4)',
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16 lg:space-y-0">
            {predictions.map((prediction, index) => (
              <div
                key={prediction.title}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 opacity-0 ${
                  index > 0 ? 'lg:mt-16' : ''
                }`}
              >
                {/* Content card */}
                <div
                  className={`${
                    prediction.side === 'right' ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="bg-[#0D1526] border border-[#1A2744] rounded-xl p-6 md:p-7 relative">
                    {/* Year badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#06B6D4] bg-[rgba(6,182,212,0.1)] rounded-full mb-4">
                      {prediction.year}
                    </span>

                    {/* Confidence indicator */}
                    <span
                      className={`inline-block ml-2 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded-full ${
                        prediction.confidence === 'High'
                          ? 'text-green-400 bg-[rgba(74,222,128,0.1)]'
                          : prediction.confidence === 'Medium'
                          ? 'text-yellow-400 bg-[rgba(250,204,21,0.1)]'
                          : 'text-purple-400 bg-[rgba(192,132,252,0.1)]'
                      }`}
                    >
                      {prediction.confidence} Confidence
                    </span>

                    <h3 className="text-xl font-semibold text-[#E8ECF1] mt-3 mb-3">
                      {prediction.title}
                    </h3>

                    <p className="text-sm md:text-base text-[#7A8BA5] leading-relaxed">
                      {prediction.body}
                    </p>
                  </div>
                </div>

                {/* Node - hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)',
                    }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                {prediction.side === 'right' && (
                  <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Methodology note */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-sm text-[#7A8BA5] italic max-w-2xl mx-auto">
            These predictions are derived from analysis of current research publications,
            industry reports, patent filings, and expert interviews. Confidence levels
            reflect the strength of supporting evidence, not certainty.
          </p>
        </div>
      </div>
    </section>
  );
}
