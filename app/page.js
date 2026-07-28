import Image from "next/image";
import ContactForm from "./ContactForm";
import ProductBrands from "./ProductBrands";
import ProjectGallery from "./ProjectGallery";

const highlights = [
  "Matje ne objekt",
  "Prodhim sipas porosise",
  "Montim profesional",
  "Servis dhe mirembajtje",
];

const metrics = [
  { value: "10+", label: "kategori produktesh" },
  { value: "3", label: "marka PVC" },
  { value: "1", label: "ekip per matje dhe montim" },
];

const products = [
  {
    title: "Dyer te jashtme",
    text: "Hyrje te sigurta dhe te qendrueshme per shtepi apo lokale.",
    icon: "door",
    image: "/products/dyer-te-jashtme.png",
  },
  {
    title: "Dyer te brendshme",
    text: "Zgjidhje praktike me pamje te paster per ambiente te brendshme.",
    icon: "door",
    image: "/products/dyer-te-brendshme.png",
  },
  {
    title: "Dritare PVC",
    text: "Izolim i mire termik dhe akustik, sipas matjeve ne objekt.",
    icon: "window",
    image: "/products/dritare-pvc.png",
  },
  {
    title: "Dritare alumini",
    text: "Sisteme moderne per objekte banimi dhe hapesira biznesi.",
    icon: "window",
    image: "/products/dritare-alumini.png",
  },
  {
    title: "Roleta alumini",
    text: "Mbrojtje nga dielli, privatese dhe siguri per dritare.",
    icon: "shutter",
    image: "/products/roleta-alumini.png",
  },
  {
    title: "Roleta elektrike",
    text: "Komoditet me hapje dhe mbyllje te kontrolluar elektrikisht.",
    icon: "electricShutter",
    image: "/products/roleta-elektrike.png",
  },
  {
    title: "Xhama palues per ballkon",
    text: "Mbyllje elegante per ballkone dhe terasa me pamje panoramike.",
    icon: "foldingGlass",
    image: "/products/xhama-palues.png",
  },
  {
    title: "Fasada ventiluese",
    text: "Sistem fasade per objekte moderne me qarkullim ajri.",
    icon: "facade",
    image: "/products/fasada-ventiluese.png",
  },
  {
    title: "Rrjeta kunder insekteve",
    text: "Rrjeta te pershtatura per dritare dhe dyer, praktike ne perdorim.",
    icon: "screen",
    image: "/products/rrjeta-kunder-insekteve.png",
  },
  {
    title: "Aksesore dhe mekanizma",
    text: "Pjese percjellese, mekanizma dhe mirembajtje sipas nevojes.",
    icon: "mechanism",
    image: "/products/aksesore-mekanizma.png",
  },
];

const brandProducts = [
  {
    title: "Produktet VEKA",
    brand: "VEKA",
    text: "Produkte VEKA per dritare dhe dyer PVC, te pershtatura per izolim, qendrueshmeri dhe pamje te paster.",
    description:
      "Per dritare dhe dyer PVC perdorim edhe produkte VEKA, te zgjedhura sipas kerkeses se objektit per izolim, dizajn dhe perdorim afatgjate.",
    uf: "Dritare dhe dyer",
    depth: "PVC",
    bestFor: "objekte banimi dhe biznesi",
  },
  {
    title: "Produktet Salamander",
    brand: "Salamander",
    text: "Produkte Salamander per dritare dhe dyer PVC me fokus ne funksionalitet dhe izolim te mire.",
    description:
      "Produktet Salamander jane pjese e ofertes per dritare dhe dyer PVC. Zgjedhja behet sipas dimensioneve, stilit te objektit dhe nevojes per izolim.",
    uf: "Dritare dhe dyer",
    depth: "PVC",
    bestFor: "zgjidhje moderne per shtepi dhe lokale",
  },
  {
    title: "Produktet Baufens",
    brand: "Baufens",
    text: "Produkte Baufens per dritare dhe dyer PVC, praktike per projekte te ndryshme dhe montim te paster.",
    description:
      "Produktet Baufens perdoren per dritare dhe dyer PVC ne projekte ku kerkohet zgjidhje funksionale, e qendrueshme dhe e pershtatur me buxhetin.",
    uf: "Dritare dhe dyer",
    depth: "PVC",
    bestFor: "banesa, lokale dhe objekte biznesi",
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
    category: "Xhama dhe sisteme",
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

        <nav className="main-nav" aria-label="Navigimi kryesor">
          <a href="#top">Ballina</a>
          <a href="#sherbime">Sherbime</a>
          <a href="#markat">Markat</a>
          <a href="#projekte">Projekte</a>
          <a href="#kontakt" className="nav-cta">
            Kontakt
          </a>
        </nav>
      </header>

      <section id="top" className="top-projects-hero">
        <div id="projekte">
          <ProjectGallery projects={projects} variant="hero" />
        </div>
      </section>

      <section id="sherbime" className="section services-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cfare ofrojme</p>
            <div className="metric-strip" aria-label="Permbledhje e sherbimeve">
              {metrics.map((metric) => (
                <span key={metric.label}>
                  <strong>{metric.value}</strong>
                  {metric.label}
                </span>
              ))}
            </div>
          </div>
          <h2>Dyer, dritare, roleta dhe sisteme moderne per objektin tuaj.</h2>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-media">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={590}
                  height={443}
                />
              </div>
              <div className="product-content">
                <span>{product.title.split(" ")[0]}</span>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="brand-panel roll-panel">
          <span className="brand-kicker">Mbrojtje dhe komoditet</span>
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
          <span className="brand-kicker">Sisteme per objektin</span>
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

      <section id="markat" className="section veka-section">
        <div className="section-heading">
          <p className="eyebrow">Markat qe perdorim</p>
          <h2>Perdorim produkte VEKA, Salamander dhe Baufens.</h2>
        </div>

        <div className="veka-intro">
          <div>
            <span>VEKA | Salamander | Baufens</span>
            <p>
              Per dritare dhe dyer PVC perdorim produkte nga VEKA, Salamander
              dhe Baufens. Zgjedhja behet sipas izolimit, dizajnit,
              dimensioneve dhe nevojes se objektit.
            </p>
          </div>
          <strong>3 marka produktesh</strong>
        </div>

        <ProductBrands products={brandProducts} />
      </section>

      <section className="process-section">
        <div>
          <p className="eyebrow">Procesi</p>
          <h2>Nga matja deri te montimi.</h2>
          <p>
            Proces i qarte per porosi sipas dimensioneve, me komunikim direkt
            dhe montim te kujdesshem ne objekt.
          </p>
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
