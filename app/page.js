import Image from "next/image";
import ProjectGallery from "./ProjectGallery";

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
  "Dyer te jashtme",
  "Dyer te brendshme",
  "Dritare PVC",
  "Dritare alumini",
  "Roleta alumini",
  "Roleta elektrike",
  "Xhama palues per ballkon",
  "Fasada ventiluese",
  "Rrjeta kunder insekteve",
  "Aksesore dhe mekanizma",
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
            <a className="btn secondary" href="#produkte">
              Shiko produktet
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
            <span key={product}>{product}</span>
          ))}
        </div>
      </section>

      <section id="projekte" className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Projektet</p>
          <h2>Punime reale nga faqja publike KenzaRoll.</h2>
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
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Gati per matje ose oferte?</h2>
          <p>
            Na kontaktoni per dyer, dritare dhe roleta sipas dimensioneve te
            objektit tuaj. Kryejme edhe xhama palues dhe fasada ventiluese ne
            Komoran dhe zonat perreth.
          </p>
        </div>

        <div className="contact-actions">
          <a className="btn primary" href="tel:+38344467351">
            044 467 351
          </a>
          <a className="btn whatsapp" href="https://wa.me/38344467351">
            WhatsApp
          </a>
          <a
            className="btn secondary"
            href="https://www.facebook.com/profile.php?id=100054425593621"
            rel="noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </section>

      <footer>
        <p>KENZA Roll & KENZA Tech</p>
        <p>Dyer | Dritare | Roleta | Xhama palues | Fasada ventiluese</p>
      </footer>
    </main>
  );
}
