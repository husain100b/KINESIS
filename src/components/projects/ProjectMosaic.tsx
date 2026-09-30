import { useState, useMemo } from 'react';
import type { Project, ProjectCategory } from '../../types/studio';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { CaseStudyDrawer } from './CaseStudyDrawer';
import { Sparkles } from 'lucide-react';

interface ProjectMosaicProps {
  onOpenBrief: () => void;
  onSoundTrigger?: () => void;
}

export function ProjectMosaic({ onOpenBrief, onSoundTrigger }: ProjectMosaicProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'ALL WORKS' },
    { id: 'digital', label: 'IMMERSIVE DIGITAL' },
    { id: 'branding', label: 'BRAND ARCHITECTURE' },
    { id: 'spatial', label: 'SPATIAL & 3D' },
    { id: 'creative-tech', label: 'CREATIVE TECH' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="works" className="relative py-24 md:py-36 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
              <span className="w-2 h-2 rounded-full bg-[#D8FF38]" />
              <span>INDEX // 01 — SELECTED COMMISSIONS</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F4F0] uppercase tracking-tight">
              PROJECT MOSAIC <br />
              <span className="font-serif italic font-normal text-[#9A9AA8] text-[0.95em]">
                & Spatial Experiments
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121218] p-1.5 rounded-full border border-white/10 w-fit">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat.id).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (onSoundTrigger) onSoundTrigger();
                    setActiveCategory(cat.id);
                  }}
                  data-cursor="FILTER"
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#D8FF38] text-[#08080A] font-bold shadow-[0_0_15px_rgba(216,255,56,0.3)]'
                      : 'text-[#9A9AA8] hover:text-[#F4F4F0] hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-[#08080A]/80' : 'text-[#626270]'}`}>
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Mosaic Grid with Mixed Aspect Ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
              onSoundTrigger={onSoundTrigger}
            />
          ))}
        </div>

        {/* Bottom Exploration Prompt */}
        <div className="mt-16 p-8 rounded-2xl bg-[#111116] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#181822] border border-white/10 flex items-center justify-center text-[#D8FF38]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-syne font-bold text-lg text-[#F4F4F0]">
                SEEKING PRIVATE OR UNRELEASED ARCHIVES?
              </h4>
              <p className="font-mono text-xs text-[#9A9AA8]">
                We maintain an NDA-restricted catalog for enterprise spatial R&D & aerospace interfaces.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (onSoundTrigger) onSoundTrigger();
              onOpenBrief();
            }}
            data-cursor="INQUIRE"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-[#D8FF38] hover:text-[#08080A] text-[#F4F4F0] font-mono text-xs font-bold border border-white/15 transition-all duration-300 shrink-0"
          >
            REQUEST CONFIDENTIAL PORTFOLIO
          </button>
        </div>
      </div>

      {/* Case Study Fullscreen Drawer */}
      <CaseStudyDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
        onOpenBrief={onOpenBrief}
        onSoundTrigger={onSoundTrigger}
      />
    </section>
  );
}
