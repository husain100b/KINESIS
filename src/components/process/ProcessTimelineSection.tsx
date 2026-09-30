import { useState } from 'react';
import { PROCESS_PHASES, PROCESS_PRINCIPLES } from '../../data/process';
import { Clock, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface ProcessTimelineSectionProps {
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function ProcessTimelineSection({ onOpenBrief, onSoundTrigger }: ProcessTimelineSectionProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PROCESS_PHASES[activePhaseIndex];

  return (
    <section id="process" className="relative py-24 md:py-36 border-b border-white/[0.08] bg-[#07070A] overflow-hidden">
      {/* Background Subtle Architectural Line Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col gap-16 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
              <Clock className="w-4 h-4" />
              <span>INDEX // 03 — STRATEGIC ENGAGEMENT TIMELINE</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F4F0] uppercase tracking-tight leading-[1.05]">
              FROM DIAGNOSIS <br />
              <span className="font-serif italic font-normal text-[#D8FF38]">
                To Category Dominance
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm md:text-base text-[#9A9AA8] max-w-md font-light leading-relaxed">
            We reject chaotic agency sprints and opaque deliverables. Our 10-week engagement architecture is engineered with mathematical clarity, predictable milestones, and relentless commercial focus.
          </p>
        </div>

        {/* Interactive Timeline Rail / Phase Navigation */}
        <div className="flex flex-col gap-8">
          {/* Phase Scrubber Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PROCESS_PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;

              return (
                <button
                  key={phase.id}
                  onClick={() => {
                    if (onSoundTrigger) onSoundTrigger();
                    setActivePhaseIndex(idx);
                  }}
                  data-cursor={`PHASE 0${idx + 1}`}
                  className={`p-4 md:p-6 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between min-h-[130px] group ${
                    isActive
                      ? 'bg-[#14141E] border-[#D8FF38] shadow-[0_0_25px_rgba(216,255,56,0.15)]'
                      : 'bg-[#0B0B0F] border-white/10 hover:border-white/20 hover:bg-[#101016]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? 'text-[#D8FF38]' : 'text-[#626270]'
                      }`}
                    >
                      PHASE // {phase.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#D8FF38]/20 text-[#D8FF38] border border-[#D8FF38]/40'
                          : 'bg-white/5 text-[#9A9AA8]'
                      }`}
                    >
                      {phase.duration}
                    </span>
                  </div>

                  <div className="flex flex-col mt-4">
                    <span className="font-syne font-bold text-sm sm:text-base text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors leading-snug uppercase">
                      {phase.name}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#D8FF38] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Deep Phase Inspector Card */}
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#111118] border border-white/15 shadow-2xl relative overflow-hidden">
            {/* Top Phase Header Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#D8FF38]">
                    0{activePhaseIndex + 1}
                  </span>
                  <div className="h-6 w-[1px] bg-white/20" />
                  <span className="font-mono text-xs text-[#9A9AA8] uppercase tracking-widest">
                    {activePhase.duration}
                  </span>
                </div>
                <h3 className="font-syne font-black text-2xl sm:text-3xl md:text-4xl text-[#F4F4F0] uppercase tracking-tight">
                  {activePhase.name}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-[#D8FF38]">
                  "{activePhase.tagline}"
                </p>
              </div>

              {/* Formal Checkpoint Pill */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-1 max-w-xs shrink-0">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#D8FF38]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PHASE GATE CHECKPOINT</span>
                </div>
                <p className="font-sans text-xs text-[#F4F4F0]">
                  {activePhase.checkpoint}
                </p>
              </div>
            </div>

            {/* Narrative Breakdown */}
            <div className="py-8 border-b border-white/10">
              <p className="font-sans text-base sm:text-lg text-[#9A9AA8] leading-relaxed font-light">
                {activePhase.summary}
              </p>
            </div>

            {/* 2-Column: Strategic Activities vs Artifacts & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Left: Strategic Activities */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#D8FF38]" />
                  <span>STRATEGIC ACTIVITIES & RIGOR</span>
                </span>
                <ul className="flex flex-col gap-3">
                  {activePhase.strategicActivities.map((act, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#9A9AA8]"
                    >
                      <span className="font-mono text-[11px] text-[#D8FF38] shrink-0 mt-0.5">
                        [0{idx + 1}]
                      </span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Tangible Deliverables */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D8FF38]" />
                  <span>TANGIBLE EXECUTIVE DELIVERABLES</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePhase.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 font-sans text-xs text-[#F4F4F0] flex items-center gap-2.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D8FF38] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase Footer Navigation */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#626270]">
                <span>ENGAGEMENT PACING:</span>
                <span className="text-[#F4F4F0]">WEEKS 01–10 (COMPLETE LIFECYCLE)</span>
              </div>

              <div className="flex items-center gap-3">
                {activePhaseIndex < PROCESS_PHASES.length - 1 ? (
                  <button
                    onClick={() => {
                      if (onSoundTrigger) onSoundTrigger();
                      setActivePhaseIndex(prev => prev + 1);
                    }}
                    className="font-mono text-xs text-[#D8FF38] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>EXPLORE NEXT PHASE [0{activePhaseIndex + 2}]</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <MagneticButton
                    variant="lime"
                    size="sm"
                    onClick={onOpenBrief}
                    onSoundTrigger={onSoundTrigger}
                  >
                    <span>LOCK AN ENGAGEMENT WINDOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Process Principles / Tenets Grid */}
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex items-center justify-between">
            <h4 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D8FF38]" />
              <span>THE NON-NEGOTIABLE TENETS OF KINESIS PARTNERSHIPS</span>
            </h4>
            <span className="font-mono text-xs text-[#626270] hidden sm:inline">
              [GOVERNANCE // 2026]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E0E14] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col gap-3 group"
              >
                <span className="font-mono text-xs font-bold text-[#D8FF38]">
                  0{idx + 1} // RULE
                </span>
                <h5 className="font-syne font-bold text-base text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors">
                  {principle.title}
                </h5>
                <p className="font-sans text-xs text-[#9A9AA8] leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
