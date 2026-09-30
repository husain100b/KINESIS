import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Play, Sparkles, Globe, Compass, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { MarqueeTicker } from '../common/MarqueeTicker';
import { ReelModal } from './ReelModal';

interface HeroSectionProps {
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function HeroSection({ onOpenBrief, onSoundTrigger }: HeroSectionProps) {
  const [isReelOpen, setIsReelOpen] = useState(false);

  const tickerItems = [
    'STRATEGIC CATEGORY DESIGN',
    'BESPOKE BRAND ARCHITECTURE',
    'IMMERSIVE WEBGL SYSTEMS',
    'SPATIAL 3D COMPUTING',
    'COMMERCIAL ENTERPRISE VALUE',
    'TACTILE DIGITAL EXPERIENCES',
    'ALGORITHMIC TYPOGRAPHY SYSTEMS',
    'SUB-SECOND EDGE FLAGSHIPS'
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 md:pt-40 pb-12 overflow-hidden">
      {/* Studio Header Meta Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 mb-8 md:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8FF38] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8FF38]" />
            </span>
            <span className="font-mono text-xs font-semibold text-[#F4F4F0] tracking-wider uppercase">
              STUDIO STATUS: ACCEPTING Q3/Q4 STRATEGIC COMMISSIONS
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-[#9A9AA8]">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#D8FF38]" />
              PARIS ✦ ZURICH ✦ NEW YORK
            </span>
            <span className="text-[#626270]">
              [LAT 48.8566° N // LON 2.3522° E]
            </span>
          </div>
        </div>
      </div>

      {/* Main Bold Kinetic Statement */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 2xl:gap-24 items-end">
          {/* Main Headline & Manifesto Position */}
          <div className="xl:col-span-7 flex flex-col gap-6 xl:pr-6 min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D8FF38] font-mono text-[11px] w-fit">
              <Compass className="w-3.5 h-3.5" />
              <span>STRATEGIC DESIGN & COMPUTATIONAL ARCHITECTURE</span>
            </div>

            <h1 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl xl:text-[3.5rem] 2xl:text-[4.3rem] leading-[0.96] tracking-tight uppercase text-[#F4F4F0] min-w-0">
              STRATEGIC <br />
              <span className="font-serif italic font-normal text-[#D8FF38] tracking-normal lowercase text-[1.08em] pr-2">
                conviction
              </span>
              ENGINEERED INTO <br />
              <span className="text-outline">CATEGORY</span>{' '}
              <span className="inline-block">MONOPOLY.</span>
            </h1>

            {/* Strategic Manifesto Narrative */}
            <div className="flex flex-col gap-3 max-w-xl">
              <p className="font-sans text-base sm:text-lg text-[#F4F4F0] leading-relaxed font-normal">
                Most agencies deliver execution without a point-of-view. KINESIS operates as an uncompromised strategic partner—uniting category-defining brand architecture, tactile digital flagships, and spatial computing to create unassailable enterprise moats.
              </p>
              <div className="flex items-center gap-3 pt-1 text-xs font-mono text-[#9A9AA8]">
                <ShieldCheck className="w-4 h-4 text-[#D8FF38] shrink-0" />
                <span>Measurable commercial uplift. Zero commodity templates. 100% partner-led engagements.</span>
              </div>
            </div>

            {/* CTAs & Micro Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton
                variant="lime"
                size="lg"
                cursorText="START"
                onClick={onOpenBrief}
                onSoundTrigger={onSoundTrigger}
              >
                <span>INITIATE STRATEGIC BRIEF</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <a href="#works">
                <MagneticButton
                  variant="outline"
                  size="lg"
                  cursorText="EXPLORE"
                  onSoundTrigger={onSoundTrigger}
                >
                  <span>SELECTED PROOFS & CASE STUDIES</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Interactive Showreel Teaser Widget & Strategic Credibility */}
          <div className="xl:col-span-5 flex flex-col gap-4 max-w-lg xl:max-w-none w-full">
            <div
              onClick={() => {
                if (onSoundTrigger) onSoundTrigger();
                setIsReelOpen(true);
              }}
              data-cursor="PLAY REEL"
              className="group relative rounded-2xl overflow-hidden bg-[#111116] border border-white/15 p-1.5 transition-all duration-500 hover:border-[#D8FF38] hover:shadow-[0_0_35px_rgba(216,255,56,0.2)] cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85"
                  alt="Studio Showreel Reel Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                />

                {/* Glowing Play Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center transition-transform duration-300 group-hover:scale-115 shadow-[0_0_30px_rgba(216,255,56,0.6)]">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#D8FF38] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>2026 STRATEGIC THESIS REEL</span>
                </div>

                {/* Bottom Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-[#F4F4F0]">
                  01:42 // 4K 60FPS
                </div>
              </div>

              <div className="p-3 flex items-center justify-between">
                <div>
                  <h3 className="font-syne font-bold text-sm text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors">
                    WATCH STUDIO MANIFESTO
                  </h3>
                  <p className="font-mono text-[10px] text-[#626270]">
                    Category Framing, Spatial Computing & Real-time WebGL
                  </p>
                </div>
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#D8FF38] group-hover:text-[#08080A] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Strategic Credentials Grid */}
            <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-[#111116]/80 border border-white/10 font-mono text-center shadow-lg">
              <div>
                <div className="text-base font-black text-[#D8FF38]">$1.2B+</div>
                <div className="text-[9px] text-[#9A9AA8] uppercase">Client Value Impacted</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-base font-black text-[#F4F4F0]">3.4x</div>
                <div className="text-[9px] text-[#9A9AA8] uppercase">Avg Conversion Lift</div>
              </div>
              <div>
                <div className="text-base font-black text-[#D8FF38]">100%</div>
                <div className="text-[9px] text-[#9A9AA8] uppercase">Partner Led (0 Juniors)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Infinite Ribbon */}
      <div className="w-full mt-12 border-y border-white/[0.08] bg-[#0C0C10]/70 backdrop-blur-sm">
        <MarqueeTicker items={tickerItems} speed="normal" />
      </div>

      {/* Showreel Cinema Modal */}
      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
        onSoundTrigger={onSoundTrigger}
      />
    </section>
  );
}
