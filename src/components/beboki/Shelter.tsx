import { lazy, Suspense, useEffect, useState } from "react";
import { BedDouble, Bone, CircleDot, Droplets, Drumstick, PawPrint, Ribbon, Soup, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DOG_ORDER,
  DOGS,
  FOOD,
  GEAR,
  useGame,
  type FoodId,
  type GearId,
} from "@/lib/beboki-store";
import { SceneChrome, StageBack } from "./BuildingStage";
import { DogImg, moodLine } from "./Dog";
import type { DogClip } from "./Dog3D";

const Dog3D = lazy(() => import("./Dog3D").then((m) => ({ default: m.Dog3D })));

const FOOD_ICON: Record<FoodId, typeof Wheat> = {
  karma: Wheat,
  kosc: Bone,
  woda: Droplets,
  kielbasa: Drumstick,
};

const GEAR_ICON: Record<GearId, typeof Soup> = {
  miski: Soup,
  lozko: BedDouble,
  pilka: CircleDot,
  obroza: Ribbon,
};

export function Shelter() {
  const go = useGame((s) => s.go);
  const rescued = useGame((s) => s.rescued);
  const pets = useGame((s) => s.pets);
  const food = useGame((s) => s.food);
  const gear = useGame((s) => s.gear);
  const selected = useGame((s) => s.selectedDog);
  const selectDog = useGame((s) => s.selectDog);
  const openBuilding = useGame((s) => s.openBuilding);
  const feed = useGame((s) => s.feed);
  const petDog = useGame((s) => s.petDog);
  const walkDog = useGame((s) => s.walkDog);
  const playDog = useGame((s) => s.playDog);
  const buyFood = useGame((s) => s.buyFood);
  const buyGear = useGame((s) => s.buyGear);
  const setToast = useGame((s) => s.setToast);
  const pop = useGame((s) => s.pop);

  const owned = rescued.includes(selected);
  const p = pets[selected] ?? { hunger: 50, joy: 50, energy: 50 };
  const dog = DOGS[selected];
  const [burst, setBurst] = useState<DogClip | null>(null);
  const [hud, setHud] = useState(false);

  useEffect(() => {
    if (!burst) return;
    const t = window.setTimeout(() => setBurst(null), burst === "walk" ? 4000 : 2200);
    return () => window.clearTimeout(t);
  }, [burst]);

  const act = (fn: () => string, next?: DogClip) => {
    const err = fn();
    if (err) setToast(err);
    else if (next) setBurst(next);
  };

  let clip: DogClip = "idle";
  if (owned) {
    if (burst) clip = burst;
    else if (p.energy < 22) clip = "sleep";
    else if (p.hunger < 28) clip = "idle";
    else clip = "idle";
  }

  return (
    <section className="relative flex h-full min-h-0 flex-col overflow-hidden">
      <StageBack src="/buildings/schronisko-in.jpg" video="/scenes/schronisko.mp4" />

      {pop.text ? (
        <p
          key={pop.key}
          className="pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up"
        >
          {pop.text}
        </p>
      ) : null}

      <SceneChrome
        title="Schronisko Hopli"
        hint="Dotknij, żeby zobaczyć pieski"
        onBack={() => go("village")}
        open={hud}
        onToggle={() => setHud((v) => !v)}
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {DOG_ORDER.map((id) => {
            const have = rescued.includes(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => (have ? selectDog(id) : setToast(`${DOGS[id].name} czeka na mapie Katowic.`))}
                className={`flex min-w-16 shrink-0 flex-col items-center rounded-lg border px-2 py-1.5 ${
                  selected === id ? "border-gold bg-chip" : "border-line bg-coal/70"
                }`}
              >
                {have ? (
                  <DogImg who={id} size={48} />
                ) : (
                  <span className="grid size-12 place-items-center text-faint">
                    <PawPrint className="size-6 opacity-40" />
                  </span>
                )}
                <span className="mt-0.5 font-display text-[0.65rem] text-gold">{DOGS[id].name}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => owned && act(petDog, "happy")}
            className="relative h-24 w-24 shrink-0"
            aria-label={owned ? `Głaskaj ${dog.name}` : dog.name}
          >
            {owned ? (
              <Suspense fallback={<DogImg who={selected} size={88} className="sprite-bob mx-auto" />}>
                <Dog3D who={selected} clip={clip} orbit />
              </Suspense>
            ) : (
              <PawPrint className="mx-auto mt-6 size-10 text-faint" />
            )}
          </button>
          <div className="min-w-0">
            <p className="font-display text-lg text-gold">{dog.name}</p>
            <p className="text-2xs text-muted">{dog.blurb}</p>
            {owned ? (
              <p className="mt-1 text-2xs text-fg">{moodLine(p.hunger, p.joy, p.energy)}</p>
            ) : (
              <p className="mt-1 text-2xs text-faint">Pusty koj. Znajdź na mapie.</p>
            )}
          </div>
        </div>

        {owned ? (
          <div className="mt-2 space-y-1.5">
            <Bar label="Głód" value={p.hunger} />
            <Bar label="Radość" value={p.joy} />
            <Bar label="Siła" value={p.energy} />
          </div>
        ) : null}

        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Button variant="gold" onClick={() => act(petDog, "happy")}>
            Głask
          </Button>
          <Button variant="gold" onClick={() => act(walkDog, "walk")}>
            Spacer
          </Button>
          <Button variant="gold" onClick={() => act(playDog, "happy")}>
            Piłka
          </Button>
          <Button variant="ghost" onClick={() => openBuilding("warsztat")}>
            Warsztat
          </Button>
        </div>

        <div className="mt-3 rounded-xl border border-line bg-panel/80 p-3">
          <p className="font-display text-sm text-gold">Nakarm</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {(Object.keys(FOOD) as FoodId[]).map((fid) => {
              const Icon = FOOD_ICON[fid];
              return (
                <button
                  key={fid}
                  type="button"
                  onClick={() => act(() => feed(fid))}
                  className="flex min-h-11 items-center gap-2 rounded-md border border-line bg-chip px-2 py-2 text-left"
                >
                  <Icon className="size-4 text-gold" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-2xs text-fg">{FOOD[fid].name}</span>
                    <span className="text-[0.65rem] text-faint">w zapasie {food[fid]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-line bg-panel/80 p-3">
          <p className="font-display text-sm text-gold">Sklepik Hopli</p>
          <p className="mt-1 text-2xs text-muted">Za monety z miasta.</p>
          <ul className="mt-2 space-y-2">
            {(Object.keys(FOOD) as FoodId[]).map((fid) => (
              <ShopRow
                key={fid}
                title={`${FOOD[fid].name} · ${FOOD[fid].cost}`}
                sub={`zapas ${food[fid]}`}
                icon={FOOD_ICON[fid]}
                onClick={() => act(() => buyFood(fid))}
              />
            ))}
            {(Object.keys(GEAR) as GearId[]).map((gid) => (
              <ShopRow
                key={gid}
                title={`${GEAR[gid].name} · ${GEAR[gid].gold ? `${GEAR[gid].gold} m` : `${GEAR[gid].cry} odł.`}`}
                sub={gear[gid] ? "jest" : GEAR[gid].blurb}
                icon={GEAR_ICON[gid]}
                done={gear[gid]}
                onClick={() => act(() => buyGear(gid))}
              />
            ))}
          </ul>
        </div>
      </SceneChrome>
    </section>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  const hue = value < 28 ? "bg-danger" : value < 55 ? "bg-gold" : "bg-moss";
  return (
    <div>
      <div className="mb-0.5 flex justify-between font-display text-[0.65rem] text-muted">
        <span>{label}</span>
        <span className="tabular-nums text-gold">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-chip">
        <div className={`h-full ${hue}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ShopRow({
  title,
  sub,
  icon: Icon,
  done,
  onClick,
}: {
  title: string;
  sub: string;
  icon: typeof Wheat;
  done?: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        disabled={done}
        onClick={onClick}
        className="flex w-full min-h-11 items-center gap-2 rounded-md border border-line bg-chip px-2 py-2 text-left disabled:opacity-50"
      >
        <Icon className="size-4 text-gold" />
        <span className="min-w-0 flex-1">
          <span className="block font-display text-2xs text-fg">{title}</span>
          <span className="text-[0.65rem] text-faint">{sub}</span>
        </span>
      </button>
    </li>
  );
}
