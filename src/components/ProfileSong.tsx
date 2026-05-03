import { useState } from 'react';
import albumCover from "@/assets/album-cover.png";

export const ProfileSong = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Troque pelo ID da música que você quer que toque
  const musicId = "3vDetD8cW_o"; 

  return (
<div className="space-y-3">
  <div className="flex gap-3 items-start">
    {/* Container do Vinil */}
    <div 
      className="relative group cursor-pointer" 
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {/* O Disco de Vinil */}
      <div className={`
        relative w-24 h-24 flex items-center justify-center
        transition-all duration-500
        ${isPlaying ? 'scale-105' : 'scale-100'}
      `}>
        <img
          src={albumCover}
          alt="Album cover"
          width={96}
          height={96}
          className={`
            w-24 h-24 object-cover rounded-full border-4 border-[#121212]
            shadow-[0_0_15px_rgba(0,0,0,0.5)]
            transition-transform
            ${isPlaying ? 'animate-spin-slow' : ''}
          `}
          style={{ 
            animationDuration: '3s',
            boxShadow: isPlaying ? "0 0 20px rgba(255, 0, 110, 0.3)" : "0 0 10px rgba(0,0,0,0.5)"
          }}
        />
        

        
        {/* Overlay de Brilho do Vinil (Reflexo) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Botão Play/Pause Overlay - Fica fixo acima do disco que gira */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
        <span className="text-white pixel-text text-[10px] font-bold">
            {isPlaying ? 'PAUSE' : 'PLAY'}
        </span>
      </div>
    </div>

    {/* Informações da Música */}
    <div className="flex-1 min-w-0">
      <p className="digital-text text-base text-foreground leading-tight truncate">
        <span className={`text-primary inline-block ${isPlaying ? 'animate-pulse' : ''}`}>♪</span> Gunslinger
      </p>
      <p className="digital-text text-sm text-muted-foreground mt-1">
        <p 
  className="digital-text text-[9px] uppercase tracking-[0.2em]"
  style={{
    // Cor Hot Pink vibrante
    color: '#E0E0E0', 
    // Fonte Georgia (Herdada do global, mas reforçada aqui)
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
    // Glow Rosa para dar profundidade
    textShadow: `
      0 0 5px #E0E0E099,
      0 0 12px #E0E0E04d
    `,
    // Ajuste de legibilidade para fontes pequenas e itálicas
    letterSpacing: '0.25em',
    filter: 'drop-shadow(0 0 1px rgba(255, 0, 110, 0.2))'
  }}
>
  Avenged Sevenfold
</p>
      </p>
      
      <br />

      {/* Waveform Animada */}
      <div className="mt-2 flex items-end gap-[2px] h-6 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className={`w-[3px] bg-primary transition-all duration-300 ${isPlaying ? 'animate-bounce' : ''}`}
            style={{
              height: `${20 + ((i * 37) % 80)}%`,
              opacity: 0.4 + ((i * 13) % 60) / 100,
              animationDelay: `${i * 0.05}s`,
              animationDuration: '0.8s'
            }}
          />
        ))}
      </div>
    </div>
  </div>

  {/* Player do YouTube Oculto */}
  <div className="hidden">
    <iframe
      width="0"
      height="0"
      src={`https://www.youtube.com/embed/${musicId}?enablejsapi=1&autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=${musicId}`}
      allow="autoplay"
      title="Profile Music"
    ></iframe>
  </div>
</div>
  );
};