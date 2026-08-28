import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { BebokId } from "@/lib/beboki-store";

export type SpriteWho = BebokId | "dog" | "skarbnik";
export type SpritePose = "idle" | "walk";

function frameSrc(who: SpriteWho, pose: SpritePose, i: number) {
  if (who === "dog") return `/sprites/dog/sheet/idle-${i}.png`;
  if (who === "skarbnik") return `/sprites/skarbnik/idle/idle-${i}.png`;
  const folder = pose === "walk" ? "walk" : "idle";
  const name = pose === "walk" ? "walk" : "idle";
  return `/sprites/${who}/${folder}/${name}-${i}.png`;
}

const ALL: SpriteWho[] = ["hanys", "hopla", "fachura", "podciep", "dog", "skarbnik"];

let preloaded = false;
function preload() {
  if (preloaded || typeof Image === "undefined") return;
  preloaded = true;
  for (const who of ALL) {
    for (const pose of ["idle", "walk"] as const) {
      if ((who === "dog" || who === "skarbnik") && pose === "walk") continue;
      for (let i = 1; i <= 4; i++) {
        const img = new Image();
        img.src = frameSrc(who, pose, i);
      }
    }
  }
}

export function Sprite({
  who,
  pose = "idle",
  size = 96,
  facing = 1,
  className,
  glow = false,
}: {
  who: SpriteWho;
  pose?: SpritePose;
  size?: number;
  facing?: 1 | -1;
  className?: string;
  glow?: boolean;
}) {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    preload();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ms = pose === "walk" ? 140 : 220;
    const id = window.setInterval(() => {
      setFrame((f) => (f % 4) + 1);
    }, ms);
    return () => window.clearInterval(id);
  }, [pose]);

  return (
    <span
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size * (who === "skarbnik" ? 1.6 : 1.22) }}
    >
      {glow ? (
        <span
          className="lamp-glow pointer-events-none absolute inset-x-2 bottom-6 top-4 rounded-full bg-gold/35"
          aria-hidden
        />
      ) : null}
      <img
        src={frameSrc(who, pose, frame)}
        alt=""
        draggable={false}
        className="sprite-model relative h-full w-full object-contain object-bottom"
        style={{ transform: facing < 0 ? "scaleX(-1)" : undefined }}
      />
    </span>
  );
}
