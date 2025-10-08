/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          '50': '#eef7ff',
          '100': '#d9eeff',
          '200': '#bce5ff',
          '300': '#8ed8ff',
          '400': '#5ac2ff',
          '500': '#31a5ff',
          '600': '#158fff',
          '700': '#0075ff',
          '800': '#0062d9',
          '900': '#0055b0',
          '950': '#00336e',
        },
        neon: {
          // Primary cobalt blue
          blue: '#0047AB',
          // Lighter accent for gradients
          blueLight: '#00B4FF',
          green: '#39FF14',
        },
        dark: {
          bg: '#0B1020',
          card: '#141A2A',
        },
        amethyst: {
          '300': '#d3b3ff',
          '500': '#aa55ff',
          '600': '#9933ff',
          '700': '#6600cc',
        },
        cyan: {
          '300': '#6ee7b7',
          '400': '#34d399',
          '500': '#10b981',
        },
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        poppins: ['var(--font-poppins)'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(0,71,171,0.45), 0 0 22px rgba(0,180,255,0.35)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,71,171,0.55), 0 0 18px rgba(0,180,255,0.35)' },
          '50%': { boxShadow: '0 0 14px rgba(0,71,171,0.8), 0 0 28px rgba(0,180,255,0.55)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(0,71,171,0.0)' },
          '50%': { boxShadow: '0 0 24px rgba(0,71,171,0.35)' },
        },
        beam: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        pulseSoft: 'pulseSoft 2.2s ease-in-out infinite',
        beam: 'beam 8s linear infinite',
      },
    },
  },
  plugins: [],
}
