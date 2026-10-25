import type { Config } from 'tailwindcss';

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ink: {
            DEFAULT: "hsl(var(--ink))",
            foreground: "hsl(var(--ink-foreground))",
            muted: "hsl(var(--ink-muted))", 
        }
      },
    },
  },
  plugins: [],
} satisfies Config;