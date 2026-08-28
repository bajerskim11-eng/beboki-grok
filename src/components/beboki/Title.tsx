import { Button } from "@/components/ui/button";
import { Portrait } from "./Portrait";
import { DogImg } from "./Dog";
import { useGame, type BebokId, type BuildingId } from "@/lib/beboki-store";

const LINEUP: { id: BebokId; home: BuildingId }[] = [
  { id: "hanys", home: "kopalnia" },
  { id: "hopla", home: "schronisko" },
  { id: "fachura", home: "warsztat" },
  { id: "podciep", home: "latarnia" },
];

export function Title() {
  const go = useGame((s) => s.go);
  const openBuilding = useGame((s) => s.openBuilding);

  return (
    <section className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-coal">
      <img
        src="/title-plaza.jpg"
        alt=""
        className="title-sky absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
      <div className="title-clouds" aria-hidden />
      <div className="title-clouds title-clouds-b" aria-hidden />
      <div className="title-smoke" aria-hidden>
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="title-window title-window-a" aria-hidden />
      <span className="title-window title-window-b" aria-hidden />
      <span className="title-window title-window-c" aria-hidden />
      <span className="title-lantern" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-coal/25 via-transparent to-coal/88" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-end px-5 pb-10 text-center sm:justify-end sm:pb-12">
        <p className="enter-up font-display text-xs tracking-[0.35em] text-gold">Strażnicy Katowic</p>
        <h1 className="enter-up mt-1 font-display text-5xl font-semibold tracking-[0.18em] text-gold sm:text-7xl">
          BEBOKI
        </h1>
        <p className="enter-up mt-2 max-w-md text-sm leading-relaxed text-muted">
          Punia węszy Serce Śląska. Beboki machają z dziedzińca — wejdź do osady.
        </p>
        <div className="title-lineup enter-up mt-4 flex items-end justify-center gap-0 sm:gap-1">
          {LINEUP.slice(0, 2).map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => openBuilding(b.home)}
              className="bg-transparent p-0"
              aria-label={b.id}
            >
              <Portrait who={b.id} size={92} pose="wave" />
            </button>
          ))}
          <button type="button" onClick={() => openBuilding("schronisko")} className="bg-transparent p-0" aria-label="Punia">
            <DogImg who="punia" size={84} className="is-wave mb-0.5" />
          </button>
          {LINEUP.slice(2).map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => openBuilding(b.home)}
              className="bg-transparent p-0"
              aria-label={b.id}
            >
              <Portrait who={b.id} size={92} pose="wave" />
            </button>
          ))}
        </div>
        <Button className="enter-up mt-6 min-w-44" onClick={() => go("village")}>
          Wejdź do osady
        </Button>
      </div>
    </section>
  );
}
