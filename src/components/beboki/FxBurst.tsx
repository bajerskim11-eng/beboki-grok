import { useEffect, useState } from "react";

export function FxBurst({ kind, play }: { kind: "sparks" | "glow"; play: boolean }) {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    if (!play) return;
    setFrame(1);
    let i = 1;
    const id = window.setInterval(() => {
      i = (i % 4) + 1;
      setFrame(i);
    }, 95);
    return () => window.clearInterval(id);
  }, [play]);

  if (!play) return null;

  return (
    <img
      src={`/fx/${kind}/fx-${frame}.png`}
      alt=""
      className="pointer-events-none absolute left-1/2 top-[42%] z-10 w-40 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg sm:w-52"
    />
  );
}
