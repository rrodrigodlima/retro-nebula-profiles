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
          <span className="uppercase tracking-wider">{title}</span>
          {rightSlot && <span className="text-[8px] opacity-90">{rightSlot}</span>}
        </header>
      )}
      <div className={cn("p-3 relative", bodyClassName)}>{children}</div>
    </section>
  );
};
