import Image from "next/image";
import ContactForm from "./ContactForm";
import ProjectGallery from "./ProjectGallery";
import VekaProfiles from "./VekaProfiles";

const services = [
  {
    title: "Dyer",
    text: "Dyer alumini dhe PVC per hyrje, ballkone, lokale dhe objekte banimi.",
    accent: "tech",
    icon: "door",
  },
  {
    title: "Dritare",
    text: "Dritare me izolim termik dhe akustik, te pershtatura sipas matjeve.",
    accent: "tech",
    icon: "window",
  },
  {
    title: "Roleta",
    text: "Roleta te jashtme dhe sisteme mbrojtese per hije, siguri dhe rehati.",
    accent: "roll",
    icon: "shutter",
  },
  {
    title: "Xhama palues",
    text: "Sisteme xhamash palues per ballkone, terasa dhe ambiente me hapje panoramike.",
    accent: "tech",
    icon: "foldingGlass",
  },
  {
    title: "Fasada ventiluese",
    text: "Fasada ventiluese per objekte moderne, me pamje te paster dhe qarkullim te mire ajri.",
    accent: "roll",
    icon: "facade",
  },
];

const highlights = [
  "Matje ne objekt",
  "Prodhim sipas porosise",
  "Montim profesional",
  "Servis dhe mirembajtje",
];

const products = [
  {
    title: "Dyer te jashtme",
    text: "Hyrje te sigurta dhe te qendrueshme per shtepi apo lokale.",
    icon: "door",
  },
  {
    title: "Dyer te brendshme",
    text: "Zgjidhje praktike me pamje te paster per ambiente te brendshme.",
    icon: "door",
  },
  {
    title: "Dritare PVC",
    text: "Izolim i mire termik dhe akustik, sipas matjeve ne objekt.",
    icon: "window",
  },
  {
    title: "Dritare alumini",
    text: "Profile moderne per objekte banimi dhe hapesira biznesi.",
    icon: "window",
  },
  {
    title: "Roleta alumini",
    text: "Mbrojtje nga dielli, privatese dhe siguri per dritare.",
    icon: "shutter",
  },
  {
    title: "Roleta elektrike",
    text: "Komoditet me hapje dhe mbyllje te kontrolluar elektrikisht.",
    icon: "electricShutter",
  },
  {
    title: "Xhama palues per ballkon",
    text: "Mbyllje elegante per ballkone dhe terasa me pamje panoramike.",
    icon: "foldingGlass",
  },
  {
    title: "Fasada ventiluese",
    text: "Sistem fasade per objekte moderne me qarkullim ajri.",
    icon: "facade",
  },
  {
    title: "Rrjeta kunder insekteve",
    text: "Rrjeta te pershtatura per dritare dhe dyer, praktike ne perdorim.",
    icon: "screen",
  },
  {
    title: "Aksesore dhe mekanizma",
    text: "Pjese percjellese, mekanizma dhe mirembajtje sipas nevojes.",
    icon: "mechanism",
  },
];

const vekaProfiles = [
  {
    title: "SOFTLINE 82 MD",
    text: "Sistemi inovativ per kursimin e energjise e cila permbush kerkesat e se ardhmes.",
    description:
      "SOFTLINE 82 MD eshte profil VEKA per dritare dhe dyer me fokus ne kursim energjie, izolim te larte dhe zgjidhje moderne per objektet qe kerkojne performance afatgjate.",
    uf: "Uf 1,0 W/(m2K)",
    depth: "82 mm",
    bestFor: "objekte me kerkesa te larta izolimi",
  },
  {
    title: "SOFTLINE 76 MD",
    text: "Dizajni klasik me performanca te larta.",
    description:
      "SOFTLINE 76 MD kombinon dizajn klasik me performance te larte per dritare dhe dyer. Eshte zgjidhje e balancuar per izolim, qendrueshmeri dhe pamje te paster.",
    uf: "Uf 1,1 W/(m2K)",
    depth: "76 mm",
    bestFor: "dritare dhe dyer efikase",
  },
  {
    title: "ARTLINE 82",
    text: "Elegance e persosur.",
    description:
      "ARTLINE 82 eshte profil per projekte ku pamja arkitekturore ka rendesi te madhe. Linjat e pastra krijojne dukje elegante dhe moderne per fasada, dritare dhe dyer.",
    uf: "Uf 1,0 W/(m2K)",
    depth: "82 mm",
    bestFor: "arkitekture moderne dhe pamje elegante",
  },
  {
    title: "SOFTLINE 70 AD",
    text: "Sistemi klasik dhe modern.",
    description:
      "SOFTLINE 70 AD eshte sistem klasik dhe modern per zgjidhje te qendrueshme. I pershtatet objekteve te ndryshme ku kerkohet profil praktik, i bukur dhe funksional.",
    uf: "Uf 1,3 W/(m2K)",
    depth: "70 mm",
    bestFor: "banesa dhe lokale",
  },
  {
    title: "SWINGLINE",
    text: "Sistemi konturave te rrumbullaketa.",
    description:
      "SWINGLINE sjell kontura te rrumbullaketa dhe pamje me te bute vizuale. Eshte i pershtatshem per objekte qe kerkojne profil me karakter dekorativ.",
    uf: "Uf 1,3 W/(m2K)",
    depth: "70 mm",
    bestFor: "dizajn me kontura te buta",
  },
  {
    title: "SOFTLINE 70 MD",
    text: "Sistemi i dizajnit klasik me tre gomina mbyllese.",
    description:
      "SOFTLINE 70 MD perdor dizajn klasik me tre gomina mbyllese, duke ndihmuar ne izolim dhe mbyllje te sigurt per dritare dhe dyer.",
    uf: "Uf 1,2 W/(m2K)",
    depth: "70 mm",
    bestFor: "mbyllje e sigurt dhe izolim",
  },
  {
    title: "EFFECTLINE",
    text: "Sistemi ekonomik per objekte te banimit dhe te biznesit.",
    description:
      "EFFECTLINE eshte sistem ekonomik VEKA per objekte banimi dhe biznesi. Ofron zgjidhje praktike per projekte ku kerkohet raport i mire mes cilesise, funksionit dhe kostos.",
    uf: "Uf 1,3 W/(m2K)",
    depth: "70 mm",
    bestFor: "zgjidhje ekonomike per objekte",
  },
];

const projects = [
  {
    title: "Roleta per objekt banimi",
    category: "Roleta alumini",
    image: "/projects/project-01.jpg",
    width: 590,
    height: 443,
  },
  {
    title: "Mbyllje ballkoni me xhama",
    category: "Xhama palues",
    image: "/projects/project-02.jpg",
    width: 590,
    height: 443,
  },
  {
    title: "Sistem roletash ne fasade",
    category: "Roleta te jashtme",
    image: "/projects/project-03.jpg",
    width: 590,
    height: 443,
  },
  {
    title: "Punim teknik per ballkon",
    category: "Xhama dhe profile",
    image: "/projects/project-04.jpg",
    width: 434,
    height: 590,
  },
  {
    title: "Roleta me montim te paster",
    category: "Montim profesional",
    image: "/projects/project-05.jpg",
    width: 590,
    height: 443,
  },
  {
    title: "Projekt i realizuar KENZA",
    category: "Dyer, dritare, roleta",
    image: "/projects/project-06.jpg",
    width: 960,
    height: 536,
  },
];

function ServiceIcon({ type }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 48 48",
  };

  const icons = {
    door: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M15 42V8h20v34" />
        <path d="M11 42h28" />
        <path d="M30 26h.01" />
      </svg>
    ),
    window: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M9 10h30v28H9z" />
        <path d="M24 10v28" />
        <path d="M9 24h30" />
      </svg>
    ),
    shutter: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M10 9h28v30H10z" />
        <path d="M14 15h20" />
        <path d="M14 21h20" />
        <path d="M14 27h20" />
        <path d="M14 33h20" />
      </svg>
    ),
    electricShutter: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M9 10h21v28H9z" />
        <path d="M13 16h13" />
        <path d="M13 22h13" />
        <path d="M13 28h13" />
        <path d="M35 10v12" />
        <path d="m31 22 4 5 4-5" />
        <path d="M35 27v11" />
      </svg>
    ),
    foldingGlass: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M8 38V10h32v28" />
        <path d="M16 10v28" />
        <path d="M24 10v28" />
        <path d="M32 10v28" />
        <path d="m16 38 8-28 8 28" />
      </svg>
    ),
    facade: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M10 39V9h28v30" />
        <path d="M16 14h5" />
        <path d="M27 14h5" />
        <path d="M16 22h5" />
        <path d="M27 22h5" />
        <path d="M16 30h5" />
        <path d="M27 30h5" />
        <path d="M8 39h32" />
      </svg>
    ),
    screen: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M9 10h30v28H9z" />
        <path d="M15 10v28" />
        <path d="M21 10v28" />
        <path d="M27 10v28" />
        <path d="M33 10v28" />
        <path d="M9 16h30" />
        <path d="M9 22h30" />
        <path d="M9 28h30" />
        <path d="M9 34h30" />
      </svg>
    ),
    mechanism: (
      <svg aria-hidden="true" {...commonProps}>
        <path d="M24 16a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
        <path d="M24 8v5" />
        <path d="M24 35v5" />
        <path d="m12.7 12.7 3.5 3.5" />
        <path d="m31.8 31.8 3.5 3.5" />
        <path d="M8 24h5" />
        <path d="M35 24h5" />
        <path d="m12.7 35.3 3.5-3.5" />
        <path d="m31.8 16.2 3.5-3.5" />
      </svg>
    ),
  };

  return icons[type] ?? icons.window;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KENZA Roll dhe KENZA Tech">
          <Image
            src="/kenza-roll-logo.jpg"
            alt="KENZA Roll"
            width={1659}
            height={196}
            priority
          />
          <span />
          <Image
            src="/kenza-tech-logo.jpg"
            alt="KENZA Tech"
            width={1791}
            height={225}
            priority
          />
        </a>

        <nav aria-label="Navigimi kryesor">
          <a href="#sherbime">Sherbime</a>
          <a href="#produkte">Produkte</a>
          <a href="#profilet">Profilet</a>
          <a href="#projekte">Projekte</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">KENZA Roll & KENZA Tech</p>
          <h1>Dyer, dritare, roleta, xhama palues dhe fasada ventiluese.</h1>
          <p className="lead">
            Zgjidhje moderne per shtepi, lokale dhe objekte biznesi, me fokus
            ne izolim, siguri, pamje te paster dhe funksionalitet afatgjate.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#kontakt">
              Kerko oferte
            </a>
            <a className="btn secondary" href="#profilet">
              Profilet VEKA
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Dyer, dritare, roleta, xhama palues dhe fasada ventiluese"
        >
          <div className="house-frame">
            <div className="window-unit left">
              <span />
              <span />
            </div>
            <div className="door-unit">
              <span />
            </div>
            <div className="window-unit right">
              <span />
              <span />
            </div>
            <div className="roller-shutter">
              {Array.from({ length: 11 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sherbime" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Cfare ofrojme</p>
          <h2>Zgjidhje te plota per fasaden dhe ambientin tuaj.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card ${service.accent}`} key={service.title}>
              <div className="service-icon" aria-hidden="true">
                <ServiceIcon type={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="brand-panel roll-panel">
          <Image
            src="/kenza-roll-logo.jpg"
            alt="KENZA Roll"
            width={1659}
            height={196}
          />
          <p>
            Specializim ne roleta, sisteme mbrojtese dhe zgjidhje praktike per
            hije, privatese dhe siguri.
          </p>
        </div>
        <div className="brand-panel tech-panel">
          <Image
            src="/kenza-tech-logo.jpg"
            alt="KENZA Tech"
            width={1791}
            height={225}
          />
          <p>
            Dyer, dritare, xhama palues dhe fasada ventiluese me materiale
            cilesore, profil modern dhe montim te kujdesshem.
          </p>
        </div>
      </section>

      <section id="produkte" className="section products-section">
        <div className="section-heading compact">
          <p className="eyebrow">Produkte</p>
          <h2>Per banesa, lokale dhe objekte komerciale.</h2>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <span className="product-icon" aria-hidden="true">
                <ServiceIcon type={product.icon} />
              </span>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="profilet" className="section veka-section">
        <div className="section-heading">
          <p className="eyebrow">Profilet VEKA</p>
          <h2>Profile PVC per dritare dhe dyer me performanca te larta.</h2>
        </div>

        <div className="veka-intro">
          <div>
            <span>VEKA Profile</span>
            <p>
              Modelet me te njohura VEKA per dritare dhe dyer, te paraqitura
              qarte per zgjedhje me te lehte sipas izolimit, dizajnit dhe
              nevojes se objektit.
            </p>
          </div>
          <strong>7 sisteme profili</strong>
        </div>

        <VekaProfiles profiles={vekaProfiles} />
      </section>

      <section id="projekte" className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Projektet</p>
          <h2>Projekte te realizuara nga KENZA Roll & Tech.</h2>
        </div>

        <ProjectGallery projects={projects} />
      </section>

      <section className="process-section">
        <div>
          <p className="eyebrow">Procesi</p>
          <h2>Nga matja deri te montimi.</h2>
        </div>

        <div className="steps">
          {highlights.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Kontakt</p>
          <h2>Gati per matje ose oferte?</h2>
          <p>
            Na kontaktoni per dyer, dritare dhe roleta sipas dimensioneve te
            objektit tuaj. Kryejme edhe xhama palues dhe fasada ventiluese ne
            Komoran dhe zonat perreth.
          </p>

          <div className="contact-info">
            <a href="tel:+38344467351">
              <span>Telefon</span>
              044 467 351
            </a>
            <p>
              <span>Adresa</span>
              Komoran, Drenas
            </p>
            <a href="https://wa.me/38344467351">
              <span>WhatsApp</span>
              Dergo mesazh
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <footer>
        <p>KENZA Roll & KENZA Tech</p>
        <p>Dyer | Dritare | Roleta | Xhama palues | Fasada ventiluese</p>
      </footer>
    </main>
  );
}
