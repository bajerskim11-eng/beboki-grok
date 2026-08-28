import { Button } from "@/components/ui/button";
import { Portrait } from "./Portrait";
import { DogImg } from "./Dog";
import { DOGS, PLACES, useGame, type DogId } from "@/lib/beboki-store";

export function Win() {
  const mission = useGame((s) => s.mission);
  const last = useGame((s) => s.lastReward);
  const go = useGame((s) => s.go);
  const openBuilding = useGame((s) => s.openBuilding);
  const place = mission ? PLACES[mission] : null;
  const dogId = (place?.dogs[0] ?? "punia") as DogId;

  return (
    <section className="relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden px-5 text-center">
      <img src="/village.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-coal/75" />
      <div className="relative z-10 max-w-md">
        <h2 className="font-display text-3xl text-gold">{place ? place.title : "Powrót"}</h2>
        <p className="mt-3 text-sm leading-relaxed text-fg">
          {last?.dog ? `${last.dog} wraca do schroniska.` : "Brygada wróciła."} Nakarm pieska u Hopli. U Fachury złóż hulajnogę.
        </p>
        <div className="mt-5 flex items-end justify-center gap-4">
          {place ? <Portrait who={place.guide} size={100} /> : null}
          <DogImg who={dogId} size={140} className="sprite-bob" />
        </div>
        <p className="mt-2 font-display text-sm text-gold">{DOGS[dogId].name}</p>
        {last ? (
          <p className="mt-4 font-display text-sm tabular-nums text-gold-2">
            +{last.gold} monet · +{last.coal} węgla · +{last.cry} odłamek
          </p>
        ) : null}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button onClick={() => openBuilding("schronisko", dogId)}>Do schroniska</Button>
          <Button variant="ghost" onClick={() => go("village")}>
            Dziedziniec
          </Button>
        </div>
      </div>
    </section>
  );
}
