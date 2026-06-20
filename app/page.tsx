import Image from "next/image";

const services = [
  ["Električne instalacije", "Izrada, popravka i provjera instalacija za stanove, kuće i poslovne prostore."],
  ["Priključivanje štednjaka", "Stručno i sigurno priključivanje električnih štednjaka i jačih potrošača."],
  ["Sanacija kablova", "Popravka oštećenja kablova, od manjih mehaničkih kvarova do štete nakon požara."],
  ["Utičnice i prekidači", "Zamjena, dodavanje i uredno povezivanje utičnica, prekidača i rasvjetnih tačaka."],
  ["Hitne intervencije", "Dijagnostika kvarova, nestanak struje, kratki spojevi i preopterećenja instalacije."],
  ["Rasvjeta", "Montaža rasvjete, LED sistema, plafonjera i sigurnih spojeva bez improvizacije."],
];

const stats = [
  ["15-30", "minuta za dolazak kod hitnih zahtjeva"],
  ["24/7", "dostupno nedjeljom, praznicima i noću"],
  ["365", "dana u godini za Zenicu i okolinu"],
];

const process = [
  "Poziv i kratak opis problema",
  "Brza procjena hitnosti i dogovor dolaska",
  "Dijagnostika kvara ili potrebnog priključka",
  "Sigurna izvedba, testiranje i objašnjenje urađenog",
];

const responseCards = [
  ["Brzo na licu mjesta", "Svaka minuta je važna. Dolazimo za 15-30 minuta, bez obzira na veličinu zahtjeva."],
  ["Uvijek dostupno", "24/7, 365 dana u godini, uključujući nedjelje i praznike. Uvijek smo tu za vas."],
  ["Pouzdan majstor", "Jedan poziv je dovoljan da dobijete stručnu pomoć za kvar, priključak ili provjeru instalacije."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      <section className="hero-shell">
        <div className="hero-image" aria-hidden="true">
          <div className="hero-brand-wrap">
            <Image
              className="hero-brand-art"
              src="/brand/sabic-logo"
              alt=""
              width={1254}
              height={1254}
              priority
              unoptimized
            />
          </div>
          <div className="energy-ring energy-ring-large" />
          <div className="energy-ring energy-ring-small" />
          <div className="lightning-core" />
        </div>

        <nav className="site-nav" aria-label="Glavna navigacija">
          <a href="#" className="brand desktop-brand">
            <span className="brand-mark">
              <Image
                src="/brand/logo-bez-teksta.png"
                alt=""
                width={1254}
                height={1254}
                priority
                unoptimized
              />
            </span>
            <span>Šabić Elektro</span>
          </a>
          <details className="mobile-brand-menu">
            <summary className="brand mobile-brand-trigger">
              <span className="brand-mark">
                <Image
                  src="/brand/logo-bez-teksta.png"
                  alt=""
                  width={1254}
                  height={1254}
                  priority
                  unoptimized
                />
              </span>
              <span>Šabić Elektro</span>
              <span className="burger-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </summary>
            <div className="mobile-nav-panel">
              <a href="#usluge">Usluge</a>
              <a href="#hitno">Hitno</a>
              <a href="#proces">Proces</a>
              <a href="#kontakt">Kontakt</a>
            </div>
          </details>
          <div className="nav-links">
            <a href="#usluge">Usluge</a>
            <a href="#hitno">Hitno</a>
            <a href="#proces">Proces</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Vaš električar u Zenici i okolici</p>
          <h1>Brza pomoć kod svih električnih problema.</h1>
          <p className="hero-copy">
            Šabić elektroinstalacije su vaši pouzdani stručnjaci za električne
            potrebe. Ako vam treba profesionalna i sigurna pomoć, udaljeni smo
            samo jedan telefonski poziv.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Pozovi električara
            </a>
            <a href="tel:+38760000000" className="btn btn-secondary">
              Hitna intervencija
            </a>
          </div>
          <div className="hero-note">
            <span />
            Dolazak u Zenici i okolici, za hitne kvarove i planirane radove.
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
          <p className="eyebrow">Usluge</p>
          <h2>Od priključivanja štednjaka do popravke oštećenih kablova.</h2>
        </div>
        <div className="service-grid">
          {services.map(([title, text], index) => (
            <article className="service-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="response-band" id="hitno">
        <div className="response-section">
          <div className="response-copy">
            <p className="eyebrow">Brza reakcija</p>
            <h2>Električni problem ne čeka radno vrijeme.</h2>
            <p>
              Kada nestane struje, osjeti se miris paljevine, izbaci osigurač
              ili treba sigurno priključiti uređaj, fokus je na brzom dolasku i
              sigurnom rješenju bez improvizacije.
            </p>
          </div>
          <div className="response-grid">
            {responseCards.map(([title, text]) => (
              <article className="response-card" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section" id="proces">
        <div>
          <p className="eyebrow">Proces</p>
          <h2>Jasan postupak od prvog poziva do sigurnog uključivanja.</h2>
          <p>
            Prvo se provjerava stvarni uzrok problema, zatim se radi popravka
            ili priključak. Na kraju se testira spoj, opterećenje i sigurnost
            rada.
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
          <p className="eyebrow">Sigurnost prvo</p>
          <h2>Crvena je upozorenje: elektrika se ne rješava napamet.</h2>
        </div>
        <p>
          Svaki kabl, osigurač, utičnica i potrošač se tretira kao kritična
          tačka. Cilj nije samo da ponovo radi, nego da radi stabilno, uredno i
          sigurno.
        </p>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="contact-copy">
          <p className="eyebrow">Kontakt</p>
          <h2>Treba vam električar u blizini?</h2>
          <p>
            Pozovite i opišite problem, lokaciju i da li je hitno. Za kvarove,
            priključivanje uređaja i sanaciju kablova dolazimo pripremljeni.
          </p>
        </div>
        <div className="contact-card">
          <Image
            className="contact-logo"
            src="/brand/sabic-logo"
            alt="Šabić elektroinstalacijska rješenja"
            width={1254}
            height={1254}
          />
          <a href="tel:+38760000000">+387 60 000 000</a>
          <a href="mailto:info@sabicelektro.ba">info@sabicelektro.ba</a>
          <span>Zenica i okolica | 24/7 hitne intervencije</span>
          <a href="tel:+38760000000" className="btn btn-primary">
            Pozovi odmah
          </a>
        </div>
      </section>
    </main>
  );
}
