/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},

    screens: {
      '2xs': { 'min': '360px' },
      xs: { 'min': '375px' },
      sm: { 'min': '390px' },
      md: { 'min': '428px' },
    }
  },
  plugins: [],
}

