import { SectionHeading } from "../../components/common/section-heading";
import { founders } from "../../lib/site-config";

export function FoundersSection() {
    return (
        <section className="section-shell py-16 sm:py-24">
            <SectionHeading
                eyebrow="Quem atende você"
                title="Duas contadoras, atendimento de ponta a ponta"
                description="Você conversa direto com que conhece a sua empresa e responde pelo trabalho. "
            />

            <ul className="mt-10 grid gap-4 md:grid-cols-2">
                {founders.map((founder) => (
                    <li
                        key={founder.name}
                        className="flex gap-5 rounded-2xl border border-white/10 p-6"
                    >
                        <span
                            aria-hidden="true"
                            className="grid size-16 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-lg font-bold text-primary"
                        >
                            {founder.initials}
                        </span>
                        <div>
                            <h3 className="font-display text-lg font-bold">{founder.name}</h3>
                            <p className="text-sm font-medium text-primary">{founder.role}</p>
                            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{founder.bio}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}