import { Check } from "lucide-react";

import { Button } from "../../components/common/button";
import { siteConfig } from "../../lib/site-config";

const highlights = [
  "MEI, Simples Nacional e Lucro Presumido",
  "Atendimento remoto em todo o Brasil",
  "Você fala direto com a contadora responsável",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Brilho dourado decorativo ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(44_55%_53%_/_0.22),transparent_58%)]"
      />

      <div className="section-shell relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {siteConfig.tagline}
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Contabilidade com <span className="text-primary">atendimento próximo</span> e
            conversa sem contabilês
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Cuidamos das obrigações, dos impostos e da organização da sua empresa para que
            você decida com segurança, do MEI ao Lucro Presumido.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button>Fale pelo WhatsApp</Button>
            <Button variant="outline">Solicite um orçamento</Button>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-ink-foreground/90"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}