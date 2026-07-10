import { useMemo, useState } from "react";
import { FilterMenu } from "@/components/FilterMenu";

type VideoItem = {
  title: string;
  channel: string;
  hue: number;
  tags: string[];
  embed?: string;
};

const VIDEOS: VideoItem[] = [
  { title: "amor fati.", channel: "Tinocando TV", hue: 320, tags: ["profissional"] },
  { title: "GUERRA DA COREIA - A HISTÓRIA", channel: "Canal Nostalgia", hue: 200, tags: ["profissional"] },
  { title: "VINIZX: TIMIDEZ, BULLYING E SUP", channel: "LOUD", hue: 280, tags: ["profissional", "gameplay"] },
  { title: "lo-fi beats to cry to", channel: "starboy_99", hue: 250, tags: ["música"] },
  { title: "ANIMES QUE MARCARAM ÉPOCA", channel: "Canal Nostalgia", hue: 20, tags: ["profissional"] },
  { title: "CSS tricks you didn't know", channel: "devtuber", hue: 160, tags: ["tutorial"] },
  { title: "vlog: galaxy walk 🌌", channel: "milkii", hue: 300, tags: ["vlog"] },
  { title: "y2k aesthetic compilation", channel: "antenna.exe", hue: 340, tags: ["vlog"] },
  { title: "speedrun: world record", channel: "lemi", hue: 100, tags: ["gameplay", "roblox"] },
];

const VIDEO_TAGS = ["gameplay", "profissional", "roblox", "vlog", "tutorial", "música"];

export const VideosGrid = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const items = useMemo(
    () =>
      selected.length === 0
        ? VIDEOS
        : VIDEOS.filter((v) => v.tags.some((t) => selected.includes(t))),
    [selected],
  );

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((v) => (
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
                <p
                  className="pixel-text text-[8px] text-white leading-tight line-clamp-2"
                  style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.8)" }}
                >
                  {v.title}
                </p>
                <p
                  className="digital-text text-xs text-white/80"
                  style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.8)" }}
                >
                  {v.channel}
                </p>
              </div>
              <div className="absolute bottom-1 right-1 digital-text text-[10px] text-white/70">
                ▶ YouTube
              </div>
            </div>
            <div className="px-2 py-1 flex items-center gap-1 flex-wrap">
              <span className="pixel-text text-[8px] text-hot-pink">VÍDEO</span>
              <span className="digital-text text-xs text-muted-foreground truncate">
                • {v.channel}
              </span>
              {v.tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="digital-text text-[10px] px-1 border border-hot-pink/50 text-hot-pink/90"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center digital-text text-sm text-muted-foreground py-6">
            no videos match those filters ✦
          </div>
        )}
      </div>
    </div>
  );
};

export const VideosFilter = ({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (n: string[]) => void;
}) => <FilterMenu tags={VIDEO_TAGS} selected={selected} onChange={onChange} />;

// ---------- IMAGES ----------

type ImageItem = { caption: string; hue: number; tags: string[] };

const IMAGES: ImageItem[] = [
  { caption: "galaxy walk", hue: 300, tags: ["thumbnail"] },
  { caption: "pink sky", hue: 330, tags: ["montagem"] },
  { caption: "cybercafé", hue: 200, tags: ["fanart"] },
  { caption: "arcade night", hue: 260, tags: ["thumbnail", "montagem"] },
  { caption: "sunset diskette", hue: 20, tags: ["wallpaper"] },
  { caption: "moon dust", hue: 240, tags: ["wallpaper", "fanart"] },
];

const IMAGE_TAGS = ["thumbnail", "montagem", "fanart", "wallpaper"];

export const ImagesGrid = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const items = useMemo(
    () =>
      selected.length === 0
        ? IMAGES
        : IMAGES.filter((v) => v.tags.some((t) => selected.includes(t))),
    [selected],
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((img) => (
        <div
          key={img.caption}
          className="border-2 border-panel-edge/60 bg-space-deep/60 overflow-hidden"
        >
          <div
            className="relative aspect-square flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, hsl(${img.hue} 70% 45%), hsl(${img.hue + 40} 60% 22%))`,
            }}
          >
            <span
              className="pixel-text text-[10px] text-white"
              style={{ textShadow: "1px 1px 0 hsl(0 0% 0% / 0.8)" }}
            >
              ✦ IMG ✦
            </span>
          </div>
          <div className="px-2 py-1 flex items-center gap-1 flex-wrap">
            <span className="pixel-text text-[8px] text-hot-pink">IMG</span>
            <span className="digital-text text-xs text-muted-foreground truncate">
              • {img.caption}
            </span>
            {img.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="digital-text text-[10px] px-1 border border-hot-pink/50 text-hot-pink/90"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      ))}
      {items.length === 0 && (
        <div className="col-span-full text-center digital-text text-sm text-muted-foreground py-6">
          no images match those filters ✦
        </div>
      )}
    </div>
  );
};

export const IMAGE_FILTER_TAGS = IMAGE_TAGS;
export const VIDEO_FILTER_TAGS = VIDEO_TAGS;
