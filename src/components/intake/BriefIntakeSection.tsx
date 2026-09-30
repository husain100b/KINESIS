import { useState } from 'react';
import confetti from 'canvas-confetti';
import type { BriefFormData } from '../../types/studio';
import { Send, CheckCircle2, Sparkles, Copy, Check, ShieldCheck, Users, Clock, Award } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface BriefIntakeSectionProps {
  onSoundTrigger?: () => void;
  onSuccessSound?: () => void;
}

export function BriefIntakeSection({ onSoundTrigger, onSuccessSound }: BriefIntakeSectionProps) {
  const [formData, setFormData] = useState<BriefFormData>({
    selectedDisciplines: ['Strategic Brand Architecture & Category Design', 'Digital Flagship & Immersive WebGL'],
    timeline: 'Q3/Q4 2026 (Standard 8-12 wks)',
    budgetRange: 75, // in $k
    fullName: '',
    company: '',
    email: '',
    overview: '',
    preferredStart: 'Within 30 Days'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const disciplineOptions = [
    'Strategic Brand Architecture & Category Design',
    'Digital Flagship & Immersive WebGL',
    'Spatial 3D & Virtual Brand Worlds',
    'Creative Engineering & Algorithmic Shaders',
    'Full Ecosystem Transformation'
  ];

  const timelineOptions = [
    'Immediate Sprint (4-6 wks)',
    'Q3/Q4 2026 (Standard 8-12 wks)',
    '2027 Strategic Pipeline',
    'Exploratory R&D Sprint'
  ];

  const reasonsToInquire = [
    {
      icon: Users,
      title: 'Partner-Led Exclusivity',
      description: 'You work directly with founding principals in Paris & Zurich. Zero junior account managers or bait-and-switch handoffs.'
    },
    {
      icon: Clock,
      title: 'Guaranteed 10-Week Pacing',
      description: 'Rigorous bi-weekly working prototypes deployed directly in browser. Predictable milestones and zero scope creep.'
    },
    {
      icon: Award,
      title: 'Measurable Commercial Moat',
      description: 'Every typographic detail and WebGL shader is calibrated to elevate brand equity, pricing power, and customer retention.'
    },
    {
      icon: ShieldCheck,
      title: '100% IP Sovereignty',
      description: 'Complete unencumbered ownership of custom codebases, variable fonts, 3D meshes, and GLSL shaders with zero lock-in.'
    }
  ];

  const toggleDiscipline = (disc: string) => {
    if (onSoundTrigger) onSoundTrigger();
    setFormData(prev => {
      const exists = prev.selectedDisciplines.includes(disc);
      if (exists) {
        if (prev.selectedDisciplines.length === 1) return prev; // keep at least 1
        return { ...prev, selectedDisciplines: prev.selectedDisciplines.filter(d => d !== disc) };
      } else {
        return { ...prev, selectedDisciplines: [...prev.selectedDisciplines, disc] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    if (onSuccessSound) onSuccessSound();
    setIsSubmitted(true);

    // Confetti fanfare
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D8FF38', '#FF4D2E', '#F4F4F0', '#A855F7']
    });
  };

  const copyBriefToClipboard = () => {
    const text = `
=== KINESIS ARCHIVE // STRATEGIC COMMISSION BRIEF ===
Client: ${formData.fullName} (${formData.company || 'Confidential'})
Contact: ${formData.email}
Disciplines: ${formData.selectedDisciplines.join(', ')}
Target Timeline: ${formData.timeline}
Target Investment: $${formData.budgetRange}k USD
Preferred Window: ${formData.preferredStart}
Strategic Vision: ${formData.overview || 'To be discussed via diagnostic call'}
=====================================================
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Dynamic estimate calculator
  const teamConfig = formData.budgetRange > 100
    ? 'Dedicated Principal Trio + 3D Technical Artist + Lead Creative Technologist'
    : formData.budgetRange > 50
    ? 'Design Director + Senior Creative Technologist + Motion Specialist'
    : 'Core Design Lead + Creative Technologist';

  return (
    <section id="brief" className="relative py-24 md:py-36 border-b border-white/[0.08] bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D8FF38]">
              <Sparkles className="w-4 h-4" />
              <span>INDEX // 05 — STRATEGIC BRIEF & COMMISSION INTAKE</span>
            </div>
            <h2 className="font-syne font-black text-3xl sm:text-5xl md:text-6xl text-[#F4F4F0] uppercase tracking-tight">
              INITIATE A BRIEF <br />
              <span className="font-serif italic font-normal text-[#D8FF38]">
                & Commission Studio
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm md:text-base text-[#9A9AA8] max-w-md font-light leading-relaxed">
            We evaluate every commission on strategic leverage, artistic audacity, and commercial return. Direct partner diagnostic returned within 24 hours.
          </p>
        </div>

        {/* Clear Reasons to Inquire Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0E0E14] border border-white/10 flex flex-col gap-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D8FF38]" />
              <h3 className="font-syne font-bold text-lg text-[#F4F4F0] uppercase tracking-tight">
                CLEAR REASONS TO INQUIRE WITH KINESIS
              </h3>
            </div>
            <span className="font-mono text-xs text-[#D8FF38]">
              FOUR STRATEGIC COMMITMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsToInquire.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D8FF38] group-hover:bg-[#D8FF38] group-hover:text-[#08080A] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-syne font-bold text-sm text-[#F4F4F0] uppercase">
                    {reason.title}
                  </h4>
                  <p className="font-sans text-xs text-[#9A9AA8] leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {isSubmitted ? (
          /* Submission Success State */
          <div className="p-10 md:p-16 rounded-3xl bg-[#111118] border border-[#D8FF38]/50 shadow-[0_0_50px_rgba(216,255,56,0.15)] flex flex-col items-center text-center max-w-2xl mx-auto gap-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center shadow-lg">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="font-syne font-black text-3xl text-[#F4F4F0] uppercase">
              STRATEGIC BRIEF TRANSMITTED TO DIRECTORS
            </h3>

            <p className="font-sans text-sm text-[#9A9AA8] leading-relaxed">
              Thank you, <strong className="text-[#F4F4F0]">{formData.fullName}</strong>. Our partner leads in Paris and Zurich have received your parameters. We will review your scope and return an initial diagnostic framework to <strong className="text-[#D8FF38]">{formData.email}</strong> within 24 business hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={copyBriefToClipboard}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F4F4F0] font-mono text-xs font-bold border border-white/15 flex items-center gap-2 transition-all"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-[#D8FF38]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'BRIEF COPIED TO CLIPBOARD' : 'COPY BRIEF SUMMARY'}</span>
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 rounded-full bg-[#D8FF38] text-[#08080A] font-mono text-xs font-bold transition-transform hover:scale-105"
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Multi-Step Brief Generator */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Step 1: Disciplines */}
              <div className="flex flex-col gap-4">
                <label className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center text-[10px] font-black">
                    1
                  </span>
                  <span>SELECT DESIRED STRATEGIC DISCIPLINES & SCOPE</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {disciplineOptions.map((disc) => {
                    const isSelected = formData.selectedDisciplines.includes(disc);
                    return (
                      <button
                        type="button"
                        key={disc}
                        onClick={() => toggleDiscipline(disc)}
                        data-cursor="TOGGLE"
                        className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 flex items-center gap-2 border text-left ${
                          isSelected
                            ? 'bg-[#181824] border-[#D8FF38] text-[#F4F4F0] shadow-[0_0_15px_rgba(216,255,56,0.2)]'
                            : 'bg-[#0E0E14] border-white/10 text-[#9A9AA8] hover:border-white/20'
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-[#D8FF38] border-[#D8FF38] text-[#08080A]'
                              : 'border-white/30'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span>{disc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Timeline */}
              <div className="flex flex-col gap-4">
                <label className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center text-[10px] font-black">
                    2
                  </span>
                  <span>TARGET ENGAGEMENT PACING</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {timelineOptions.map((time) => {
                    const isSelected = formData.timeline === time;
                    return (
                      <button
                        type="button"
                        key={time}
                        onClick={() => {
                          if (onSoundTrigger) onSoundTrigger();
                          setFormData({ ...formData, timeline: time });
                        }}
                        className={`p-3 rounded-xl font-mono text-xs text-left transition-all border ${
                          isSelected
                            ? 'bg-[#181824] border-[#D8FF38] text-[#D8FF38]'
                            : 'bg-[#0E0E14] border-white/10 text-[#9A9AA8] hover:border-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Investment Slider */}
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#0E0E14] border border-white/10">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center text-[10px] font-black">
                      3
                    </span>
                    <span>INVESTMENT SCALE (USD)</span>
                  </label>
                  <span className="font-mono text-lg font-black text-[#D8FF38]">
                    ${formData.budgetRange}k {formData.budgetRange >= 150 ? '+' : ''}
                  </span>
                </div>

                <input
                  type="range"
                  min="25"
                  max="150"
                  step="5"
                  value={formData.budgetRange}
                  onChange={(e) =>
                    setFormData({ ...formData, budgetRange: Number(e.target.value) })
                  }
                  className="w-full accent-[#D8FF38] cursor-pointer h-2 bg-[#202028] rounded-lg"
                  aria-label="Investment scale slider"
                />

                <div className="flex justify-between text-[10px] font-mono text-[#626270]">
                  <span>$25k (Targeted Advisory)</span>
                  <span>$75k (Flagship WebGL & Identity)</span>
                  <span>$150k+ (Enterprise Transformation)</span>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="flex flex-col gap-4">
                <label className="font-mono text-xs font-bold text-[#F4F4F0] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center text-[10px] font-black">
                    4
                  </span>
                  <span>DIRECT EXECUTIVE CONTACT & SCOPE OVERVIEW</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] text-[#9A9AA8]">YOUR NAME *</span>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Hélène Laurent"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-[#0E0E14] border border-white/10 text-sm text-[#F4F4F0] focus:border-[#D8FF38] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] text-[#9A9AA8]">ORGANIZATION / BRAND</span>
                    <input
                      type="text"
                      placeholder="e.g. Atelier Hyperion"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-[#0E0E14] border border-white/10 text-sm text-[#F4F4F0] focus:border-[#D8FF38] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] text-[#9A9AA8]">EMAIL ADDRESS *</span>
                  <input
                    required
                    type="email"
                    placeholder="h.laurent@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#0E0E14] border border-white/10 text-sm text-[#F4F4F0] focus:border-[#D8FF38] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] text-[#9A9AA8]">STRATEGIC GOALS / COMMERCIAL VISION</span>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the category whitespace, business friction, or market ambition you wish to conquer..."
                    value={formData.overview}
                    onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#0E0E14] border border-white/10 text-sm text-[#F4F4F0] focus:border-[#D8FF38] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Live Brief Summary & Submission Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="p-8 rounded-3xl bg-[#111118] border border-white/15 shadow-2xl flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D8FF38] animate-ping" />
                    <span className="font-mono text-xs font-bold text-[#F4F4F0]">
                      LIVE BRIEF DIAGNOSTIC
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#626270]">
                    [CONFIDENTIAL]
                  </span>
                </div>

                {/* Brief Summary Specs */}
                <div className="flex flex-col gap-4 font-mono text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#626270] uppercase">Selected Focus:</span>
                    <div className="flex flex-wrap gap-1">
                      {formData.selectedDisciplines.map((d) => (
                        <span key={d} className="text-[#F4F4F0] bg-white/5 px-2 py-0.5 rounded text-[11px]">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between border-t border-white/5 pt-2">
                    <span className="text-[#626270] uppercase">Pacing Window:</span>
                    <span className="text-[#F4F4F0]">{formData.timeline}</span>
                  </div>

                  <div className="flex justify-between border-t border-white/5 pt-2">
                    <span className="text-[#626270] uppercase">Target Investment:</span>
                    <span className="text-[#D8FF38] font-bold">${formData.budgetRange}k USD</span>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-white/5 pt-2">
                    <span className="text-[#626270] uppercase">Calculated Studio Team Allocation:</span>
                    <span className="text-[#9A9AA8] font-sans text-xs">{teamConfig}</span>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <MagneticButton
                    variant="lime"
                    size="lg"
                    type="submit"
                    className="w-full justify-center"
                    cursorText="SUBMIT"
                    onSoundTrigger={onSoundTrigger}
                  >
                    <span>TRANSMIT STRATEGIC BRIEF</span>
                    <Send className="w-4 h-4" />
                  </MagneticButton>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#626270]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8FF38]" />
                    <span>Protected under mutual NDA guidelines. Direct partner response in 24h.</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
