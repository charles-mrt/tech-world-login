/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-titillium)',
      },
      boxShadow: {
        'custom': '-10px 10px 40px 0px rgba(0, 0, 0, 0.50)',
        'custom-input': '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
      }         
    },
  },
  plugins: [],
}