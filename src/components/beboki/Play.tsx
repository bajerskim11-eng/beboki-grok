import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  assignJob,
  createWorld,
  H,
  pickUnit,
  stepWorld,
  T,
  W,
  type Job,
  type MissionKey,
  type World,
} from "@/lib/mission";
import { useGame } from "@/lib/beboki-store";

const JOBS: { id: Job; label: string; hint: string }[] = [
  { id: "chod", label: "Wskazanie", hint: "zaznacz" },
  { id: "latarnik", label: "Latarnik", hint: "światło" },
  { id: "budowniczy", label: "Budowniczy", hint: "kładka" },
  { id: "kopacz", label: "Kopacz", hint: "ściana" },
  { id: "magnesiarz", label: "Magnesiarz", hint: "krata" },
];

type Sheet = Record<string, HTMLImageElement>;

function loadImg(src: string) {
  const im = new Image();
  im.crossOrigin = "anonymous";
  im.src = src;
  return im;
}

function loadSheets(): Sheet {
  const s: Sheet = {};
  s.bg1 = loadImg("/misja-piwnice.jpg");
  s.bg2 = loadImg("/misja-kopalnia.jpg");
  s.dog = loadImg("/sprites/dog/sheet/idle-1.png");
  for (const who of ["hanys", "hopla", "fachura", "podciep"] as const) {
    for (let i = 1; i <= 4; i++) {
      s[`${who}-idle-${i}`] = loadImg(`/sprites/${who}/idle/idle-${i}.png`);
      s[`${who}-walk-${i}`] = loadImg(`/sprites/${who}/walk/walk-${i}.png`);
    }
  }
  for (let i = 1; i <= 4; i++) s[`dog-${i}`] = loadImg(`/sprites/dog/sheet/idle-${i}.png`);
  return s;
}

function cover(ctx: CanvasRenderingContext2D, im: HTMLImageElement) {
  if (!im.complete || !im.naturalWidth) return;
  const ir = im.width / im.height;
  const cr = W / H;
  let dw: number, dh: number, dx: number, dy: number;
  if (ir > cr) {
    dh = H;
    dw = H * ir;
    dx = (W - dw) / 2;
    dy = 0;
  } else {
    dw = W;
    dh = W / ir;
    dx = 0;
    dy = (H - dh) / 2;
  }
  ctx.drawImage(im, dx, dy, dw, dh);
}

function draw(ctx: CanvasRenderingContext2D, w: World, art: Sheet) {
  ctx.fillStyle = "#0c0907";
  ctx.fillRect(0, 0, W, H);
  cover(ctx, w.id === "m2" ? art.bg2 : art.bg1);
  ctx.fillStyle = "rgba(12,9,7,0.38)";
  ctx.fillRect(0, 0, W, H);

  for (let r = 0; r < w.map.length; r++) {
    for (let c = 0; c < w.map[r].length; c++) {
      const x = c * T;
      const y = r * T;
      const v = w.map[r][c];
      if (v === 1) {
        ctx.fillStyle = (c + r) % 2 ? "#4a3828" : "#403024";
        ctx.fillRect(x, y, T, T);
      } else if (v === 2) {
        ctx.fillStyle = w.id === "m2" ? "#2a2a2a" : "#16384a";
        ctx.fillRect(x, y, T, T);
        ctx.fillStyle = w.id === "m2" ? "rgba(200,180,80,0.25)" : "rgba(140,210,230,0.3)";
        ctx.fillRect(x, y + 4 + Math.sin(w.t * 3 + c) * 2, T, 3);
      } else if (v === 3) {
        ctx.fillStyle = "#6a4a34";
        ctx.fillRect(x, y, T, T);
        ctx.strokeStyle = "#2a1810";
        ctx.strokeRect(x + 3, y + 3, T - 6, T - 6);
      } else if (v === 4) {
        ctx.fillStyle = `rgba(232,195,106,${0.35 + Math.sin(w.t * 4) * 0.12})`;
        ctx.fillRect(x, y, T, T);
      } else if (v === 5) {
        ctx.fillStyle = "#6a6e74";
        ctx.fillRect(x, y, T, T);
        ctx.strokeStyle = "#111";
        ctx.strokeRect(x + 2, y + 2, T - 4, T - 4);
      } else if (v === 6) {
        ctx.fillStyle = "#8a2a28";
        ctx.fillRect(x, y, T, T);
        ctx.fillStyle = "#ead9b2";
        ctx.fillRect(x + 4, y + 6, 6, 8);
      }
    }
  }

  for (const d of w.dogs) {
    if (d.saved) continue;
    if (d.need === "light" && !d.seen) {
      ctx.fillStyle = "rgba(0,0,0,0.72)";
      ctx.fillRect(d.x - 40, d.y - 70, 90, 80);
      ctx.fillStyle = "#e8c36a";
      ctx.font = "600 16px Cinzel, Georgia, serif";
      ctx.fillText("?", d.x - 4, d.y - 30);
      continue;
    }
    if (d.need === "wall") {
      let wall = false;
      for (let r = 0; r < w.map.length; r++) if (w.map[r][28] === 3) wall = true;
      if (wall && !d.seen) continue;
    }
    const fi = (Math.floor(w.t * 6) % 4) + 1;
    const im = art[`dog-${fi}`];
    const bob = Math.sin(w.t * 6 + d.x) * 0.8;
    if (im && im.complete && im.naturalWidth) {
      ctx.drawImage(im, d.x - 18, d.y - 36 + bob, 36, 40);
    } else {
      ctx.fillStyle = d.shade;
      ctx.beginPath();
      ctx.ellipse(d.x, d.y - 6 + bob, 13, 8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#e8c36a";
    ctx.font = "11px Source Serif 4, Georgia, serif";
    ctx.fillText(d.name, d.x - 14, d.y - 38);
  }

  if (w.shard.visible && !w.shard.taken) {
    ctx.fillStyle = "#f4d27a";
    ctx.beginPath();
    ctx.moveTo(w.shard.x, w.shard.y - 8);
    ctx.lineTo(w.shard.x + 7, w.shard.y);
    ctx.lineTo(w.shard.x, w.shard.y + 10);
    ctx.lineTo(w.shard.x - 7, w.shard.y);
    ctx.closePath();
    ctx.fill();
  }

  for (const u of w.units) {
    if (u.gone || u.home) continue;
    if (u.job === "latarnik") {
      const g = ctx.createRadialGradient(u.x, u.y - 14, 6, u.x, u.y - 14, u.light);
      g.addColorStop(0, "rgba(255,210,120,0.32)");
      g.addColorStop(1, "rgba(255,210,120,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(u.x, u.y - 14, u.light, 0, Math.PI * 2);
      ctx.fill();
    }
    const pose = u.job === "latarnik" ? "idle" : "walk";
    const fi = (Math.floor(u.frame) % 4) + 1;
    const im = art[`${u.who}-${pose}-${fi}`];
    const bob = Math.sin(w.t * 10 + u.x) * 1.2;
    ctx.save();
    ctx.translate(u.x, u.y + bob);
    if (u.face < 0) ctx.scale(-1, 1);
    if (im && im.complete && im.naturalWidth) ctx.drawImage(im, -24, -62, 48, 64);
    else {
      ctx.fillStyle = "#c9a24a";
      ctx.fillRect(-8, -24, 16, 22);
    }
    ctx.restore();
    if (u.job !== "chod") {
      ctx.fillStyle = "rgba(8,6,4,0.65)";
      ctx.fillRect(u.x - 28, u.y - 68, 56, 13);
      ctx.fillStyle = "#e8c36a";
      ctx.font = "10px Source Serif 4, Georgia, serif";
      ctx.fillText(u.job, u.x - 26, u.y - 58);
    }
  }

  ctx.fillStyle = "rgba(243,230,200,0.9)";
  ctx.font = "12px Source Serif 4, Georgia, serif";
  for (const [s, x, y] of w.labels) ctx.fillText(s, x, y);
}

export function Play() {
  const mission = useGame((s) => s.mission);
  const go = useGame((s) => s.go);
  const completeMission = useGame((s) => s.completeMission);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<World | null>(null);
  const artRef = useRef<Sheet | null>(null);
  const [hud, setHud] = useState({ dogs: "0/2", home: 0, wet: 0, say: "", selected: "chod" as Job, quota: { latarnik: 0, budowniczy: 0, kopacz: 0, magnesiarz: 0 } });
  const [tick, setTick] = useState(0);

  const key = (mission === "m2" ? "m2" : "m1") as MissionKey;

  useEffect(() => {
    artRef.current = loadSheets();
    worldRef.current = createWorld(key);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let last = performance.now();
    let raf = 0;
    let finished = false;
    let winTimer = 0;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const w = worldRef.current;
      const art = artRef.current;
      if (w && art) {
        if (!w.won) stepWorld(w, dt);
        draw(ctx, w, art);
        if (Math.floor(now / 180) !== Math.floor((now - dt * 1000) / 180)) {
          setHud({
            dogs: `${w.dogsSaved}/${w.needDogs}`,
            home: w.home,
            wet: w.wet,
            say: w.say,
            selected: w.selected,
            quota: { ...w.quota },
          });
        }
        if (w.won && !finished) {
          finished = true;
          const names = w.dogs.filter((d) => d.saved).map((d) => d.name);
          winTimer = window.setTimeout(() => completeMission(mission === "m2" ? "m2" : "m1", names as import("@/lib/beboki-store").DogId[]), 700);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      if (winTimer) window.clearTimeout(winTimer);
    };
  }, [key, completeMission, mission]);

  function onCanvas(ev: PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    const w = worldRef.current;
    if (!canvas || !w || w.won) return;
    const box = canvas.getBoundingClientRect();
    const x = (ev.clientX - box.left) * (W / box.width);
    const y = (ev.clientY - box.top) * (H / box.height);
    const unit = pickUnit(w, x, y);
    if (!unit) {
      w.say = "Kliknij beboka. Zawód wybierz na dole.";
      w.sayT = 3;
      return;
    }
    w.say = assignJob(w, unit, w.selected);
    w.sayT = 4;
    setTick((n) => n + 1);
    setHud((h) => ({ ...h, say: w.say, quota: { ...w.quota }, selected: w.selected }));
  }

  function selectJob(id: Job) {
    const w = worldRef.current;
    if (!w) return;
    w.selected = id;
    setHud((h) => ({ ...h, selected: id }));
  }

  function restart() {
    worldRef.current = createWorld(key);
    setTick((n) => n + 1);
  }

  void tick;

  return (
    <section className="flex min-h-0 flex-1 flex-col bg-bg">
      <header className="flex items-center justify-between gap-2 border-b border-line bg-coal px-3 py-2">
        <p className="font-display text-xs tracking-wide text-gold">
          {key === "m2" ? "Stara kopalnia" : "Piwnice kamienicy"}
        </p>
        <p className="text-2xs tabular-nums text-muted">
          Pieski {hud.dogs} · Wyjście {hud.home} · Mokre {hud.wet}
        </p>
        <Button variant="ghost" className="min-h-9 px-3 text-2xs" onClick={() => go("village")}>
          Osada
        </Button>
      </header>
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-coal">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onPointerDown={onCanvas}
          className="h-full w-full touch-none object-contain"
        />
        {hud.say ? (
          <p className="pointer-events-none absolute left-1/2 top-3 w-[90%] -translate-x-1/2 rounded-md border border-line bg-coal/90 px-3 py-2 text-center text-sm text-fg">
            {hud.say}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-line bg-surface p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {JOBS.map((j) => {
          const left = j.id === "chod" ? 1 : hud.quota[j.id as Exclude<Job, "chod">];
          if (j.id !== "chod" && left === 0 && key === "m1" && j.id === "magnesiarz") return null;
          if (j.id !== "chod" && left === 0 && key === "m2" && j.id === "kopacz") return null;
          const on = hud.selected === j.id;
          return (
            <button
              key={j.id}
              type="button"
              disabled={j.id !== "chod" && left <= 0}
              onClick={() => selectJob(j.id)}
              className={`min-h-11 min-w-20 rounded-md border px-2 py-1 text-left text-2xs ${
                on ? "border-gold bg-chip text-gold" : "border-line bg-elevated text-fg"
              }`}
            >
              <span className="block font-display text-xs">
                {j.label}
                {j.id !== "chod" ? ` ${left}` : ""}
              </span>
              <span className="text-faint">{j.hint}</span>
            </button>
          );
        })}
        <Button variant="ghost" className="ml-auto min-h-11 text-2xs" onClick={restart}>
          Od nowa
        </Button>
      </div>
    </section>
  );
}
