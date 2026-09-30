import { useState } from 'react';
import type { Project } from '../../types/studio';
import {
  X,
  ArrowUpRight,
  Award,
  CheckCircle2,
  TrendingUp,
  Target,
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface CaseStudyDrawerProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function CaseStudyDrawer({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onOpenBrief,
  onSoundTrigger,
}: CaseStudyDrawerProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const allImages = [project.heroImage, ...project.secondaryImages];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        onClick={() => {
          if (onSoundTrigger) onSoundTrigger();
          onClose();
        }}
      />

      {/* Slide-over Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-4xl w-full bg-[#0D0D12] border-l border-white/15 shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-10 py-5 bg-[#0D0D12]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#D8FF38]">
              [ CASE STUDY TEMPLATE // {project.year} ]
            </span>
            <span className="text-[#626270]">/</span>
            <span className="font-mono text-xs text-[#9A9AA8] uppercase truncate max-w-[200px] sm:max-w-none">
              {project.client}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onSoundTrigger) onSoundTrigger();
                setActiveImageIndex(0);
                onSelectProject(prevProject);
              }}
              data-cursor="PREV"
              className="p-2 rounded-full border border-white/10 text-[#9A9AA8] hover:text-[#F4F4F0] hover:border-white/20 transition-colors"
              title="Previous Project"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onSoundTrigger) onSoundTrigger();
                setActiveImageIndex(0);
                onSelectProject(nextProject);
              }}
              data-cursor="NEXT"
              className="p-2 rounded-full border border-white/10 text-[#9A9AA8] hover:text-[#F4F4F0] hover:border-white/20 transition-colors"
              title="Next Project"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onSoundTrigger) onSoundTrigger();
                onClose();
              }}
              data-cursor="CLOSE"
              className="p-2 ml-2 rounded-full bg-white/5 border border-white/15 text-[#F4F4F0] hover:bg-[#D8FF38] hover:text-[#08080A] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 flex flex-col gap-12 flex-1">
          {/* Main Title & Key Metric */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-[#D8FF38]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-syne font-black text-3xl md:text-5xl text-[#F4F4F0] tracking-tight uppercase">
                {project.title}
              </h1>
              <p className="font-sans text-base text-[#9A9AA8] max-w-xl font-light">
                {project.summary}
              </p>
            </div>

            {project.metric && (
              <div className="p-5 rounded-2xl bg-[#14141C] border border-[#D8FF38]/30 flex flex-col min-w-[180px] shadow-[0_0_20px_rgba(216,255,56,0.1)]">
                <span className="font-mono text-xs text-[#9A9AA8] uppercase">PRIMARY IMPACT</span>
                <span className="font-mono text-3xl md:text-4xl font-black text-[#D8FF38]">
                  {project.metric.value}
                </span>
                <span className="font-mono text-[11px] text-[#626270] uppercase">
                  {project.metric.label}
                </span>
              </div>
            )}
          </div>

          {/* Strategic Impact Highlight Bar */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#161622] to-[#121218] border border-white/10 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#D8FF38]/10 text-[#D8FF38] shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs font-bold text-[#D8FF38] uppercase">
                STRATEGIC VALUE LEVERAGE
              </span>
              <p className="font-sans text-sm text-[#F4F4F0] leading-relaxed">
                {project.strategicImpact}
              </p>
            </div>
          </div>

          {/* Interactive Media Gallery Showcase */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl">
              <img
                src={allImages[activeImageIndex]}
                alt={`${project.title} gallery preview`}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-black/80 font-mono text-xs text-[#F4F4F0] backdrop-blur-md border border-white/10">
                0{activeImageIndex + 1} / 0{allImages.length}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (onSoundTrigger) onSoundTrigger();
                    setActiveImageIndex(idx);
                  }}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#D8FF38] scale-105 shadow-[0_0_15px_rgba(216,255,56,0.3)]'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Core Triad: Challenge, Approach, Outcomes */}
          <div className="flex flex-col gap-8">
            {/* Step 01: The Strategic Challenge */}
            <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#FF4D2E]">
                  <Target className="w-4 h-4" />
                  <span>01 // THE STRATEGIC CHALLENGE</span>
                </div>
                <span className="font-mono text-[10px] text-[#626270] uppercase">
                  [MARKET & CATEGORY FRICTION]
                </span>
              </div>
              <p className="font-sans text-base text-[#9A9AA8] leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* Step 02: The Strategic Approach */}
            <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#D8FF38]">
                  <Sparkles className="w-4 h-4" />
                  <span>02 // THE STRATEGIC APPROACH & CRAFT</span>
                </div>
                <span className="font-mono text-[10px] text-[#626270] uppercase">
                  [SYSTEM & ENGINEERING ARCHITECTURE]
                </span>
              </div>
              <p className="font-sans text-base text-[#9A9AA8] leading-relaxed font-light">
                {project.approach || project.solution}
              </p>
            </div>

            {/* Step 03: Measurable Outcomes & ROI */}
            <div className="p-8 rounded-3xl bg-[#13131F] border border-[#D8FF38]/40 flex flex-col gap-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#D8FF38]">
                  <TrendingUp className="w-4 h-4" />
                  <span>03 // MEASURABLE OUTCOMES & VERIFIABLE IMPACT</span>
                </div>
                <span className="font-mono text-[10px] text-[#D8FF38] uppercase">
                  [VERIFIED METRICS]
                </span>
              </div>

              <h4 className="font-syne font-black text-xl md:text-2xl text-[#F4F4F0] uppercase tracking-tight">
                {project.outcomes?.headline || 'Measurable Commercial Transformation'}
              </h4>

              {/* Verified Metrics 4-Grid */}
              {project.outcomes?.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.outcomes.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col justify-between"
                    >
                      <span className="font-mono text-2xl md:text-3xl font-black text-[#D8FF38]">
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] text-[#9A9AA8] uppercase mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <p className="font-sans text-sm text-[#9A9AA8] leading-relaxed">
                {project.outcomes?.summary}
              </p>

              {/* Client Quote Validation */}
              {project.clientQuote && (
                <div className="p-6 rounded-2xl bg-[#0B0B10] border border-white/10 flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-2 text-[#D8FF38]">
                    <Quote className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase tracking-wider font-bold">
                      EXECUTIVE CLIENT VALIDATION
                    </span>
                  </div>
                  <blockquote className="font-serif italic text-base md:text-lg text-[#F4F4F0] leading-snug">
                    "{project.clientQuote.quote}"
                  </blockquote>
                  <div className="font-mono text-xs text-[#9A9AA8] pt-2 border-t border-white/5">
                    <strong className="text-[#F4F4F0]">{project.clientQuote.author}</strong> — {project.clientQuote.role} ({project.client})
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Deliverables & Accolades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Deliverables */}
            <div className="flex flex-col gap-4">
              <h2 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider">
                COMMISSION DELIVERABLES & ASSETS
              </h2>
              <ul className="flex flex-col gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-[#9A9AA8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D8FF38] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Recognition */}
            <div className="flex flex-col gap-4">
              <h2 className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider">
                INTERNATIONAL HONORS
              </h2>
              {project.awards && project.awards.length > 0 ? (
                <div className="flex flex-col gap-2.5">
                  {project.awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-xs text-[#F4F4F0]"
                    >
                      <Award className="w-4 h-4 text-[#D8FF38] shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-mono text-xs text-[#626270]">
                  Private Enterprise Release
                </p>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#626270]">
                NEXT CASE STUDY:
              </span>
              <button
                onClick={() => {
                  if (onSoundTrigger) onSoundTrigger();
                  setActiveImageIndex(0);
                  onSelectProject(nextProject);
                }}
                className="font-syne font-bold text-sm text-[#F4F4F0] hover:text-[#D8FF38] transition-colors flex items-center gap-1"
              >
                <span>{nextProject.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <MagneticButton
              variant="lime"
              size="md"
              cursorText="DISCUSS"
              onClick={() => {
                onClose();
                onOpenBrief();
              }}
              onSoundTrigger={onSoundTrigger}
            >
              <span>INQUIRE ABOUT A SIMILAR BRIEF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
