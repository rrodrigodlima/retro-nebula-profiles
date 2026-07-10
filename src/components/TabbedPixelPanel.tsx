import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export interface PanelTab {
  id: string;
  label: ReactNode;
  content: ReactNode;
  rightSlot?: ReactNode;
}

interface TabbedPixelPanelProps {
  tabs: PanelTab[];
  rightSlot?: ReactNode;
  variant?: "cyan" | "pink";
  className?: string;
  bodyClassName?: string;
  defaultTabId?: string;
}

export const TabbedPixelPanel = ({
  tabs,
  rightSlot,
  variant = "cyan",
  className,
  bodyClassName,
  defaultTabId,
}: TabbedPixelPanelProps) => {
  const [active, setActive] = useState(defaultTabId ?? tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section
      className={cn(
        "pixel-panel",
        variant === "pink" && "pixel-panel-pink",
        className,
      )}
    >
      <header className="pixel-panel-header !py-0 !px-2 gap-0 items-end">
        <div className="flex items-end gap-1 flex-1 min-w-0 pt-1.5 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "browser-tab pixel-text text-[10px] uppercase tracking-wider",
                  isActive ? "browser-tab-active" : "browser-tab-inactive",
                )}
              >
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
        <span className="flex items-center gap-2 pb-1.5 pl-2">
          {rightSlot && <span className="text-[8px] opacity-90">{rightSlot}</span>}
          <span className="pixel-header-hearts" aria-hidden>
            <span>♥</span>
            <span>♥</span>
            <span>♥</span>
          </span>
        </span>
      </header>
      <div className={cn("p-3 relative", bodyClassName)}>{activeTab?.content}</div>
    </section>
  );
};
