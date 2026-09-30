import type { Project } from '../../types/studio';
import { ArrowUpRight, Award } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
  index: number;
  onSoundTrigger?: () => void;
}

export function ProjectCard({ project, onSelect, index, onSoundTrigger }: ProjectCardProps) {
  // Aspect ratio classes for editorial mosaic grid
  const aspectClassMap = {
    tall: 'aspect-[4/5] md:row-span-2',
    'ultra-wide': 'aspect-[16/9] md:aspect-[21/9] md:col-span-2',
    wide: 'aspect-[16/10] md:col-span-2',
    square: 'aspect-square',
    standard: 'aspect-[3/4]',
  }[project.aspect] || 'aspect-[4/3]';

  return (
    <div
      onClick={() => {
        if (onSoundTrigger) onSoundTrigger();
        onSelect(project);
      }}
      data-cursor="CASE STUDY"
      className={`group relative rounded-2xl overflow-hidden bg-[#101016] border border-white/10 hover:border-[#D8FF38]/60 transition-all duration-500 cursor-pointer flex flex-col justify-between ${aspectClassMap}`}
    >
      {/* Background Hero Image with Zoom and Filter Transitions */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108 filter brightness-90 group-hover:brightness-105 saturate-90 group-hover:saturate-115"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-black/30 transition-opacity duration-500 group-hover:opacity-85" />
        
        {/* Dynamic Accent Glow Halo */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)`
          }}
        />
      </div>

      {/* Top Metadata Bar */}
      <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#D8FF38] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            0{index + 1} // {project.year}
          </span>
          {project.awards && project.awards.length > 0 && (
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-[#F4F4F0] bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
              <Award className="w-3 h-3 text-[#D8FF38]" />
              <span>{project.awards[0]}</span>
            </span>
          )}
        </div>

        {/* Floating Arrow Icon Button */}
        <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D8FF38] group-hover:text-[#08080A] group-hover:border-[#D8FF38] transition-all duration-300 transform group-hover:scale-110 shadow-lg">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Content Bar */}
      <div className="relative z-10 p-5 sm:p-7 flex flex-col gap-3.5 transform transition-transform duration-300 group-hover:-translate-y-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-[#9A9AA8] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Title & Client */}
        <div className="flex flex-col">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#9A9AA8]">
            {project.client}
          </span>
          <h3 className="font-syne font-black text-2xl sm:text-3xl text-[#F4F4F0] group-hover:text-[#D8FF38] transition-colors tracking-tight uppercase">
            {project.title}
          </h3>
        </div>

        {/* Project Summary & Metric Badge */}
        <div className="flex items-center justify-between gap-4 pt-1">
          <p className="font-sans text-xs sm:text-sm text-[#9A9AA8] line-clamp-2 max-w-md font-light">
            {project.summary}
          </p>

          {project.metric && (
            <div className="hidden sm:flex flex-col items-end shrink-0 pl-4 border-l border-white/15">
              <span className="font-mono text-base font-bold text-[#D8FF38]">
                {project.metric.value}
              </span>
              <span className="font-mono text-[9px] text-[#626270] uppercase">
                {project.metric.label.split(' ')[0]}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
