import { Button } from "@/components/ui/button";
import { Face } from "./Portrait";
import { DogImg } from "./Dog";
import { DOGS, useGame, type BebokId, type BuildingId, type DogId } from "@/lib/beboki-store";

const HOTSPOTS: { id: BuildingId; label: string; left: string; top: string; who: BebokId | null }[] = [
  { id: "kopalnia", label: "Kopalnia", left: "6%", top: "34%", who: "hanys" },
  { id: "siedziba", label: "Siedziba", left: "38%", top: "26%", who: null },
  { id: "warsztat", label: "Warsztat", left: "16%", top: "52%", who: "fachura" },
  { id: "latarnia", label: "Latarnia", left: "68%", top: "20%", who: "podciep" },
  { id: "schronisko", label: "Schronisko", left: "72%", top: "54%", who: "hopla" },
];

const ROAM: { id: DogId; left: string; top: string; size: number; delay: string }[] = [
  { id: "punia", left: "61%", top: "63%", size: 78, delay: "0s" },
  { id: "baczek", left: "81%", top: "66%", size: 68, delay: "0.4s" },
  { id: "burek", left: "69%", top: "72%", size: 82, delay: "0.8s" },
  { id: "reks", left: "52%", top: "69%", size: 76, delay: "0.2s" },
  { id: "figa", left: "86%", top: "56%", size: 62, delay: "1s" },
];

export function Village() {
  const go = useGame((s) => s.go);
  const openBuilding = useGame((s) => s.openBuilding);
  const levels = useGame((s) => s.levels);
  const dogs = useGame((s) => s.dogs);
  const rescued = useGame((s) => s.rescued);
  const pets = useGame((s) => s.pets);
  const done = useGame((s) => s.done);
  const places = Object.values(done).filter(Boolean).length;

  return (
    <section className="relative h-full min-h-0 flex-1 overflow-hidden bg-bg">
      <img
        src="/title-plaza.jpg"
        alt="Osada pod Spodkiem"
        className="absolute inset-0 h-full w-full object-cover object-[center_48%]"
      />
      <div className="title-clouds" aria-hidden />
      <div className="title-smoke" aria-hidden>
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="title-lantern" aria-hidden />

      {HOTSPOTS.map((h) => (
        <button
          key={h.id}
          type="button"
          onClick={() => openBuilding(h.id)}
          style={{ left: h.left, top: h.top }}
          className="absolute z-10 flex max-w-[46vw] min-h-11 items-center gap-1.5 rounded-md border border-gold bg-coal/88 py-1 pl-1 pr-2 text-left shadow-panel sm:max-w-none"
        >
          {h.who ? <Face who={h.who} size={32} /> : null}
          <span className="font-display text-2xs tracking-wide text-fg sm:text-xs">
            {h.label}
            <span className="mt-0.5 block text-[0.65rem] text-faint">
              lv {levels[h.id]}
              {h.id === "schronisko" && dogs > 0 ? ` · ${dogs} ${dogs === 1 ? "piesek" : "pieski"}` : ""}
              {h.id === "warsztat" ? " · podróż" : ""}
            </span>
          </span>
        </button>
      ))}

      {ROAM.filter((d) => rescued.includes(d.id)).map((d) => {
        const hungry = (pets[d.id]?.hunger ?? 50) < 28;
        return (
          <button
            key={d.id}
            type="button"
            onClick={() => openBuilding("schronisko", d.id)}
            style={{ left: d.left, top: d.top }}
            className="absolute z-20 flex flex-col items-center"
          >
            <span className="sprite-bob" style={{ animationDelay: d.delay }}>
              <DogImg who={d.id} size={d.size} />
            </span>
            <span className="rounded-md border border-gold bg-coal/85 px-1.5 py-0.5 font-display text-[0.65rem] text-gold">
              {DOGS[d.id].name}
              {hungry ? " · głód" : ""}
            </span>
          </button>
        );
      })}

      <p className="pointer-events-none absolute left-3 top-3 z-10 max-w-[72%] font-display text-2xs tracking-wide text-gold">
        Osada · pieski biegają przy schronisku · miejsca {places}/4
      </p>
      <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        <Button variant="ghost" onClick={() => openBuilding("schronisko")}>
          Pieski
        </Button>
        <Button variant="gold" onClick={() => go("map")}>
          Mapa Katowic
        </Button>
      </div>
    </section>
  );
}
