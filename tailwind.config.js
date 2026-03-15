/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A843',
          light:   '#F0C866',
          dark:    '#B8922E',
        },
        surface:  '#1C1700',
        ink:      '#0E0C02',
        deep:     '#141100',
        parchment:'#F5EDD6',
        cream:    '#E8D9A8',
        muted:    '#9A8A60',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script:  ['"Dancing Script"', 'cursive'],
        sans:    ['"Josefin Sans"', 'sans-serif'],
      },
      fontSize: { '2xs': '0.62rem' },
      letterSpacing: { widest2: '0.22em', widest3: '0.32em' },
      keyframes: {
        heroZoom:    { '0%': { transform: 'scale(1.0)' }, '100%': { transform: 'scale(1.07)' } },
        fadeUp:      { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scrollPulse: { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '1' } },
      },
      animation: {
        heroZoom:    'heroZoom 14s ease-in-out infinite alternate',
        fadeUp:      'fadeUp 0.75s ease forwards',
        scrollPulse: 'scrollPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
