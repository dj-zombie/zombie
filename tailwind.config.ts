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
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
  // Add custom variants for mix-blend-mode support
  safelist: [
    'mix-blend-lighten',
    'mix-blend-screen',
    'mix-blend-multiply',
    'mix-blend-overlay',
    'mix-blend-color-dodge'
  ]
} satisfies Config;
