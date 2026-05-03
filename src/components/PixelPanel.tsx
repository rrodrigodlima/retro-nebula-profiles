import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PixelPanelProps {
  title?: ReactNode;
  rightSlot?: ReactNode;
  children: ReactNode;
  variant?: "cyan" | "pink";
  className?: string;
  bodyClassName?: string;
}

export const PixelPanel = ({
  title,
  rightSlot,
  children,
  variant = "cyan",
  className,
  bodyClassName,
}: PixelPanelProps) => {
  return (
    <section
      className={cn(
        // Reset base e estrutura
        "pixel-panel relative overflow-hidden border border-white/10 shadow-2xl",
        // EFEITO GLASSMORPHISM VIA TAILWIND (Seguro)
        "bg-[#121010]/40 backdrop-blur-xl saturate-130",
        variant === "pink" && "pixel-panel-pink border-pink-500/20",
        className,
      )}
    >
      {title && (
        <header className="pixel-panel-header flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
          <span
            className="uppercase tracking-[0.2em] truncate italic text-white inline-block py-4 px-10 -my-4 -mx-10"
            style={{
              fontFamily: "'Georgia', serif",
              letterSpacing: '0.15em',
              // Sua config monstra de brilho:
              textShadow: `
                          0 0 8px rgba(255,255,255,0.9),
                          0 0 14px rgba(255,255,255,0.8),
                          0 0 24px rgba(220,230,255,0.7),
                          0 0 36px rgba(200,215,255,0.5),
                          0 0 48px rgba(180,200,255,0.35)`,
              // Força o navegador a renderizar o efeito fora da caixa padrão
              paintOrder: 'stroke fill',
            }}
          >
            {title}
          </span>

          <div className="flex items-center gap-3">
            {rightSlot && (
              <span className="text-[10px] text-white/70 font-mono">
                {rightSlot}
              </span>
            )}
            <div
              className="flex items-center gap-1 text-[12px]"
              style={{
                filter: 'drop-shadow(0 0 5px rgb(255, 255, 255))',
              }}
            >
              <span>🤍</span>
              <span>🤍</span>
              <span>🤍</span>
            </div>
          </div>
        </header>
      )}
      <div className={cn("p-3 relative z-10", bodyClassName)}>
        {children}
      </div>
    </section>
  );
};