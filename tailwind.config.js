import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        'custom-background': '#0E102D',
        // 'custom-background-secondary': '#251728',
        'custom-primary': '#0e102d',
        'custom-secondary': '#1a1c3d',
        'custom-accent': '#D1601E',
        'custom-accent-secondary': '#273890',
        'custom-background-secondary': '#2B0F0E',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;