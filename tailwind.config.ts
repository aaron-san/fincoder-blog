import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: {
          50: "oklch(var(--mint-50))",
          100: "oklch(var(--mint-100))",
          200: "oklch(var(--mint-200))",
          300: "oklch(var(--mint-300))",
          400: "oklch(var(--mint-400))",
          500: "oklch(var(--mint-500))",
          600: "oklch(var(--mint-600))",
          700: "oklch(var(--mint-700))",
          800: "oklch(var(--mint-800))",
          900: "oklch(var(--mint-900))",
        },
        bg: {
          light: "oklch(var(--mint-100))",
          dark: "oklch(var(--mint-900))",
        },
        text: {
          light: "oklch(var(--mint-900))",
          dark: "oklch(var(--mint-50))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // require("tailwind-scrollbar-hide"),
    // require("@tailwindcss/aspect-ratio"),
    // require("tailwindcss-debug-screens"),
  ],
};

export default config;
