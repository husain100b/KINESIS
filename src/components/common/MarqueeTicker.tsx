interface MarqueeTickerProps {
  items: string[];
  speed?: 'normal' | 'slow' | 'reverse';
  separator?: string;
  className?: string;
  outline?: boolean;
}

export function MarqueeTicker({
  items,
  speed = 'normal',
  separator = '✦',
  className = '',
  outline = false,
}: MarqueeTickerProps) {
  const speedClass = {
    normal: 'animate-marquee',
    slow: 'animate-marquee-slow',
    reverse: 'animate-marquee-reverse',
  }[speed];

  // Quadruple items to ensure seamless infinite looping on ultra-wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden py-3 select-none ${className}`}>
      <div className={speedClass}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span
              className={`font-syne font-extrabold uppercase tracking-widest text-sm md:text-base px-4 transition-colors ${
                outline
                  ? 'text-outline hover:text-[#D8FF38]'
                  : 'text-[#F4F4F0] hover:text-[#D8FF38]'
              }`}
            >
              {item}
            </span>
            <span className="text-[#D8FF38] text-xs opacity-75">{separator}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
