import { cn } from "@/lib/cn";
import type { BebokId } from "@/lib/beboki-store";

const CUT: Record<BebokId, string> = {
  hanys: "/cutouts/hanys.png",
  hopla: "/cutouts/hopla.png",
  fachura: "/cutouts/fachura.png",
  podciep: "/cutouts/podciep.png?v=clean",
};

export function Portrait({
  who,
  size = 120,
  pose = "idle",
  className,
}: {
  who: BebokId;
  size?: number;
  motion?: boolean;
  pose?: "idle" | "work" | "hop" | "wave";
  className?: string;
}) {
  const anim = pose === "work" ? "is-work" : pose === "hop" ? "is-hop" : pose === "wave" ? "is-wave" : "is-idle";
  return (
    <span
      className={cn("portrait-cutout", anim, className)}
      style={{ width: size, height: Math.round(size * 1.38) }}
    >
      <img src={CUT[who]} alt="" draggable={false} />
    </span>
  );
}

export function Face({ who, size = 36 }: { who: BebokId; size?: number }) {
  return (
    <img
      src={CUT[who]}
      alt=""
      draggable={false}
      className="shrink-0 bg-transparent object-contain"
      style={{ width: size, height: size }}
    />
  );
}
