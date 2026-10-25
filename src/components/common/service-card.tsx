import type { ServiceCategory } from "../../lib/site-config";

type ServiceCardProps = {
  service: ServiceCategory;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <li className="rounded-2xl border border-white/10 p-6">
      <h3 className="font-display text-xl font-bold text-primary">{service.title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{service.summary}</p>

      <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-foreground/90">
        {service.items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </li>
  );
}