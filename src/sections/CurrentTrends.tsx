import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cloud, Zap, Brain, Grid3X3, Shield, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const trends = [
  {
    icon: Cloud,
    title: 'Cloud-Native Warehouses',
    body: 'Snowflake, BigQuery, and Redshift have shifted the paradigm from on-premise servers to elastic, pay-per-query cloud architectures. Decoupled storage and compute allow infinite scaling — but vendor lock-in remains a critical concern.',
    image: '/images/cloud-warehouse.jpg',
  },
  {
    icon: Zap,
    title: 'Real-Time Streaming',
    body: 'Apache Kafka, Flink, and ksqlDB are replacing batch ETL. Organizations now process petabytes in milliseconds. The challenge? Maintaining data consistency across distributed streaming pipelines while keeping latency under 100ms.',
    image: null,
  },
  {
    icon: Brain,
    title: 'AI-Driven Mining',
    body: 'Large language models and auto-ML tools are democratizing pattern recognition. But this automation introduces a paradox: as mining becomes easier, the risk of spurious correlations and black-box decisions intensifies.',
    image: '/images/brain-interface.jpg',
  },
  {
    icon: Grid3X3,
    title: 'Data Mesh Architecture',
    body: 'Moving from centralized data lakes to domain-oriented decentralized ownership. Each business unit manages its own data products — promising agility but requiring a cultural shift most enterprises underestimate.',
    image: null,
  },
  {
    icon: Shield,
    title: 'Privacy Regulations',
    body: 'GDPR, CCPA, and emerging AI Acts are forcing fundamental changes in how data is stored, processed, and deleted. Compliance is no longer an afterthought — it\'s becoming a primary architectural constraint.',
    image: null,
  },
  {
    icon: Radio,
    title: 'Edge Computing',
    body: 'Processing data at the source — IoT sensors, smartphones, autonomous vehicles — reduces bandwidth costs but creates a fragmentation problem. How do we mine meaning from billions of disconnected edge nodes?',
    image: '/images/data-center.jpg',
  },
];

export default function CurrentTrends() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0]?.parentElement,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="current-trends"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32"
      style={{ background: '#060B14' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-16 opacity-0">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-[#3B82F6] mb-4">
            01 / Current Landscape
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8ECF1] mb-4">
            Where We Stand Today
          </h2>
          <p className="text-base md:text-lg text-[#7A8BA5] max-w-[700px] leading-relaxed">
            The technologies, architectures, and challenges defining data warehousing
            and mining in 2025.
          </p>
        </div>

        {/* Trend Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            return (
              <div
                key={trend.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group relative bg-[#0D1526] border border-[#1A2744] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#3B82F6] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] opacity-0"
              >
                {/* Image if available */}
                {trend.image && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={trend.image}
                      alt={trend.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1526] to-transparent" />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[rgba(59,130,246,0.1)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#3B82F6]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#E8ECF1] mb-3">
                    {trend.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-[#7A8BA5] leading-relaxed">
                    {trend.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
