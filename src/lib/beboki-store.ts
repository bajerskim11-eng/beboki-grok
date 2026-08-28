import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type BebokId = "hanys" | "hopla" | "fachura" | "podciep";
export type BuildingId = "kopalnia" | "warsztat" | "latarnia" | "schronisko" | "siedziba";
export type Screen =
  | "title"
  | "village"
  | "buildings"
  | "building"
  | "team"
  | "map"
  | "missions"
  | "brief"
  | "place"
  | "play"
  | "win";
export type MissionId = "m1" | "m2" | "m3" | "panorama";
export type DogId = "punia" | "baczek" | "burek" | "reks" | "figa";
export type FoodId = "karma" | "kosc" | "woda" | "kielbasa";
export type GearId = "miski" | "lozko" | "pilka" | "obroza";
export type ToolId = "kladka" | "magnes" | "hulajnoga" | "tramwaj" | "winda";

export const DOG_ORDER: DogId[] = ["punia", "baczek", "burek", "reks", "figa"];

export const DOGS: Record<
  DogId,
  { name: string; blurb: string; from: MissionId | null; art: string }
> = {
  punia: {
    name: "Punia",
    blurb: "Pierwsza w schronisku. Żółty sweterek, chrapi przy Hopli.",
    from: null,
    art: "/dogs/punia.png?v=wave",
  },
  baczek: {
    name: "Bączek",
    blurb: "Z ogródka Panoramy. Piaskowy terier, czerwony szalik.",
    from: "panorama",
    art: "/dogs/baczek.png",
  },
  burek: {
    name: "Burek",
    blurb: "Z piwnic Śródmieścia. Kudłaty, język na wierzchu.",
    from: "m1",
    art: "/dogs/burek.png",
  },
  reks: {
    name: "Reks",
    blurb: "Z nikiszowieckiego chodnika. Czarny pysk, chustka górnika.",
    from: "m2",
    art: "/dogs/reks.png",
  },
  figa: {
    name: "Figa",
    blurb: "Sprzątnęła się pod Spodkiem. Łatki jak figa.",
    from: "m3",
    art: "/dogs/figa.png",
  },
};

export const FOOD: Record<
  FoodId,
  { name: string; cost: number; hunger: number; joy: number; energy: number }
> = {
  karma: { name: "Karma", cost: 8, hunger: 30, joy: 4, energy: 0 },
  kosc: { name: "Kość", cost: 14, hunger: 16, joy: 18, energy: 0 },
  woda: { name: "Woda", cost: 5, hunger: 8, joy: 2, energy: 12 },
  kielbasa: { name: "Śląska kiełbasa", cost: 22, hunger: 24, joy: 26, energy: 4 },
};

export const GEAR: Record<GearId, { name: string; blurb: string; gold: number; cry: number }> = {
  miski: { name: "Miski", blurb: "Głód spada wolniej.", gold: 28, cry: 0 },
  lozko: { name: "Legowiska", blurb: "Pieski odzyskują siły.", gold: 36, cry: 0 },
  pilka: { name: "Piłka", blurb: "Można się bawić.", gold: 18, cry: 0 },
  obroza: { name: "Złota obroża", blurb: "Radość trzyma się dłużej. Za odłamek Serca.", gold: 0, cry: 1 },
};

export const TOOLS: Record<
  ToolId,
  { name: string; blurb: string; gold: number; coal: number; cry: number }
> = {
  kladka: { name: "Kładka", blurb: "+20% monet z miejsc w Katowicach.", gold: 30, coal: 8, cry: 0 },
  magnes: { name: "Magnes", blurb: "Tropy sypią dodatkowe monety.", gold: 22, coal: 0, cry: 0 },
  hulajnoga: { name: "Hulajnoga", blurb: "Zaczynasz wyprawę od drugiego ekranu.", gold: 45, coal: 0, cry: 0 },
  tramwaj: { name: "Tramwaj", blurb: "Szybka podróż: start przy piesku. Kosztuje odłamek.", gold: 80, coal: 0, cry: 1 },
  winda: { name: "Winda", blurb: "Kopalnia Hanysa daje więcej węgla.", gold: 50, coal: 12, cry: 0 },
};

export function travelLabel(tools: Record<ToolId, boolean>) {
  if (tools.tramwaj) return "tramwaj";
  if (tools.hulajnoga) return "hulajnoga";
  return "pieszo";
}


export const BEBOKS: Record<
  BebokId,
  { name: string; role: string; blurb: string; hue: string }
> = {
  hanys: {
    name: "Hanys",
    role: "Budowniczy",
    blurb: "Kopie i stawia kładki. Im głębiej, tym ciemniejsze skarby.",
    hue: "#6bb35a",
  },
  hopla: {
    name: "Hopla",
    role: "Zwiadowczyni",
    blurb: "Prowadzi pieski i znajduje skróty po dachach i rynnach.",
    hue: "#e07ab0",
  },
  fachura: {
    name: "Fachura",
    role: "Wynalazca",
    blurb: "Składa windy, kładki i mechanizmy Serca.",
    hue: "#4aa3d8",
  },
  podciep: {
    name: "Podciep",
    role: "Latarnik",
    blurb: "Świeci w mroku. Bez niego sekrety zostają w piwnicy.",
    hue: "#9b7ad1",
  },
};

export const SKARBNIK = {
  name: "Skarbnik",
  role: "Strażnik wiedzy i skarbów",
  blurb:
    "Tajemniczy strażnik podziemi Katowic. Zna sekrety miasta, magię ziół i historie ukryte w kamieniu. Pojawia się, gdy beboki są gotowe na kolejną lekcję.",
  line: "Beboki. Serce Śląska czeka w mroku. Najpierw uratujcie pieski.",
};

export const BUILDINGS: Record<
  BuildingId,
  {
    title: string;
    owner: BebokId | null;
    blurb: string;
    work: string;
    cost: number;
    art: string;
    interior: string;
    scene?: string;
  }
> = {
  kopalnia: {
    title: "Kopalnia Hanysa",
    owner: "hanys",
    blurb: "Szyb, wózki i węgiel-pamięć. Im głębiej, tym ciemniejsze skarby.",
    work: "Kop głębiej",
    cost: 25,
    art: "/buildings/kopalnia.png",
    interior: "/buildings/kopalnia-in.jpg",
    scene: "/scenes/kopalnia.mp4",
  },
  warsztat: {
    title: "Warsztat Fachury",
    owner: "fachura",
    blurb: "Hulajnoga, tramwaj, magnes. Fachura skraca drogę po Katowicach.",
    work: "Złóż kładkę",
    cost: 30,
    art: "/buildings/warsztat.png",
    interior: "/buildings/warsztat-in.jpg",
    scene: "/scenes/warsztat.mp4",
  },
  latarnia: {
    title: "Latarnia Podciepa",
    owner: "podciep",
    blurb: "Lampa i promień. Światło otwiera sekrety piwnic.",
    work: "Dopal lampę",
    cost: 20,
    art: "/buildings/latarnia.png",
    interior: "/buildings/latarnia-in.jpg",
    scene: "/scenes/latarnia.mp4",
  },
  schronisko: {
    title: "Schronisko dla psów",
    owner: "hopla",
    blurb: "Jedzenie, miski, spacery. Pieski rosną jak u Pou — za monety z miasta.",
    work: "Miska i koc",
    cost: 15,
    art: "/buildings/schronisko.png",
    interior: "/buildings/schronisko-in.jpg",
    scene: "/scenes/schronisko.mp4",
  },
  siedziba: {
    title: "Siedziba osady",
    owner: null,
    blurb: "Komnata czeka. Skarbnik przychodzi sam — nie wołaj go.",
    work: "Czytaj księgę",
    cost: 0,
    art: "/buildings/siedziba.png",
    interior: "/buildings/siedziba-in.jpg",
  },
};

export type StationId = string;

export const STATIONS: Record<
  BuildingId,
  {
    id: string;
    label: string;
    blurb: string;
    left: string;
    top: string;
    pose: "idle" | "dig" | "craft" | "shine" | "pet";
    gold?: number;
    coal?: number;
  }[]
> = {
  kopalnia: [
    { id: "szyb", label: "Szyb", blurb: "Hanys kopie węgiel-pamięć.", left: "38%", top: "48%", pose: "dig", gold: 25 },
    { id: "wozki", label: "Wózki", blurb: "Wywieź urobek na dziedziniec.", left: "68%", top: "62%", pose: "dig", gold: 12 },
  ],
  warsztat: [
    { id: "stol", label: "Stół", blurb: "Złóż kładkę z węgla i monet.", left: "42%", top: "52%", pose: "craft", gold: 30, coal: 8 },
    { id: "magnes", label: "Magnesiarz", blurb: "Przygotuj magnes na misję.", left: "70%", top: "40%", pose: "craft", gold: 20 },
  ],
  latarnia: [
    { id: "lampa", label: "Lampa", blurb: "Dopal knot. Odłamek Serca pulsuje.", left: "48%", top: "36%", pose: "shine", gold: 20 },
    { id: "promien", label: "Promień", blurb: "Światło na następną misję.", left: "22%", top: "58%", pose: "shine", gold: 15 },
  ],
  schronisko: [
    { id: "miska", label: "Miski", blurb: "Napełnij miski. Pieski będą ciche.", left: "28%", top: "62%", pose: "pet", gold: 15 },
    { id: "spacer", label: "Spacer", blurb: "Wyprowadź uratowane pieski.", left: "62%", top: "48%", pose: "pet", gold: 0 },
  ],
  siedziba: [
    { id: "ksiega", label: "Księga", blurb: "Zapiski o Sercu Śląska.", left: "22%", top: "50%", pose: "idle", gold: 0 },
    { id: "misje", label: "Drzwi na misje", blurb: "Wyrusz w Katowice.", left: "70%", top: "46%", pose: "idle", gold: 0 },
  ],
};

export const LORE = [
  "Serce Śląska bije pod Spodkiem. Nikt nie wie, z czego jest zrobione.",
  "Beboki ulepił ktoś z gliny i węgla. Dlatego nie boją się ciemności.",
  "Pieski czują zawał wcześniej niż latarnia.",
  "Skarbnik przychodzi, gdy osada milczy. Nie wołaj go po imieniu.",
];

export type PlaceRoom = {
  title: string;
  art: string;
  text: string;
  exits: { id: string; label: string; edge?: "left" | "right" | "top" | "bottom" }[];
  spots: { id: string; label: string; left: string; top: string; gold?: number; dog?: DogId; clue?: string }[];
};

export const PLACES: Record<
  MissionId,
  {
    title: string;
    area: string;
    blurb: string;
    need: MissionId | null;
    dogs: DogId[];
    reward: { gold: number; coal: number; cry: number };
    start: string;
    guide: BebokId;
    rooms: Record<string, PlaceRoom>;
    map: { left: string; top: string };
  }
> = {
  panorama: {
    title: "Panorama Klub",
    area: "Ligota · ul. Śląska 75",
    blurb: "Pizza, ogródek i śląskie śniadania. Miejsce spotkań. Bączek zwiał sprzed talerza i poszedł w ogródek.",
    need: null,
    dogs: ["baczek"],
    reward: { gold: 55, coal: 10, cry: 1 },
    start: "wejscie",
    guide: "hopla",
    map: { left: "14%", top: "68%" },
    rooms: {
      wejscie: {
        title: "Wejście",
        art: "/places/panorama-wejscie.jpg",
        text: "Ligota, ul. Śląska 75. Ciepłe okna, zapach pieca. Drzwi uchylone — ktoś tu wszedł z pieskiem.",
        exits: [{ id: "sala", label: "Sala", edge: "right" }],
        spots: [
          { id: "dzwonek", label: "Dzwonek", left: "30%", top: "48%", clue: "Nikt nie otwiera. Wejdź do sali." },
          { id: "doniczka", label: "Doniczka", left: "64%", top: "62%", gold: 8 },
        ],
      },
      sala: {
        title: "Sala",
        art: "/places/panorama-sala.jpg",
        text: "Drewno, lampki, pusta miska pod stolikiem. Trop prowadzi do ogródka — albo przez kuchnię.",
        exits: [
          { id: "wejscie", label: "Ulica", edge: "left" },
          { id: "kuchnia", label: "Kuchnia", edge: "right" },
          { id: "ogrod", label: "Ogródek", edge: "bottom" },
        ],
        spots: [{ id: "stolik", label: "Stolik", left: "46%", top: "52%", gold: 12, clue: "Sierść na krześle. Poszedł do ogródka." }],
      },
      ogrod: {
        title: "Ogródek",
        art: "/places/panorama-ogrod.jpg",
        text: "Lampki, bluszcz, pusta smycz na ławce. Ktoś tu siedział.",
        exits: [
          { id: "sala", label: "Sala", edge: "left" },
          { id: "kuchnia", label: "Kuchnia", edge: "right" },
        ],
        spots: [
          { id: "lawka", label: "Ławka", left: "28%", top: "54%", gold: 8, clue: "Smycz. Bączek jest blisko miski." },
          { id: "miska", label: "Miska", left: "62%", top: "64%", dog: "baczek" },
        ],
      },
      kuchnia: {
        title: "Kuchnia",
        art: "/places/panorama-kuchnia.jpg",
        text: "Piec żarzy się. Na kafelkach tropy. Drzwi do ogródka uchylone.",
        exits: [
          { id: "sala", label: "Sala", edge: "left" },
          { id: "ogrod", label: "Ogródek", edge: "right" },
        ],
        spots: [
          { id: "piec", label: "Piec", left: "58%", top: "40%", gold: 10 },
          { id: "tropy", label: "Tropy", left: "28%", top: "64%", clue: "Łapki idą do ogródka." },
        ],
      },
    },
  },
  m1: {
    title: "Piwnice kamienicy",
    area: "Śródmieście",
    blurb: "Burek zszedł do rury. Latarnia Podciepa otwiera mrok.",
    need: null,
    dogs: ["burek"],
    reward: { gold: 50, coal: 20, cry: 1 },
    start: "korytarz",
    guide: "podciep",
    map: { left: "38%", top: "50%" },
    rooms: {
      korytarz: {
        title: "Korytarz",
        art: "/misja-piwnice.jpg",
        text: "Mokre cegły. Słychać pazury za kotłownią.",
        exits: [{ id: "kotlownia", label: "Kotłownia", edge: "right" }],
        spots: [{ id: "rura", label: "Rura", left: "30%", top: "58%", gold: 8, clue: "Ślad do kotłowni." }],
      },
      kotlownia: {
        title: "Kotłownia",
        art: "/places/piwnice-kotlownia.jpg",
        text: "Rury, kocioł, stara szafa. Burek lubi ciemne kąty.",
        exits: [{ id: "korytarz", label: "Korytarz", edge: "left" }],
        spots: [
          { id: "kociol", label: "Kocioł", left: "24%", top: "48%", gold: 6 },
          { id: "szafa", label: "Szafa", left: "64%", top: "50%", dog: "burek" },
        ],
      },
    },
  },
  m2: {
    title: "Stara kopalnia",
    area: "Nikiszowiec",
    blurb: "Reks w ciemnej budce. Hanys zna ten szyb.",
    need: "m1",
    dogs: ["reks"],
    reward: { gold: 65, coal: 25, cry: 1 },
    start: "szyb",
    guide: "hanys",
    map: { left: "56%", top: "32%" },
    rooms: {
      szyb: {
        title: "Szyb",
        art: "/misja-kopalnia.jpg",
        text: "Echo kilofa. Chodnik ciągnie się w prawo.",
        exits: [{ id: "chodnik", label: "Chodnik", edge: "right" }],
        spots: [{ id: "wozek", label: "Wózek", left: "24%", top: "58%", gold: 10, clue: "Ślad do chodnika." }],
      },
      chodnik: {
        title: "Chodnik",
        art: "/places/kopalnia-chodnik.jpg",
        text: "Belki, węgiel, budka na końcu szyn. Reks szczeka cicho.",
        exits: [{ id: "szyb", label: "Szyb", edge: "left" }],
        spots: [{ id: "budka", label: "Budka", left: "62%", top: "52%", dog: "reks" }],
      },
    },
  },
  m3: {
    title: "Pod Spodkiem",
    area: "Koszutka",
    blurb: "Figa zniknęła przy arenie. Odłamek Serca pulsuje.",
    need: "m2",
    dogs: ["figa"],
    reward: { gold: 40, coal: 12, cry: 1 },
    start: "taras",
    guide: "fachura",
    map: { left: "70%", top: "12%" },
    rooms: {
      taras: {
        title: "Taras",
        art: "/env/spodek.jpg",
        text: "Spodek nad głową. Schody w dół. Figa lubi beton.",
        exits: [{ id: "schody", label: "Schody", edge: "bottom" }],
        spots: [{ id: "krawedz", label: "Krawędź", left: "68%", top: "40%", gold: 12, clue: "Smycz na schodach." }],
      },
      schody: {
        title: "Schody",
        art: "/places/spodek-schody.jpg",
        text: "Mokry beton, lampa, pusta smycz. Figa jest pod stopniem.",
        exits: [{ id: "taras", label: "Taras", edge: "top" }],
        spots: [{ id: "stopien", label: "Stopień", left: "48%", top: "58%", dog: "figa" }],
      },
    },
  },
};


export const MISSIONS: Record<
  MissionId,
  {
    title: string;
    blurb: string;
    need: MissionId | null;
    dogs: DogId[];
    reward: { gold: number; coal: number; cry: number };
  }
> = Object.fromEntries(
  (Object.keys(PLACES) as MissionId[]).map((id) => [
    id,
    {
      title: PLACES[id].title,
      blurb: PLACES[id].blurb,
      need: PLACES[id].need,
      dogs: PLACES[id].dogs,
      reward: PLACES[id].reward,
    },
  ]),
) as Record<MissionId, { title: string; blurb: string; need: MissionId | null; dogs: DogId[]; reward: { gold: number; coal: number; cry: number } }>;

export type PetStats = { hunger: number; joy: number; energy: number };

function clamp(n: number, a = 0, b = 100) {
  return Math.max(a, Math.min(b, Math.round(n)));
}

function freshPet(partial?: Partial<PetStats>): PetStats {
  return { hunger: 58, joy: 72, energy: 80, ...partial };
}

export function startRoomFor(id: MissionId, tools: Record<ToolId, boolean>) {
  const place = PLACES[id];
  if (tools.tramwaj) {
    for (const [rid, room] of Object.entries(place.rooms)) {
      if (room.spots.some((s) => s.dog)) return rid;
    }
  }
  if (tools.hulajnoga) {
    const first = place.rooms[place.start]?.exits[0]?.id;
    if (first) return first;
  }
  return place.start;
}

type State = {
  screen: Screen;
  building: BuildingId | null;
  mission: MissionId | null;
  selectedDog: DogId;
  gold: number;
  coal: number;
  cry: number;
  dogs: number;
  planks: number;
  magnet: boolean;
  lampReady: boolean;
  levels: Record<BuildingId, number>;
  done: Record<MissionId, boolean>;
  rescued: DogId[];
  pets: Record<DogId, PetStats>;
  food: Record<FoodId, number>;
  gear: Record<GearId, boolean>;
  tools: Record<ToolId, boolean>;
  lastTick: number;
  toast: string;
  pop: { text: string; key: number };
  busy: { building: BuildingId; station: string; until: number } | null;
  room: string;
  found: Record<string, boolean>;
  lastReward: { gold: number; coal: number; cry: number; dog: string } | null;
  go: (s: Screen) => void;
  openBuilding: (id: BuildingId, dog?: DogId) => void;
  selectDog: (id: DogId) => void;
  openMission: (id: MissionId) => void;
  goRoom: (room: string) => void;
  searchSpot: (spotId: string) => string;
  workBuilding: (id: BuildingId) => string;
  workStation: (id: BuildingId, station: string) => string;
  upgradeBuilding: (id: BuildingId) => string;
  completeMission: (id: MissionId, dogIds: DogId[]) => void;
  tickPets: () => void;
  buyFood: (id: FoodId) => string;
  buyGear: (id: GearId) => string;
  buyTool: (id: ToolId) => string;
  feed: (id: FoodId) => string;
  petDog: () => string;
  walkDog: () => string;
  playDog: () => string;
  setToast: (t: string) => void;
};

const emptyTools: Record<ToolId, boolean> = {
  kladka: false,
  magnes: false,
  hulajnoga: false,
  tramwaj: false,
  winda: false,
};

export const useGame = create<State>()(
  persist(
    (set, get) => ({
      screen: "title",
      building: null,
      mission: null,
      selectedDog: "punia",
      gold: 90,
      coal: 40,
      cry: 0,
      dogs: 1,
      planks: 0,
      magnet: false,
      lampReady: false,
      levels: {
        kopalnia: 1,
        warsztat: 1,
        latarnia: 1,
        schronisko: 1,
        siedziba: 1,
      },
      done: { m1: false, m2: false, m3: false, panorama: false },
      rescued: ["punia"],
      pets: {
        punia: freshPet({ hunger: 46, joy: 68, energy: 74 }),
        baczek: freshPet(),
        burek: freshPet(),
        reks: freshPet(),
        figa: freshPet(),
      },
      food: { karma: 5, kosc: 2, woda: 4, kielbasa: 1 },
      gear: { miski: false, lozko: false, pilka: false, obroza: false },
      tools: { ...emptyTools },
      lastTick: Date.now(),
      toast: "",
      pop: { text: "", key: 0 },
      busy: null,
      room: "wejscie",
      found: {},
      lastReward: null,
      go: (screen) => set({ screen, toast: "" }),
      openBuilding: (id, dog) =>
        set({
          building: id,
          selectedDog: dog ?? get().selectedDog,
          screen: "building",
          toast: "",
        }),
      selectDog: (selectedDog) => set({ selectedDog }),
      openMission: (id) => {
        const m = PLACES[id];
        const s = get();
        if (m.need && !s.done[m.need]) {
          set({ toast: "Najpierw poprzednie miejsce." });
          return;
        }
        set({
          mission: id,
          room: startRoomFor(id, s.tools),
          found: {},
          screen: "brief",
          toast: "",
        });
      },
      goRoom: (room) => set({ room, toast: "" }),
      searchSpot: (spotId) => {
        const s = get();
        const id = s.mission;
        if (!id) return "Nie ma wyprawy.";
        const place = PLACES[id];
        const room = place.rooms[s.room];
        const spot = room?.spots.find((x) => x.id === spotId);
        if (!spot) return "Nic tu nie ma.";
        const key = `${id}:${s.room}:${spotId}`;
        if (s.found[key]) return "Już tu zaglądaliście.";
        const found = { ...s.found, [key]: true };
        if (spot.dog) {
          s.completeMission(id, [spot.dog]);
          return "";
        }
        const extra = s.tools.magnes && spot.gold ? 8 : 0;
        const gain = (spot.gold ?? 0) + extra;
        set({
          found,
          gold: s.gold + gain,
          toast: spot.clue ?? "Cicho. Tylko kurz.",
          pop: { text: gain ? `+${gain}` : "Trop", key: s.pop.key + 1 },
        });
        return "";
      },
      workBuilding: (id) => get().workStation(id, STATIONS[id][0].id),
      workStation: (id, station) => {
        const job = STATIONS[id].find((s) => s.id === station);
        if (!job) return "Nie ma takiego stanowiska.";
        const s = get();
        const lv = s.levels[id];
        const goldCost = job.gold ?? 0;
        const coalCost = job.coal ?? 0;
        if (s.gold < goldCost) return "Za mało monet. Wyrusz na misję.";
        if (s.coal < coalCost) return "Potrzeba węgla z kopalni.";

        if (id === "siedziba") {
          if (station === "misje") {
            set({ screen: "missions", toast: "Drzwi otwarte. Katowice czekają." });
            return "";
          }
          const line = LORE[s.pop.key % LORE.length];
          set({ toast: line, pop: { text: "Księga", key: s.pop.key + 1 } });
          return "";
        }

        let gold = s.gold - goldCost;
        let coal = s.coal - coalCost;
        let cry = s.cry;
        let planks = s.planks;
        let magnet = s.magnet;
        let lampReady = s.lampReady;
        let pop = "";

        if (id === "kopalnia") {
          let n = station === "szyb" ? 14 + lv * 6 : 7 + lv * 3;
          if (s.tools.winda) n = Math.round(n * 1.4);
          coal += n;
          pop = `+${n} węgiel`;
        } else if (id === "warsztat") {
          if (station === "stol") {
            const n = 12 + lv * 6;
            gold += n;
            planks += 1;
            pop = `+${n} monety · kładka`;
          } else {
            magnet = true;
            pop = "Magnes gotowy";
          }
        } else if (id === "latarnia") {
          if (station === "lampa") {
            cry += 1;
            pop = "+1 odłamek";
          } else {
            lampReady = true;
            pop = "Promień zapalony";
          }
        }

        set({
          gold,
          coal,
          cry,
          planks,
          magnet,
          lampReady,
          toast: job.blurb,
          pop: { text: pop, key: s.pop.key + 1 },
          busy: { building: id, station, until: Date.now() + 1400 },
        });
        return "";
      },
      upgradeBuilding: (id) => {
        const s = get();
        const lv = s.levels[id];
        const cost = 40 * lv;
        if (s.gold < cost) return `Potrzeba ${cost} monet.`;
        set({
          gold: s.gold - cost,
          levels: { ...s.levels, [id]: lv + 1 },
          toast: `${BUILDINGS[id].title} — poziom ${lv + 1}.`,
        });
        return "";
      },
      completeMission: (id, dogIds) => {
        const s = get();
        if (s.done[id]) {
          set({ screen: "win", selectedDog: dogIds[0] ?? s.selectedDog });
          return;
        }
        const r = MISSIONS[id].reward;
        const bonus = s.tools.kladka ? Math.round(r.gold * 0.2) : 0;
        const added = dogIds.filter((n) => !s.rescued.includes(n));
        const pets = { ...s.pets };
        for (const d of added) pets[d] = freshPet({ hunger: 40, joy: 55, energy: 50 });
        const names = added.map((d) => DOGS[d].name).join(", ");
        set({
          done: { ...s.done, [id]: true },
          gold: s.gold + r.gold + bonus,
          coal: s.coal + r.coal,
          cry: s.cry + r.cry,
          dogs: Math.min(5, s.dogs + added.length),
          rescued: [...s.rescued, ...added],
          pets,
          selectedDog: added[0] ?? s.selectedDog,
          lastReward: { gold: r.gold + bonus, coal: r.coal, cry: r.cry, dog: names },
          screen: "win",
        });
      },
      tickPets: () => {
        const s = get();
        const now = Date.now();
        const minutes = Math.min(8, (now - (s.lastTick || now)) / 60000);
        if (minutes < 0.15) return;
        const hungerRate = s.gear.miski ? 1.6 : 3.2;
        const joyRate = s.gear.obroza ? 1.2 : 2.4;
        const energyRate = s.gear.lozko ? -1.4 : 0.8;
        const pets = { ...s.pets };
        for (const id of s.rescued) {
          const p = pets[id];
          pets[id] = {
            hunger: clamp(p.hunger - hungerRate * minutes),
            joy: clamp(p.joy - joyRate * minutes),
            energy: clamp(p.energy - energyRate * minutes),
          };
        }
        set({ pets, lastTick: now });
      },
      buyFood: (id) => {
        const item = FOOD[id];
        const s = get();
        if (s.gold < item.cost) return `Potrzeba ${item.cost} monet.`;
        set({
          gold: s.gold - item.cost,
          food: { ...s.food, [id]: s.food[id] + 1 },
          toast: `Kupiono: ${item.name}.`,
          pop: { text: item.name, key: s.pop.key + 1 },
        });
        return "";
      },
      buyGear: (id) => {
        const item = GEAR[id];
        const s = get();
        if (s.gear[id]) return "Już to macie.";
        if (s.gold < item.gold) return `Potrzeba ${item.gold} monet.`;
        if (s.cry < item.cry) return "Potrzeba odłamka Serca z misji.";
        set({
          gold: s.gold - item.gold,
          cry: s.cry - item.cry,
          gear: { ...s.gear, [id]: true },
          toast: `${item.name}. ${item.blurb}`,
        });
        return "";
      },
      buyTool: (id) => {
        const item = TOOLS[id];
        const s = get();
        if (s.tools[id]) return "Już złożone.";
        if (s.gold < item.gold) return `Potrzeba ${item.gold} monet.`;
        if (s.coal < item.coal) return "Za mało węgla z kopalni.";
        if (s.cry < item.cry) return "Potrzeba odłamka Serca z misji.";
        set({
          gold: s.gold - item.gold,
          coal: s.coal - item.coal,
          cry: s.cry - item.cry,
          tools: { ...s.tools, [id]: true },
          magnet: id === "magnes" ? true : s.magnet,
          planks: id === "kladka" ? s.planks + 1 : s.planks,
          toast: `${item.name} gotowe. ${item.blurb}`,
          pop: { text: item.name, key: s.pop.key + 1 },
        });
        return "";
      },
      feed: (id) => {
        const s = get();
        if (!s.rescued.includes(s.selectedDog)) return "Ten piesek jeszcze nie mieszka w osadzie.";
        if (s.food[id] < 1) return `Brak: ${FOOD[id].name}. Kup w sklepiku.`;
        const item = FOOD[id];
        const p = s.pets[s.selectedDog];
        set({
          food: { ...s.food, [id]: s.food[id] - 1 },
          pets: {
            ...s.pets,
            [s.selectedDog]: {
              hunger: clamp(p.hunger + item.hunger),
              joy: clamp(p.joy + item.joy),
              energy: clamp(p.energy + item.energy),
            },
          },
          toast: `${DOGS[s.selectedDog].name} je: ${item.name}.`,
          pop: { text: item.name, key: s.pop.key + 1 },
        });
        return "";
      },
      petDog: () => {
        const s = get();
        if (!s.rescued.includes(s.selectedDog)) return "Najpierw piesek z mapy.";
        const p = s.pets[s.selectedDog];
        set({
          pets: {
            ...s.pets,
            [s.selectedDog]: {
              hunger: p.hunger,
              joy: clamp(p.joy + 14),
              energy: clamp(p.energy - 4),
            },
          },
          toast: `${DOGS[s.selectedDog].name} przymyka oczy.`,
          pop: { text: "Głask", key: s.pop.key + 1 },
        });
        return "";
      },
      walkDog: () => {
        const s = get();
        if (!s.rescued.includes(s.selectedDog)) return "Najpierw piesek z mapy.";
        const p = s.pets[s.selectedDog];
        if (p.energy < 18) return "Za śpiący na spacer. Daj wodę albo legowisko.";
        const tip = 5 + (p.joy > 60 ? 6 : 0);
        set({
          gold: s.gold + tip,
          pets: {
            ...s.pets,
            [s.selectedDog]: {
              hunger: clamp(p.hunger - 8),
              joy: clamp(p.joy + 16),
              energy: clamp(p.energy - 18),
            },
          },
          toast: `Spacer po dziedzińcu. Sąsiedzi rzucili ${tip} monet.`,
          pop: { text: `+${tip}`, key: s.pop.key + 1 },
        });
        return "";
      },
      playDog: () => {
        const s = get();
        if (!s.gear.pilka) return "Kup piłkę w sklepiku Hopli.";
        if (!s.rescued.includes(s.selectedDog)) return "Najpierw piesek z mapy.";
        const p = s.pets[s.selectedDog];
        if (p.energy < 10) return "Nie ma siły na piłkę.";
        set({
          pets: {
            ...s.pets,
            [s.selectedDog]: {
              hunger: clamp(p.hunger - 4),
              joy: clamp(p.joy + 22),
              energy: clamp(p.energy - 12),
            },
          },
          toast: `${DOGS[s.selectedDog].name} goni piłkę po workach.`,
          pop: { text: "Piłka", key: s.pop.key + 1 },
        });
        return "";
      },
      setToast: (toast) => set({ toast }),
    }),
    {
      name: "beboki-osada-v7",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (s) => ({
        gold: s.gold,
        coal: s.coal,
        cry: s.cry,
        dogs: s.dogs,
        planks: s.planks,
        magnet: s.magnet,
        lampReady: s.lampReady,
        levels: s.levels,
        done: s.done,
        rescued: s.rescued,
        pets: s.pets,
        food: s.food,
        gear: s.gear,
        tools: s.tools,
        lastTick: s.lastTick,
        selectedDog: s.selectedDog,
      }),
    },
  ),
);
