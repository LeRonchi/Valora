import { SectionHeading } from "../../components/common/section-heading";
import { ServiceCard } from "../../components/common/service-card";
import { serviceCategories } from "../../lib/site-config";

export function ServicesPreview() {
    return(
        <section className="section-shell py-16 sm:py-24">
            <SectionHeading
                eyebrow="Serviços"
                title="Do MEI ao Lucro Presumido, cada empresa no seu ritmo"
                description="Veja o que acompanhamos em cada perfil. O escopo final é definido com você, por escrito, na proposta."
            />

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
                {serviceCategories.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                 ))}   
            </ul>

            <a
                href="/servicos"
                className="mt-8 incline-flex rounded-lg border border-primary/60 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
                    Ver todos os serviços
                </a>

        </section>
    );
}