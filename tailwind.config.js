/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F2',
          100: '#F5F0E6',
          200: '#EDE5D4',
          300: '#DDD2BB',
        },
        ink: {
          900: '#141210',
          800: '#1E1B17',
          700: '#2A2620',
          600: '#4A4237',
          500: '#6B6355',
          400: '#8C8577',
          300: '#B5AE9F',
        },
        moss: {
          600: '#4A5A45',
          700: '#3A4735',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        dev: ['"Tiro Devanagari Hindi"', '"Instrument Serif"', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
