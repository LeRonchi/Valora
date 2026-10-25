import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { SectionHeading } from "../../components/common/section-heading";
import { faq } from "../../lib/site-config";
import { cn } from "../../lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-shell py-16 sm:py-24">
      <SectionHeading
        eyebrow="Perguntas frequentes"
        title="Tire as suas dúvidas antes de começar"
        description="Se a sua pergunta não estiver aqui, é só falar com a gente."
      />

      <ul className="mt-10 flex max-w-3xl flex-col gap-3">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={item.question} className="rounded-2xl border border-white/10">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display font-semibold"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 text-primary transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                  {item.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}