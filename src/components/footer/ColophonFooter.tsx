import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface ColophonFooterProps {
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function ColophonFooter({ onOpenBrief, onSoundTrigger }: ColophonFooterProps) {
  const scrollToTop = () => {
    if (onSoundTrigger) onSoundTrigger();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'ARE.NA', href: 'https://are.na', tag: 'Curated References' },
    { name: 'INSTAGRAM', href: 'https://instagram.com', tag: '@kinesis.archive' },
    { name: 'X / TWITTER', href: 'https://x.com', tag: '@kinesis_studio' },
    { name: 'GITHUB', href: 'https://github.com', tag: 'Open Shaders' },
    { name: 'LINKEDIN', href: 'https://linkedin.com', tag: 'Studio Inquiries' }
  ];

  return (
    <footer className="relative pt-24 pb-12 bg-[#050507] text-[#F4F4F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-20">
        {/* Massive Typographic Call to Action */}
        <div className="flex flex-col gap-8 items-start">
          <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
            <Sparkles className="w-4 h-4" />
            <span>LET'S CONVERSE // GLOBAL COLLABORATION</span>
          </div>

          <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-[#F4F4F0]">
            LET'S SHAPE <br />
            <span className="font-serif italic font-normal text-[#D8FF38]">
              The Next
            </span>
            <br />
            <span className="text-outline hover:text-[#D8FF38] transition-colors">
              STANDARD.
            </span>
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <MagneticButton
              variant="lime"
              size="lg"
              cursorText="START"
              onClick={onOpenBrief}
              onSoundTrigger={onSoundTrigger}
            >
              <span>COMMISSION KINESIS STUDIO</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            <a
              href="mailto:commissions@kinesis-studio.archive"
              className="font-mono text-sm text-[#9A9AA8] hover:text-[#D8FF38] underline underline-offset-8 transition-colors p-3"
            >
              commissions@kinesis-studio.archive
            </a>
          </div>
        </div>

        {/* Global Social & Office Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 border-t border-white/10">
          {/* Studio Presence */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider">
              STUDIO LOCATIONS
            </h4>
            <div className="flex flex-col gap-3 font-mono text-xs text-[#9A9AA8]">
              <div>
                <strong className="text-[#F4F4F0]">PARIS // HEADQUARTERS</strong>
                <p className="text-[#626270]">28 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              </div>
              <div>
                <strong className="text-[#F4F4F0]">ZURICH // SPATIAL LAB</strong>
                <p className="text-[#626270]">Hardturmstrasse 161, 8005 Zürich</p>
              </div>
              <div>
                <strong className="text-[#F4F4F0]">NEW YORK // BRAND DESK</strong>
                <p className="text-[#626270]">530 W 25th St, Chelsea, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider">
              DIGITAL DISPATCHES
            </h4>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="VISIT"
                  className="flex items-center justify-between py-1.5 border-b border-white/5 group"
                >
                  <span className="font-syne font-bold text-sm text-[#9A9AA8] group-hover:text-[#D8FF38] transition-colors">
                    {s.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#626270] group-hover:text-[#F4F4F0] transition-colors flex items-center gap-1">
                    {s.tag}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Colophon Specs */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider">
              COLOPHON & ARCHITECTURE
            </h4>
            <div className="p-4 rounded-2xl bg-[#0D0D12] border border-white/10 flex flex-col gap-2 font-mono text-[11px] text-[#9A9AA8]">
              <div className="flex justify-between">
                <span className="text-[#626270]">Typography:</span>
                <span className="text-[#F4F4F0]">Syne, Plus Jakarta, Space Mono</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#626270]">Shaders & Audio:</span>
                <span className="text-[#D8FF38]">WebGL 2.0 / Web Audio API</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#626270]">Carbon Impact:</span>
                <span className="text-[#F4F4F0]">0.12g CO2/view (Green Host)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#626270]">Benchmark:</span>
                <span className="text-[#F4F4F0]">99.8% CWV // 60 FPS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 font-mono text-xs text-[#626270]">
          <div className="flex items-center gap-2">
            <span>© 2026 KINESIS ARCHIVE INC. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 text-[#9A9AA8] hover:text-[#D8FF38] transition-colors group"
          >
            <span>RETURN TO SUMMIT</span>
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#D8FF38] group-hover:text-[#08080A] transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
