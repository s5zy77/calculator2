/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          light: '#E6FFFA',
          DEFAULT: '#1D9E75',
          dark: '#136B50',
        },
        slate: {
          950: '#0B0F19',
        }
      },
    },
  },
  plugins: [],
}
