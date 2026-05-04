import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    number: '01',
    title: 'Federated Learning Networks',
    body: 'Instead of centralizing data, send models to the data. Federated learning allows mining insights across distributed datasets without ever moving raw data. Combined with differential privacy, this could eliminate the central warehouse entirely — replacing it with a mesh of intelligent, privacy-preserving nodes.',
  },
  {
    number: '02',
    title: 'Green Data Architecture',
    body: 'Data centers consume 1% of global electricity. The solution? Dynamic warehouse hibernation — spinning down unused compute clusters, using AI to predict query patterns and pre-warm only necessary nodes. Combined with immersion cooling and renewable energy sourcing, we can achieve carbon-negative data operations.',
  },
  {
    number: '03',
    title: 'Human-in-the-Loop AI',
    body: 'Fully autonomous mining is dangerous. The solution is symbiotic: AI handles pattern detection at scale, humans provide judgment, context, and ethical oversight. Implementing mandatory human review gates for high-stakes mining operations prevents the worst outcomes of unchecked algorithmic decision-making.',
  },
  {
    number: '04',
    title: 'Semantic Data Fabrics',
    body: "Current warehouses store structured and semi-structured data. The next evolution is semantic fabrics — data layers that understand meaning, context, and relationships natively. Using knowledge graphs and ontological mapping, queries become conversations: 'Show me why sales dropped' rather than 'SELECT * FROM sales WHERE date > ...'",
  },
  {
    number: '05',
    title: 'Decentralized Data Governance',
    body: "Blockchain-based governance tokens could democratize data ownership. Individuals hold tokens representing their data rights; organizations must stake collateral to access data; smart contracts enforce purpose limitation automatically. It's radical — but it might be the only way to restore trust.",
  },
];

export default function InnovativeSolutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 400;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

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
        carouselRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="innovative-solutions"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32"
      style={{ background: '#0A1120' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 opacity-0"
        >
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-[0.12em] text-[#3B82F6] mb-4">
              04 / Innovative Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8ECF1] mb-4">
              Strategies for the Next Era
            </h2>
            <p className="text-base md:text-lg text-[#7A8BA5] max-w-[700px] leading-relaxed">
              Concrete, actionable strategies the industry must adopt to navigate the
              coming transformation responsibly.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-[#1A2744] flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'text-[#E8ECF1] hover:border-[#3B82F6] hover:bg-[rgba(59,130,246,0.1)]'
                  : 'text-[#7A8BA5]/30 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-[#1A2744] flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'text-[#E8ECF1] hover:border-[#3B82F6] hover:bg-[rgba(59,130,246,0.1)]'
                  : 'text-[#7A8BA5]/30 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#1A2744 transparent',
          }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="flex-shrink-0 w-[340px] md:w-[400px] bg-[#0D1526] border border-[#1A2744] rounded-2xl p-8 md:p-10 snap-start transition-all duration-300 hover:border-[#3B82F6] group"
            >
              {/* Number */}
              <span className="block text-5xl md:text-6xl font-bold text-[rgba(59,130,246,0.15)] mb-4">
                {solution.number}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#E8ECF1] mb-4 group-hover:text-gradient-blue transition-colors">
                {solution.title}
              </h3>

              {/* Body */}
              <p className="text-sm md:text-base text-[#7A8BA5] leading-relaxed">
                {solution.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
