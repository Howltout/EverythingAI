import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#b9e0fe',
          300: '#7cc8fd',
          400: '#36b3f9',
          500: '#0c9eeb',
          600: '#0284c7',
          700: '#036ba1',
          800: '#075985',
          900: '#0c4a6e',
        },
        muted: {
          foreground: '#6b7280', // gray-600
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [],
};

export default config;