/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--c-primary-50)",
          100: "var(--c-primary-100)",
          200: "var(--c-primary-200)",
          300: "var(--c-primary-300)",
          400: "var(--c-primary-400)",
          500: "var(--c-primary-500)",
          600: "var(--c-primary-600)",
          700: "var(--c-primary-700)",
          800: "var(--c-primary-800)",
          900: "var(--c-primary-900)",
        },
      },
    },
  },
  plugins: [],
};
