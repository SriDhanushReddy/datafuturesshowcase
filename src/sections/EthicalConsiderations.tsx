import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Globe, FileCheck, Lock, EyeOff, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ethicalIssues = [
  {
    icon: Eye,
    title: 'Predictive Privacy',
    body: "When algorithms can infer your health status, political leanings, and relationship stability from warehouse metadata, is any data truly 'anonymous'? Re-identification attacks have succeeded with 99.98% accuracy using just four spatiotemporal points.",
  },
  {
    icon: Globe,
    title: 'Algorithmic Colonialism',
    body: 'Western-centric training data perpetuates global inequities. When AI mining tools are exported to developing nations without local data representation, they become instruments of digital colonialism — extracting insights while imposing foreign value systems.',
  },
  {
    icon: FileCheck,
    title: 'Consent at Scale',
    body: "The click-wrap consent model is broken. In a world where data mining happens across billions of edge devices in real-time, how can meaningful consent even be obtained? The concept of 'informed consent' may need to be reimagined entirely.",
  },
  {
    icon: Lock,
    title: 'Transparency vs. Security',
    body: 'Explainable AI (XAI) demands we understand how models reach conclusions. But in data mining, the most powerful techniques — deep neural ensembles, quantum annealing — are inherently opaque. How do we balance the right to explanation against competitive and national security?',
  },
];

const prepareFramework = [
  {
    letter: 'P',
    word: 'Proactive Privacy',
    desc: 'Privacy by design, not by remediation',
    icon: EyeOff,
  },
  {
    letter: 'R',
    word: 'Representational Equity',
    desc: 'Datasets must reflect global diversity',
    icon: Globe,
  },
  {
    letter: 'E',
    word: 'Explainable Processes',
    desc: 'Every mining operation must be auditable',
    icon: FileCheck,
  },
  {
    letter: 'P',
    word: 'Purpose Limitation',
    desc: 'Data collected for X cannot be used for Y',
    icon: Lock,
  },
  {
    letter: 'A',
    word: 'Accountability Chains',
    desc: 'Clear liability for algorithmic harm',
    icon: Eye,
  },
  {
    letter: 'R',
    word: 'Right to Existence',
    desc: 'Individuals can demand data deletion across all derivatives',
    icon: EyeOff,
  },
  {
    letter: 'E',
    word: 'Ecological Awareness',
    desc: 'Energy cost of mining must be transparent and minimized',
    icon: Leaf,
  },
];

export default function EthicalConsiderations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const issuesRef = useRef<HTMLDivElement[]>([]);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement[]>([]);

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

      // Issues cards animation
      gsap.fromTo(
        issuesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: issuesRef.current[0]?.parentElement,
            start: 'top 80%',
          },
        }
      );

      // Framework section animation
      gsap.fromTo(
        frameworkRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: frameworkRef.current,
            start: 'top 80%',
          },
        }
      );

      // Pillars animation
      gsap.fromTo(
        pillarsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarsRef.current[0]?.parentElement,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ethical-considerations"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32"
      style={{ background: '#060B14' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 opacity-0">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-[#F59E0B] mb-4">
            03 / Ethical Frontiers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8ECF1] mb-4">
            The Ethics of Tomorrow's Data
          </h2>
          <p className="text-base md:text-lg text-[#7A8BA5] max-w-[700px] leading-relaxed">
            As capabilities expand, ethical considerations intensify. The questions we
            face in the next decade will make today's debates look simple.
          </p>
        </div>

        {/* Ethical Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          {ethicalIssues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <div
                key={issue.title}
                ref={(el) => {
                  if (el) issuesRef.current[index] = el;
                }}
                className="group bg-[#0D1526] border border-[#1A2744] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[#F59E0B]/50 hover:-translate-y-1 opacity-0"
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(245,158,11,0.1)] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h3 className="text-lg font-semibold text-[#E8ECF1] mb-3">
                  {issue.title}
                </h3>
                <p className="text-sm text-[#7A8BA5] leading-relaxed">{issue.body}</p>
              </div>
            );
          })}
        </div>

        {/* PREPARE Framework */}
        <div
          ref={frameworkRef}
          className="relative rounded-2xl p-8 md:p-12 opacity-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
            border: '1px solid #1A2744',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#E8ECF1] mb-3 text-center">
            Proposed: The PREPARE Framework
          </h3>
          <p className="text-sm text-[#7A8BA5] text-center mb-10 max-w-2xl mx-auto">
            A seven-pillar ethical framework for navigating the future of data
            warehousing and mining.
          </p>

          {/* Pillars */}
          <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
            {prepareFramework.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.word}
                  ref={(el) => {
                    if (el) pillarsRef.current[index] = el;
                  }}
                  className="flex-shrink-0 w-[240px] md:w-[280px] bg-[#0D1526] rounded-xl p-6 border border-[#1A2744] snap-start opacity-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(59,130,246,0.1)] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <span className="text-3xl font-bold text-gradient-blue">
                      {pillar.letter}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#E8ECF1] mb-2">
                    {pillar.word}
                  </h4>
                  <p className="text-sm text-[#7A8BA5]">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
