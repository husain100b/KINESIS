import { useState } from 'react';
import { CAPABILITIES } from '../../data/capabilities';
import { Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface CapabilitiesSectionProps {
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function CapabilitiesSection({ onOpenBrief, onSoundTrigger }: CapabilitiesSectionProps) {
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const activeCap = CAPABILITIES[activeCapabilityIndex];

  return (
    <section id="capabilities" className="relative py-24 md:py-36 border-b border-white/[0.08] bg-[#09090D]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
              <Layers className="w-4 h-4" />
              <span>INDEX // 03 — DISCIPLINARY MATRIX</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F4F0] uppercase tracking-tight">
              CAPABILITIES & <br />
              <span className="font-serif italic font-normal text-[#D8FF38]">
                Creative Engineering
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm md:text-base text-[#9A9AA8] max-w-md font-light">
            We operate seamlessly across four core pillars, eliminating the traditional divide between design thinkers and computational engineers.
          </p>
        </div>

        {/* Interactive Capabilities Grid / Master-Detail Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Capability List */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeCapabilityIndex === idx;

              return (
                <div
                  key={cap.id}
                  onClick={() => {
                    if (onSoundTrigger) onSoundTrigger();
                    setActiveCapabilityIndex(idx);
                  }}
                  onMouseEnter={() => {
                    setActiveCapabilityIndex(idx);
                  }}
                  data-cursor="SELECT"
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-3 group ${
                    isActive
                      ? 'bg-[#14141C] border-[#D8FF38] shadow-[0_0_30px_rgba(216,255,56,0.15)]'
                      : 'bg-[#0E0E14] border-white/10 hover:border-white/20 hover:bg-[#111116]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isActive ? 'text-[#D8FF38]' : 'text-[#626270]'
                      }`}
                    >
                      {cap.number} // VERTICAL
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                        isActive
                          ? 'bg-[#D8FF38] text-[#08080A] rotate-45'
                          : 'bg-white/5 text-[#9A9AA8] group-hover:text-[#F4F4F0]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-syne font-black text-xl sm:text-2xl text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors uppercase">
                    {cap.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#9A9AA8] font-light">
                    {cap.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Showcase & Deliverables Matrix */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111118] border border-white/15 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
              {/* Top Visual Card */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={activeCap.image}
                  alt={activeCap.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="font-mono text-xs font-bold text-[#D8FF38] bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    BENCHMARK: {activeCap.stats}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="font-sans text-sm sm:text-base text-[#F4F4F0] leading-relaxed">
                {activeCap.summary}
              </p>

              {/* Strategic Value Proposition */}
              {activeCap.strategicValue && (
                <div className="p-4 rounded-xl bg-black/50 border border-[#D8FF38]/30 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] font-bold text-[#D8FF38] uppercase tracking-wider">
                    COMMERCIAL & STRATEGIC LEVERAGE:
                  </span>
                  <p className="font-sans text-xs text-[#E8E8E2] leading-relaxed">
                    {activeCap.strategicValue}
                  </p>
                </div>
              )}

              {/* Deliverables Checklist */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-bold text-[#9A9AA8] uppercase tracking-wider">
                  CORE ARTIFACTS & DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCap.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-[#9A9AA8]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8FF38] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Matrix */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-bold text-[#9A9AA8] uppercase tracking-wider">
                  PRIMARY TOOLKIT & FRAMEWORKS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCap.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-[#F4F4F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client References */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#626270] uppercase">
                    PROVEN WITH
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#D8FF38]">
                    {activeCap.highlightClient}
                  </span>
                </div>

                <MagneticButton
                  variant="lime"
                  size="sm"
                  cursorText="ENGAGE"
                  onClick={onOpenBrief}
                  onSoundTrigger={onSoundTrigger}
                >
                  <span>COMMISSION VERTICAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
