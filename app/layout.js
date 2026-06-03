import "./globals.css";

export const metadata = {
  title:
    "KENZA Roll & KENZA Tech | Dyer, Dritare, Roleta, Xhama Palues, Fasada",
  description:
    "Website profesional per dyer, dritare, roleta, xhama palues dhe fasada ventiluese nga KENZA Roll dhe KENZA Tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
