import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      redHat: ['Red Hat Text', 'sans-serif'],
    },
    colors: {
      white: '#fef6f6',
      darkGreen: '#3c637e',
      cream: '#f9e9be',
      blue: '#226daa',
      midnight: '#043048',
    },
    extend: {
      gridTemplateRows: {
        projectCard: '2rem 1fr 80px',
      },
    },
  },
  plugins: [],
} satisfies Config

// font-family: 'Hind Siliguri', sans-serif;
// font-family: 'Philosopher', sans-serif;
// font-family: 'Plus Jakarta Sans', sans-serif;
// font-family: 'Urbanist', sans-serif;
// font-family: 'Ysabeau', sans-serif;
//   ysabeau: ['Ysabeau', 'sans-serif'],
//   urbanist: ['Urbanist', 'sans-serif'],
//   plusJakartaSans: ['"Plus Jakarts Sans"', 'sans-serif'],
//   philosopher: ['Philosopher', 'sans-serif'],
