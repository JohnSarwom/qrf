import { RadioTower } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-qrf-ink text-qrf-soft">
      <div className="qrf-container flex min-h-9 items-center justify-center gap-2 py-2 text-center text-[11px] font-semibold sm:justify-start sm:text-xs">
        <RadioTower aria-hidden="true" className="h-3.5 w-3.5 text-qrf-cyan" />
        <span>
          Connecting businesses and remote operations across Papua New Guinea.
        </span>
      </div>
    </div>
  );
}

