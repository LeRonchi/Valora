import { cn } from "../../lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold">{title}</h2>
      {description && <p className="mt-3 text-ink-muted">{description}</p>}
    </div>
  );
}