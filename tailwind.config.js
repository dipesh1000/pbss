/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryBlue: '#374B8D',
        headerbg: '#F8F8F8',
        grayText: '#333333',
        darkText: '#666666',
        pinkctabg: '#F89B38',
        lightpalebg: '#F8F5EF',
        skylightbg: '#fbfcff',
        palewhitebg: '#fafafa',
        playbg: '#E4ECF9',
      },
    },
  },
  plugins: [],
};
