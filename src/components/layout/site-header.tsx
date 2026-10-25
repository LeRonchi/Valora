import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "../../lib/site-config";
import { BrandLogo } from "../common/brand-logo";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="/" aria-label="Página inicial da Valora">
          <BrandLogo />
        </a>

        {/* Menu do computador: some no celular */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-foreground/80 transition-colors hover:bg-white/10 hover:text-ink-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/contato"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Solicite um orçamento
        </a>

        {/* Botão hambúrguer: só aparece no celular */}
        <button
          type="button"
          className="text-ink-foreground lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu do celular: só existe quando menuOpen é true */}
      {menuOpen && (
        <nav className="border-t border-white/10 lg:hidden" aria-label="Navegação principal">
          <div className="section-shell flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <a
                key={item.to}
                href={item.to}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink-foreground/85 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contato"
              className="mt-3 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
            >
              Solicite um orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}