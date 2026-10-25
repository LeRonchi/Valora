import { navigation, siteConfig } from "../../lib/site-config";
import { BrandLogo } from "../common/brand-logo";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-ink text-ink-foreground">
            <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
                <div className="flex flex-col gap-4">
                    <BrandLogo />
                    <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
                        {siteConfig.description}
                    </p>
                </div>

                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Navegação
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2 text-sm">
                        {navigation.map((item) => (
                            <li key={item.to}>
                                <a
                                    href={item.to}
                                    className="text-ink-muted transition-colors hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                        Contato
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-muted">
                        <li>
                            <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                                {siteConfig.email}
                            </a>
                        </li>
                        <li>{siteConfig.officeHours}</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 py-6">
                <p className="section-shell text-xs text-ink-muted">
                    © {year} {siteConfig.name}. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}