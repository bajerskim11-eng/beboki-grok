import { Button } from "@/components/ui/button";
import { Face } from "./Portrait";
import { BUILDINGS, useGame, type BuildingId } from "@/lib/beboki-store";

const ORDER: BuildingId[] = ["siedziba", "kopalnia", "warsztat", "latarnia", "schronisko"];

export function Buildings() {
  const levels = useGame((s) => s.levels);
  const openBuilding = useGame((s) => s.openBuilding);

  return (
    <section className="h-full min-h-0 overflow-auto bg-bg px-4 py-4">
      <h2 className="font-display text-lg tracking-wide text-gold">Budynki osady</h2>
      <p className="mt-1 text-sm text-muted">Schronisko — pieski. Warsztat — hulajnoga i tramwaj. Kopalnia sypie węgiel.</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {ORDER.map((id) => {
          const b = BUILDINGS[id];
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => openBuilding(id)}
                className="flex w-full items-center gap-3 rounded-xl border border-line bg-panel p-3 text-left"
              >
                <img src={b.art} alt="" className="h-16 w-16 shrink-0 object-contain" />
                {b.owner ? (
                  <Face who={b.owner} size={56} />
                ) : (
                  <span className="grid size-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-coal font-display text-xl text-gold">
                    ?
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm text-gold">{b.title}</p>
                  <p className="text-2xs text-muted">Poziom {levels[id]}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-fg">{b.blurb}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex justify-center">
        <Button variant="ghost" onClick={() => useGame.getState().go("village")}>
          Wróć na dziedziniec
        </Button>
      </div>
    </section>
  );
}
