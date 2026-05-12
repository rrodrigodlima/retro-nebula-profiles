import { PixelPanel } from "@/components/PixelPanel";
import { Top8Grid } from "@/components/Top8Grid";
import { ProfileSong } from "@/components/ProfileSong";

import spaceBg from "@/assets/word-sky-pattern.png";
import cindAvatar from "@/assets/cind-avatar.png";
import cindPortrait from "@/assets/cind-portrait.png";
import cindMascot from "@/assets/cind-mascot.png";
import glitchStar from "@/assets/glitch-star.png";

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden starfield">
      {/* Pastel pink dithered sky background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(195 70% 78%) 0%, hsl(290 60% 80%) 45%, hsl(330 85% 78%) 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${spaceBg})`,
          backgroundSize: "320px 320px",
          backgroundRepeat: "repeat",
          mixBlendMode: "screen",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(0 0% 100% / 0.15), hsl(330 60% 70% / 0.25))",
        }}
        aria-hidden
      />

      {/* Floating decorative art — glitch star (left) */}
      <img
        src={glitchStar}
        alt=""
        aria-hidden
        loading="lazy"
        width={420}
        height={420}
        className="hidden md:block absolute -left-12 top-32 w-[280px] lg:w-[360px] glitch-pulse float-slow z-0 opacity-90 pointer-events-none"
      />

      {/* Floating mascot (right) */}
      <img
        src={cindMascot}
        alt="cind mascot waving"
        loading="lazy"
        width={280}
        height={280}
        className="hidden lg:block absolute right-4 top-40 w-[220px] xl:w-[260px] float-med z-0 pointer-events-none drop-shadow-[0_0_24px_hsl(var(--hot-pink)/0.5)]"
      />

      {/* tiny twinkling stars */}
      <span className="absolute left-[18%] top-[8%] text-primary twinkle pixel-text text-xs">+</span>
      <span className="absolute right-[28%] top-[14%] text-hot-pink twinkle pixel-text text-sm">✦</span>
      <span className="absolute left-[42%] top-[6%] text-gold twinkle pixel-text text-[10px]">+</span>
      <span className="absolute right-[12%] bottom-[20%] text-primary twinkle pixel-text text-sm">✦</span>
      <span className="absolute left-[8%] bottom-[12%] text-hot-pink twinkle pixel-text text-xs">+</span>

      {/* Top nav strip — pink chrome */}
      <header className="relative z-10 border-b-2 border-[hsl(var(--panel-edge))] backdrop-blur-sm" style={{ background: "linear-gradient(180deg, hsl(330 90% 70%), hsl(330 85% 55%))" }}>
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
          <h1 className="pixel-text text-base text-white" style={{ textShadow: "1px 1px 0 hsl(var(--panel-edge-soft))" }}>
            ♡ STARNET ♡
          </h1>
          <nav className="hidden sm:flex items-center gap-4">
            <a className="menu-link !text-white" href="#">home</a>
            <a className="menu-link !text-white" href="#">browse</a>
            <a className="menu-link !text-white" href="#">mail</a>
            <a className="menu-link !text-white" href="#">badges</a>
          </nav>
          <span className="digital-text text-sm text-white/90">
            online: <span className="text-white font-bold">1,337,420</span>
          </span>
        </div>
      </header>

      {/* Profile grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          {/* ===== LEFT COLUMN (profile + photos + top8 + badges + visitors stacked) ===== */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-3 [&_.pixel-panel]:text-sm">
            {/* Profile panel */}
            <PixelPanel title="cind" variant="pink">
              <div className="flex flex-col items-center gap-3">
                <div className="w-full aspect-square border-2 border-hot-pink bg-space-deep p-1"
                     style={{ boxShadow: "0 0 18px hsl(var(--hot-pink)/0.5)" }}>
                  <img
                    src={cindAvatar}
                    alt="pixel art portrait of cind crying with a rainbow star"
                    width={512}
                    height={512}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center w-full">
                  <p className="pixel-text text-xs text-foreground">cind</p>
                  <p className="digital-text text-base text-muted-foreground">@cind</p>
                  <p className="digital-text text-base mt-2" style={{ color: "hsl(var(--rainbow-red))" }}>
                    "not a fish" 🐟 👽
                  </p>
                </div>

                <div className="w-full border-t-2 border-dashed border-panel-edge/50 pt-2 flex items-center justify-center gap-2">
                  <span className="pixel-text text-[10px] text-gold" style={{ textShadow: "0 0 6px hsl(var(--gold)/0.8)" }}>★</span>
                  <span className="digital-text text-base text-foreground">177 badges received</span>
                </div>

                <button className="pixel-btn w-full justify-center">message</button>

                {/* mood / status pixel chips */}
                <div className="w-full grid grid-cols-2 gap-1 pt-1">
                  <div className="border border-panel-edge/60 px-2 py-1 digital-text text-xs flex justify-between">
                    <span className="text-muted-foreground">mood</span>
                    <span className="text-hot-pink">stargazing</span>
                  </div>
                  <div className="border border-panel-edge/60 px-2 py-1 digital-text text-xs flex justify-between">
                    <span className="text-muted-foreground">orbit</span>
                    <span className="text-primary">low</span>
                  </div>
                </div>
              </div>
            </PixelPanel>

            {/* Photos panel */}
            <PixelPanel title="cind's Photos" rightSlot={<a href="#" className="menu-link !text-[10px]">View All</a>}>
              <div className="border-2 border-dashed border-panel-edge/50 p-6 text-center digital-text text-base text-muted-foreground bg-space-deep/50">
                <span className="block text-2xl mb-1">📷</span>
                No photos yet
              </div>
            </PixelPanel>

            {/* Top 8 */}
            <PixelPanel
              title="cind's Top 8"
              rightSlot={<a href="#" className="menu-link !text-[10px]">View All</a>}
            >
              <Top8Grid />
            </PixelPanel>

            {/* Badges showcase */}
            <PixelPanel title="badges" variant="pink">
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { icon: "★", label: "stargazer", token: "--gold" },
                  { icon: "❤", label: "loved", token: "--hot-pink" },
                  { icon: "✦", label: "online", token: "--primary" },
                  { icon: "♪", label: "music", token: "--hot-pink" },
                  { icon: "✿", label: "cute", token: "--hot-pink" },
                  { icon: "✚", label: "healer", token: "--gold" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="border-2 border-panel-edge/70 p-2 bg-space-deep/60"
                  >
                    <div
                      className="pixel-text text-base"
                      style={{
                        color: `hsl(var(${b.token}))`,
                        textShadow: `0 0 8px hsl(var(${b.token})/0.8)`,
                      }}
                    >
                      {b.icon}
                    </div>
                    <p className="digital-text text-xs text-muted-foreground mt-1">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </PixelPanel>

            {/* Visitors */}
            <PixelPanel title="recent visitors">
              <ul className="space-y-1 digital-text text-sm">
                {[
                  ["✦", "starboy_99", "1m ago"],
                  ["✿", "milkii", "12m ago"],
                  ["♥", "antenna.exe", "44m ago"],
                  ["★", "lemi", "2h ago"],
                ].map(([ic, name, time]) => (
                  <li key={name as string} className="flex items-center justify-between border-b border-panel-edge/30 pb-1">
                    <span><span className="text-hot-pink mr-1">{ic}</span><span className="text-primary">{name}</span></span>
                    <span className="text-muted-foreground text-xs">{time}</span>
                  </li>
                ))}
              </ul>
            </PixelPanel>
          </div>

          {/* ===== CENTER COLUMN ===== */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-4">
            {/* Lore & Blurbs combined */}
            <PixelPanel title={<span>cind's Lore <span className="opacity-60">/</span> cind's Blurbs</span>}>
              <div className="relative">
                {/* Portrait */}
                <div className="relative mx-auto w-full max-w-md aspect-square border-2 border-panel-edge bg-space-deep overflow-hidden"
                     style={{ boxShadow: "inset 0 0 40px hsl(var(--space-deep))" }}>
                  <img
                    src={cindPortrait}
                    alt="large pixel art portrait of cind, dreamy and soft"
                    width={768}
                    height={768}
                    className="w-full h-full object-contain"
                  />

                  {/* Lore widget overlay (top) */}
                  <div className="absolute top-2 left-2 right-12 pixel-panel pixel-panel-pink !shadow-none p-2"
                       style={{ boxShadow: "0 0 14px hsl(var(--hot-pink)/0.6)" }}>
                    <p className="pixel-text text-[8px] text-hot-pink mb-1">// LORE</p>
                    <p className="digital-text text-base leading-tight text-foreground">
                      css broke... lazy to fix{" "}
                      <span className="text-muted-foreground">(oh it fixed itself, hai everynyan)</span>
                    </p>
                  </div>

                  {/* Blurbs widget overlay (bottom) */}
                  <div className="absolute bottom-2 left-12 right-2 pixel-panel !shadow-none p-2"
                       style={{ boxShadow: "0 0 14px hsl(var(--primary)/0.6)" }}>
                    <p className="pixel-text text-[8px] text-primary mb-1">// BLURBS</p>
                    <p className="digital-text text-base text-foreground">
                      ./reaching the stars ./
                    </p>
                  </div>

                  {/* corner sparkles */}
                  <span className="absolute top-1/3 right-3 text-gold pixel-text text-base twinkle">✦</span>
                  <span className="absolute bottom-1/3 left-3 text-hot-pink pixel-text text-xs twinkle">+</span>
                </div>

                {/* Footer menu links */}
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 justify-center">
                  <a className="menu-link" href="#">View Journals</a>
                  <span className="text-muted-foreground">|</span>
                  <a className="menu-link" href="#">View Photos</a>
                  <span className="text-muted-foreground">|</span>
                  <a className="menu-link" href="#">View Groups</a>
                  <span className="text-muted-foreground">|</span>
                  <a className="menu-link" href="#">View Places</a>
                </div>
              </div>
            </PixelPanel>

            {/* Profile song */}
            <PixelPanel
              title={<span>♪ cind's Profile Song</span>}
              variant="pink"
              rightSlot={<span className="text-hot-pink">▶ now playing</span>}
            >
              <ProfileSong />
            </PixelPanel>

            {/* Videos (horizontal) */}
            <PixelPanel
              title={<span>cind's Videos</span>}
              rightSlot={<a href="#" className="menu-link !text-[10px]">View All</a>}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { title: "amor fati.", channel: "Tinocando TV", hue: 320, embed: "26p3XjxoZ6w" },
                  { title: "GUERRA DA COREIA - A HISTÓRIA", channel: "Canal Nostalgia", hue: 200 },
                  { title: "VINIZX: TIMIDEZ, BULLYING E SUP", channel: "LOUD", hue: 280 },
                  { title: "lo-fi beats to cry to", channel: "starboy_99", hue: 250 },
                  { title: "ANIMES QUE MARCARAM ÉPOCA", channel: "Canal Nostalgia", hue: 20 },
                  { title: "CSS tricks you didn't know", channel: "devtuber", hue: 160 },
                  { title: "vlog: galaxy walk 🌌", channel: "milkii", hue: 300 },
                  { title: "y2k aesthetic compilation", channel: "antenna.exe", hue: 340 },
                  { title: "speedrun: world record", channel: "lemi", hue: 100 },
                ].map((v) => (
                  <div key={v.title} className="border-2 border-panel-edge/60 bg-space-deep/60 overflow-hidden">
                    <div
                      className="relative aspect-video flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(${v.hue} 70% 35%), hsl(${v.hue + 30} 60% 18%))`,
                      }}
                    >
                      <div
                        className="w-10 h-7 flex items-center justify-center rounded-sm"
                        style={{ background: "hsl(0 90% 50%)", boxShadow: "0 0 12px hsl(0 90% 50% / 0.6)" }}
                      >
                        <span className="text-white text-sm leading-none">▶</span>
                      </div>
                      <div className="absolute top-1 left-1 right-1">
                        <p className="pixel-text text-[8px] text-white leading-tight line-clamp-2"
                           style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.8)" }}>
                          {v.title}
                        </p>
                        <p className="digital-text text-xs text-white/80"
                           style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.8)" }}>
                          {v.channel}
                        </p>
                      </div>
                      <div className="absolute bottom-1 right-1 digital-text text-[10px] text-white/70">
                        ▶ YouTube
                      </div>
                    </div>
                    <div className="px-2 py-1 flex items-center gap-1">
                      <span className="pixel-text text-[8px] text-hot-pink">VÍDEO</span>
                      <span className="digital-text text-xs text-muted-foreground truncate">• {v.channel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </PixelPanel>

            {/* Shorts panel — 2 rows of 4 */}
            <PixelPanel
              title={<span>cind's Shorts</span>}
              variant="pink"
              rightSlot={<a href="#" className="menu-link !text-[10px]">View All</a>}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "oq ACONTECERIA em U", channel: "Tinocando TV", hue: 220 },
                  { title: "Você é FELIZ?", channel: "Canal Nostalgia", hue: 30 },
                  { title: "A ENORME DESTRUIÇÃ", channel: "Canal Nostalgia", hue: 45 },
                  { title: "Goku ensina Mario a vo", channel: "Canal Nostalgia", hue: 130 },
                  { title: "TOP 10 GAMES dos anos 2000", channel: "Canal Nostalgia", hue: 280 },
                  { title: "se espalhariam", channel: "Tinocando TV", hue: 340 },
                  { title: "10x mais FORTE que o SOL", channel: "Canal Nostalgia", hue: 50 },
                  { title: "Mario VS Goku FINAL", channel: "Canal Nostalgia", hue: 150 },
                ].map((s) => (
                  <div key={s.title} className="border-2 border-panel-edge/60 bg-space-deep/60 overflow-hidden">
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        aspectRatio: "9 / 16",
                        background: `linear-gradient(160deg, hsl(${s.hue} 70% 30%), hsl(${s.hue + 40} 55% 14%))`,
                      }}
                    >
                      <span
                        className="absolute top-1 right-1 pixel-text text-[7px] px-1 py-[1px] border border-hot-pink/80 text-hot-pink bg-space-deep/70"
                        style={{ textShadow: "0 0 6px hsl(var(--hot-pink)/0.9)" }}
                      >
                        SHORT
                      </span>
                      <div
                        className="w-9 h-9 flex items-center justify-center rounded-full"
                        style={{ background: "hsl(0 90% 50%)", boxShadow: "0 0 14px hsl(0 90% 50% / 0.7)" }}
                      >
                        <span className="text-white text-base leading-none">▶</span>
                      </div>
                      <div className="absolute top-1 left-1 right-12">
                        <p className="pixel-text text-[7px] text-white leading-tight line-clamp-2"
                           style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.85)" }}>
                          {s.title}
                        </p>
                        <p className="digital-text text-[10px] text-white/80"
                           style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.85)" }}>
                          {s.channel}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </PixelPanel>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center digital-text text-sm text-muted-foreground">
          <p>
            © 2003-∞ STARNET — <span className="rainbow-text font-bold">a place for friends across the galaxy</span>
          </p>
          <p className="pixel-text text-[8px] mt-2 opacity-60">v1.6.4 // signal: ★★★☆☆</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
