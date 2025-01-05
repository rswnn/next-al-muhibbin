import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'visibility-hidden': 'wiggle 4s forwards',
      },
      keyframes: {
        wiggle: {
          '99%': { display: 'block' },
          '100%': { display: 'none' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
