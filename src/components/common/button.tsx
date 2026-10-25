import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

const variants = {
  gold: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-primary/60 text-primary hover:bg-primary/10",
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({ children, variant = "gold", className }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg px-6 py-3 font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}