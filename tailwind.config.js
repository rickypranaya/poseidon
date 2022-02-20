module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#06B6D4',
        dark: {
          // ZINC COLOR 
          // lighter: '#71717A',
          // light: '#52525B',
          // base: '#3F3F46',
          // darker: '#27272A',
          // darkest: '#18181B',

          // GRAY COLOR 
          lighter: '#6B7280',
          light: '#4B5563',
          base: '#374151',
          darker: '#1F2937',
          darkest: '#111827',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [],
}
