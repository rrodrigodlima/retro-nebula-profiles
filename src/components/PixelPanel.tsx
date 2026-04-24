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
        "pixel-panel",
        variant === "pink" && "pixel-panel-pink",
        className,
      )}
    >
      {title && (
        <header className="pixel-panel-header">
          <span className="uppercase tracking-wider truncate">{title}</span>
          <span className="flex items-center gap-2">
            {rightSlot && <span className="text-[8px] opacity-90">{rightSlot}</span>}
            <span className="pixel-header-hearts" aria-hidden>
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
            </span>
          </span>
        </header>
      )}
      <div className={cn("p-3 relative", bodyClassName)}>{children}</div>
    </section>
  );
};
