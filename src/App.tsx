import { FluidBackgroundCanvas } from './components/common/FluidBackgroundCanvas';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { CustomCursor } from './components/common/CustomCursor';
import { Header } from './components/navigation/Header';
import { HeroSection } from './components/hero/HeroSection';
import { ProjectMosaic } from './components/projects/ProjectMosaic';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { ProcessTimelineSection } from './components/process/ProcessTimelineSection';
import { CapabilitiesSection } from './components/capabilities/CapabilitiesSection';
import { CollaboratorsSection } from './components/collaborators/CollaboratorsSection';
import { BriefIntakeSection } from './components/intake/BriefIntakeSection';
import { ColophonFooter } from './components/footer/ColophonFooter';
import { useAudioSynth } from './hooks/useAudioSynth';

export function App() {
  const { isMuted, toggleSound, playClick, playSwoosh, playSuccess } = useAudioSynth();

  const handleOpenBrief = () => {
    playSwoosh();
    const briefElem = document.getElementById('brief');
    if (briefElem) {
      briefElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F4F0] selection:bg-[#D8FF38] selection:text-[#08080A]">
      {/* Interactive Generative Shaders & Filmic Texture */}
      <FluidBackgroundCanvas />
      <NoiseOverlay />
      <CustomCursor />

      {/* Primary Studio Navigation Bar */}
      <Header
        isMuted={isMuted}
        onToggleSound={toggleSound}
        onOpenBrief={handleOpenBrief}
        onSoundTrigger={() => playClick(1.2)}
      />

      {/* Main Studio Narrative Journey */}
      <main className="relative z-10">
        {/* Bold Manifesto Hero Section */}
        <HeroSection
          onOpenBrief={handleOpenBrief}
          onSoundTrigger={() => playClick(1.1)}
        />

        {/* Selected Work Grid & Case Studies */}
        <ProjectMosaic
          onOpenBrief={handleOpenBrief}
          onSoundTrigger={() => playClick(0.9)}
        />

        {/* Studio Philosophy & Strategic Doctrine */}
        <PhilosophySection
          onSoundTrigger={() => playClick(1.0)}
        />

        {/* Strategic Engagement Process Timeline */}
        <ProcessTimelineSection
          onOpenBrief={handleOpenBrief}
          onSoundTrigger={() => playClick(1.1)}
        />

        {/* Multidisciplinary Capabilities Matrix */}
        <CapabilitiesSection
          onOpenBrief={handleOpenBrief}
          onSoundTrigger={() => playClick(1.15)}
        />

        {/* Featured Collaborators, Testimonials & Recognition */}
        <CollaboratorsSection
          onSoundTrigger={() => playClick(1.05)}
        />

        {/* Strategic Brief & Commission Intake Engine */}
        <BriefIntakeSection
          onSoundTrigger={() => playClick(1.3)}
          onSuccessSound={playSuccess}
        />
      </main>

      {/* Studio Colophon & Global Footer */}
      <ColophonFooter
        onOpenBrief={handleOpenBrief}
        onSoundTrigger={() => playClick(0.85)}
      />
    </div>
  );
}

export default App;
