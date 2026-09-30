import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<{
    text: string;
    isHovered: boolean;
    isMagnetic: boolean;
  }>({
    text: '',
    isHovered: false,
    isMagnetic: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices (not touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      setIsVisible(true);

      // Check hovered element cursor data
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorState({
          text,
          isHovered: true,
          isMagnetic: text.toLowerCase() === 'magnetic'
        });
      } else if (target?.closest('button, a, input, textarea, select')) {
        setCursorState({
          text: '',
          isHovered: true,
          isMagnetic: false
        });
      } else {
        setCursorState({
          text: '',
          isHovered: false,
          isMagnetic: false
        });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth lerp loop for the trailing ring
    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorState.isHovered
              ? 'w-2 h-2 bg-[#D8FF38] shadow-[0_0_12px_#D8FF38]'
              : 'w-1.5 h-1.5 bg-[#F4F4F0]'
          }`}
        />
      </div>

      {/* Dynamic Trailing Follower */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 backdrop-blur-[2px] ${
            cursorState.text
              ? 'w-24 h-24 bg-[#D8FF38]/90 text-[#08080A] font-mono text-[11px] font-bold tracking-widest uppercase border border-[#D8FF38]'
              : cursorState.isHovered
              ? 'w-12 h-12 border border-[#D8FF38]/60 bg-[#D8FF38]/10'
              : 'w-8 h-8 border border-white/20'
          }`}
        >
          {cursorState.text && (
            <span className="animate-pulse">{cursorState.text}</span>
          )}
        </div>
      </div>
    </>
  );
}
