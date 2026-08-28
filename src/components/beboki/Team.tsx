import { Portrait } from "./Portrait";
import { DogImg, moodLine } from "./Dog";
import { BEBOKS, BUILDINGS, DOG_ORDER, DOGS, SKARBNIK, useGame, type BebokId, type BuildingId } from "@/lib/beboki-store";

const ORDER: BebokId[] = ["hanys", "hopla", "fachura", "podciep"];
const HOME: Record<BebokId, BuildingId> = {
  hanys: "kopalnia",
  hopla: "schronisko",
  fachura: "warsztat",
  podciep: "latarnia",
};

export function Team() {
  const openBuilding = useGame((s) => s.openBuilding);
  const rescued = useGame((s) => s.rescued);
  const pets = useGame((s) => s.pets);

  return (
    <section className="h-full min-h-0 overflow-auto bg-bg px-4 py-4">
      <h2 className="text-center font-display text-xl tracking-wide text-gold">Drużyna</h2>
      <p className="mt-1 text-center text-sm text-muted">Beboki i pieski. Kliknij, by wejść do domu.</p>

      <div className="mx-auto mt-5 flex w-full max-w-lg items-center gap-4 rounded-xl border border-line bg-panel p-4">
        <div className="grid size-20 shrink-0 place-items-center rounded-full border border-gold/40 bg-coal">
          <span className="font-display text-2xl text-gold">?</span>
        </div>
        <div className="min-w-0">
          <p className="font-display text-lg text-gold">{SKARBNIK.name}</p>
          <p className="text-2xs text-muted">Ukryty mentor</p>
          <p className="mt-2 text-xs leading-relaxed text-fg">
            Pojawia się w osadzie tylko czasem, gdy mgła zgęstnieje przy siedzibie.
          </p>
        </div>
      </div>

      <ul className="mx-auto mt-5 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {ORDER.map((id) => {
          const b = BEBOKS[id];
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => openBuilding(HOME[id])}
                className="flex w-full flex-col items-center rounded-xl border border-line bg-panel px-2 py-4"
              >
                <Portrait who={id} size={112} />
                <p className="mt-2 font-display text-sm text-gold">{b.name}</p>
                <p className="text-2xs text-muted">{b.role}</p>
                <p className="mt-2 line-clamp-3 text-center text-2xs leading-snug text-fg">{b.blurb}</p>
                <p className="mt-2 text-2xs text-faint">{BUILDINGS[HOME[id]].title}</p>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-6 max-w-lg rounded-xl border border-line bg-panel p-4">
        <p className="font-display text-sm text-gold">Psi zaułek</p>
        <p className="mt-1 text-sm text-muted">Punia już tu mieszka. Resztę znajdziesz na mapie Katowic.</p>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {DOG_ORDER.map((id) => {
            const have = rescued.includes(id);
            const p = pets[id];
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => openBuilding("schronisko", id)}
                  className="flex w-full flex-col items-center rounded-lg border border-line bg-chip px-1 py-2"
                >
                  {have ? (
                    <DogImg who={id} size={64} />
                  ) : (
                    <span className="grid h-16 w-16 place-items-center text-2xs text-faint">?</span>
                  )}
                  <span className="mt-1 font-display text-2xs text-gold">{DOGS[id].name}</span>
                  <span className="text-[0.6rem] text-faint">
                    {have ? moodLine(p.hunger, p.joy, p.energy) : "na mapie"}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
