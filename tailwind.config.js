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
        // overrite default colors
        'primary': '#A60321',
        'secondary': '#026414',
        'success': '#026414',
        'danger': '#dc3545',
        'info': '#273890',
        'warning': '#A63B05',

        'text-background': '#161719',

        // custom colors
        'custom-background': '#0E102D',
        'custom-background-secondary': '#2B0F0E',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;