import type { ReactNode } from "react";
import { Coins, Gem, Hexagon, PawPrint } from "lucide-react";
import { DOGS, useGame } from "@/lib/beboki-store";

export function Hud() {
  const gold = useGame((s) => s.gold);
  const coal = useGame((s) => s.coal);
  const cry = useGame((s) => s.cry);
  const dogs = useGame((s) => s.dogs);
  const rescued = useGame((s) => s.rescued);
  const pets = useGame((s) => s.pets);
  const hungry = rescued.find((id) => pets[id].hunger < 28);

  return (
    <header className="flex items-center gap-3 border-b border-line bg-coal px-3 py-2">
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold tracking-wide text-gold">Osada pod Spodkiem</p>
        <p className="text-2xs text-muted">
          {hungry ? `${DOGS[hungry].name} chce jeść` : "Hopla pilnuje piesków"}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2 text-2xs tabular-nums text-fg sm:gap-3 sm:text-sm">
        <Chip icon={<Coins className="size-3.5 text-gold" />} value={gold} label="monety" />
        <Chip icon={<Hexagon className="size-3.5 text-muted" />} value={coal} label="węgiel" />
        <Chip icon={<Gem className="size-3.5 text-gold-2" />} value={cry} label="odłamki" />
        <Chip icon={<PawPrint className="size-3.5 text-moss-2" />} value={`${dogs}/5`} label="psy" />
      </div>
    </header>
  );
}

function Chip({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: number | string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-line bg-chip px-2 py-1">
      {icon}
      <b className="font-display text-gold">{value}</b>
      <span className="hidden text-faint sm:inline">{label}</span>
    </span>
  );
}
