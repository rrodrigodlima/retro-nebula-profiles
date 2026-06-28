import { useMemo } from "react";
import b7 from "@/assets/badges/badge-7.png";
import b8 from "@/assets/badges/badge-8.png";
import b9 from "@/assets/badges/badge-9.png";
import b10 from "@/assets/badges/badge-10.png";
import b11 from "@/assets/badges/badge-11.png";
import b12 from "@/assets/badges/badge-12.png";
import b13 from "@/assets/badges/badge-13.png";
import b14 from "@/assets/badges/badge-14.png";
import b15 from "@/assets/badges/badge-15.png";

// Definimos um array de objetos para garantir que cada item tenha uma chave única
const ALL = [
  { id: 7, src: b7 },
  { id: 8, src: b8 },
  { id: 9, src: b9 },
  { id: 10, src: b10 },
  { id: 11, src: b11 },
  { id: 12, src: b12 },
  { id: 13, src: b13 },
  { id: 14, src: b14 },
  { id: 15, src: b15 },
];

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
      {shuffled.map((b) => (
        <div
          key={b.id} // Agora usamos o ID único
          className="aspect-square flex items-center justify-center"
          style={{ filter: "drop-shadow(0 0 6px hsl(var(--hot-pink) / 0.75))" }}
        >
          <img
            src={b.src} // Corrigido: acessando a propriedade src
            alt={`Badge ${b.id}`}
            className="w-full h-full object-contain"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      ))}
    </div>
  );
};