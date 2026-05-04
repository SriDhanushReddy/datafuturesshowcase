import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reflections = [
  {
    question: 'Why an interactive website?',
    answer: `I chose an interactive website over a traditional presentation because data warehousing and mining are inherently digital disciplines. A static PowerPoint would contradict the subject matter. The web format allowed me to *embody* the content — using interactive timelines, hover states, and scroll-driven animations to mirror the dynamic, real-time nature of modern data systems. The medium became the message.`
  },
  {
    question: 'What drove the creative choices?',
    answer: `The dark, data-command-center aesthetic was deliberate. Data professionals spend hours staring at dashboards — the visual language of dark mode with electric blue accents is culturally familiar to the audience. I chose a timeline for predictions because futures are inherently sequential. The PREPARE framework uses an acronym because memorable frameworks drive adoption — think SMART goals or SWOT analysis. Every design decision was purposeful, not decorative.`
  },
  {
    question: 'What challenges did you face?',
    answer: `The biggest challenge was balancing depth with accessibility. Data mining ethics could fill a dissertation. I solved this by using the 'iceberg' approach — surface-level summaries with deeper critical insights embedded in each section. The interactive cards invite exploration without overwhelming. Another challenge: making speculation feel rigorous. I grounded each prediction in current research and labeled confidence intervals to signal uncertainty transparently.`
  },
  {
    question: 'What would you do differently?',
    answer: `Given more time, I would add a live data visualization component — perhaps a real-time simulation of a federated learning network or a D3.js force-directed graph showing data mesh relationships. I'd also incorporate peer interviews with data professionals to add authentic voices. The solo format limits perspective; data futures are too important for single viewpoints. I'd also add a discussion forum where classmates could contribute their own predictions.`
  },
];

export default function Reflection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemsRef.current[0]?.parentElement,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reflection"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32"
      style={{ background: '#060B14' }}
    >
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-[#06B6D4] mb-4">
            05 / Reflection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8ECF1] mb-4">
            Behind the Creation
          </h2>
          <p className="text-base md:text-lg text-[#7A8BA5] max-w-[600px] mx-auto leading-relaxed">
            A reflective analysis of the creative and technical choices made in this
            project.
          </p>
        </div>

        {/* Reflection items */}
        <div className="space-y-10 md:space-y-12">
          {reflections.map((item, index) => (
            <div
              key={item.question}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="relative pl-6 md:pl-8 opacity-0"
            >
              {/* Left border accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, #3B82F6, #06B6D4)',
                }}
              />

              <h3 className="text-lg md:text-xl font-semibold text-[#E8ECF1] mb-3">
                {item.question}
              </h3>
              <p className="text-sm md:text-base text-[#7A8BA5] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Closing thought */}
        <div className="mt-16 md:mt-20 text-center">
          <div
            className="inline-block px-8 py-6 rounded-2xl border border-[#1A2744]"
            style={{
              background:
                'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
            }}
          >
            <p className="text-sm md:text-base text-[#7A8BA5] italic leading-relaxed max-w-lg">
              "This project taught me that the future of data isn't just about faster
              queries or bigger warehouses. It's about the choices we make as builders
              and stewards of these systems. The technology is the easy part. The
              ethics, the governance, the human impact — that's where the real work
              begins."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
