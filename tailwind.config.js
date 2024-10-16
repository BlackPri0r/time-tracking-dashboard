/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        profile: 'var(--profile)',
        work: 'var(--work)',
        play: 'var(--play)',
        study: 'var(--study)',
        exercise: 'var(--exercise)',
        social: 'var(--social)',
        selfCare: 'var(--selfCare)',
        bgColor: 'var(--bgColor)',
        cardBg: 'var(--cardBg)',
        desatBlue: 'var(--desatBlue)',
        paleBlue: 'var(--paleBlue)',
      },
    },
  },
  plugins: [],
}

