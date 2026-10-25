import { Button } from "../../components/common/button";

export function FinalCta() {
    return (
        <section className="section=shell pb-16 sm:pb-24">
            <div className="rounded-3xl border border-primary/30 bg-primary/10 px-6 py-12 text-center sm:px-12 sm:py-16">
                <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold sm:text-4xl">
                    Vamos conversar sobre a contabilidade da sua empresa?
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-ink-muted">
                    Conte o seu momento e receba uma proposta com o escopo e valor definidos com clareza, sem compromisso.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button>Fale pelo WhatsApp</Button>
                    <Button variant="outline">Solicite um orçamento</Button>
                </div>
            </div>
        </section>
    );
}