import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0500FF",
          theme: "#0706CD",
          secondary: "#0E0CFF",
          soft: "#e7f0ff",
        },
        status: {
          error: {
            light: "#FECDD3",
            default: "#F43F5F",
            pressed: "#E11d48",
            dark: "#9F1339",
          },
          success: {
            default: "#166434",
          },
          info: {
            light: "#F4F2FF",
            default: "#7730F7",
            muted: "#C1B1FE",
            dark: "#976BFF",
          },
          warning: {
            light: "#F1FFC7",
            default: "#49670D",
            border: "#97D80B",
          },
        },
        neutral: {
          white: "#FFFFFF",
          black: "#18181B",
          border: "#E4E4E7",
          defaultBlack: "#1E1E1E",
          text: {
            primary: "#18181B",
            secondary: "#52525B",
            tertiary: "#71717A",
            disabled: "#A1A1AA",
          },
          background: {
            default: "#FFFFFF",
            soft: "#FAFAFA",
            disabled: "#E4E4E7",
          },
          focus: "#d4d4d8",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        "custom-sm": "0px 2px 4px -2px rgba(31, 41, 55, 0.06)",
        "custom-md": "0px 4px 8px -2px #1F29371A",
        "custom-light": "0px 1px 2px 0px rgba(31, 41, 55, 0.05)",
        "custom-light-md": "0px 1px 4px 0px rgba(31, 41, 55, 0.04)",
        "custom-modal": "0px 24px 48px -12px rgba(31, 41, 55, 0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
