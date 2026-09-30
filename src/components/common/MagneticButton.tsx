import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  cursorText?: string;
  onSoundTrigger?: () => void;
}

export function MagneticButton({
  children,
  strength = 0.25,
  variant = 'primary',
  size = 'md',
  cursorText,
  className = '',
  onClick,
  onMouseEnter,
  onSoundTrigger,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onSoundTrigger) {
      onSoundTrigger();
    }
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  // Base styles
  const baseClasses =
    'relative inline-flex items-center justify-center font-mono font-medium tracking-wider uppercase transition-transform duration-200 ease-out select-none cursor-pointer group active:scale-[0.98]';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-full gap-2',
    md: 'px-6 py-3.5 text-xs rounded-full gap-3',
    lg: 'px-8 py-4 text-sm rounded-full gap-3.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#F4F4F0] text-[#08080A] hover:bg-[#D8FF38] shadow-lg hover:shadow-[0_0_25px_rgba(216,255,56,0.3)]',
    lime:
      'bg-[#D8FF38] text-[#08080A] hover:bg-white shadow-[0_0_20px_rgba(216,255,56,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] font-bold',
    secondary:
      'bg-[#181820] text-[#F4F4F0] border border-white/10 hover:border-[#D8FF38]/50 hover:bg-[#20202C]',
    outline:
      'bg-transparent text-[#F4F4F0] border border-white/20 hover:border-[#D8FF38] hover:text-[#D8FF38]',
    ghost:
      'bg-transparent text-[#9A9AA8] hover:text-[#F4F4F0] hover:bg-white/5',
  }[variant];

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      data-cursor={cursorText}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
