import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterMenuProps {
  tags: string[];
  selected: string[];
  onChange: (next: string[]) => void;
}

export const FilterMenu = ({ tags, selected, onChange }: FilterMenuProps) => {
  const toggle = (tag: string) => {
    onChange(
      selected.includes(tag) ? selected.filter((t) => t !== tag) : [...selected, tag],
    );
  };
  const clear = () => onChange([]);
  const count = selected.length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1 px-2 py-[3px] rounded-[4px]",
            "border-2 border-[hsl(var(--panel-edge-soft))]",
            "bg-[hsl(var(--card))] text-hot-pink pixel-text text-[8px] uppercase",
            "hover:bg-[hsl(var(--hot-pink))] hover:text-white transition-colors",
          )}
          style={{ textShadow: "0 0 6px hsl(var(--hot-pink) / 0.5)" }}
          aria-label="Filter items"
        >
          <Filter className="w-3 h-3" />
          filter
          {count > 0 && (
            <span className="ml-1 px-1 rounded-sm bg-hot-pink text-white text-[8px] leading-none">
              {count}
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={6}
        className={cn(
          "w-56 p-0 rounded-[8px] border-2 border-[hsl(var(--hot-pink))]",
          "bg-[hsl(var(--card))] text-foreground shadow-[3px_3px_0_0_hsl(var(--bevel-dark)/0.5)]",
        )}
      >
        <div className="pixel-panel-header !py-1 !px-2 flex items-center justify-between">
          <span className="uppercase tracking-wider text-[9px]">filters</span>
          {count > 0 && (
            <button
              onClick={clear}
              className="digital-text text-[11px] underline underline-offset-2 hover:text-white/90"
            >
              clear
            </button>
          )}
        </div>
        <ul className="p-2 space-y-1 max-h-56 overflow-y-auto">
          {tags.map((tag) => {
            const active = selected.includes(tag);
            return (
              <li key={tag}>
                <button
                  type="button"
                  onClick={() => toggle(tag)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1 text-left digital-text text-sm",
                    "border border-transparent rounded-[4px] transition-colors",
                    active
                      ? "bg-hot-pink/20 border-hot-pink/60 text-hot-pink"
                      : "text-muted-foreground hover:bg-hot-pink/10 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "w-3 h-3 border-2 flex items-center justify-center",
                      active
                        ? "border-hot-pink bg-hot-pink text-white"
                        : "border-[hsl(var(--panel-edge-soft))]",
                    )}
                  >
                    {active && <span className="text-[8px] leading-none">✓</span>}
                  </span>
                  <span className="truncate">#{tag}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
