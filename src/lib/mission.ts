export type Job = "chod" | "latarnik" | "budowniczy" | "kopacz" | "magnesiarz";
export type MissionKey = "m1" | "m2";

export const T = 24;
export const COLS = 40;
export const ROWS = 22;
export const W = 960;
export const H = 540;

export type Unit = {
  x: number;
  y: number;
  face: 1 | -1;
  job: Job;
  work: number;
  light: number;
  gone: boolean;
  home: boolean;
  who: "hanys" | "hopla" | "fachura" | "podciep";
  frame: number;
};

export type Dog = {
  name: string;
  x: number;
  y: number;
  shade: string;
  need: "light" | "wall" | "tram";
  saved: boolean;
  seen: boolean;
};

export type World = {
  id: MissionKey;
  title: string;
  hint: string;
  map: number[][];
  units: Unit[];
  dogs: Dog[];
  quota: Record<Exclude<Job, "chod">, number>;
  spawnLeft: number;
  spawnT: number;
  home: number;
  wet: number;
  dogsSaved: number;
  needDogs: number;
  won: boolean;
  shard: { x: number; y: number; taken: boolean; visible: boolean };
  labels: [string, number, number][];
  selected: Job;
  say: string;
  sayT: number;
  t: number;
};

const WHO = ["hanys", "hopla", "fachura", "podciep"] as const;

function blank(): number[][] {
  const map = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  for (let c = 0; c < COLS; c++) for (let r = 16; r < ROWS; r++) map[r][c] = 1;
  return map;
}

export function createWorld(id: MissionKey): World {
  if (id === "m2") return buildM2();
  return buildM1();
}

function buildM1(): World {
  const map = blank();
  map[15][5] = 1;
  map[14][6] = 1;
  map[13][7] = 1;
  for (let c = 7; c <= 11; c++) map[13][c] = 1;
  for (let c = 14; c <= 20; c++) {
    map[16][c] = 2;
    map[17][c] = 2;
    map[18][c] = 2;
  }
  for (let c = 21; c < COLS; c++) map[16][c] = 1;
  for (let r = 12; r <= 15; r++) map[r][28] = 3;
  for (let r = 13; r <= 15; r++) map[r][38] = 4;
  map[15][37] = 4;
  return base("m1", "Piwnice kamienicy", map, {
    latarnik: 2,
    budowniczy: 2,
    kopacz: 2,
    magnesiarz: 0,
    hint: "1) Latarnik na schodkach — Burek. 2) Budowniczy nad wodą. 3) Kopacz przy ścianie Lajki.",
    dogs: [
      { name: "Burek", x: 9 * T + 10, y: 13 * T, shade: "#6a3e28", need: "light", saved: false, seen: false },
      { name: "Lajka", x: 32 * T, y: 16 * T, shade: "#e6d3b8", need: "wall", saved: false, seen: false },
    ],
    labels: [
      ["schody → Burek", 7 * T, 12.2 * T],
      ["woda", 16 * T, 15.7 * T],
      ["ściana Lajki", 29 * T, 11.4 * T],
      ["wyjście", 36.2 * T, 12.6 * T],
    ],
  });
}

function buildM2(): World {
  const map = blank();
  for (let c = 12; c <= 16; c++) {
    map[16][c] = 2;
    map[17][c] = 2;
  }
  for (let c = 17; c <= 26; c++) map[14][c] = 1;
  for (let c = 17; c <= 26; c++) for (let r = 12; r <= 13; r++) map[r][c] = 6;
  map[15][17] = 0;
  for (let r = 12; r <= 15; r++) map[r][31] = 5;
  for (let r = 13; r <= 15; r++) map[r][38] = 4;
  map[15][37] = 4;
  for (let c = 4; c <= 8; c++) map[15][c] = 1;
  map[14][8] = 1;
  return base("m2", "Stara kopalnia", map, {
    latarnik: 2,
    budowniczy: 3,
    kopacz: 0,
    magnesiarz: 2,
    hint: "1) Latarnik przy budce — Reks. 2) Budowniczy robi schody. 3) Magnesiarz przy kracie.",
    dogs: [
      { name: "Reks", x: 6 * T, y: 15 * T, shade: "#3a2a22", need: "light", saved: false, seen: false },
      { name: "Punia", x: 22 * T, y: 14 * T, shade: "#c4a07a", need: "tram", saved: false, seen: false },
    ],
    labels: [
      ["budka Reksa", 4 * T, 13.2 * T],
      ["tor", 13 * T, 15.6 * T],
      ["Punia", 19 * T, 11.3 * T],
      ["krata", 31 * T + 2, 11.4 * T],
      ["wyjście", 36 * T, 12.6 * T],
    ],
  });
}

function base(
  id: MissionKey,
  title: string,
  map: number[][],
  extra: {
    latarnik: number;
    budowniczy: number;
    kopacz: number;
    magnesiarz: number;
    hint: string;
    dogs: Dog[];
    labels: [string, number, number][];
  },
): World {
  return {
    id,
    title,
    hint: extra.hint,
    map,
    units: [],
    dogs: extra.dogs,
    quota: {
      latarnik: extra.latarnik,
      budowniczy: extra.budowniczy,
      kopacz: extra.kopacz,
      magnesiarz: extra.magnesiarz,
    },
    spawnLeft: 12,
    spawnT: 0.35,
    home: 0,
    wet: 0,
    dogsSaved: 0,
    needDogs: extra.dogs.length,
    won: false,
    shard: { x: 36 * T, y: 16 * T - 18, taken: false, visible: false },
    labels: extra.labels,
    selected: "chod",
    say: extra.hint,
    sayT: 7,
    t: 0,
  };
}

function tile(w: World, c: number, r: number) {
  if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return 1;
  return w.map[r][c];
}
function solid(w: World, c: number, r: number) {
  const v = tile(w, c, r);
  return v === 1 || v === 3 || v === 5;
}
function wallAt(w: World, c: number) {
  for (let r = 0; r < ROWS; r++) if (tile(w, c, r) === 3) return true;
  return false;
}

export function assignJob(w: World, unit: Unit, job: Job): string {
  if (job === "chod") return "Wybierz zawód na dole, potem kliknij beboka.";
  if (unit.job !== "chod") return "Ten już pracuje.";
  if (!w.quota[job] || w.quota[job] <= 0) return "Tego zawodu już nie mamy.";
  w.quota[job]--;
  unit.job = job;
  unit.work = job === "budowniczy" ? 8 : job === "kopacz" ? 1.3 : 0;
  if (job === "latarnik") unit.light = 100;
  const tips: Record<Exclude<Job, "chod">, string> = {
    latarnik: "Świeci w miejscu. Pies w cieniu wyjdzie.",
    budowniczy: "Buduje kładkę albo schodek, gdy stoi przy krawędzi.",
    kopacz: "Kopie ścianę przed sobą.",
    magnesiarz: "Staje przy kracie i zdejmuje ją magnesem.",
  };
  return tips[job];
}

export function pickUnit(w: World, x: number, y: number): Unit | null {
  let best: Unit | null = null;
  let bestD = 32;
  for (const u of w.units) {
    if (u.gone || u.home) continue;
    const d = Math.hypot(u.x - x, u.y - 18 - y);
    if (d < bestD) {
      bestD = d;
      best = u;
    }
  }
  return best;
}

function stepUnit(w: World, u: Unit, dt: number) {
  if (u.gone || u.home) return;
  const c = Math.floor(u.x / T);
  const r = Math.floor((u.y - 2) / T);
  if (tile(w, c, r) === 2 && u.job !== "budowniczy") {
    u.gone = true;
    w.wet++;
    w.say = "Bebok wpadł. Wraca mokry pod Spodek — żywy i urażony.";
    w.sayT = 4;
    return;
  }
  if (tile(w, c, r) === 4) {
    u.home = true;
    w.home++;
    return;
  }

  if (u.job === "latarnik") {
    for (const d of w.dogs) {
      if (!d.seen && Math.hypot(d.x - u.x, d.y - u.y) < 92) {
        d.seen = true;
        w.say = `${d.name} widzi lampę. Dobry pies — do złotego światła.`;
        w.sayT = 4;
      }
    }
    return;
  }

  if (u.job === "magnesiarz") {
    const fc = Math.floor(u.x / T) + u.face;
    for (let rr = r - 2; rr <= r + 1; rr++) {
      if (tile(w, fc, rr) === 5 || tile(w, Math.floor(u.x / T), rr) === 5) {
        for (let r2 = 0; r2 < ROWS; r2++) {
          if (w.map[r2][fc] === 5) w.map[r2][fc] = 0;
          if (w.map[r2][31] === 5) w.map[r2][31] = 0;
        }
        u.job = "chod";
        w.say = "Krata poszła w górę.";
        w.sayT = 3;
        return;
      }
    }
  }

  if (u.job === "budowniczy") {
    const fc = Math.floor(u.x / T) + u.face;
    const under = Math.floor((u.y + 3) / T);
    if (tile(w, fc, 16) === 2 && u.work > 0) {
      w.map[16][fc] = 1;
      u.work -= 1;
      u.x += u.face * 10;
      if (u.work <= 0) u.job = "chod";
      return;
    }
    if (
      u.work > 0 &&
      tile(w, fc, under - 1) === 0 &&
      (tile(w, fc, under) === 0 || tile(w, fc, under) === 1) &&
      tile(w, c, under) === 1
    ) {
      if (tile(w, fc, 14) === 1 || tile(w, fc, 14) === 6 || tile(w, fc + 1, 14) === 1) {
        w.map[under - 1][c] = 1;
        u.work -= 1;
        u.y = (under - 1) * T;
        if (u.work <= 0) u.job = "chod";
        return;
      }
    }
    if (u.job === "budowniczy" && u.work <= 0) u.job = "chod";
  }

  if (u.job === "kopacz") {
    const fc = Math.floor(u.x / T) + u.face;
    let hit = false;
    for (let rr = r - 2; rr <= r + 1; rr++) {
      if (tile(w, fc, rr) === 3) {
        hit = true;
        u.work -= dt;
        if (u.work <= 0) {
          for (let r2 = 0; r2 < ROWS; r2++) if (w.map[r2][fc] === 3) w.map[r2][fc] = 0;
          u.job = "chod";
          w.say = "Ściana pękła.";
          w.sayT = 3;
        }
        return;
      }
    }
    if (!hit) u.job = "chod";
  }

  const front = Math.floor((u.x + u.face * 9) / T);
  const chest = Math.floor((u.y - 12) / T);
  const under = Math.floor((u.y + 3) / T);
  if (solid(w, front, chest)) u.face = u.face === 1 ? -1 : 1;
  if (!solid(w, c, under) && tile(w, c, under) !== 2) u.y += 110 * dt;
  else {
    u.y = under * T;
    u.x += u.face * 42 * dt;
  }
  u.frame += dt * 8;
}

function stepDog(w: World, d: Dog, dt: number) {
  if (d.saved) return;
  if (d.need === "wall" && !d.seen && !wallAt(w, 28)) {
    if (w.units.some((u) => !u.gone && !u.home && Math.hypot(u.x - d.x, u.y - d.y) < 56)) {
      d.seen = true;
      w.say = "Lajka z 3. kopcoka! Idzie za stadem.";
      w.sayT = 4;
    }
  }
  if (d.need === "tram" && !d.seen) {
    if (w.units.some((u) => !u.gone && !u.home && Math.abs(u.y - d.y) < 20 && Math.abs(u.x - d.x) < 40)) {
      d.seen = true;
      w.say = "Punia z dachu. Suczka-kundel, łapy w błocie.";
      w.sayT = 4;
    }
  }
  if (!d.seen) return;
  const c = Math.floor(d.x / T);
  const under = Math.floor((d.y + 3) / T);
  if (tile(w, c, under) === 2) {
    d.x -= 28 * dt;
    return;
  }
  if (tile(w, c, Math.floor((d.y - 2) / T)) === 5) {
    d.x -= 20 * dt;
    return;
  }
  if (!solid(w, c, under) && tile(w, c, under) !== 6) d.y += 90 * dt;
  else {
    d.y = under * T;
    d.x += 34 * dt;
  }
  if (tile(w, c, Math.floor((d.y - 2) / T)) === 4) {
    d.saved = true;
    w.dogsSaved++;
    w.say = `${d.name} w złotym świetle. Jeszcze ${w.needDogs - w.dogsSaved}.`;
    w.sayT = 4;
    if (w.dogsSaved >= w.needDogs) w.shard.visible = true;
  }
}

export function stepWorld(w: World, dt: number) {
  w.t += dt;
  if (w.sayT > 0) {
    w.sayT -= dt;
    if (w.sayT <= 0) w.say = "";
  }
  w.spawnT -= dt;
  if (w.spawnLeft > 0 && w.spawnT <= 0) {
    w.units.push({
      x: 2 * T + 6,
      y: 16 * T,
      face: 1,
      job: "chod",
      work: 0,
      light: 0,
      gone: false,
      home: false,
      who: WHO[w.units.length % WHO.length],
      frame: 0,
    });
    w.spawnLeft--;
    w.spawnT = 1.12;
  }
  for (const u of w.units) stepUnit(w, u, dt);
  for (const d of w.dogs) stepDog(w, d, dt);
  if (w.shard.visible && !w.shard.taken) {
    if (w.units.some((u) => !u.gone && !u.home && Math.hypot(u.x - w.shard.x, u.y - w.shard.y) < 26)) {
      w.shard.taken = true;
      w.say = "Odłamek Serca Śląska.";
      w.sayT = 3;
    }
  }
  if (!w.won && w.dogsSaved >= w.needDogs) {
    const idle = w.spawnLeft <= 0 && w.units.every((u) => u.gone || u.home);
    if (idle || w.home + w.wet >= 7 || w.shard.taken || w.shard.visible) {
      w.won = true;
    }
  }
}
