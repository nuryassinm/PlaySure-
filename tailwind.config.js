/** @type {import('tailwindcss').Config} */
import { color } from 'framer-motion';
import prelinePlugin from 'preline/plugin';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      color:{
      'navy': {
                900: '#1B2534',
              }
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
     
    },
  },
  plugins: [
    prelinePlugin,
  ],
};
