import Link from "next/link";

import { Icon } from "./icons";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="#inicio" className="brand-mark" aria-label="Ir para o início">
          <span className="brand-mark__symbol">JS</span>
          <span className="brand-mark__divider" aria-hidden="true" />
          <span className="brand-mark__name">PORTFOLIO</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#contato" className="header-cta hidden sm:inline-flex">
          Vamos conversar <Icon name="arrow-up-right" size={16} />
        </Link>

        <details className="relative md:hidden">
          <summary
            className="icon-button list-none"
            aria-label="Abrir menu de navegação"
          >
            <Icon name="menu" size={22} />
          </summary>
          <nav className="mobile-nav" aria-label="Navegação móvel">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-nav__link">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
