import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/serce-slaska')({ component: SerceSlaska })

const creatures = [
  ['Skarbnik', 'Strażnik tego, czego człowiek nie powinien znaleźć'],
  ['Utopiec', 'Ten, który pamięta rzeczy zabrane przez wodę'],
  ['Bebok', 'Dawny strach, który dziś może stać się przewodnikiem'],
  ['Szarlej', 'Imię związane z podziemiem, kruszcem i wodą'],
]

function SerceSlaska() {
  return (
    <main className="heart-page">
      <header className="heart-nav">
        <Link to="/" className="brand">BEBOKI <span>•</span> SERCE ŚLĄSKA</Link>
        <nav>
          <a href="#historia">Historia</a>
          <a href="#bestiariusz">Bestiariusz</a>
          <a href="#znaki">Znaki</a>
          <a href="#zrodla">Źródła</a>
        </nav>
      </header>

      <section className="hero-heart">
        <div className="hero-copy">
          <div className="eyebrow">ARCHIWUM • OPOWIEŚĆ • TAJEMNICA</div>
          <h1>Serce<br/><em>Śląska</em></h1>
          <p>Nie każda legenda jest bajką. Nie każda prawda została zapisana. A niektóre rzeczy najlepiej było zostawić pod ziemią.</p>
          <a className="gold-btn" href="#historia">Czytaj pierwszy wątek ↓</a>
        </div>
        <div className="bebok-orb" aria-label="Bebok strzegący serca">
          <div className="ear left"/><div className="ear right"/>
          <div className="bebok-head"><div className="eye e1"/><div className="eye e2"/><div className="nose"/><div className="mouth"/></div>
          <div className="heart-stone">♥</div>
        </div>
      </section>

      <section id="historia" className="story-section">
        <div className="chapter-mark">I</div>
        <div className="story-label">PIERWSZY WĄTEK • ZAPADŁA KOPALNIA</div>
        <h2>O tym, co zostało<br/><em>pod wodą</em></h2>
        <div className="story-text">
          <p>Najpierw była woda.</p>
          <p>Nie taka, którą widzi człowiek, kiedy stoi nad stawem i rzuca kamień. Ta woda przyszła z dołu. Weszła w chodniki, zamknęła szyby i przykryła miejsca, w których jeszcze dzień wcześniej pracowali ludzie.</p>
          <p>Starzy górnicy mówili, że ziemia nie zabiera niczego za darmo.</p>
          <p>W jednej z opowieści pojawia się człowiek, który wrócił pod ziemię po latach. Nie szukał złota. Szukał swojego ojca.</p>
          <p>Przy starym wejściu znalazł trzy rzeczy: zardzewiały krzyżyk, lampę bez płomienia i kamień, który był ciepły mimo zimna.</p>
          <p>Wtedy usłyszał <strong>trzy uderzenia</strong>.</p>
          <p>Nie odpowiedział.</p>
          <p>Trzy kolejne.</p>
          <p>Wtedy przypomniał sobie słowa dziadka:</p>
          <blockquote>„Jak pod ziemią ktoś cię woła, nie pytaj kto. Najpierw zobacz, czy masz jeszcze cień.”</blockquote>
          <p>Zapalił lampę.</p>
          <p>Płomień pojawił się sam.</p>
          <p>A na ścianie, tam gdzie przed chwilą była tylko czarna skała, zobaczył znak przypominający serce.</p>
          <p>Nie wiedział jeszcze, że w starych opowieściach Śląska <strong>woda, podziemie, skarb i zakaz</strong> wracają wciąż w nowych miejscach i pod różnymi imionami.</p>
          <p>I że Skarbnik nie zawsze pilnuje skarbu.</p>
          <p>Czasem pilnuje tego, <em>czego człowiek nie powinien pamiętać</em>.</p>
        </div>
        <div className="story-note">FIKCJA SAGI • Ten rozdział jest autorską historią inspirowaną motywami folklorystycznymi. Nie przedstawiamy go jako historycznego podania.</div>
      </section>

      <section id="bestiariusz" className="archive-section">
        <div className="story-label">ARCHIWUM POSTACI</div>
        <h2>Ci, którzy <em>już byli</em></h2>
        <div className="creature-grid">{creatures.map(([name, desc]) => <article className="creature-card" key={name}><div className="mini-bebok">{name[0]}</div><div><h3>{name}</h3><p>{desc}</p><span>REKORD DO WERYFIKACJI ŹRÓDŁOWEJ</span></div></article>)}</div>
      </section>

      <section id="znaki" className="archive-section dark-panel">
        <div className="story-label">ZNAKI • PRZEDMIOTY • ZAKAZY</div>
        <h2>Nie wymyślamy <em>zaklęć</em></h2>
        <div className="sigils"><div><b>✚</b><span>ochrona</span></div><div><b>☽</b><span>noc / granica</span></div><div><b>ᚲ</b><span>znak do weryfikacji</span></div><div><b>♥</b><span>nasz znak Serca</span></div></div>
        <p className="archive-rule">Każdy autentyczny znak dostanie osobny rekord: <b>forma → znaczenie → miejsce → data zapisu → źródło → wariant.</b> Symbole pokazane jako „nasze” nie są przedstawiane jako dawna magia.</p>
      </section>

      <section id="zrodla" className="archive-section">
        <div className="story-label">ŹRÓDŁOWNIA</div>
        <h2>Najpierw <em>źródła</em>.</h2>
        <div className="sources"><a href="https://cejsh.icm.edu.pl/cejsh/element/bwmeta1.element.ojs-doi-10_4467_20844077SR_25_011_22895" target="_blank">Spurgiasz — górnośląska demonologia</a><a href="https://bajka.umk.pl/slownik/lista-hasel/haslo/?id=268" target="_blank">Słownik polskiej bajki ludowej — Śląsk</a><a href="https://obc.opole.pl/dlibra/publication/695/edition/630/content" target="_blank">Kühnau — Schlesische Sagen II</a><a href="https://sbc.org.pl/de/dlibra/publication/323069" target="_blank">Kühnau — Schlesische Sagen III</a></div>
      </section>

      <footer>❤️ SERCE ŚLĄSKA · ARCHIWUM ROBOCZE · ŹRÓDŁO I FIKCJA ZAWSZE ODDZIELONE</footer>
    </main>
  )
}
