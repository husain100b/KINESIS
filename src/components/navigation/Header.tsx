import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { WorldClocks } from './WorldClocks';
import { MagneticButton } from '../common/MagneticButton';

interface HeaderProps {
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function Header({
  isMuted,
  onToggleSound,
  onOpenBrief,
  onSoundTrigger,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORKS', href: '#works', badge: '06' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'RECOGNITION', href: '#collaborators' },
  ];

  const handleNavClick = () => {
    if (onSoundTrigger) onSoundTrigger();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08080A]/85 backdrop-blur-md border-b border-white/[0.07] shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          {/* Studio Brand Monogram */}
          <a
            href="#"
            onClick={onSoundTrigger}
            data-cursor="KINESIS"
            className="group flex items-center gap-3.5 shrink-0"
          >
            <div className="relative w-8 h-8 rounded-lg bg-[#14141A] border border-white/15 flex items-center justify-center overflow-hidden group-hover:border-[#D8FF38] transition-colors duration-300">
              <div className="w-3.5 h-3.5 border border-[#D8FF38] rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D8FF38]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-black text-sm tracking-wider text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors">
                KINESIS
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#626270] uppercase">
                STUDIO // 2026
              </span>
            </div>
          </a>

          {/* Center: Live World Clocks */}
          <WorldClocks />

          {/* Right Action Stack */}
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 mr-2 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onSoundTrigger}
                  data-cursor="GO"
                  className="font-mono text-xs font-medium text-[#9A9AA8] hover:text-[#D8FF38] transition-colors flex items-center gap-1.5 group py-1"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] text-[#626270] group-hover:text-[#D8FF38]/80">
                      [{link.badge}]
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
              }}
              data-cursor={isMuted ? 'UNMUTE' : 'MUTE'}
              className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isMuted
                  ? 'border-white/10 text-[#626270] hover:text-[#F4F4F0] hover:border-white/20 bg-[#121216]/60'
                  : 'border-[#D8FF38]/50 text-[#D8FF38] bg-[#D8FF38]/10 shadow-[0_0_15px_rgba(216,255,56,0.2)]'
              }`}
              title={isMuted ? 'Enable tactile sound synthesis' : 'Mute sound synthesis'}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <div className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="w-1 h-2.5 bg-[#D8FF38] rounded-full animate-bounce" />
                </div>
              )}
            </button>

            {/* Start Brief CTA */}
            <div className="hidden sm:block">
              <MagneticButton
                variant="lime"
                size="sm"
                cursorText="COMMISSION"
                onClick={onOpenBrief}
                onSoundTrigger={onSoundTrigger}
              >
                <span>INITIATE BRIEF</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                if (onSoundTrigger) onSoundTrigger();
                setMobileMenuOpen(prev => !prev);
              }}
              className="lg:hidden p-2 rounded-lg bg-[#14141A] border border-white/10 text-[#F4F4F0]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#08080A]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF38] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NAVIGATION ARCHIVE</span>
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="font-syne font-extrabold text-3xl tracking-tight text-[#F4F4F0] hover:text-[#D8FF38] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#626270]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <MagneticButton
              variant="lime"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              onSoundTrigger={onSoundTrigger}
            >
              <span>START A BRIEF // Q3 2026</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
            <div className="flex justify-between items-center text-xs font-mono text-[#626270] pt-4">
              <span>STATUS: ACCEPTING WORK</span>
              <span className="text-[#D8FF38]">UTC+1 PARIS</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
