import { PLACES, travelLabel, useGame, type MissionId } from "@/lib/beboki-store";

const ORDER: MissionId[] = ["panorama", "m1", "m2", "m3"];

export function MapScreen() {
  const openMission = useGame((s) => s.openMission);
  const done = useGame((s) => s.done);
  const tools = useGame((s) => s.tools);
  const travel = travelLabel(tools);

  return (
    <section className="relative h-full min-h-0 overflow-hidden">
      <img src="/mapa.jpg" alt="Mapa Katowic" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-coal/28" />
      <p className="absolute left-4 top-4 z-10 font-display text-sm tracking-wide text-gold">Mapa Katowic</p>
      <p className="absolute left-4 top-9 z-10 max-w-[70%] text-2xs text-muted">
        Kliknij miejsce. Podróż: {travel}. Łup i pieski wracają do osady.
      </p>
      {ORDER.map((id) => {
        const p = PLACES[id];
        const locked = Boolean(p.need && !done[p.need]);
        return (
          <button
            key={id}
            type="button"
            onClick={() => openMission(id)}
            className="absolute z-10 flex min-h-11 min-w-11 flex-col items-center"
            style={{ left: p.map.left, top: p.map.top }}
          >
            <span
              className={`size-4 rounded-full border-2 ${
                done[id] ? "border-moss-2 bg-moss" : locked ? "border-faint bg-chip" : "border-gold bg-gold-fill"
              }`}
            />
            <span className="mt-1 max-w-28 rounded-md border border-gold bg-coal/85 px-2 py-1 text-center font-display text-2xs text-fg">
              {p.title}
              <span className="mt-0.5 block text-[0.65rem] text-faint">{p.area}</span>
              {locked ? " · zamek" : done[id] ? " · ok" : ""}
            </span>
          </button>
        );
      })}
    </section>
  );
}
