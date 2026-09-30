import { useState } from 'react';
import { PHILOSOPHY_CHAPTERS } from '../../data/philosophy';
import { Feather } from 'lucide-react';

interface PhilosophySectionProps {
  onSoundTrigger?: () => void;
}

export function PhilosophySection({ onSoundTrigger }: PhilosophySectionProps) {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="philosophy" className="relative py-24 md:py-36 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sticky Manifesto Title & Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="lg:sticky lg:top-32 flex flex-col gap-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
                <Feather className="w-4 h-4" />
                <span>INDEX // 02 — STUDIO MANIFESTO</span>
              </div>

              <h2 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-[#F4F4F0] uppercase tracking-tight leading-[1.05]">
                HOW WE <br />
                <span className="font-serif italic font-normal text-[#D8FF38]">
                  Provoke
                </span>
                <br />
                & TRANSCEND.
              </h2>

              <p className="font-sans text-base text-[#9A9AA8] max-w-md font-light leading-relaxed">
                We believe that the greatest digital works are born where architectural structure meets unapologetic emotional turbulence.
              </p>

              {/* Chapter Jump List */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                {PHILOSOPHY_CHAPTERS.map((chap, idx) => (
                  <button
                    key={chap.id}
                    onClick={() => {
                      if (onSoundTrigger) onSoundTrigger();
                      setActiveChapter(idx);
                    }}
                    data-cursor={`CHAPTER 0${idx + 1}`}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-300 ${
                      activeChapter === idx
                        ? 'bg-[#14141C] border-[#D8FF38]/50 text-[#F4F4F0] shadow-[0_0_20px_rgba(216,255,56,0.15)]'
                        : 'bg-transparent border-white/5 text-[#9A9AA8] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold ${
                          activeChapter === idx ? 'text-[#D8FF38]' : 'text-[#626270]'
                        }`}
                      >
                        {chap.number}
                      </span>
                      <span className="font-syne font-bold text-sm">
                        {chap.title}
                      </span>
                    </div>
                    {activeChapter === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8FF38] animate-ping" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative Chapters */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {PHILOSOPHY_CHAPTERS.map((chapter, idx) => (
              <div
                key={chapter.id}
                onMouseEnter={() => setActiveChapter(idx)}
                className={`p-8 md:p-12 rounded-3xl border transition-all duration-500 flex flex-col gap-6 ${
                  activeChapter === idx
                    ? 'bg-[#121218] border-[#D8FF38]/40 shadow-2xl scale-[1.01]'
                    : 'bg-[#0E0E14]/60 border-white/[0.08] opacity-80 hover:opacity-100'
                }`}
              >
                {/* Chapter Number & Top Accent */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-3xl font-black text-[#D8FF38]">
                    CHAPTER // {chapter.number}
                  </span>
                  <span className="font-mono text-xs text-[#626270] uppercase">
                    [KINESIS DOCTRINE]
                  </span>
                </div>

                {/* Main Chapter Title */}
                <h3 className="font-syne font-black text-2xl sm:text-3xl text-[#F4F4F0] uppercase tracking-tight">
                  {chapter.title}
                </h3>

                {/* Big Statement */}
                <blockquote className="font-serif italic text-xl md:text-2xl text-[#E8E8E2] border-l-2 border-[#D8FF38] pl-5 my-2 leading-snug">
                  "{chapter.statement}"
                </blockquote>

                {/* Deep Narrative */}
                <p className="font-sans text-base text-[#9A9AA8] leading-relaxed font-light">
                  {chapter.narrative}
                </p>

                {/* Key Takeaway Pill */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center gap-3 mt-2">
                  <div className="w-2 h-2 rounded-full bg-[#D8FF38]" />
                  <span className="font-mono text-xs text-[#F4F4F0]">
                    <strong className="text-[#D8FF38]">CORE LAW:</strong> {chapter.takeaway}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
