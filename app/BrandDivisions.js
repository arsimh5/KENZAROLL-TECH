import Image from "next/image";

export default function BrandDivisions() {
  return (
    <section className="split-section" aria-label="KENZA Roll dhe KENZA Tech">
      <article className="brand-panel roll-panel" aria-label="KENZA Roll">
        <span className="brand-kicker">Mbrojtje dhe komoditet</span>
        <Image src="/kenza-roll-logo.jpg" alt="KENZA Roll" width={1659} height={196} />
        <p>
          Specializim ne roleta, sisteme mbrojtese dhe zgjidhje praktike per
          hije, privatese dhe siguri.
        </p>
      </article>
      <article className="brand-panel tech-panel" aria-label="KENZA Tech">
        <span className="brand-kicker">Sisteme per objektin</span>
        <Image src="/kenza-tech-logo.jpg" alt="KENZA Tech" width={1791} height={225} />
        <p>
          Dyer, dritare, xhama palues dhe fasada ventiluese me materiale
          cilesore, profil modern dhe montim te kujdesshem.
        </p>
      </article>
    </section>
  );
}
