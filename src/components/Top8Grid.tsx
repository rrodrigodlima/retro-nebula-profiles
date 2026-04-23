import top8Img from "@/assets/top8-avatars.png";

// 3x3 grid in the source image; we display first 8 (skip the last one).
const positions = [
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
  { row: 1, col: 0 },
  { row: 1, col: 1 },
  { row: 1, col: 2 },
  { row: 2, col: 0 },
  { row: 2, col: 1 },
];

const names = ["pix.ie", "kuro", "vio", "noir", "sun", "ruby", "moon", "lemi"];

export const Top8Grid = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {positions.map((p, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-full aspect-square border-2 border-panel-edge bg-space-deep overflow-hidden"
            style={{
              boxShadow: "0 0 12px hsl(var(--panel-edge) / 0.4)",
            }}
          >
            <div
              className="w-[300%] h-[300%]"
              style={{
                backgroundImage: `url(${top8Img})`,
                backgroundSize: "100% 100%",
                transform: `translate(-${p.col * 33.3333}%, -${p.row * 33.3333}%)`,
                imageRendering: "pixelated",
              }}
            />
          </div>
          <span className="digital-text text-xs text-primary truncate w-full text-center">
            {names[i]}
          </span>
        </div>
      ))}
    </div>
  );
};
