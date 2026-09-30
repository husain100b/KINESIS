import { useState } from 'react';
import { COLLABORATORS, CLIENT_LOGOS, AWARDS } from '../../data/collaborators';
import { Quote, ChevronLeft, ChevronRight, Trophy, Star, TrendingUp } from 'lucide-react';

interface CollaboratorsSectionProps {
  onSoundTrigger?: () => void;
}

export function CollaboratorsSection({ onSoundTrigger }: CollaboratorsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentCollab = COLLABORATORS[activeTestimonial];

  const handlePrev = () => {
    if (onSoundTrigger) onSoundTrigger();
    setActiveTestimonial((prev) => (prev - 1 + COLLABORATORS.length) % COLLABORATORS.length);
  };

  const handleNext = () => {
    if (onSoundTrigger) onSoundTrigger();
    setActiveTestimonial((prev) => (prev + 1) % COLLABORATORS.length);
  };

  return (
    <section id="collaborators" className="relative py-24 md:py-36 border-b border-white/[0.08] bg-[#08080C]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
              <Trophy className="w-4 h-4" />
              <span>INDEX // 04 — STRATEGIC ALLIES & RECOGNITION</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F4F0] uppercase tracking-tight">
              ALLIES, TESTIMONIALS <br />
              <span className="font-serif italic font-normal text-[#D8FF38]">
                & Industry Accolades
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm md:text-base text-[#9A9AA8] max-w-md font-light leading-relaxed">
            We partner with visionary founders, creative directors, and luxury houses who demand distinction over consensus. Our work is measured in tangible commercial moats and cultural longevity.
          </p>
        </div>

        {/* Client Logomarks Matrix with Minimalist Architectural Design */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#9A9AA8]">
            <span className="uppercase tracking-wider">CLIENTS & INSTITUTIONAL PARTNERS:</span>
            <span className="text-[#626270]">[GLOBAL ROSTER]</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                data-cursor="PARTNER"
                className="p-6 md:p-8 rounded-2xl bg-[#0E0E14] border border-white/[0.08] hover:border-[#D8FF38]/50 hover:bg-[#13131C] transition-all duration-300 flex flex-col justify-between min-h-[150px] group relative overflow-hidden"
              >
                {/* Subtle Monogram Watermark */}
                <div className="absolute top-3 right-3 font-mono text-2xl font-black text-white/[0.03] group-hover:text-[#D8FF38]/10 transition-colors pointer-events-none">
                  {client.symbol}
                </div>

                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] text-[#626270]">
                    [{client.location}]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D8FF38] transition-colors" />
                </div>

                <div className="flex flex-col pt-4">
                  <h4 className="font-syne font-black text-base md:text-lg text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors tracking-tight uppercase">
                    {client.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#9A9AA8]">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Collaborator Testimonial Feature */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#111118] border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Quote Content */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-2 rounded-lg bg-[#D8FF38]/10 text-[#D8FF38]">
                  <Quote className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#D8FF38] font-bold">
                  {currentCollab.badge}
                </span>

                {/* Verified Metric Highlight */}
                {currentCollab.metricHighlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8FF38]/10 border border-[#D8FF38]/30 font-mono text-xs text-[#D8FF38] font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>IMPACT: {currentCollab.metricHighlight}</span>
                  </div>
                )}
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F4F4F0] leading-snug">
                "{currentCollab.featuredQuote}"
              </blockquote>

              <div className="flex flex-col pt-4 border-t border-white/10">
                <h3 className="font-syne font-black text-lg text-[#F4F4F0]">
                  {currentCollab.author}
                </h3>
                <span className="font-mono text-xs text-[#9A9AA8]">
                  {currentCollab.role} // <strong className="text-[#D8FF38]">{currentCollab.name}</strong> ({currentCollab.location})
                </span>
              </div>
            </div>

            {/* Right Navigator Stack */}
            <div className="lg:col-span-4 flex lg:flex-col items-center justify-between lg:items-end gap-6">
              <div className="flex flex-col lg:items-end gap-2">
                <div className="font-mono text-xs text-[#626270]">
                  TESTIMONIAL 0{activeTestimonial + 1} / 0{COLLABORATORS.length}
                </div>
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {COLLABORATORS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (onSoundTrigger) onSoundTrigger();
                        setActiveTestimonial(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        activeTestimonial === idx
                          ? 'w-6 bg-[#D8FF38]'
                          : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Jump to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  data-cursor="PREV"
                  className="p-3.5 rounded-full border border-white/15 bg-white/5 hover:border-[#D8FF38] hover:text-[#D8FF38] text-white transition-all shadow-md"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  data-cursor="NEXT"
                  className="p-3.5 rounded-full border border-white/15 bg-white/5 hover:border-[#D8FF38] hover:text-[#D8FF38] text-white transition-all shadow-md"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Major Honors & Awards Timeline Ribbon */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
              <Star className="w-4 h-4 text-[#D8FF38]" />
              <span>HONORS & RECOGNITION ARCHIVE</span>
            </h3>
            <span className="font-mono text-xs text-[#626270]">
              2024 — 2026 AUDITED RELEASES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0E0E14] border border-white/[0.08] flex items-center justify-between hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-[#D8FF38]">
                    {award.year}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-syne font-bold text-sm text-[#F4F4F0]">
                      {award.body}
                    </span>
                    <span className="font-mono text-[10px] text-[#9A9AA8]">
                      {award.category}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-[#626270] bg-white/5 px-2 py-1 rounded">
                  {award.project}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
