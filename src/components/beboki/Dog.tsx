import { cn } from "@/lib/cn";
import { DOGS, type DogId } from "@/lib/beboki-store";

export function DogImg({
  who,
  size = 88,
  className,
}: {
  who: DogId;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={DOGS[who].art}
      alt=""
      draggable={false}
      className={cn("pointer-events-none select-none object-contain object-bottom drop-shadow-[0_8px_10px_rgb(0_0_0/0.45)]", className)}
      style={{ width: size, height: size }}
    />
  );
}

export function moodLine(hunger: number, joy: number, energy: number) {
  if (hunger < 28) return "Głodny. Chce karmę.";
  if (energy < 22) return "Śpi na worku.";
  if (joy < 30) return "Smutny. Głask albo piłka.";
  if (joy > 78 && hunger > 55) return "Mruczy. Szczęśliwy.";
  return "Czeka na Hoplę.";
}
