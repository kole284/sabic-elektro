const services = [
  "Elektro instalacije za stanove, kuće i poslovne prostore",
  "Zamjena i uređenje razvodnih tabli",
  "LED rasvjeta, prekidači, utičnice i pametna rješenja",
  "Hitne intervencije, dijagnostika kvarova i sanacija opterećenja",
];

const stats = [
  ["24h", "brz odgovor za hitne kvarove"],
  ["100%", "uredno izvedene i testirane instalacije"],
  ["0", "kompromisa oko sigurnosti"],
];

const process = [
  "Pregled prostora i dogovor prioriteta",
  "Jasna ponuda bez skrivenih troškova",
  "Precizna izvedba sa urednim završetkom",
  "Testiranje, savjet i garancija na rad",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      <section className="hero-shell">
        <div className="hero-image" aria-hidden="true">
          <div className="energy-ring energy-ring-large" />
          <div className="energy-ring energy-ring-small" />
          <div className="lightning-core" />
        </div>

        <nav className="site-nav" aria-label="Glavna navigacija">
          <a href="#" className="brand">
            <span className="brand-mark">SE</span>
            <span>Sabic Elektro</span>
          </a>
          <div className="nav-links">
            <a href="#usluge">Usluge</a>
            <a href="#proces">Proces</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Elektro radovi bez rizika i čekanja</p>
          <h1>Sigurne instalacije. Čist rad. Moderna izvedba.</h1>
          <p className="hero-copy">
            Profesionalni električarski radovi za domove i poslovne prostore:
            od kompletnih instalacija i razvodnih tabli do rasvjete, kvarova i
            hitnih intervencija.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Zatraži ponudu
            </a>
            <a href="tel:+38760000000" className="btn btn-secondary">
              Pozovi odmah
            </a>
          </div>
          <div className="hero-note">
            <span />
            Dostupno za Sarajevo i okolinu, uz dogovor za veće projekte.
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Prednosti">
        {stats.map(([value, label]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="usluge">
        <div className="section-heading">
          <p className="eyebrow">Šta radimo</p>
          <h2>Elektrika izvedena da traje, izgleda uredno i radi pouzdano.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service}</h3>
              <p>
                Planiranje, materijal i završna provjera se rade sistematski,
                tako da dobiješ stabilnu instalaciju i uredan prostor.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="proces">
        <div>
          <p className="eyebrow">Proces</p>
          <h2>Od prvog poziva do uključenog osigurača, sve je jasno.</h2>
          <p>
            Prije rada se provjerava stanje instalacija, opterećenje i realan
            obim posla. Nakon izvedbe dobijaš pregled šta je urađeno i šta
            treba pratiti.
          </p>
        </div>
        <ol className="process-list">
          {process.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="safety-band">
        <div>
          <p className="eyebrow">Warning red mindset</p>
          <h2>Crvena je signal: sigurnost se ne preskače.</h2>
        </div>
        <p>
          Svaki spoj, kabl, osigurač i potrošač se tretira kao kritična tačka.
          Cilj nije samo da radi, nego da radi stabilno, uredno i sigurno.
        </p>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="contact-copy">
          <p className="eyebrow">Kontakt</p>
          <h2>Treba ti električar koji dolazi pripremljen?</h2>
          <p>
            Pošalji kratak opis posla, lokaciju i par fotografija ako ih imaš.
            Dobit ćeš jasan prijedlog sljedećeg koraka.
          </p>
        </div>
        <div className="contact-card">
          <a href="tel:+38760000000">+387 60 000 000</a>
          <a href="mailto:info@sabicelektro.ba">info@sabicelektro.ba</a>
          <span>Radni dani 08:00 - 18:00</span>
          <a href="tel:+38760000000" className="btn btn-primary">
            Zakaži izlazak
          </a>
        </div>
      </section>
    </main>
  );
}
