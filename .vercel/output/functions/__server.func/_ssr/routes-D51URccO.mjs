import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { l as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { C as ChevronDown, E as BedDouble, S as ChevronLeft, T as Bike, _ as Flag, a as TramFront, b as Coins, c as Pickaxe, d as Magnet, f as Lock, g as Gem, h as Hammer, i as TrendingUp, l as PawPrint, m as Hexagon, n as Users, o as Soup, p as House, s as Ribbon, t as Wheat, u as Map, v as Drumstick, w as Bone, x as CircleDot, y as Droplets } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D51URccO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var DOG_ORDER = [
	"punia",
	"baczek",
	"burek",
	"reks",
	"figa"
];
var DOGS = {
	punia: {
		name: "Punia",
		blurb: "Pierwsza w schronisku. Żółty sweterek, chrapi przy Hopli.",
		from: null,
		art: "/dogs/punia.png?v=wave"
	},
	baczek: {
		name: "Bączek",
		blurb: "Z ogródka Panoramy. Piaskowy terier, czerwony szalik.",
		from: "panorama",
		art: "/dogs/baczek.png"
	},
	burek: {
		name: "Burek",
		blurb: "Z piwnic Śródmieścia. Kudłaty, język na wierzchu.",
		from: "m1",
		art: "/dogs/burek.png"
	},
	reks: {
		name: "Reks",
		blurb: "Z nikiszowieckiego chodnika. Czarny pysk, chustka górnika.",
		from: "m2",
		art: "/dogs/reks.png"
	},
	figa: {
		name: "Figa",
		blurb: "Sprzątnęła się pod Spodkiem. Łatki jak figa.",
		from: "m3",
		art: "/dogs/figa.png"
	}
};
var FOOD = {
	karma: {
		name: "Karma",
		cost: 8,
		hunger: 30,
		joy: 4,
		energy: 0
	},
	kosc: {
		name: "Kość",
		cost: 14,
		hunger: 16,
		joy: 18,
		energy: 0
	},
	woda: {
		name: "Woda",
		cost: 5,
		hunger: 8,
		joy: 2,
		energy: 12
	},
	kielbasa: {
		name: "Śląska kiełbasa",
		cost: 22,
		hunger: 24,
		joy: 26,
		energy: 4
	}
};
var GEAR = {
	miski: {
		name: "Miski",
		blurb: "Głód spada wolniej.",
		gold: 28,
		cry: 0
	},
	lozko: {
		name: "Legowiska",
		blurb: "Pieski odzyskują siły.",
		gold: 36,
		cry: 0
	},
	pilka: {
		name: "Piłka",
		blurb: "Można się bawić.",
		gold: 18,
		cry: 0
	},
	obroza: {
		name: "Złota obroża",
		blurb: "Radość trzyma się dłużej. Za odłamek Serca.",
		gold: 0,
		cry: 1
	}
};
var TOOLS = {
	kladka: {
		name: "Kładka",
		blurb: "+20% monet z miejsc w Katowicach.",
		gold: 30,
		coal: 8,
		cry: 0
	},
	magnes: {
		name: "Magnes",
		blurb: "Tropy sypią dodatkowe monety.",
		gold: 22,
		coal: 0,
		cry: 0
	},
	hulajnoga: {
		name: "Hulajnoga",
		blurb: "Zaczynasz wyprawę od drugiego ekranu.",
		gold: 45,
		coal: 0,
		cry: 0
	},
	tramwaj: {
		name: "Tramwaj",
		blurb: "Szybka podróż: start przy piesku. Kosztuje odłamek.",
		gold: 80,
		coal: 0,
		cry: 1
	},
	winda: {
		name: "Winda",
		blurb: "Kopalnia Hanysa daje więcej węgla.",
		gold: 50,
		coal: 12,
		cry: 0
	}
};
function travelLabel(tools) {
	if (tools.tramwaj) return "tramwaj";
	if (tools.hulajnoga) return "hulajnoga";
	return "pieszo";
}
var BEBOKS = {
	hanys: {
		name: "Hanys",
		role: "Budowniczy",
		blurb: "Kopie i stawia kładki. Im głębiej, tym ciemniejsze skarby.",
		hue: "#6bb35a"
	},
	hopla: {
		name: "Hopla",
		role: "Zwiadowczyni",
		blurb: "Prowadzi pieski i znajduje skróty po dachach i rynnach.",
		hue: "#e07ab0"
	},
	fachura: {
		name: "Fachura",
		role: "Wynalazca",
		blurb: "Składa windy, kładki i mechanizmy Serca.",
		hue: "#4aa3d8"
	},
	podciep: {
		name: "Podciep",
		role: "Latarnik",
		blurb: "Świeci w mroku. Bez niego sekrety zostają w piwnicy.",
		hue: "#9b7ad1"
	}
};
var SKARBNIK = {
	name: "Skarbnik",
	role: "Strażnik wiedzy i skarbów",
	blurb: "Tajemniczy strażnik podziemi Katowic. Zna sekrety miasta, magię ziół i historie ukryte w kamieniu. Pojawia się, gdy beboki są gotowe na kolejną lekcję.",
	line: "Beboki. Serce Śląska czeka w mroku. Najpierw uratujcie pieski."
};
var BUILDINGS = {
	kopalnia: {
		title: "Kopalnia Hanysa",
		owner: "hanys",
		blurb: "Szyb, wózki i węgiel-pamięć. Im głębiej, tym ciemniejsze skarby.",
		work: "Kop głębiej",
		cost: 25,
		art: "/buildings/kopalnia.png",
		interior: "/buildings/kopalnia-in.jpg",
		scene: "/scenes/kopalnia.mp4"
	},
	warsztat: {
		title: "Warsztat Fachury",
		owner: "fachura",
		blurb: "Hulajnoga, tramwaj, magnes. Fachura skraca drogę po Katowicach.",
		work: "Złóż kładkę",
		cost: 30,
		art: "/buildings/warsztat.png",
		interior: "/buildings/warsztat-in.jpg",
		scene: "/scenes/warsztat.mp4"
	},
	latarnia: {
		title: "Latarnia Podciepa",
		owner: "podciep",
		blurb: "Lampa i promień. Światło otwiera sekrety piwnic.",
		work: "Dopal lampę",
		cost: 20,
		art: "/buildings/latarnia.png",
		interior: "/buildings/latarnia-in.jpg",
		scene: "/scenes/latarnia.mp4"
	},
	schronisko: {
		title: "Schronisko dla psów",
		owner: "hopla",
		blurb: "Jedzenie, miski, spacery. Pieski rosną jak u Pou — za monety z miasta.",
		work: "Miska i koc",
		cost: 15,
		art: "/buildings/schronisko.png",
		interior: "/buildings/schronisko-in.jpg",
		scene: "/scenes/schronisko.mp4"
	},
	siedziba: {
		title: "Siedziba osady",
		owner: null,
		blurb: "Komnata czeka. Skarbnik przychodzi sam — nie wołaj go.",
		work: "Czytaj księgę",
		cost: 0,
		art: "/buildings/siedziba.png",
		interior: "/buildings/siedziba-in.jpg"
	}
};
var STATIONS = {
	kopalnia: [{
		id: "szyb",
		label: "Szyb",
		blurb: "Hanys kopie węgiel-pamięć.",
		left: "38%",
		top: "48%",
		pose: "dig",
		gold: 25
	}, {
		id: "wozki",
		label: "Wózki",
		blurb: "Wywieź urobek na dziedziniec.",
		left: "68%",
		top: "62%",
		pose: "dig",
		gold: 12
	}],
	warsztat: [{
		id: "stol",
		label: "Stół",
		blurb: "Złóż kładkę z węgla i monet.",
		left: "42%",
		top: "52%",
		pose: "craft",
		gold: 30,
		coal: 8
	}, {
		id: "magnes",
		label: "Magnesiarz",
		blurb: "Przygotuj magnes na misję.",
		left: "70%",
		top: "40%",
		pose: "craft",
		gold: 20
	}],
	latarnia: [{
		id: "lampa",
		label: "Lampa",
		blurb: "Dopal knot. Odłamek Serca pulsuje.",
		left: "48%",
		top: "36%",
		pose: "shine",
		gold: 20
	}, {
		id: "promien",
		label: "Promień",
		blurb: "Światło na następną misję.",
		left: "22%",
		top: "58%",
		pose: "shine",
		gold: 15
	}],
	schronisko: [{
		id: "miska",
		label: "Miski",
		blurb: "Napełnij miski. Pieski będą ciche.",
		left: "28%",
		top: "62%",
		pose: "pet",
		gold: 15
	}, {
		id: "spacer",
		label: "Spacer",
		blurb: "Wyprowadź uratowane pieski.",
		left: "62%",
		top: "48%",
		pose: "pet",
		gold: 0
	}],
	siedziba: [{
		id: "ksiega",
		label: "Księga",
		blurb: "Zapiski o Sercu Śląska.",
		left: "22%",
		top: "50%",
		pose: "idle",
		gold: 0
	}, {
		id: "misje",
		label: "Drzwi na misje",
		blurb: "Wyrusz w Katowice.",
		left: "70%",
		top: "46%",
		pose: "idle",
		gold: 0
	}]
};
var LORE = [
	"Serce Śląska bije pod Spodkiem. Nikt nie wie, z czego jest zrobione.",
	"Beboki ulepił ktoś z gliny i węgla. Dlatego nie boją się ciemności.",
	"Pieski czują zawał wcześniej niż latarnia.",
	"Skarbnik przychodzi, gdy osada milczy. Nie wołaj go po imieniu."
];
var PLACES = {
	panorama: {
		title: "Panorama Klub",
		area: "Ligota · ul. Śląska 75",
		blurb: "Pizza, ogródek i śląskie śniadania. Miejsce spotkań. Bączek zwiał sprzed talerza i poszedł w ogródek.",
		need: null,
		dogs: ["baczek"],
		reward: {
			gold: 55,
			coal: 10,
			cry: 1
		},
		start: "wejscie",
		guide: "hopla",
		map: {
			left: "14%",
			top: "68%"
		},
		rooms: {
			wejscie: {
				title: "Wejście",
				art: "/places/panorama-wejscie.jpg",
				text: "Ligota, ul. Śląska 75. Ciepłe okna, zapach pieca. Drzwi uchylone — ktoś tu wszedł z pieskiem.",
				exits: [{
					id: "sala",
					label: "Sala",
					edge: "right"
				}],
				spots: [{
					id: "dzwonek",
					label: "Dzwonek",
					left: "30%",
					top: "48%",
					clue: "Nikt nie otwiera. Wejdź do sali."
				}, {
					id: "doniczka",
					label: "Doniczka",
					left: "64%",
					top: "62%",
					gold: 8
				}]
			},
			sala: {
				title: "Sala",
				art: "/places/panorama-sala.jpg",
				text: "Drewno, lampki, pusta miska pod stolikiem. Trop prowadzi do ogródka — albo przez kuchnię.",
				exits: [
					{
						id: "wejscie",
						label: "Ulica",
						edge: "left"
					},
					{
						id: "kuchnia",
						label: "Kuchnia",
						edge: "right"
					},
					{
						id: "ogrod",
						label: "Ogródek",
						edge: "bottom"
					}
				],
				spots: [{
					id: "stolik",
					label: "Stolik",
					left: "46%",
					top: "52%",
					gold: 12,
					clue: "Sierść na krześle. Poszedł do ogródka."
				}]
			},
			ogrod: {
				title: "Ogródek",
				art: "/places/panorama-ogrod.jpg",
				text: "Lampki, bluszcz, pusta smycz na ławce. Ktoś tu siedział.",
				exits: [{
					id: "sala",
					label: "Sala",
					edge: "left"
				}, {
					id: "kuchnia",
					label: "Kuchnia",
					edge: "right"
				}],
				spots: [{
					id: "lawka",
					label: "Ławka",
					left: "28%",
					top: "54%",
					gold: 8,
					clue: "Smycz. Bączek jest blisko miski."
				}, {
					id: "miska",
					label: "Miska",
					left: "62%",
					top: "64%",
					dog: "baczek"
				}]
			},
			kuchnia: {
				title: "Kuchnia",
				art: "/places/panorama-kuchnia.jpg",
				text: "Piec żarzy się. Na kafelkach tropy. Drzwi do ogródka uchylone.",
				exits: [{
					id: "sala",
					label: "Sala",
					edge: "left"
				}, {
					id: "ogrod",
					label: "Ogródek",
					edge: "right"
				}],
				spots: [{
					id: "piec",
					label: "Piec",
					left: "58%",
					top: "40%",
					gold: 10
				}, {
					id: "tropy",
					label: "Tropy",
					left: "28%",
					top: "64%",
					clue: "Łapki idą do ogródka."
				}]
			}
		}
	},
	m1: {
		title: "Piwnice kamienicy",
		area: "Śródmieście",
		blurb: "Burek zszedł do rury. Latarnia Podciepa otwiera mrok.",
		need: null,
		dogs: ["burek"],
		reward: {
			gold: 50,
			coal: 20,
			cry: 1
		},
		start: "korytarz",
		guide: "podciep",
		map: {
			left: "38%",
			top: "50%"
		},
		rooms: {
			korytarz: {
				title: "Korytarz",
				art: "/misja-piwnice.jpg",
				text: "Mokre cegły. Słychać pazury za kotłownią.",
				exits: [{
					id: "kotlownia",
					label: "Kotłownia",
					edge: "right"
				}],
				spots: [{
					id: "rura",
					label: "Rura",
					left: "30%",
					top: "58%",
					gold: 8,
					clue: "Ślad do kotłowni."
				}]
			},
			kotlownia: {
				title: "Kotłownia",
				art: "/places/piwnice-kotlownia.jpg",
				text: "Rury, kocioł, stara szafa. Burek lubi ciemne kąty.",
				exits: [{
					id: "korytarz",
					label: "Korytarz",
					edge: "left"
				}],
				spots: [{
					id: "kociol",
					label: "Kocioł",
					left: "24%",
					top: "48%",
					gold: 6
				}, {
					id: "szafa",
					label: "Szafa",
					left: "64%",
					top: "50%",
					dog: "burek"
				}]
			}
		}
	},
	m2: {
		title: "Stara kopalnia",
		area: "Nikiszowiec",
		blurb: "Reks w ciemnej budce. Hanys zna ten szyb.",
		need: "m1",
		dogs: ["reks"],
		reward: {
			gold: 65,
			coal: 25,
			cry: 1
		},
		start: "szyb",
		guide: "hanys",
		map: {
			left: "56%",
			top: "32%"
		},
		rooms: {
			szyb: {
				title: "Szyb",
				art: "/misja-kopalnia.jpg",
				text: "Echo kilofa. Chodnik ciągnie się w prawo.",
				exits: [{
					id: "chodnik",
					label: "Chodnik",
					edge: "right"
				}],
				spots: [{
					id: "wozek",
					label: "Wózek",
					left: "24%",
					top: "58%",
					gold: 10,
					clue: "Ślad do chodnika."
				}]
			},
			chodnik: {
				title: "Chodnik",
				art: "/places/kopalnia-chodnik.jpg",
				text: "Belki, węgiel, budka na końcu szyn. Reks szczeka cicho.",
				exits: [{
					id: "szyb",
					label: "Szyb",
					edge: "left"
				}],
				spots: [{
					id: "budka",
					label: "Budka",
					left: "62%",
					top: "52%",
					dog: "reks"
				}]
			}
		}
	},
	m3: {
		title: "Pod Spodkiem",
		area: "Koszutka",
		blurb: "Figa zniknęła przy arenie. Odłamek Serca pulsuje.",
		need: "m2",
		dogs: ["figa"],
		reward: {
			gold: 40,
			coal: 12,
			cry: 1
		},
		start: "taras",
		guide: "fachura",
		map: {
			left: "70%",
			top: "12%"
		},
		rooms: {
			taras: {
				title: "Taras",
				art: "/env/spodek.jpg",
				text: "Spodek nad głową. Schody w dół. Figa lubi beton.",
				exits: [{
					id: "schody",
					label: "Schody",
					edge: "bottom"
				}],
				spots: [{
					id: "krawedz",
					label: "Krawędź",
					left: "68%",
					top: "40%",
					gold: 12,
					clue: "Smycz na schodach."
				}]
			},
			schody: {
				title: "Schody",
				art: "/places/spodek-schody.jpg",
				text: "Mokry beton, lampa, pusta smycz. Figa jest pod stopniem.",
				exits: [{
					id: "taras",
					label: "Taras",
					edge: "top"
				}],
				spots: [{
					id: "stopien",
					label: "Stopień",
					left: "48%",
					top: "58%",
					dog: "figa"
				}]
			}
		}
	}
};
var MISSIONS = Object.fromEntries(Object.keys(PLACES).map((id) => [id, {
	title: PLACES[id].title,
	blurb: PLACES[id].blurb,
	need: PLACES[id].need,
	dogs: PLACES[id].dogs,
	reward: PLACES[id].reward
}]));
function clamp(n, a = 0, b = 100) {
	return Math.max(a, Math.min(b, Math.round(n)));
}
function freshPet(partial) {
	return {
		hunger: 58,
		joy: 72,
		energy: 80,
		...partial
	};
}
function startRoomFor(id, tools) {
	const place = PLACES[id];
	if (tools.tramwaj) {
		for (const [rid, room] of Object.entries(place.rooms)) if (room.spots.some((s) => s.dog)) return rid;
	}
	if (tools.hulajnoga) {
		const first = place.rooms[place.start]?.exits[0]?.id;
		if (first) return first;
	}
	return place.start;
}
var emptyTools = {
	kladka: false,
	magnes: false,
	hulajnoga: false,
	tramwaj: false,
	winda: false
};
var useGame = create()(persist((set, get) => ({
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
		siedziba: 1
	},
	done: {
		m1: false,
		m2: false,
		m3: false,
		panorama: false
	},
	rescued: ["punia"],
	pets: {
		punia: freshPet({
			hunger: 46,
			joy: 68,
			energy: 74
		}),
		baczek: freshPet(),
		burek: freshPet(),
		reks: freshPet(),
		figa: freshPet()
	},
	food: {
		karma: 5,
		kosc: 2,
		woda: 4,
		kielbasa: 1
	},
	gear: {
		miski: false,
		lozko: false,
		pilka: false,
		obroza: false
	},
	tools: { ...emptyTools },
	lastTick: Date.now(),
	toast: "",
	pop: {
		text: "",
		key: 0
	},
	busy: null,
	room: "wejscie",
	found: {},
	lastReward: null,
	go: (screen) => set({
		screen,
		toast: ""
	}),
	openBuilding: (id, dog) => set({
		building: id,
		selectedDog: dog ?? get().selectedDog,
		screen: "building",
		toast: ""
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
			toast: ""
		});
	},
	goRoom: (room) => set({
		room,
		toast: ""
	}),
	searchSpot: (spotId) => {
		const s = get();
		const id = s.mission;
		if (!id) return "Nie ma wyprawy.";
		const spot = PLACES[id].rooms[s.room]?.spots.find((x) => x.id === spotId);
		if (!spot) return "Nic tu nie ma.";
		const key = `${id}:${s.room}:${spotId}`;
		if (s.found[key]) return "Już tu zaglądaliście.";
		const found = {
			...s.found,
			[key]: true
		};
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
			pop: {
				text: gain ? `+${gain}` : "Trop",
				key: s.pop.key + 1
			}
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
				set({
					screen: "missions",
					toast: "Drzwi otwarte. Katowice czekają."
				});
				return "";
			}
			const line = LORE[s.pop.key % LORE.length];
			set({
				toast: line,
				pop: {
					text: "Księga",
					key: s.pop.key + 1
				}
			});
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
			pop: {
				text: pop,
				key: s.pop.key + 1
			},
			busy: {
				building: id,
				station,
				until: Date.now() + 1400
			}
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
			levels: {
				...s.levels,
				[id]: lv + 1
			},
			toast: `${BUILDINGS[id].title} — poziom ${lv + 1}.`
		});
		return "";
	},
	completeMission: (id, dogIds) => {
		const s = get();
		if (s.done[id]) {
			set({
				screen: "win",
				selectedDog: dogIds[0] ?? s.selectedDog
			});
			return;
		}
		const r = MISSIONS[id].reward;
		const bonus = s.tools.kladka ? Math.round(r.gold * .2) : 0;
		const added = dogIds.filter((n) => !s.rescued.includes(n));
		const pets = { ...s.pets };
		for (const d of added) pets[d] = freshPet({
			hunger: 40,
			joy: 55,
			energy: 50
		});
		const names = added.map((d) => DOGS[d].name).join(", ");
		set({
			done: {
				...s.done,
				[id]: true
			},
			gold: s.gold + r.gold + bonus,
			coal: s.coal + r.coal,
			cry: s.cry + r.cry,
			dogs: Math.min(5, s.dogs + added.length),
			rescued: [...s.rescued, ...added],
			pets,
			selectedDog: added[0] ?? s.selectedDog,
			lastReward: {
				gold: r.gold + bonus,
				coal: r.coal,
				cry: r.cry,
				dog: names
			},
			screen: "win"
		});
	},
	tickPets: () => {
		const s = get();
		const now = Date.now();
		const minutes = Math.min(8, (now - (s.lastTick || now)) / 6e4);
		if (minutes < .15) return;
		const hungerRate = s.gear.miski ? 1.6 : 3.2;
		const joyRate = s.gear.obroza ? 1.2 : 2.4;
		const energyRate = s.gear.lozko ? -1.4 : .8;
		const pets = { ...s.pets };
		for (const id of s.rescued) {
			const p = pets[id];
			pets[id] = {
				hunger: clamp(p.hunger - hungerRate * minutes),
				joy: clamp(p.joy - joyRate * minutes),
				energy: clamp(p.energy - energyRate * minutes)
			};
		}
		set({
			pets,
			lastTick: now
		});
	},
	buyFood: (id) => {
		const item = FOOD[id];
		const s = get();
		if (s.gold < item.cost) return `Potrzeba ${item.cost} monet.`;
		set({
			gold: s.gold - item.cost,
			food: {
				...s.food,
				[id]: s.food[id] + 1
			},
			toast: `Kupiono: ${item.name}.`,
			pop: {
				text: item.name,
				key: s.pop.key + 1
			}
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
			gear: {
				...s.gear,
				[id]: true
			},
			toast: `${item.name}. ${item.blurb}`
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
			tools: {
				...s.tools,
				[id]: true
			},
			magnet: id === "magnes" ? true : s.magnet,
			planks: id === "kladka" ? s.planks + 1 : s.planks,
			toast: `${item.name} gotowe. ${item.blurb}`,
			pop: {
				text: item.name,
				key: s.pop.key + 1
			}
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
			food: {
				...s.food,
				[id]: s.food[id] - 1
			},
			pets: {
				...s.pets,
				[s.selectedDog]: {
					hunger: clamp(p.hunger + item.hunger),
					joy: clamp(p.joy + item.joy),
					energy: clamp(p.energy + item.energy)
				}
			},
			toast: `${DOGS[s.selectedDog].name} je: ${item.name}.`,
			pop: {
				text: item.name,
				key: s.pop.key + 1
			}
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
					energy: clamp(p.energy - 4)
				}
			},
			toast: `${DOGS[s.selectedDog].name} przymyka oczy.`,
			pop: {
				text: "Głask",
				key: s.pop.key + 1
			}
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
					energy: clamp(p.energy - 18)
				}
			},
			toast: `Spacer po dziedzińcu. Sąsiedzi rzucili ${tip} monet.`,
			pop: {
				text: `+${tip}`,
				key: s.pop.key + 1
			}
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
					energy: clamp(p.energy - 12)
				}
			},
			toast: `${DOGS[s.selectedDog].name} goni piłkę po workach.`,
			pop: {
				text: "Piłka",
				key: s.pop.key + 1
			}
		});
		return "";
	},
	setToast: (toast) => set({ toast })
}), {
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
		selectedDog: s.selectedDog
	})
}));
function DogImg({ who, size = 88, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: DOGS[who].art,
		alt: "",
		draggable: false,
		className: cn("pointer-events-none select-none object-contain object-bottom drop-shadow-[0_8px_10px_rgb(0_0_0/0.45)]", className),
		style: {
			width: size,
			height: size
		}
	});
}
function moodLine(hunger, joy, energy) {
	if (hunger < 28) return "Głodny. Chce karmę.";
	if (energy < 22) return "Śpi na worku.";
	if (joy < 30) return "Smutny. Głask albo piłka.";
	if (joy > 78 && hunger > 55) return "Mruczy. Szczęśliwy.";
	return "Czeka na Hoplę.";
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold tracking-wide transition-[opacity,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:scale-98 min-h-11 px-4 text-sm", {
	variants: { variant: {
		primary: "bg-moss text-fg border border-moss-2",
		gold: "bg-gold-fill text-fg border border-gold",
		ghost: "bg-transparent text-fg border border-line",
		nav: "h-14 min-h-14 flex-1 flex-col gap-0.5 rounded-lg border-0 bg-transparent px-1 font-body text-2xs font-medium text-muted data-[on=true]:bg-chip data-[on=true]:text-gold"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
var CUT = {
	hanys: "/cutouts/hanys.png",
	hopla: "/cutouts/hopla.png",
	fachura: "/cutouts/fachura.png",
	podciep: "/cutouts/podciep.png?v=clean"
};
function Portrait({ who, size = 120, pose = "idle", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("portrait-cutout", pose === "work" ? "is-work" : pose === "hop" ? "is-hop" : pose === "wave" ? "is-wave" : "is-idle", className),
		style: {
			width: size,
			height: Math.round(size * 1.38)
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: CUT[who],
			alt: "",
			draggable: false
		})
	});
}
function Face({ who, size = 36 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: CUT[who],
		alt: "",
		draggable: false,
		className: "shrink-0 bg-transparent object-contain",
		style: {
			width: size,
			height: size
		}
	});
}
function StageBack({ src, video }) {
	const [live, setLive] = (0, import_react.useState)(Boolean(video));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [live && video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		className: "absolute inset-0 h-full w-full object-cover",
		src: video,
		poster: src,
		autoPlay: true,
		loop: true,
		muted: true,
		playsInline: true,
		onError: () => setLive(false)
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: "",
		className: "ken-burns-media absolute inset-0 h-full w-full object-cover"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-linear-to-t from-coal/55 via-transparent to-coal/20" })] });
}
function SceneChrome({ title, hint, onBack, open, onToggle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": open ? "Schowaj panel" : "Otwórz panel",
			className: "absolute inset-0 z-[2]",
			onClick: onToggle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "pointer-events-auto grid size-11 place-items-center rounded-full border border-line bg-coal/55 text-fg backdrop-blur-sm",
				"aria-label": "Osada",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none rounded-full border border-gold/50 bg-coal/45 px-3 py-1.5 font-display text-2xs tracking-wide text-gold backdrop-blur-sm",
				children: title
			})]
		}),
		!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none absolute inset-x-0 bottom-8 z-20 text-center font-display text-2xs tracking-wide text-gold/90 drop-shadow-[0_2px_8px_#000]",
			children: hint ?? "Dotknij sceny"
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("absolute inset-x-0 bottom-0 z-30 max-h-[46%] overflow-auto rounded-t-2xl border border-line bg-coal/88 px-4 pb-4 pt-2 shadow-panel backdrop-blur-md transition-transform duration-300 ease-out", open ? "translate-y-0" : "pointer-events-none translate-y-[110%]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onToggle,
				className: "mx-auto mb-2 flex w-full items-center justify-center text-muted",
				"aria-label": "Schowaj",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5" })
			}), children]
		})
	] });
}
function FxBurst({ kind, play }) {
	const [frame, setFrame] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		if (!play) return;
		setFrame(1);
		let i = 1;
		const id = window.setInterval(() => {
			i = i % 4 + 1;
			setFrame(i);
		}, 95);
		return () => window.clearInterval(id);
	}, [play]);
	if (!play) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: `/fx/${kind}/fx-${frame}.png`,
		alt: "",
		className: "pointer-events-none absolute left-1/2 top-[42%] z-10 w-40 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg sm:w-52"
	});
}
var Dog3D = (0, import_react.lazy)(() => import("./Dog3D-BkEFr0i7.mjs").then((m) => ({ default: m.Dog3D })));
var FOOD_ICON = {
	karma: Wheat,
	kosc: Bone,
	woda: Droplets,
	kielbasa: Drumstick
};
var GEAR_ICON = {
	miski: Soup,
	lozko: BedDouble,
	pilka: CircleDot,
	obroza: Ribbon
};
function Shelter() {
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
	const p = pets[selected] ?? {
		hunger: 50,
		joy: 50,
		energy: 50
	};
	const dog = DOGS[selected];
	const [burst, setBurst] = (0, import_react.useState)(null);
	const [hud, setHud] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!burst) return;
		const t = window.setTimeout(() => setBurst(null), burst === "walk" ? 4e3 : 2200);
		return () => window.clearTimeout(t);
	}, [burst]);
	const act = (fn, next) => {
		const err = fn();
		if (err) setToast(err);
		else if (next) setBurst(next);
	};
	let clip = "idle";
	if (owned) {
		if (burst) clip = burst;
		else if (p.energy < 22) clip = "sleep";
		else if (p.hunger < 28) clip = "idle";
		else clip = "idle";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageBack, {
				src: "/buildings/schronisko-in.jpg",
				video: "/scenes/schronisko.mp4"
			}),
			pop.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up",
				children: pop.text
			}, pop.key) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SceneChrome, {
				title: "Schronisko Hopli",
				hint: "Dotknij, żeby zobaczyć pieski",
				onBack: () => go("village"),
				open: hud,
				onToggle: () => setHud((v) => !v),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto pb-1",
						children: DOG_ORDER.map((id) => {
							const have = rescued.includes(id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => have ? selectDog(id) : setToast(`${DOGS[id].name} czeka na mapie Katowic.`),
								className: `flex min-w-16 shrink-0 flex-col items-center rounded-lg border px-2 py-1.5 ${selected === id ? "border-gold bg-chip" : "border-line bg-coal/70"}`,
								children: [have ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
									who: id,
									size: 48
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center text-faint",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, { className: "size-6 opacity-40" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 font-display text-[0.65rem] text-gold",
									children: DOGS[id].name
								})]
							}, id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => owned && act(petDog, "happy"),
							className: "relative h-24 w-24 shrink-0",
							"aria-label": owned ? `Głaskaj ${dog.name}` : dog.name,
							children: owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
								fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
									who: selected,
									size: 88,
									className: "sprite-bob mx-auto"
								}),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dog3D, {
									who: selected,
									clip,
									orbit: true
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, { className: "mx-auto mt-6 size-10 text-faint" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg text-gold",
									children: dog.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xs text-muted",
									children: dog.blurb
								}),
								owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-2xs text-fg",
									children: moodLine(p.hunger, p.joy, p.energy)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-2xs text-faint",
									children: "Pusty koj. Znajdź na mapie."
								})
							]
						})]
					}),
					owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								label: "Głód",
								value: p.hunger
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								label: "Radość",
								value: p.joy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								label: "Siła",
								value: p.energy
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "gold",
								onClick: () => act(petDog, "happy"),
								children: "Głask"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "gold",
								onClick: () => act(walkDog, "walk"),
								children: "Spacer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "gold",
								onClick: () => act(playDog, "happy"),
								children: "Piłka"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: () => openBuilding("warsztat"),
								children: "Warsztat"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-xl border border-line bg-panel/80 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm text-gold",
							children: "Nakarm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid grid-cols-2 gap-2",
							children: Object.keys(FOOD).map((fid) => {
								const Icon = FOOD_ICON[fid];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => act(() => feed(fid)),
									className: "flex min-h-11 items-center gap-2 rounded-md border border-line bg-chip px-2 py-2 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-2xs text-fg",
											children: FOOD[fid].name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[0.65rem] text-faint",
											children: ["w zapasie ", food[fid]]
										})]
									})]
								}, fid);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-xl border border-line bg-panel/80 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-gold",
								children: "Sklepik Hopli"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xs text-muted",
								children: "Za monety z miasta."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-2 space-y-2",
								children: [Object.keys(FOOD).map((fid) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopRow, {
									title: `${FOOD[fid].name} · ${FOOD[fid].cost}`,
									sub: `zapas ${food[fid]}`,
									icon: FOOD_ICON[fid],
									onClick: () => act(() => buyFood(fid))
								}, fid)), Object.keys(GEAR).map((gid) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopRow, {
									title: `${GEAR[gid].name} · ${GEAR[gid].gold ? `${GEAR[gid].gold} m` : `${GEAR[gid].cry} odł.`}`,
									sub: gear[gid] ? "jest" : GEAR[gid].blurb,
									icon: GEAR_ICON[gid],
									done: gear[gid],
									onClick: () => act(() => buyGear(gid))
								}, gid))]
							})
						]
					})
				]
			})
		]
	});
}
function Bar({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-0.5 flex justify-between font-display text-[0.65rem] text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-gold",
			children: value
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 overflow-hidden rounded-full bg-chip",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `h-full ${value < 28 ? "bg-danger" : value < 55 ? "bg-gold" : "bg-moss"}`,
			style: { width: `${value}%` }
		})
	})] });
}
function ShopRow({ title, sub, icon: Icon, done, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: done,
		onClick,
		className: "flex w-full min-h-11 items-center gap-2 rounded-md border border-line bg-chip px-2 py-2 text-left disabled:opacity-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-2xs text-fg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.65rem] text-faint",
				children: sub
			})]
		})]
	}) });
}
var ICON = {
	kladka: Hammer,
	magnes: Magnet,
	hulajnoga: Bike,
	tramwaj: TramFront,
	winda: TrendingUp
};
var ORDER$4 = [
	"kladka",
	"magnes",
	"hulajnoga",
	"tramwaj",
	"winda"
];
function Workshop() {
	const go = useGame((s) => s.go);
	const openBuilding = useGame((s) => s.openBuilding);
	const tools = useGame((s) => s.tools);
	const buyTool = useGame((s) => s.buyTool);
	const setToast = useGame((s) => s.setToast);
	const pop = useGame((s) => s.pop);
	const gold = useGame((s) => s.gold);
	const coal = useGame((s) => s.coal);
	const cry = useGame((s) => s.cry);
	const [hud, setHud] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageBack, {
				src: "/buildings/warsztat-in.jpg",
				video: "/scenes/warsztat.mp4"
			}),
			pop.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up",
				children: pop.text
			}, pop.key) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SceneChrome, {
				title: `Warsztat Fachury · ${travelLabel(tools)}`,
				hint: "Dotknij, żeby składać narzędzia",
				onBack: () => go("village"),
				open: hud,
				onToggle: () => setHud((v) => !v),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "Hulajnoga i tramwaj skracają wyprawy po Katowicach."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: ORDER$4.map((id) => {
							const t = TOOLS[id];
							const Icon = ICON[id];
							const have = tools[id];
							const price = [
								t.gold ? `${t.gold} m` : null,
								t.coal ? `${t.coal} węg.` : null,
								t.cry ? `${t.cry} odł.` : null
							].filter(Boolean).join(" · ");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: have,
								onClick: () => {
									const err = buyTool(id);
									if (err) setToast(err);
								},
								className: "flex w-full min-h-14 items-center gap-3 rounded-xl border border-line bg-panel/95 px-3 py-3 text-left disabled:opacity-55",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 shrink-0 place-items-center rounded-md border border-gold bg-chip",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-gold" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "block font-display text-sm text-gold",
											children: [t.name, have ? " · jest" : ""]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-2xs text-muted",
											children: t.blurb
										}),
										!have ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-[0.65rem] text-faint",
											children: price
										}) : null
									]
								})]
							}) }, id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-2xs text-faint",
						children: [
							"Masz ",
							gold,
							" monet, ",
							coal,
							" węgla, ",
							cry,
							" odłamków."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							variant: "ghost",
							onClick: () => openBuilding("schronisko"),
							children: "Do piesków"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							variant: "gold",
							onClick: () => go("map"),
							children: "Mapa Katowic"
						})]
					})
				]
			})
		]
	});
}
function Building() {
	const id = useGame((s) => s.building);
	const levels = useGame((s) => s.levels);
	const go = useGame((s) => s.go);
	const workStation = useGame((s) => s.workStation);
	const upgradeBuilding = useGame((s) => s.upgradeBuilding);
	const setToast = useGame((s) => s.setToast);
	const pop = useGame((s) => s.pop);
	const busy = useGame((s) => s.busy);
	const lampReady = useGame((s) => s.lampReady);
	const [, setTick] = (0, import_react.useState)(0);
	const [hud, setHud] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setHud(false);
	}, [id]);
	(0, import_react.useEffect)(() => {
		if (!busy || busy.building !== id) return;
		const ms = busy.until - Date.now();
		if (ms <= 0) return;
		const t = window.setTimeout(() => setTick((n) => n + 1), ms);
		return () => window.clearTimeout(t);
	}, [busy, id]);
	if (!id) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grid h-full place-items-center bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "gold",
			onClick: () => go("village"),
			children: "Wróć do osady"
		})
	});
	if (id === "schronisko") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shelter, {});
	if (id === "warsztat") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workshop, {});
	const b = BUILDINGS[id];
	const lv = levels[id];
	const upCost = 40 * lv;
	const working = Boolean(busy && busy.building === id && busy.until > Date.now());
	const fx = id === "latarnia" ? "glow" : "sparks";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageBack, {
				src: b.interior,
				video: b.scene
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FxBurst, {
				kind: fx,
				play: working
			}),
			pop.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute left-1/2 top-24 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up",
				children: pop.text
			}, pop.key) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SceneChrome, {
				title: `${b.title} · lv ${lv}`,
				hint: "Dotknij sceny, żeby pracować",
				onBack: () => go("village"),
				open: hud,
				onToggle: () => setHud((v) => !v),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: b.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-2xs text-faint",
						children: [
							id === "kopalnia" ? "Wydobycie rośnie z poziomem." : null,
							id === "latarnia" ? lampReady ? "Promień czeka na misję." : "Zapal promień przed wyprawą." : null,
							id === "siedziba" ? "Stąd wychodzisz na mapę Katowic." : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: STATIONS[id].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								const err = workStation(id, st.id);
								if (err) setToast(err);
							},
							className: "min-h-11 rounded-lg border border-gold bg-chip px-3 py-2 text-left font-display text-xs text-fg",
							children: [
								st.label,
								st.gold ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-faint",
									children: ["· ", st.gold]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block font-body text-[0.65rem] font-normal text-muted",
									children: st.blurb
								})
							]
						}, st.id))
					}),
					id !== "siedziba" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "gold",
						className: "mt-3 w-full",
						onClick: () => {
							const err = upgradeBuilding(id);
							if (err) setToast(err);
						},
						children: ["Ulepsz budynek · ", upCost]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3 w-full",
						variant: "gold",
						onClick: () => go("map"),
						children: "Mapa Katowic"
					})
				]
			})
		]
	});
}
var ORDER$3 = [
	"siedziba",
	"kopalnia",
	"warsztat",
	"latarnia",
	"schronisko"
];
function Buildings() {
	const levels = useGame((s) => s.levels);
	const openBuilding = useGame((s) => s.openBuilding);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-full min-h-0 overflow-auto bg-bg px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg tracking-wide text-gold",
				children: "Budynki osady"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Schronisko — pieski. Warsztat — hulajnoga i tramwaj. Kopalnia sypie węgiel."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: ORDER$3.map((id) => {
					const b = BUILDINGS[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openBuilding(id),
						className: "flex w-full items-center gap-3 rounded-xl border border-line bg-panel p-3 text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.art,
								alt: "",
								className: "h-16 w-16 shrink-0 object-contain"
							}),
							b.owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
								who: b.owner,
								size: 56
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-coal font-display text-xl text-gold",
								children: "?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm text-gold",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-2xs text-muted",
										children: ["Poziom ", levels[id]]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 line-clamp-2 text-xs text-fg",
										children: b.blurb
									})
								]
							})
						]
					}) }, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => useGame.getState().go("village"),
					children: "Wróć na dziedziniec"
				})
			})
		]
	});
}
function Brief() {
	const id = useGame((s) => s.mission);
	const go = useGame((s) => s.go);
	const tools = useGame((s) => s.tools);
	if (!id) return null;
	const m = PLACES[id];
	const rooms = Object.keys(m.rooms).length;
	const guide = BEBOKS[m.guide];
	const dogId = m.dogs[0];
	const travel = travelLabel(tools);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-col overflow-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: m.rooms[m.start].art,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-coal/72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xs uppercase tracking-[0.28em] text-gold",
						children: m.area
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl text-gold",
						children: m.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg",
						children: m.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-lg border border-line bg-panel/90 p-3 text-sm text-muted",
						children: [
							rooms,
							" ekrany · podróż: ",
							travel,
							".",
							tools.tramwaj ? " Tramwaj stawia was przy piesku." : tools.hulajnoga ? " Hulajnoga omija pierwszy ekran." : " Złóż hulajnogę u Fachury, by iść szybciej."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-end justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
							who: m.guide,
							size: 120
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
							who: dogId,
							size: 110
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-center text-2xs text-faint",
						children: [
							guide.name,
							" szuka: ",
							DOGS[dogId].name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							onClick: () => go("place"),
							children: "Wejdź"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							variant: "ghost",
							onClick: () => go("map"),
							children: "Mapa"
						})]
					})
				]
			})
		]
	});
}
function Hud() {
	const gold = useGame((s) => s.gold);
	const coal = useGame((s) => s.coal);
	const cry = useGame((s) => s.cry);
	const dogs = useGame((s) => s.dogs);
	const rescued = useGame((s) => s.rescued);
	const pets = useGame((s) => s.pets);
	const hungry = rescued.find((id) => pets[id].hunger < 28);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-center gap-3 border-b border-line bg-coal px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-semibold tracking-wide text-gold",
				children: "Osada pod Spodkiem"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs text-muted",
				children: hungry ? `${DOGS[hungry].name} chce jeść` : "Hopla pilnuje piesków"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2 text-2xs tabular-nums text-fg sm:gap-3 sm:text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-3.5 text-gold" }),
					value: gold,
					label: "monety"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hexagon, { className: "size-3.5 text-muted" }),
					value: coal,
					label: "węgiel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "size-3.5 text-gold-2" }),
					value: cry,
					label: "odłamki"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, { className: "size-3.5 text-moss-2" }),
					value: `${dogs}/5`,
					label: "psy"
				})
			]
		})]
	});
}
function Chip({ icon, value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 rounded-md border border-line bg-chip px-2 py-1",
		children: [
			icon,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
				className: "font-display text-gold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-faint sm:inline",
				children: label
			})
		]
	});
}
var ORDER$2 = [
	"panorama",
	"m1",
	"m2",
	"m3"
];
function MapScreen() {
	const openMission = useGame((s) => s.openMission);
	const done = useGame((s) => s.done);
	const travel = travelLabel(useGame((s) => s.tools));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-full min-h-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/mapa.jpg",
				alt: "Mapa Katowic",
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-coal/28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute left-4 top-4 z-10 font-display text-sm tracking-wide text-gold",
				children: "Mapa Katowic"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "absolute left-4 top-9 z-10 max-w-[70%] text-2xs text-muted",
				children: [
					"Kliknij miejsce. Podróż: ",
					travel,
					". Łup i pieski wracają do osady."
				]
			}),
			ORDER$2.map((id) => {
				const p = PLACES[id];
				const locked = Boolean(p.need && !done[p.need]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openMission(id),
					className: "absolute z-10 flex min-h-11 min-w-11 flex-col items-center",
					style: {
						left: p.map.left,
						top: p.map.top
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-4 rounded-full border-2 ${done[id] ? "border-moss-2 bg-moss" : locked ? "border-faint bg-chip" : "border-gold bg-gold-fill"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 max-w-28 rounded-md border border-gold bg-coal/85 px-2 py-1 text-center font-display text-2xs text-fg",
						children: [
							p.title,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[0.65rem] text-faint",
								children: p.area
							}),
							locked ? " · zamek" : done[id] ? " · ok" : ""
						]
					})]
				}, id);
			})
		]
	});
}
var ORDER$1 = [
	"panorama",
	"m1",
	"m2",
	"m3"
];
function Missions() {
	const done = useGame((s) => s.done);
	const openMission = useGame((s) => s.openMission);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-full min-h-0 overflow-auto bg-bg px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg tracking-wide text-gold",
				children: "Miejsca w Katowicach"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Skacz po ekranach. Znajdź pieska. Wróć z łupem i ulepsz osadę."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: ORDER$1.map((id) => {
					const m = PLACES[id];
					const locked = Boolean(m.need && !done[m.need]);
					const rooms = Object.keys(m.rooms).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-panel p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
									who: m.guide,
									size: 48
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base text-gold",
										children: m.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-2xs text-faint",
										children: [
											m.area,
											" · ",
											rooms,
											" ekrany"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: m.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 inline-flex items-center gap-1 text-2xs text-faint",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, { className: "size-3.5" }),
											" ",
											m.dogs.map((d) => DOGS[d].name).join(", ")
										]
									})
								] })]
							}), done[id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-moss-2 px-2 py-1 text-2xs text-moss-2",
								children: "Uratowane"
							}) : locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 shrink-0 text-faint" }) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							variant: locked ? "ghost" : "gold",
							disabled: locked,
							onClick: () => openMission(id),
							children: done[id] ? "Jeszcze raz" : locked ? "Zamknięte" : "Odwiedź"
						})]
					}, id);
				})
			})
		]
	});
}
var ITEMS = [
	{
		id: "village",
		label: "Osada",
		icon: House
	},
	{
		id: "buildings",
		label: "Budynki",
		icon: Pickaxe
	},
	{
		id: "team",
		label: "Drużyna",
		icon: Users
	},
	{
		id: "map",
		label: "Mapa",
		icon: Map
	},
	{
		id: "missions",
		label: "Misje",
		icon: Flag
	}
];
function Nav() {
	const screen = useGame((s) => s.screen);
	const go = useGame((s) => s.go);
	const active = screen === "building" ? "buildings" : screen === "brief" || screen === "win" || screen === "place" ? "missions" : screen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "flex gap-1 border-t border-line bg-coal p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
		children: ITEMS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "nav",
			"data-on": active === id,
			onClick: () => go(id),
			"aria-current": active === id ? "page" : void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4",
				strokeWidth: 1.75
			}), label]
		}, id))
	});
}
function exitStyle(edge, i) {
	const n = i % 2;
	if (edge === "left") return {
		left: "3%",
		top: n ? "58%" : "42%"
	};
	if (edge === "top") return {
		left: "50%",
		top: "18%",
		transform: "translateX(-50%)"
	};
	if (edge === "bottom") return {
		left: "50%",
		bottom: "22%",
		transform: "translateX(-50%)"
	};
	return {
		right: "3%",
		top: n ? "58%" : "42%"
	};
}
function Place() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-full min-h-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: room.art,
				alt: "",
				className: "screen-hop absolute inset-0 h-full w-full object-cover"
			}, roomId),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-coal/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-start justify-between gap-2 px-3 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go("map"),
					className: "inline-flex min-h-11 items-center gap-1 rounded-md border border-line bg-coal/85 px-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Mapa"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-md border border-gold bg-coal/85 px-3 py-2 text-right font-display text-xs text-gold",
					children: [place.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block text-2xs text-muted",
						children: room.title
					})]
				})]
			}),
			room.spots.map((sp) => {
				const used = found[`${id}:${roomId}:${sp.id}`];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						const err = searchSpot(sp.id);
						if (err) setToast(err);
					},
					style: {
						left: sp.left,
						top: sp.top
					},
					className: "absolute z-10 flex min-h-11 flex-col items-center",
					children: [sp.dog && !used ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
						who: sp.dog,
						size: 72,
						className: "sprite-bob"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-md border border-gold bg-coal/88 px-2.5 py-1.5 font-display text-2xs text-fg shadow-panel sm:text-xs",
						children: [sp.dog ? DOGS[sp.dog].name : sp.label, used ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-faint",
							children: "· ok"
						}) : null]
					})]
				}, sp.id);
			}),
			room.exits.map((ex, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => goRoom(ex.id),
				className: "absolute z-10 min-h-11 rounded-md border border-gold bg-panel/92 px-3 py-1.5 font-display text-2xs text-gold shadow-panel sm:text-xs",
				style: exitStyle(ex.edge, i),
				children: ["→ ", ex.label]
			}, ex.id)),
			pop.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute left-1/2 top-20 z-20 -translate-x-1/2 font-display text-lg text-gold drop-shadow-[0_2px_8px_#000] enter-up",
				children: pop.text
			}, pop.key) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 z-10 flex items-end gap-3 border-t border-line bg-coal/92 px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
					who: place.guide,
					size: 72
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "min-w-0 flex-1 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-gold",
						children: [guide.name, ". "]
					}), room.text]
				})]
			})
		]
	});
}
var ORDER = [
	"hanys",
	"hopla",
	"fachura",
	"podciep"
];
var HOME = {
	hanys: "kopalnia",
	hopla: "schronisko",
	fachura: "warsztat",
	podciep: "latarnia"
};
function Team() {
	const openBuilding = useGame((s) => s.openBuilding);
	const rescued = useGame((s) => s.rescued);
	const pets = useGame((s) => s.pets);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "h-full min-h-0 overflow-auto bg-bg px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center font-display text-xl tracking-wide text-gold",
				children: "Drużyna"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-center text-sm text-muted",
				children: "Beboki i pieski. Kliknij, by wejść do domu."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-5 flex w-full max-w-lg items-center gap-4 rounded-xl border border-line bg-panel p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid size-20 shrink-0 place-items-center rounded-full border border-gold/40 bg-coal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl text-gold",
						children: "?"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-gold",
							children: SKARBNIK.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xs text-muted",
							children: "Ukryty mentor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-relaxed text-fg",
							children: "Pojawia się w osadzie tylko czasem, gdy mgła zgęstnieje przy siedzibie."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto mt-5 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4",
				children: ORDER.map((id) => {
					const b = BEBOKS[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openBuilding(HOME[id]),
						className: "flex w-full flex-col items-center rounded-xl border border-line bg-panel px-2 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
								who: id,
								size: 112
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-sm text-gold",
								children: b.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xs text-muted",
								children: b.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-center text-2xs leading-snug text-fg",
								children: b.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-2xs text-faint",
								children: BUILDINGS[HOME[id]].title
							})
						]
					}) }, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-6 max-w-lg rounded-xl border border-line bg-panel p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-gold",
						children: "Psi zaułek"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Punia już tu mieszka. Resztę znajdziesz na mapie Katowic."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5",
						children: DOG_ORDER.map((id) => {
							const have = rescued.includes(id);
							const p = pets[id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => openBuilding("schronisko", id),
								className: "flex w-full flex-col items-center rounded-lg border border-line bg-chip px-1 py-2",
								children: [
									have ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
										who: id,
										size: 64
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-16 w-16 place-items-center text-2xs text-faint",
										children: "?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 font-display text-2xs text-gold",
										children: DOGS[id].name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.6rem] text-faint",
										children: have ? moodLine(p.hunger, p.joy, p.energy) : "na mapie"
									})
								]
							}) }, id);
						})
					})
				]
			})
		]
	});
}
var LINEUP = [
	{
		id: "hanys",
		home: "kopalnia"
	},
	{
		id: "hopla",
		home: "schronisko"
	},
	{
		id: "fachura",
		home: "warsztat"
	},
	{
		id: "podciep",
		home: "latarnia"
	}
];
function Title() {
	const go = useGame((s) => s.go);
	const openBuilding = useGame((s) => s.openBuilding);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-coal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/title-plaza.jpg",
				alt: "",
				className: "title-sky absolute inset-0 h-full w-full object-cover object-[center_42%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "title-clouds",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "title-clouds title-clouds-b",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "title-smoke",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "title-window title-window-a",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "title-window title-window-b",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "title-window title-window-c",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "title-lantern",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-linear-to-b from-coal/25 via-transparent to-coal/88" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-1 flex-col items-center justify-end px-5 pb-10 text-center sm:justify-end sm:pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-up font-display text-xs tracking-[0.35em] text-gold",
						children: "Strażnicy Katowic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "enter-up mt-1 font-display text-5xl font-semibold tracking-[0.18em] text-gold sm:text-7xl",
						children: "BEBOKI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "enter-up mt-2 max-w-md text-sm leading-relaxed text-muted",
						children: "Punia węszy Serce Śląska. Beboki machają z dziedzińca — wejdź do osady."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "title-lineup enter-up mt-4 flex items-end justify-center gap-0 sm:gap-1",
						children: [
							LINEUP.slice(0, 2).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => openBuilding(b.home),
								className: "bg-transparent p-0",
								"aria-label": b.id,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
									who: b.id,
									size: 92,
									pose: "wave"
								})
							}, b.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => openBuilding("schronisko"),
								className: "bg-transparent p-0",
								"aria-label": "Punia",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
									who: "punia",
									size: 84,
									className: "is-wave mb-0.5"
								})
							}),
							LINEUP.slice(2).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => openBuilding(b.home),
								className: "bg-transparent p-0",
								"aria-label": b.id,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
									who: b.id,
									size: 92,
									pose: "wave"
								})
							}, b.id))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "enter-up mt-6 min-w-44",
						onClick: () => go("village"),
						children: "Wejdź do osady"
					})
				]
			})
		]
	});
}
var HOTSPOTS = [
	{
		id: "kopalnia",
		label: "Kopalnia",
		left: "6%",
		top: "34%",
		who: "hanys"
	},
	{
		id: "siedziba",
		label: "Siedziba",
		left: "38%",
		top: "26%",
		who: null
	},
	{
		id: "warsztat",
		label: "Warsztat",
		left: "16%",
		top: "52%",
		who: "fachura"
	},
	{
		id: "latarnia",
		label: "Latarnia",
		left: "68%",
		top: "20%",
		who: "podciep"
	},
	{
		id: "schronisko",
		label: "Schronisko",
		left: "72%",
		top: "54%",
		who: "hopla"
	}
];
var ROAM = [
	{
		id: "punia",
		left: "61%",
		top: "63%",
		size: 78,
		delay: "0s"
	},
	{
		id: "baczek",
		left: "81%",
		top: "66%",
		size: 68,
		delay: "0.4s"
	},
	{
		id: "burek",
		left: "69%",
		top: "72%",
		size: 82,
		delay: "0.8s"
	},
	{
		id: "reks",
		left: "52%",
		top: "69%",
		size: 76,
		delay: "0.2s"
	},
	{
		id: "figa",
		left: "86%",
		top: "56%",
		size: 62,
		delay: "1s"
	}
];
function Village() {
	const go = useGame((s) => s.go);
	const openBuilding = useGame((s) => s.openBuilding);
	const levels = useGame((s) => s.levels);
	const dogs = useGame((s) => s.dogs);
	const rescued = useGame((s) => s.rescued);
	const pets = useGame((s) => s.pets);
	const done = useGame((s) => s.done);
	const places = Object.values(done).filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-full min-h-0 flex-1 overflow-hidden bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/title-plaza.jpg",
				alt: "Osada pod Spodkiem",
				className: "absolute inset-0 h-full w-full object-cover object-[center_48%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "title-clouds",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "title-smoke",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "title-lantern",
				"aria-hidden": true
			}),
			HOTSPOTS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => openBuilding(h.id),
				style: {
					left: h.left,
					top: h.top
				},
				className: "absolute z-10 flex max-w-[46vw] min-h-11 items-center gap-1.5 rounded-md border border-gold bg-coal/88 py-1 pl-1 pr-2 text-left shadow-panel sm:max-w-none",
				children: [h.who ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Face, {
					who: h.who,
					size: 32
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-2xs tracking-wide text-fg sm:text-xs",
					children: [h.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-[0.65rem] text-faint",
						children: [
							"lv ",
							levels[h.id],
							h.id === "schronisko" && dogs > 0 ? ` · ${dogs} ${dogs === 1 ? "piesek" : "pieski"}` : "",
							h.id === "warsztat" ? " · podróż" : ""
						]
					})]
				})]
			}, h.id)),
			ROAM.filter((d) => rescued.includes(d.id)).map((d) => {
				const hungry = (pets[d.id]?.hunger ?? 50) < 28;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openBuilding("schronisko", d.id),
					style: {
						left: d.left,
						top: d.top
					},
					className: "absolute z-20 flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sprite-bob",
						style: { animationDelay: d.delay },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
							who: d.id,
							size: d.size
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-md border border-gold bg-coal/85 px-1.5 py-0.5 font-display text-[0.65rem] text-gold",
						children: [DOGS[d.id].name, hungry ? " · głód" : ""]
					})]
				}, d.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "pointer-events-none absolute left-3 top-3 z-10 max-w-[72%] font-display text-2xs tracking-wide text-gold",
				children: [
					"Osada · pieski biegają przy schronisku · miejsca ",
					places,
					"/4"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => openBuilding("schronisko"),
					children: "Pieski"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "gold",
					onClick: () => go("map"),
					children: "Mapa Katowic"
				})]
			})
		]
	});
}
function Win() {
	const mission = useGame((s) => s.mission);
	const last = useGame((s) => s.lastReward);
	const go = useGame((s) => s.go);
	const openBuilding = useGame((s) => s.openBuilding);
	const place = mission ? PLACES[mission] : null;
	const dogId = place?.dogs[0] ?? "punia";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/village.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-coal/75" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-gold",
						children: place ? place.title : "Powrót"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg",
						children: [last?.dog ? `${last.dog} wraca do schroniska.` : "Brygada wróciła.", " Nakarm pieska u Hopli. U Fachury złóż hulajnogę."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-end justify-center gap-4",
						children: [place ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {
							who: place.guide,
							size: 100
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DogImg, {
							who: dogId,
							size: 140,
							className: "sprite-bob"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-sm text-gold",
						children: DOGS[dogId].name
					}),
					last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-display text-sm tabular-nums text-gold-2",
						children: [
							"+",
							last.gold,
							" monet · +",
							last.coal,
							" węgla · +",
							last.cry,
							" odłamek"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => openBuilding("schronisko", dogId),
							children: "Do schroniska"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => go("village"),
							children: "Dziedziniec"
						})]
					})
				]
			})
		]
	});
}
function BebokiApp() {
	const screen = useGame((s) => s.screen);
	const toast = useGame((s) => s.toast);
	const setToast = useGame((s) => s.setToast);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useGame.persist.rehydrate()).then(() => {
			useGame.getState().tickPets();
		});
		const id = window.setInterval(() => useGame.getState().tickPets(), 12e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const id = window.setTimeout(() => setToast(""), 2600);
		return () => window.clearTimeout(id);
	}, [toast, setToast]);
	const showChrome = screen !== "title" && screen !== "win" && screen !== "brief" && screen !== "place" && screen !== "building";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [
			showChrome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative flex min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1 flex-col screen-hop",
					children: [
						screen === "title" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {}) : null,
						screen === "village" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Village, {}) : null,
						screen === "buildings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Buildings, {}) : null,
						screen === "building" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {}) : null,
						screen === "team" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}) : null,
						screen === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapScreen, {}) : null,
						screen === "missions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Missions, {}) : null,
						screen === "brief" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brief, {}) : null,
						screen === "place" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Place, {}) : null,
						screen === "win" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Win, {}) : null
					]
				}, screen)
			}),
			showChrome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}) : null,
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "pointer-events-none absolute bottom-24 left-1/2 z-30 w-[90%] max-w-sm -translate-x-1/2 rounded-lg border border-gold bg-coal px-4 py-2 text-center text-sm text-fg shadow-panel",
				children: toast
			}) : null
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BebokiApp, {});
}
//#endregion
export { DogImg as n, cn as r, routes_exports as t };
