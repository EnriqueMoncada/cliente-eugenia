/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        celeste: {
          DEFAULT: '#79a5c9',
          50: '#f0f7fc',
          100: '#e1eff8',
          200: '#c7e0f2',
          300: '#a0cbe8',
          400: '#79a5c9',
          500: '#5384b0',
          600: '#3e6a94',
          700: '#335579',
          800: '#2d4964',
          900: '#293f54',
        },
        silver: {
          DEFAULT: '#e0e0e0',
          light: '#f5f5f7',
          dark: '#b0b0b0',
          metallic: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 50%, #b0b0b0 100%)',
        },
        navyText: '#1e293b',
      },
      fontFamily: {
        cursive: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
