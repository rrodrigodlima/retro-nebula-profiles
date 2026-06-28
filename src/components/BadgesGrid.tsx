import { useMemo } from "react";
import b7 from "@/assets/badges/badge-7.png.asset.json";
import b8 from "@/assets/badges/badge-8.png.asset.json";
import b9 from "@/assets/badges/badge-9.png.asset.json";
import b10 from "@/assets/badges/badge-10.png.asset.json";
import b11 from "@/assets/badges/badge-11.png.asset.json";
import b12 from "@/assets/badges/badge-12.png.asset.json";
import b13 from "@/assets/badges/badge-13.png.asset.json";
import b14 from "@/assets/badges/badge-14.png.asset.json";
import b15 from "@/assets/badges/badge-15.png.asset.json";

const ALL = [b7, b8, b9, b10, b11, b12, b13, b14, b15];

export const BadgesGrid = () => {
  const shuffled = useMemo(() => {
    const arr = [...ALL];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 8);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3">
      {shuffled.map((b, i) => (
        <div
          key={i}
          className="aspect-square flex items-center justify-center"
          style={{ filter: "drop-shadow(0 0 6px hsl(var(--hot-pink) / 0.75))" }}
        >
          <img
            src={b.url}
            alt=""
            className="w-full h-full object-contain"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      ))}
    </div>
  );
};
