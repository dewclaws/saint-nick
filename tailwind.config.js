/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6ECBEC',
          secondary: '#1F2B3B',
        },
      },
      boxShadow: {
        'navbar-bottom': 'inset 0 -1px 0 0 rgba(255,255,255,.1)',
      },
    },
  },
  plugins: [],
};
