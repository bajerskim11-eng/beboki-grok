import { BookOpen, ChevronLeft, Pickaxe, Wind, Droplets, Flame, Gem, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGame } from "@/lib/beboki-store";

const entries = [
  {
    name: "Skarbnik",
    type: "Strażnik podziemi",
    icon: Pickaxe,
    intro: "Ten, który zna drogi, których nie ma na mapach.",
    lore: "W śląskich opowieściach Skarbnik związany jest z kopalnią, podziemiem i losem górników. W naszej Sadze jego rola jest większa: pilnuje przejść między tym, co znane, a tym, co zostało pod ziemią. Kaganek i skrzyżowane narzędzia są znakami, które prowadzą do jego śladów.",
    clue: "Pukanie. Kaganek. Granica. Nie pytaj, czy drzwi są prawdziwe.",
  },
  {
    name: "Utopiec",
    type: "Duch wody",
    icon: Droplets,
    intro: "Ten, który pamięta rzeczy zabrane przez wodę.",
    lore: "Utopiec należy do śląskiego świata podań związanych z wodą. W Księdze jego obecność łączy podziemne zalewiska, stare szyby i pamięć miejsc, które zniknęły pod wodą. Nie każdy ślad prowadzi w dół — niektóre prowadzą pod powierzchnię wody.",
    clue: "Jeżeli woda jest nieruchoma, słuchaj. To, co pamięta, nie musi mówić.",
  },
  {
    name: "Bebok",
    type: "Strażnik dziecięcego strachu",
    icon: Flame,
    intro: "Dawny strach, który może stać się przewodnikiem.",
    lore: "Bebok jest częścią śląskiej tradycji opowieści o istotach, którymi straszono dzieci. W świecie gry beboki nie są tylko potworami. Są mieszkańcami Katowic i mogą prowadzić gracza przez miejsca, których dorośli przestali zauważać.",
    clue: "Czasem potwór z opowieści jest pierwszym, który pokaże ci drogę.",
  },
  {
    name: "Szarlej",
    type: "Trop podziemia",
    icon: Gem,
    intro: "Imię związane z kruszcem, wodą i dawną ziemią.",
    lore: "Szarlej prowadzi nas w stronę dawnych opowieści i miejsc związanych z górnictwem oraz kruszcami. W Bestiariuszu pozostaje tropem, którego kolejne części będziemy odkrywać wraz z prawdziwymi źródłami Śląska.",
    clue: "Nie każdy skarb jest tym, co można wyjąć ze skały.",
  },
  {
    name: "Serce Śląska",
    type: "Tajemnica / artefakt",
    icon: Gem,
    intro: "Kryształ, pamięć i pytanie ukryte pod miastem.",
    lore: "Serce jest fizycznym przedmiotem w centrum Sagi. Jego natura pozostaje tajemnicą. W opowieści łączy węgiel, minerały, wodę, ciśnienie i pamięć ludzi, którzy przez pokolenia schodzili pod ziemię.",
    clue: "Najważniejsze pytanie nie brzmi: gdzie jest Serce? Brzmi: czy Serce od dawna wie, że go szukają?",
  },
  {
    name: "Brama",
    type: "Przejście",
    icon: Wind,
    intro: "Znak, który nie oznacza miejsca. Otwiera drogę.",
    lore: "Michał odkrywa, że znak z kasetki nie jest zwykłym symbolem Skarbnika. Jest kluczem — fragmentem mapy. Kaganek wskazuje kierunek, skrzyżowane narzędzia prowadzą przez granicę, a środkowa figura otwiera trop do sieci przejść.",
    clue: "Znak nie jest instrukcją. Jest zamkiem.",
  },
  {
    name: "Michał",
    type: "Główny bohater",
    icon: MapPin,
    intro: "Słyszy miejsca, których inni nie słyszą.",
    lore: "Siedemnastoletni katowiczanin. Interesują go stare mapy, opuszczone miejsca i dźwięki budynków. Po dziadku odziedziczył metalową kasetkę i fotografię z Katowic z 1911 roku. Na fotografii znajduje własne nazwisko i datę swoich urodzin.",
    clue: "Jak trzy razy zapuka pod ziemią, nie pukaj czwarty raz.",
  },
];

export function Bestiary() {
  const go = useGame((s) => s.go);
  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#161311] text-[#eee5d2]">
      <header className="flex shrink-0 items-center justify-between border-b border-[#493c2c] bg-[#211c18] px-4 py-3">
        <div className="flex items-center gap-3"><BookOpen className="size-5 text-[#d4ad62]"/><div><p className="text-[10px] uppercase tracking-[0.22em] text-[#a99374]">Księga Serca Śląska</p><h1 className="font-serif text-xl">Bestiariusz</h1></div></div>
        <Button variant="ghost" size="icon" onClick={() => go("village")} aria-label="Wróć"><ChevronLeft /></Button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto p-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 max-w-2xl text-sm leading-6 text-[#b9ab93]">Postacie, miejsca i tropy odkrywane podczas gry. Każdy wpis może rozrastać się wraz z kolejnymi misjami.</p>
          <div className="grid gap-3 md:grid-cols-2">
            {entries.map(({ name, type, icon: Icon, intro, lore, clue }) => (
              <article key={name} className="group rounded-xl border border-[#493c2c] bg-[#211c18] p-4 shadow-[0_10px_35px_rgba(0,0,0,.22)] transition hover:border-[#80683f]">
                <div className="mb-3 flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className="grid size-11 place-items-center rounded-lg border border-[#655238] bg-[#171411]"><Icon className="size-5 text-[#d4ad62]"/></div><div><h2 className="font-serif text-lg">{name}</h2><p className="text-[10px] uppercase tracking-[0.16em] text-[#8f806a]">{type}</p></div></div></div>
                <p className="mb-3 text-sm font-medium text-[#d8c8ad]">{intro}</p>
                <p className="text-sm leading-6 text-[#aaa08f]">{lore}</p>
                <div className="mt-4 border-t border-[#3b3228] pt-3"><p className="text-xs leading-5 text-[#d4ad62]"><span className="mr-1 uppercase tracking-wider text-[#8f806a]">Trop:</span>{clue}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
