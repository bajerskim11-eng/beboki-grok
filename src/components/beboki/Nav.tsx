import { Flag, Home, Map, Pickaxe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGame, type Screen } from "@/lib/beboki-store";

const ITEMS: { id: Screen; label: string; icon: typeof Home }[] = [
  { id: "village", label: "Osada", icon: Home },
  { id: "buildings", label: "Budynki", icon: Pickaxe },
  { id: "team", label: "Drużyna", icon: Users },
  { id: "map", label: "Mapa", icon: Map },
  { id: "missions", label: "Misje", icon: Flag },
];

export function Nav() {
  const screen = useGame((s) => s.screen);
  const go = useGame((s) => s.go);
  const active =
    screen === "building" ? "buildings" : screen === "brief" || screen === "win" || screen === "place" ? "missions" : screen;

  return (
    <nav className="flex gap-1 border-t border-line bg-coal p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      {ITEMS.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant="nav"
          data-on={active === id}
          onClick={() => go(id)}
          aria-current={active === id ? "page" : undefined}
        >
          <Icon className="size-4" strokeWidth={1.75} />
          {label}
        </Button>
      ))}
    </nav>
  );
}
