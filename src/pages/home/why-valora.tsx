import { SectionHeading } from "../../components/common/section-heading";
import { benefits } from "../../lib/site-config";

export function WhyValora() {
    return (
        <section className="border-y border-white/10 bg-white/[0.03] py-16 sm:py-24">
            <div className="section-shell">
                <SectionHeading
                    eyebrow="Por que a Valora"
                    title="Contabilidade que você entende e acompanha de perto"
                    description="Menos burocracia na sua rotina e mais clareza para tomar decisões."
                />

                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <li key={benefit.title} className="rounded-2xl border border-white/10 p-6">
                                <span className="grid size-11 place-items-center rounded-full bg-primary/15 text-primary">
                                    <Icon className="size-5" aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 font-display text-lg font-bold">{benefit.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                                    {benefit.description}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}