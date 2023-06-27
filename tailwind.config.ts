import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      ysabeau: ['Ysabeau', 'sans-serif'],
      urbanist: ['Urbanist', 'sans-serif'],
      plusJakartaSans: ['"Plus Jakarts Sans"', 'sans-serif'],
      philosopher: ['Philosopher', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

// font-family: 'Hind Siliguri', sans-serif;
// font-family: 'Philosopher', sans-serif;
// font-family: 'Plus Jakarta Sans', sans-serif;
// font-family: 'Urbanist', sans-serif;
// font-family: 'Ysabeau', sans-serif;
