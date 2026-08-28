import { Button } from "@/components/ui/button";
import { Portrait } from "./Portrait";
import { DogImg } from "./Dog";
import { BEBOKS, DOGS, PLACES, travelLabel, useGame } from "@/lib/beboki-store";

export function Brief() {
  const id = useGame((s) => s.mission);
  const go = useGame((s) => s.go);
  const tools = useGame((s) => s.tools);
  if (!id) return null;
  const m = PLACES[id];
  const rooms = Object.keys(m.rooms).length;
  const guide = BEBOKS[m.guide];
  const dogId = m.dogs[0];
  const travel = travelLabel(tools);

  return (
    <section className="relative flex h-full min-h-0 flex-col overflow-auto">
      <img src={m.rooms[m.start].art} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-coal/72" />
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-8">
        <p className="font-display text-2xs uppercase tracking-[0.28em] text-gold">{m.area}</p>
        <h2 className="mt-2 font-display text-3xl text-gold">{m.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-fg">{m.blurb}</p>
        <p className="mt-4 rounded-lg border border-line bg-panel/90 p-3 text-sm text-muted">
          {rooms} ekrany · podróż: {travel}.
          {tools.tramwaj ? " Tramwaj stawia was przy piesku." : tools.hulajnoga ? " Hulajnoga omija pierwszy ekran." : " Złóż hulajnogę u Fachury, by iść szybciej."}
        </p>
        <div className="mt-5 flex items-end justify-center gap-4">
          <Portrait who={m.guide} size={120} />
          <DogImg who={dogId} size={110} />
        </div>
        <p className="mt-2 text-center text-2xs text-faint">
          {guide.name} szuka: {DOGS[dogId].name}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button className="flex-1" onClick={() => go("place")}>
            Wejdź
          </Button>
          <Button className="flex-1" variant="ghost" onClick={() => go("map")}>
            Mapa
          </Button>
        </div>
      </div>
    </section>
  );
}
