export const highlights = [
  "Matje ne objekt",
  "Prodhim sipas porosise",
  "Montim profesional",
  "Servis dhe mirembajtje",
];

export const metrics = [
  { value: "9", label: "kategori produktesh" },
  { value: "3", label: "marka PVC" },
  { value: "1", label: "ekip per matje dhe montim" },
];

export const services = [
  { title: "Dyer te jashtme", text: "Hyrje te sigurta dhe te qendrueshme per shtepi apo lokale.", image: "/products/dyer-te-jashtme.png" },
  { title: "Dritare PVC", text: "Izolim i mire termik dhe akustik, sipas matjeve ne objekt.", image: "/products/dritare-pvc.png" },
  { title: "Dritare alumini", text: "Sisteme moderne per objekte banimi dhe hapesira biznesi.", image: "/products/dritare-alumini.png" },
  { title: "Roleta alumini", text: "Mbrojtje nga dielli, privatese dhe siguri per dritare.", image: "/products/roleta-alumini.png" },
  { title: "Roleta elektrike", text: "Komoditet me hapje dhe mbyllje te kontrolluar elektrikisht.", image: "/products/roleta-elektrike.png" },
  { title: "Xhama palues per ballkon", text: "Mbyllje elegante per ballkone dhe terasa me pamje panoramike.", image: "/products/xhama-palues.png" },
  { title: "Fasada ventiluese", text: "Sistem fasade per objekte moderne me qarkullim ajri.", image: "/products/fasada-ventiluese.png" },
  { title: "Rrjeta kunder insekteve", text: "Rrjeta te pershtatura per dritare dhe dyer, praktike ne perdorim.", image: "/products/rrjeta-kunder-insekteve.png" },
  { title: "Aksesore dhe mekanizma", text: "Pjese percjellese, mekanizma dhe mirembajtje sipas nevojes.", image: "/products/aksesore-mekanizma.png" },
];

export const projects = [
  {
    slug: "terase-xhama-palues",
    title: "Mbyllje terase me xhama palues",
    category: "Xhama palues",
    sourceUrl: "https://www.facebook.com/photo/?fbid=1247093567114818&set=pcb.1247093900448118",
    photos: [
      { src: "/projects/terrace-01.jpg", width: 2048, height: 1536, alt: "Xhamat palues te terases, pamje nga brenda" },
      { src: "/projects/terrace-02.jpg", width: 2048, height: 1536, alt: "Kendi i terases se mbyllur me xhama" },
      { src: "/projects/terrace-03.jpg", width: 2048, height: 1536, alt: "Pamje e plote e sistemit te xhamave palues" },
      { src: "/projects/terrace-04.jpg", width: 736, height: 1000, alt: "Montimi i xhamave palues dhe hapja e paneleve" },
      { src: "/projects/terrace-05.jpg", width: 2048, height: 1536, alt: "Terasa me xhama palues, pamje e jashtme" },
      { src: "/projects/terrace-06.jpg", width: 736, height: 1000, alt: "Detaji i xhamave ne anen e terases" },
      { src: "/projects/terrace-07.jpg", width: 736, height: 1000, alt: "Terasa me xhama palues dhe ndricim ne mbremje" },
      { src: "/projects/terrace-08.jpg", width: 736, height: 1000, alt: "Pamje anesore e terases ne mbremje" },
      { src: "/projects/terrace-09.jpg", width: 2048, height: 1536, alt: "Pamje ballore e terases se perfunduar ne mbremje" },
    ],
  },
  {
    slug: "ballkon-panoramik",
    title: "Mbyllje ballkoni panoramik",
    category: "Xhama per ballkon",
    photos: [{ src: "/projects/project-06.jpg", width: 960, height: 536 }],
  },
].map((project) => ({
  ...project,
  image: project.photos[0].src,
  width: project.photos[0].width,
  height: project.photos[0].height,
}));
