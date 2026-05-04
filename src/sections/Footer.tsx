export default function Footer() {
  return (
    <footer
      className="relative w-full py-12 md:py-16 border-t border-[#1A2744]"
      style={{ background: '#0A1120' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-base font-semibold text-[#E8ECF1] mb-2">
          Data Futures Showcase
        </h3>
        <p className="text-sm text-[#7A8BA5] mb-1">
          Created for Data Warehousing & Mining Course
        </p>
        <p className="text-sm text-[#7A8BA5] mb-1">
          By Sri Dhanush Reddy Kondapalli
        </p>

        <p className="text-sm text-[#3B82F6] italic">
          "The future belongs to those who understand data."
        </p>

        <div className="mt-8 pt-6 border-t border-[#1A2744]/50">
          <p className="text-xs text-[#7A8BA5]/50">
            An interactive exploration of data warehousing, mining, and the road ahead.
          </p>
        </div>
      </div>
    </footer>
  );
}
