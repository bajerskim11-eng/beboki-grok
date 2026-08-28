import { Lock, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Face } from "./Portrait";
import { DOGS, PLACES, useGame, type MissionId } from "@/lib/beboki-store";

const ORDER: MissionId[] = ["panorama", "m1", "m2", "m3"];

export function Missions() {
  const done = useGame((s) => s.done);
  const openMission = useGame((s) => s.openMission);

  return (
    <section className="h-full min-h-0 overflow-auto bg-bg px-4 py-4">
      <h2 className="font-display text-lg tracking-wide text-gold">Miejsca w Katowicach</h2>
      <p className="mt-1 text-sm text-muted">Skacz po ekranach. Znajdź pieska. Wróć z łupem i ulepsz osadę.</p>
      <ul className="mt-4 space-y-3">
        {ORDER.map((id) => {
          const m = PLACES[id];
          const locked = Boolean(m.need && !done[m.need]);
          const rooms = Object.keys(m.rooms).length;
          return (
            <li key={id} className="rounded-xl border border-line bg-panel p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <Face who={m.guide} size={48} />
                  <div>
                    <h3 className="font-display text-base text-gold">{m.title}</h3>
                    <p className="text-2xs text-faint">
                      {m.area} · {rooms} ekrany
                    </p>
                    <p className="mt-1 text-sm text-muted">{m.blurb}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-2xs text-faint">
                      <PawPrint className="size-3.5" /> {m.dogs.map((d) => DOGS[d].name).join(", ")}
                    </p>
                  </div>
                </div>
                {done[id] ? (
                  <span className="rounded-md border border-moss-2 px-2 py-1 text-2xs text-moss-2">Uratowane</span>
                ) : locked ? (
                  <Lock className="size-4 shrink-0 text-faint" />
                ) : null}
              </div>
              <Button
                className="mt-3"
                variant={locked ? "ghost" : "gold"}
                disabled={locked}
                onClick={() => openMission(id)}
              >
                {done[id] ? "Jeszcze raz" : locked ? "Zamknięte" : "Odwiedź"}
              </Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
