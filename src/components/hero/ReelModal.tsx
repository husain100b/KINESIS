import { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Award } from 'lucide-react';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSoundTrigger?: () => void;
}

export function ReelModal({ isOpen, onClose, onSoundTrigger }: ReelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#08080A]/90 backdrop-blur-2xl animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl rounded-2xl bg-[#111116] border border-white/15 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D12]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D8FF38] animate-ping" />
            <span className="font-mono text-xs text-[#F4F4F0] font-bold tracking-wider">
              KINESIS // SHOWREEL 2026.08
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#626270]">
              [4K UHD // 60 FPS // SPATIAL SOUND]
            </span>
          </div>

          <button
            onClick={() => {
              if (onSoundTrigger) onSoundTrigger();
              onClose();
            }}
            data-cursor="CLOSE"
            className="p-2 rounded-full hover:bg-white/10 text-[#9A9AA8] hover:text-[#F4F4F0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Reel Simulation Visual Canvas */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=90"
            alt="Studio Reel Preview"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105 filter contrast-110 saturate-125' : 'scale-100 filter grayscale'
            }`}
          />

          {/* Cinematic Overlay Scanlines */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Reel Center Play/Pause State */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <div className="w-20 h-20 rounded-full bg-[#D8FF38] text-[#08080A] flex items-center justify-center shadow-[0_0_40px_rgba(216,255,56,0.5)]">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            )}
          </div>

          {/* Reel Lower Info Badge */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8FF38]">
                <Award className="w-3.5 h-3.5" />
                <span>COMMISSIONED WORKS & RESEARCH PROTOTYPES</span>
              </div>
              <p className="font-syne font-bold text-lg text-white">
                Fluid Shaders, Kinetic Architecture & Living Brand Universes
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (onSoundTrigger) onSoundTrigger();
                  setIsAudioMuted(p => !p);
                }}
                className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:border-[#D8FF38] hover:text-[#D8FF38] transition-colors pointer-events-auto"
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  if (onSoundTrigger) onSoundTrigger();
                  setIsPlaying(p => !p);
                }}
                className="px-5 py-2.5 rounded-full bg-[#F4F4F0] text-[#08080A] font-mono text-xs font-bold hover:bg-[#D8FF38] transition-colors pointer-events-auto flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'PAUSE REEL' : 'PLAY REEL'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chapters Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 bg-[#0D0D12] text-[11px] font-mono border-t border-white/10 text-[#9A9AA8]">
          <div className="p-3.5 flex items-center gap-2">
            <span className="text-[#D8FF38]">01</span>
            <span>Spatial WebGL Shaders</span>
          </div>
          <div className="p-3.5 flex items-center gap-2">
            <span className="text-[#D8FF38]">02</span>
            <span>Real-Time 3D Engines</span>
          </div>
          <div className="p-3.5 flex items-center gap-2">
            <span className="text-[#D8FF38]">03</span>
            <span>Generative Brand Systems</span>
          </div>
          <div className="p-3.5 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D8FF38]" />
            <span className="text-[#F4F4F0]">Venice Biennale 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
