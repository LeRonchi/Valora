import { siteConfig } from "../../lib/site-config";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-3">
      <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
        V
      </span>

      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold text-ink-foreground">
          {siteConfig.shortName}
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );
}