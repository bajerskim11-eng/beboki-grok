"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BUILDINGS, STATIONS, useGame } from "@/lib/beboki-store";
import { SceneChrome, StageBack } from "./BuildingStage";
import { FxBurst } from "./FxBurst";
import { Shelter } from "./Shelter";
import { Workshop } from "./Workshop";

export function Building() {
  const id = useGame((s) => s.building);
  const levels = useGame((s) => s.levels);
  const go = useGame((s) => s.go);
  const workStation = useGame((s) => s.workStation);
  const upgradeBuilding = useGame((s) => s.upgradeBuilding);
  const setToast = useGame((s) => s.setToast);
  const pop = useGame((s) => s.pop);
  const busy = useGame((s) => s.busy);
  const lampReady = useGame((s) => s.lampReady);
  const [, setTick] = useState(0);
  const [hud, setHud] = useState(false);

  useEffect(() => {
    setHud(false);
  }, [id]);

  useEffect(() => {
    if (!busy || busy.building !== id) return;
    const ms = busy.until - Date.now();
    if (ms <= 0) return;
    const t = window.setTimeout(() => setTick((n) => n + 1), ms);
    return () => window.clearTimeout(t);
  }, [busy, id]);

  if (!id) {
    return (
      <section className="grid h-full place-items-center bg-bg">
        <Button variant="gold" onClick={() => go("village")}>
          Wróć do osady
        </Button>
      </section>
    );
  }
  if (id === "schronisko") return <Shelter />;
  if (id === "warsztat") return <Workshop />;
  const b = BUILDINGS[id];
  const lv = levels[id];
  const upCost = 40 * lv;
  const working = Boolean(busy && busy.building === id && busy.until > Date.now());
  const fx = id === "latarnia" ? "glow" : "sparks";

  return (
    <section className="relative flex h-full min-h-0 flex-col overflow-hidden">
      <StageBack src={b.interior} video={b.scene} />
      <FxBurst kind={fx} play={working} />

      {pop.text ? (
        <p
          key={pop.key}
          className="pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up"
        >
          {pop.text}
        </p>
      ) : null}

      <SceneChrome
        title={`${b.title} · lv ${lv}`}
        hint="Dotknij sceny, żeby pracować"
        onBack={() => go("village")}
        open={hud}
        onToggle={() => setHud((v) => !v)}
      >
        <p className="text-sm leading-relaxed text-muted">{b.blurb}</p>
        <p className="mt-1 text-2xs text-faint">
          {id === "kopalnia" ? "Wydobycie rośnie z poziomem." : null}
          {id === "latarnia" ? (lampReady ? "Promień czeka na misję." : "Zapal promień przed wyprawą.") : null}
          {id === "siedziba" ? "Stąd wychodzisz na mapę Katowic." : null}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {STATIONS[id].map((st) => (
            <button
              key={st.id}
              type="button"
              onClick={() => {
                const err = workStation(id, st.id);
                if (err) setToast(err);
              }}
              className="min-h-11 rounded-lg border border-gold bg-chip px-3 py-2 text-left font-display text-xs text-fg"
            >
              {st.label}
              {st.gold ? <span className="ml-1 text-faint">· {st.gold}</span> : null}
              <span className="mt-0.5 block font-body text-[0.65rem] font-normal text-muted">{st.blurb}</span>
            </button>
          ))}
        </div>
        {id !== "siedziba" ? (
          <Button
            variant="gold"
            className="mt-3 w-full"
            onClick={() => {
              const err = upgradeBuilding(id);
              if (err) setToast(err);
            }}
          >
            Ulepsz budynek · {upCost}
          </Button>
        ) : (
          <Button className="mt-3 w-full" variant="gold" onClick={() => go("map")}>
            Mapa Katowic
          </Button>
        )}
      </SceneChrome>
    </section>
  );
}
