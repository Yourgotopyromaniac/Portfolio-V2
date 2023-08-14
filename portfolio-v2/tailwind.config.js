/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      'bebas': ['Bebas Neue', 'sans-serif'],
      'space' : ['Space Grotesk Variable', 'sans-serif'],
      'houzeFont' : ['houzeFont', 'sans-serif']
    }
  },
  plugins: [],
}
