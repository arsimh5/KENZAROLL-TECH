"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Ballina" },
  { href: "/sherbime", label: "Sherbime" },
  { href: "/markat", label: "Markat" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Kontakt", cta: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
      <Link
        className="brand brand-roll"
        href="/"
        aria-label="KENZA Roll - Ballina"
        onClick={() => setMenuOpen(false)}
      >
        <Image src="/kenza-roll-logo.jpg" alt="KENZA Roll" width={1659} height={196} priority />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Mbyll menune" : "Hap menune"}
        title={menuOpen ? "Mbyll menune" : "Hap menune"}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`main-nav${menuOpen ? " open" : ""}`}
        id="main-navigation"
        aria-label="Navigimi kryesor"
      >
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const className = [item.cta ? "nav-cta" : "", isActive ? "active" : ""]
            .filter(Boolean)
            .join(" ");

          return (
            <Link
              className={className || undefined}
              href={item.href}
              key={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        className="brand brand-tech"
        href="/"
        aria-label="KENZA Tech - Ballina"
        onClick={() => setMenuOpen(false)}
      >
        <Image src="/kenza-tech-logo.jpg" alt="KENZA Tech" width={1791} height={225} priority />
      </Link>
    </header>
  );
}
