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
          blush:    '#E8D5C4',
          caramel:  '#D4B896',
          deep:     '#C4A882',
          espresso: '#5C3D2E',
          cream:    '#F7F1EB',
          pale:     '#EDE0D4',
          brown:    '#8B6350',
          slate:    '#7A6A5A',
        },
      },
      fontFamily: {
        display:  ['Cormorant Garamond', 'Georgia', 'serif'],
        heading:  ['Playfair Display', 'Georgia', 'serif'],
        body:     ['Montserrat', 'system-ui', 'sans-serif'],
        accent:   ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.6s ease-out forwards',
        'line-grow': 'lineGrow 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
