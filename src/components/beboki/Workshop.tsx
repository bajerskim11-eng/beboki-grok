import { useState } from "react";
import { Bike, Hammer, Magnet, Train, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOOLS, travelLabel, useGame, type ToolId } from "@/lib/beboki-store";
import { SceneChrome, StageBack } from "./BuildingStage";

const ICON: Record<ToolId, typeof Magnet> = {
  kladka: Hammer,
  magnes: Magnet,
  hulajnoga: Bike,
  tramwaj: Train,
  winda: TrendingUp,
};

const ORDER: ToolId[] = ["kladka", "magnes", "hulajnoga", "tramwaj", "winda"];

export function Workshop() {
  const go = useGame((s) => s.go);
  const openBuilding = useGame((s) => s.openBuilding);
  const tools = useGame((s) => s.tools);
  const buyTool = useGame((s) => s.buyTool);
  const setToast = useGame((s) => s.setToast);
  const pop = useGame((s) => s.pop);
  const gold = useGame((s) => s.gold);
  const coal = useGame((s) => s.coal);
  const cry = useGame((s) => s.cry);
  const [hud, setHud] = useState(false);

  return (
    <section className="relative flex h-full min-h-0 flex-col overflow-hidden">
      <StageBack src="/buildings/warsztat-in.jpg" video="/scenes/warsztat.mp4" />

      {pop.text ? (
        <p
          key={pop.key}
          className="pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up"
        >
          {pop.text}
        </p>
      ) : null}

      <SceneChrome
        title={`Warsztat Fachury · ${travelLabel(tools)}`}
        hint="Dotknij, żeby składać narzędzia"
        onBack={() => go("village")}
        open={hud}
        onToggle={() => setHud((v) => !v)}
      >
        <p className="text-sm leading-relaxed text-muted">
          Hulajnoga i tramwaj skracają wyprawy po Katowicach.
        </p>
        <ul className="mt-3 space-y-2">
          {ORDER.map((id) => {
            const t = TOOLS[id];
            const Icon = ICON[id];
            const have = tools[id];
            const price = [
              t.gold ? `${t.gold} m` : null,
              t.coal ? `${t.coal} węg.` : null,
              t.cry ? `${t.cry} odł.` : null,
            ]
              .filter(Boolean)
              .join(" · ");
            return (
              <li key={id}>
                <button
                  type="button"
                  disabled={have}
                  onClick={() => {
                    const err = buyTool(id);
                    if (err) setToast(err);
                  }}
                  className="flex w-full min-h-14 items-center gap-3 rounded-xl border border-line bg-panel/95 px-3 py-3 text-left disabled:opacity-55"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-md border border-gold bg-chip">
                    <Icon className="size-5 text-gold" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm text-gold">
                      {t.name}
                      {have ? " · jest" : ""}
                    </span>
                    <span className="block text-2xs text-muted">{t.blurb}</span>
                    {!have ? <span className="mt-0.5 block text-[0.65rem] text-faint">{price}</span> : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-2xs text-faint">
          Masz {gold} monet, {coal} węgla, {cry} odłamków.
        </p>
        <div className="mt-3 flex gap-2">
          <Button className="flex-1" variant="ghost" onClick={() => openBuilding("schronisko")}>
            Do piesków
          </Button>
          <Button className="flex-1" variant="gold" onClick={() => go("map")}>
            Mapa Katowic
          </Button>
        </div>
      </SceneChrome>
    </section>
  );
}
