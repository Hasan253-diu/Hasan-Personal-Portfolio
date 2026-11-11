/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3678F7',
          hover: '#2965E0',
          light: '#EBF2FE',
          dark: '#1D4ED8',
        },
        neu: {
          bg: '#EEF2F9',
          card: '#EEF2F9',
          border: 'rgba(255, 255, 255, 0.7)',
          darkBg: '#0F172A',
          darkCard: '#182234',
          darkBorder: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neu-flat': '10px 10px 22px rgba(166, 180, 200, 0.45), -10px -10px 22px rgba(255, 255, 255, 0.95)',
        'neu-flat-sm': '5px 5px 12px rgba(166, 180, 200, 0.38), -5px -5px 12px rgba(255, 255, 255, 0.9)',
        'neu-pressed': 'inset 4px 4px 8px rgba(166, 180, 200, 0.42), inset -4px -4px 8px rgba(255, 255, 255, 0.95)',
        'neu-pressed-sm': 'inset 2px 2px 5px rgba(166, 180, 200, 0.38), inset -2px -2px 5px rgba(255, 255, 255, 0.9)',
        'neu-accent': '0 8px 20px rgba(54, 120, 247, 0.35)',
        
        // Dark Mode Neumorphic Shadows
        'neu-dark-flat': '10px 10px 24px rgba(0, 0, 0, 0.5), -10px -10px 24px rgba(30, 41, 59, 0.4)',
        'neu-dark-flat-sm': '5px 5px 14px rgba(0, 0, 0, 0.45), -5px -5px 14px rgba(30, 41, 59, 0.35)',
        'neu-dark-pressed': 'inset 4px 4px 9px rgba(0, 0, 0, 0.6), inset -4px -4px 9px rgba(30, 41, 59, 0.4)',
        'neu-dark-pressed-sm': 'inset 2px 2px 6px rgba(0, 0, 0, 0.55), inset -2px -2px 6px rgba(30, 41, 59, 0.35)',
        'neu-dark-accent': '0 8px 24px rgba(54, 120, 247, 0.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
};
