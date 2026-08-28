import { ChevronLeft } from "lucide-react";
import type { CSSProperties } from "react";
import { BEBOKS, DOGS, PLACES, useGame } from "@/lib/beboki-store";
import { Portrait } from "./Portrait";
import { DogImg } from "./Dog";

function exitStyle(edge: "left" | "right" | "top" | "bottom" | undefined, i: number): CSSProperties {
  const n = i % 2;
  if (edge === "left") return { left: "3%", top: n ? "58%" : "42%" };
  if (edge === "top") return { left: "50%", top: "18%", transform: "translateX(-50%)" };
  if (edge === "bottom") return { left: "50%", bottom: "22%", transform: "translateX(-50%)" };
  return { right: "3%", top: n ? "58%" : "42%" };
}

export function Place() {
  const id = useGame((s) => s.mission);
  const roomId = useGame((s) => s.room);
  const go = useGame((s) => s.go);
  const goRoom = useGame((s) => s.goRoom);
  const searchSpot = useGame((s) => s.searchSpot);
  const setToast = useGame((s) => s.setToast);
  const found = useGame((s) => s.found);
  const pop = useGame((s) => s.pop);

  if (!id) return null;
  const place = PLACES[id];
  const room = place.rooms[roomId] ?? place.rooms[place.start];
  const guide = BEBOKS[place.guide];

  return (
    <section className="relative h-full min-h-0 overflow-hidden">
      <img
        key={roomId}
        src={room.art}
        alt=""
        className="screen-hop absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-coal/20" />

      <div className="relative z-10 flex items-start justify-between gap-2 px-3 pt-3">
        <button
          type="button"
          onClick={() => go("map")}
          className="inline-flex min-h-11 items-center gap-1 rounded-md border border-line bg-coal/85 px-3 text-sm text-muted"
        >
          <ChevronLeft className="size-4" /> Mapa
        </button>
        <p className="rounded-md border border-gold bg-coal/85 px-3 py-2 text-right font-display text-xs text-gold">
          {place.title}
          <span className="mt-0.5 block text-2xs text-muted">{room.title}</span>
        </p>
      </div>

      {room.spots.map((sp) => {
        const used = found[`${id}:${roomId}:${sp.id}`];
        return (
          <button
            key={sp.id}
            type="button"
            onClick={() => {
              const err = searchSpot(sp.id);
              if (err) setToast(err);
            }}
            style={{ left: sp.left, top: sp.top }}
            className="absolute z-10 flex min-h-11 flex-col items-center"
          >
            {sp.dog && !used ? <DogImg who={sp.dog} size={72} className="sprite-bob" /> : null}
            <span className="rounded-md border border-gold bg-coal/88 px-2.5 py-1.5 font-display text-2xs text-fg shadow-panel sm:text-xs">
              {sp.dog ? DOGS[sp.dog].name : sp.label}
              {used ? <span className="ml-1 text-faint">· ok</span> : null}
            </span>
          </button>
        );
      })}

      {room.exits.map((ex, i) => (
        <button
          key={ex.id}
          type="button"
          onClick={() => goRoom(ex.id)}
          className="absolute z-10 min-h-11 rounded-md border border-gold bg-panel/92 px-3 py-1.5 font-display text-2xs text-gold shadow-panel sm:text-xs"
          style={exitStyle(ex.edge, i)}
        >
          → {ex.label}
        </button>
      ))}

      {pop.text ? (
        <p
          key={pop.key}
          className="pointer-events-none absolute left-1/2 top-20 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up"
        >
          {pop.text}
        </p>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end gap-3 border-t border-line bg-coal/92 px-3 py-3">
        <Portrait who={place.guide} size={72} />
        <p className="min-w-0 flex-1 text-sm leading-relaxed text-muted">
          <span className="font-display text-gold">{guide.name}. </span>
          {room.text}
        </p>
      </div>
    </section>
  );
}
