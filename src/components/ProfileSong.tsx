import albumCover from "@/assets/album-cover.png";

export const ProfileSong = () => {
  return (
    <div className="space-y-3">
      <div className="flex gap-3 items-start">
        <img
          src={albumCover}
          alt="Album cover — pixel art lonely figure under the stars"
          width={96}
          height={96}
          loading="lazy"
          className="w-24 h-24 border-2 border-panel-edge"
          style={{ boxShadow: "0 0 14px hsl(var(--panel-edge) / 0.45)" }}
        />
        <div className="flex-1 min-w-0">
          <p className="digital-text text-base text-foreground leading-tight">
            <span className="text-primary">♪</span> It feels like I've forgotten
            something
          </p>
          <p className="digital-text text-sm text-muted-foreground mt-1">
            by <span className="text-hot-pink">neidenshi</span>
          </p>
          {/* fake waveform */}
          <div className="mt-2 flex items-end gap-[2px] h-6">
            {Array.from({ length: 28 }).map((_, i) => (
              <span
                key={i}
                className="w-[3px] bg-primary"
                style={{
                  height: `${20 + ((i * 37) % 80)}%`,
                  opacity: 0.4 + ((i * 13) % 60) / 100,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <button className="pixel-btn pixel-btn-spotify w-full justify-center">
        <span className="inline-block w-3 h-3 rounded-full bg-white" />
        Salvado no Spotify
      </button>
    </div>
  );
};
