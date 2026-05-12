import { PixelPanel } from "@/components/PixelPanel";
import { Top8Grid } from "@/components/Top8Grid";
import { ProfileSong } from "@/components/ProfileSong";
import { useState } from 'react';
import { motion } from "framer-motion";
import { VIDEO_DATA } from '@/data/videos'; // Ajuste o caminho conforme sua pasta
import { SHORTS_DATA } from '@/data/videos'; // Ajuste o caminho conforme sua pasta
import { SOCIAL_DATA } from '@/data/social'; // Ajuste o caminho conforme sua pasta



import spaceBg from "@/assets/word-sky-pattern.gif";
import cindAvatar from "@/assets/cind-avatar.png";
import cindPortrait from "@/assets/cind-portrait.png";
import cindMascot from "@/assets/cind-mascot.png";
import glitchStar from "@/assets/glitch-star.png";
import showReel from "@/assets/video1.mp4";




const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Função para facilitar o fechamento
  const closeModal = () => setSelectedVideo(null);
  return (
    <main className="relative min-h-screen w-full overflow-hidden starfield">
      {/* Pastel pink dithered sky background */}

      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${spaceBg})`,
          backgroundSize: "1920px 1080px",
          mixBlendMode: "screen",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"

        aria-hidden
      />

      {/* Floating decorative art — glitch star (left) */}
      {/* <img
        src={glitchStar}
        alt=""
        aria-hidden
        loading="lazy"
        width={420}
        height={420}
        className="hidden md:block absolute -left-12 top-32 w-[280px] lg:w-[360px] float-med glitch-pulse float-slow z-0 opacity-10 pointer-events-none"
      /> */}

      {/* Floating mascot (right) */}
      <img
        src={cindMascot}
        alt="cind mascot waving"
        loading="lazy"
        width={280}
        height={280}
        className="hidden lg:block absolute right-4 top-40 w-[200px] xl:w-[200px] float-med z-0 pointer-events-none drop-shadow-[0_0_24px_hsl(var(--hot-pink)/0.5)]"
      />


      {/* Top nav strip — pink chrome */}
      {/* O segredo: sticky precisa estar num elemento que não seja limitado por overflow-hidden no pai */}
      {/* <header className="sticky top-4 z-[100] w-full px-4 mb-8 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1200px] pointer-events-auto relative">


          <div className="absolute -inset-1 bg-hot-pink/5 blur-xl rounded-2xl" />

          <div className="relative border-2 border-hot-pink/30 backdrop-blur-md bg-space-deep/70 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">

            <div className="px-6 py-3 flex items-center justify-between">

              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-hot-pink drop-shadow-[0_0_5px_#ff006e]">♡</span>
                <h1 className="pixel-text text-base text-white tracking-tighter">
                  Lumi
                </h1>
              </div>

              <nav className="hidden md:flex items-center gap-10">
                {['home', 'browse', 'mail', 'badges'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="digital-text text-[10px] text-white/50 hover:text-hot-pink transition-all uppercase tracking-[0.25em] relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-hot-pink transition-all group-hover:w-full" />
                  </a>
                ))}
              </nav>


              <button className="group relative px-6 py-2 overflow-hidden rounded-lg transition-all active:scale-95">

                <div className="absolute inset-0 bg-hot-pink/20 border border-hot-pink/40 group-hover:bg-hot-pink transition-all duration-300" />

                <span className="relative z-10 digital-text text-[9px] font-bold text-hot-pink group-hover:text-white transition-colors tracking-[0.1em]">
                  HIRE ME
                </span>
              </button>

            </div>


            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </header> */}

      {/* Profile grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          {/* ===== LEFT COLUMN (profile + photos + top8 + badges + visitors stacked) ===== */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-3 [&_.pixel-panel]:text-sm">
            {/* Profile panel */}
            <PixelPanel title="// Profile" variant="pink">
              <div className="flex flex-col items-center gap-4">

                {/* Avatar / Foto Principal - Sem padding interno */}
                <div className="relative w-full aspect-square border-2 border-hot-pink bg-space-deep overflow-hidden"
                  style={{ boxShadow: "0 0 20px rgba(255, 0, 110, 0.3)" }}>

                  <img
                    src={cindAvatar}
                    alt="Lumi Profile"
                    className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badge de Localização */}
                  {/* <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm border border-white/20 px-2 py-0.5 z-20">
                    <p className="digital-text text-[8px] text-white tracking-widest uppercase">
                      📍 Salvador, Brasil
                    </p>
                  </div> */}
                </div>

                {/* Informações de Texto */}
                <div className="text-left w-full space-y-1 px-1">
                  <h2
                    className="pixel-text text-[30px] leading-none"
                    style={{
                      color: '#FFFFFF',
                      // Aplicando a Georgia Bold Italic que você definiu globalmente
                      fontFamily: 'Georgia, serif',
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      // Glow em camadas: Definição branca + Aura Hot Pink
                      textShadow: `
      0 0 7px rgba(255, 255, 255, 0.9),
      0 0 15px rgba(255, 0, 110, 0.7),
      0 0 25px rgba(255, 0, 110, 0.4),
      0 0 40px rgba(255, 0, 110, 0.2)
    `,
                      // Evita que o brilho seja cortado e suaviza o render
                      padding: '0 10px',
                      margin: '0 -10px',
                      filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
                    }}
                  >
                    Lumi
                  </h2>
                  <p
                    className="digital-text text-[10px] uppercase tracking-[0.2em]"
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
                    Digital Artist &<br></br>Motion Designer
                  </p>
                  <p
                    style={{
                      textShadow: `
                        0 0 5px #ffffff6c,
                        0 0 12px #ffffff98
                      `,
                      // Ajuste de legibilidade para fontes pequenas e itálicas
                      letterSpacing: '0.25em',
                      fontSize: '12px',
                      color: '#ffffff',
                      filter: 'drop-shadow(0 0 1px rgba(255, 0, 110, 0.2))'
                    }}
                    className="digital-text text-xs text-white/50 italic mt-2">
                    Currently @ Vivo Keyd Stars
                  </p>
                </div>

                {/* Redes Sociais - Estilo Circular */}
                <div className="w-full flex items-center justify-between gap-2 py-2 border-y-2 border-dashed border-white/10">
                  {SOCIAL_DATA.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 hover: hover:border-white/40 hover:scale-110 shadow-[0_0_20px_rgba(255,0,110,0)] hover:shadow-[0_0_25px_rgba(255,0,110,0.6)]"
                    >
                      {/* Container Centralizado */}
                      <div className="relative w-6 h-6 flex items-center justify-center">

                        {/* Ícone Padrão: Diminui e some no fade */}
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="absolute w-full h-full object-contain transition-all duration-500 ease-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-50"
                        />

                        {/* Ícone Hover: Começa invisível, pequeno e cresce (Fade In + Scale) */}
                        <img
                          src={social.hover}
                          alt={`${social.name} Hover`}
                          className="absolute w-full h-full object-contain transition-all duration-500 ease-out opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-110"
                        />
                      </div>

                      {/* Brilho extra de fundo para destacar o "crescimento" */}
                      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                    </a>
                  ))}
                </div>
                {/* Botão Principal CTA - Restaurado para Estética do Painel */}
                <a
                  href="https://api.whatsapp.com/send/?phone=71992293406&text=Estou+interessado+em+seu+trabalhoo&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="wirluro-follow-btn group relative">
                    {/* Texto com Animação Idle Staggered */}
                    <span className="txt-container">
                      {["F", "o", "l", "l", "o", "w", " ", "m", "e"].map((char, i) => (
                        <span key={i} className="btn-letter" style={{ animationDelay: `${i * 0.1}s` }}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </span>

                    {/* Partículas/Ícones de Explosão (Ajustados para o seu tema) */}
                    <div className="particle star-1">🤍</div>
                    <div className="particle star-2">🤍</div>
                    <div className="particle star-3">🤍</div>
                    <div className="particle star-4">🤍</div>
                    <div className="particle star-5">🤍</div>
                    <div className="particle star-6">🤍</div>
                  </button>
                </a>

                {/* Status Chips */}
                {/* <div className="w-full grid grid-cols-2 gap-2">
                  <div className="bg-black/40 border border-panel-edge/40 px-3 py-2 flex flex-col">
                    <span className="digital-text text-[7px] text-white/40 uppercase">MEI</span>
                    <span className="digital-text text-[9px] text-white truncate">Wirluro Studio</span>
                  </div>
                  <div className="bg-black/40 border border-panel-edge/40 px-3 py-2 flex flex-col">
                    <span className="digital-text text-[7px] text-white/40 uppercase">Status</span>
                    <span className="text-primary digital-text text-[9px] animate-pulse">● Online</span>
                  </div>
                </div> */}

              </div>
            </PixelPanel>

            {/* Photos panel */}
            {/* <PixelPanel title="lumi's Photos" rightSlot={<a href="#" className="menu-link !text-[10px]">View All</a>}>
              <div className="border-2 border-dashed border-panel-edge/50 p-6 text-center digital-text text-base text-muted-foreground bg-space-deep/50">
                <span className="block text-2xl mb-1">📷</span>
                No photos yet
              </div>
            </PixelPanel> */}

            {/* Badges showcase */}
            {/* <PixelPanel title="Links & Connections" variant="pink">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-1">
                {[
                  { icon: "★", label: "Github", url: "https://github.com/", token: "--gold" },
                  { icon: "❤", label: "Instagram", url: "https://instagram.com/", token: "--hot-pink" },
                  { icon: "🤍", label: "Behance", url: "https://behance.net/", token: "--primary" },
                  { icon: "♪", label: "Twitter", url: "https://twitter.com/", token: "--primary" },
                  { icon: "✿", label: "TikTok", url: "https://tiktok.com/", token: "--hot-pink" },
                  { icon: "✚", label: "Discord", url: "https://discord.com/", token: "--gold" },
                ].map((b) => (
                  <a
                    key={b.label}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center justify-center border-2 overflow-hidden transition-all duration-300 active:scale-95 ease-out h-20"
                    style={{
                      borderColor: `hsl(var(${b.token}) / 0.4)`,
                      background: `linear-gradient(160deg, hsl(var(${b.token}) / 0.1) 0%, hsl(var(--space-deep) / 0.8) 100%)`,
                      boxShadow: `inset 0 0 15px hsl(var(${b.token}) / 0.1)`,
                    }}
                  >

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                      style={{
                        background: `linear-gradient(135deg, hsl(var(${b.token}) / 0.3) 0%, transparent 70%)`
                      }}
                    />

                    <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>


                    <div
                      className="relative z-10 pixel-text text-xl transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1"
                      style={{
                        color: `hsl(var(${b.token}))`,
                        textShadow: `0 0 10px hsl(var(${b.token}) / 0.9), 0 0 20px hsl(var(${b.token}) / 0.5)`,
                      }}
                    >
                      {b.icon}
                    </div>

                    <p className="relative z-10 digital-text text-[9px] text-white/80 mt-2.5 truncate uppercase tracking-widest group-hover:text-white transition-colors">
                      {b.label}
                    </p>

                    <div
                      className="absolute inset-0 border-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"
                      style={{ borderColor: `hsl(var(${b.token}))` }}
                    />

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0"
                      style={{
                        boxShadow: `0 0 20px hsl(var(${b.token}) / 0.5), inset 0 0 10px hsl(var(${b.token}) / 0.3)`
                      }}
                    />
                  </a>
                ))}
              </div>
            </PixelPanel> */}

            {/* Top 8 */}
            {/* <PixelPanel
              title="lumi's Top 8"
              rightSlot={<a href="#" className="menu-link !text-[10px]">View All</a>}
            >
              <Top8Grid />
            </PixelPanel> */}

            {/* Profile song */}
            <PixelPanel
              title={<span>♪ Profile Song</span>}
              variant="pink"
            >
              <ProfileSong />
            </PixelPanel>

            {/* Visitors */}
            {/* <PixelPanel title="recent visitors">
              <ul className="space-y-1 digital-text text-sm">
                {[
                  ["🤍", "starboy_99", "1m ago"],
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
            </PixelPanel> */}
          </div>

          {/* ===== CENTER COLUMN ===== */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-4">
            {/* Lore & Blurbs combined */}
            <PixelPanel title={<span>// showreel</span>}>
              <iframe
                className="absolute pointer-events-none"
                style={{
                  top: "-10%",
                  left: "-10%",
                  width: "120%",
                  height: "120%",
                }}
                src="https://www.youtube.com/embed/26p3XjxoZ6w?autoplay=1&mute=1&loop=1&playlist=26p3XjxoZ6w&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0"
                title="amor fati."
                allow="autoplay; encrypted-media; picture-in-picture"
                frameBorder={0}
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.12] z-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                  backgroundSize: '100% 4px'
                }}
              ></div>
            </PixelPanel>



            {/* Videos (horizontal) */}
            <div className="relative">
              <PixelPanel
                title={<span>// last Videos</span>}

              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-1">
                  {VIDEO_DATA.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVideo(v.id)}
                      className="group relative text-left border-2 border-panel-edge/40 bg-black overflow-hidden hover:border-hot-pink transition-all active:scale-[0.98] focus:outline-none shadow-xl"
                    >
                      <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-black">

                        {/* Thumbnail em Qualidade Máxima (HD) */}
                        <img
                          src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                          className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                          alt={v.title}
                          // Fallback: Se o vídeo não tiver thumb em 720p/1080p, ele carrega a hqdefault
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
                          }}
                        />

                        {/* Camada de Scanlines (Efeito TV Retrô) */}
                        <div
                          className="absolute inset-0 pointer-events-none opacity-[0.12] z-10"
                          style={{
                            backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                            backgroundSize: '100% 4px'
                          }}
                        ></div>

                        {/* Botão Play Central (Estilo Clássico) */}
                        <div className="relative z-20 w-10 h-7 bg-pink-600/90 flex items-center justify-center rounded shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300">
                          <span className="text-white text-[10px]">▶</span>
                        </div>

                        {/* Barra HUD (Degradê de Preto com Info) */}
                        <div className="absolute bottom-0 left-0 right-0 z-30 p-2.5 bg-gradient-to-t from-black via-black/85 to-transparent">
                          <div className="flex items-center gap-1.5">
                            {/* TAG VIDEO - Mais discreta e fina */}
                            <span
                              className="pixel-text text-[8px] px-1.5 py-0.5 border border-hot-pink/60 bg-black/40 uppercase tracking-[0.2em]"
                              style={{
                                color: '#FF006E',
                                fontFamily: "'VT323', monospace",
                              }}
                            >
                              video
                            </span>

                            {/* TÍTULO DO CANAL - Elegante e harmônico */}
                            <h3
                              className="digital-text text-[13px] text-white/90 leading-tight truncate mt-1.5"
                              style={{
                                fontFamily: 'Georgia, serif',
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                // Um glow muito leve, quase imperceptível, apenas para separar do fundo
                                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                letterSpacing: '0.02em'
                              }}
                            >
                              {v.channel}
                            </h3>
                          </div>
                        </div>

                        {/* Indicador YT sutil */}
                        <div className="absolute top-1 right-1 digital-text text-[8px] text-white/20 z-10">
                          YT.HD
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </PixelPanel>

              {/* --- MODAL DO PLAYER --- */}
              {selectedVideo && (
                <div
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                  onClick={closeModal}
                >
                  <div
                    className="relative w-full max-w-4xl aspect-video border-4 border-panel-edge bg-black shadow-[0_0_50px_rgba(255,0,110,0.3)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Botão Fechar Customizado */}
                    <button
                      onClick={closeModal}
                      className="absolute -top-12 right-0 pixel-text text-hot-pink hover:text-white transition-colors text-lg"
                    >
                      [ FECHAR X ]
                    </button>

                    {/* O Player */}
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            {/* Shorts panel — 2 rows of 4 */}
            <PixelPanel
              title={<span>// Shorts</span>}
              variant="pink"

            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-1">
                {SHORTS_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedVideo(s.id)}
                    className="group relative text-left border-2 border-panel-edge/40 bg-black overflow-hidden hover:border-hot-pink transition-all active:scale-[0.98] focus:outline-none shadow-xl"
                  >
                    <div
                      className="relative flex items-center justify-center overflow-hidden bg-black"
                      style={{ aspectRatio: "9 / 16" }}
                    >
                      {/* Imagem de Alta Resolução */}
                      <img
                        src={`https://i.ytimg.com/vi/${s.id}/maxresdefault.jpg`}
                        className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                        alt={s.title}
                        // IMPORTANTE: Se o vídeo não tiver versão HD, o maxresdefault retorna erro 404.
                        // Esse código abaixo troca automaticamente para a versão HQ caso a HD não exista:
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://i.ytimg.com/vi/${s.id}/hqdefault.jpg`
                        }}
                      />

                      {/* Camada de Scanlines (Efeito TV Retrô) */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.15] z-10"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                          backgroundSize: '100% 4px'
                        }}
                      ></div>

                      {/* Tag SHORT */}
                      <span className="absolute top-2 right-2 z-30 pixel-text text-[7px] px-1.5 py-0.5 border border-hot-pink/60 text-hot-pink bg-black/90">
                        SHORT
                      </span>

                      {/* Botão Play (Estilo YT Shorts) */}
                      <div className="relative z-20 w-12 h-12 flex items-center justify-center rounded-full bg-pink-600/90 shadow-[0_0_20px_rgba(219,39,119,0.5)] group-hover:scale-125 transition-transform duration-300">
                        <span className="text-white text-xl ml-1">▶</span>
                      </div>

                      {/* HUD de Info com Degradê Preto Pesado */}
                      <div className="absolute bottom-0 left-0 right-0 z-30 p-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="pixel-text text-[6px] text-hot-pink border border-hot-pink/40 bg-black/80 px-1 uppercase">
                            video
                          </span>
                          <span className="digital-text text-[10px] text-white/70 truncate">
                            {s.channel}
                          </span>
                        </div>
                        <p className="pixel-text text-[8px] text-white leading-tight line-clamp-2 group-hover:text-hot-pink transition-colors duration-300">
                          {s.title}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </PixelPanel>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center digital-text text-sm text-muted-foreground">
          <p className="black-text font-bold">
            © 2026 ∞ 7Visions — <span className="rainbow-text font-bold">a place for friends across the galaxy</span>
          </p>
          <p className="pixel-text text-[8px] mt-2 opacity-60">v2.4 // signal: ★★★☆☆</p>
        </footer>
      </div>

    </main>
  );
};

export default Index;
