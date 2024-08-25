import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-100': '#cce7ff',
        'blue-200': '#99cfff',
        'blue-300': '#66b8ff',
        'blue-400': '#33a0ff',
        'blue-500': '#0088FF',
        'blue-600': '#006dcc',
        'blue-700': '#005299',
        'blue-800': '#001b33',
        'black': '#303030',
        'black-400': '#5e5e5e',
        'white': '#ffffff',
        'primary': '#333333',
        'secondary': '#708090',
        'background': '#fffffff',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(2)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        }
      },
      animation: {
        upDown: 'upDown 2s infinite ease-in-out',
        scaleDown: 'scaleDown 1s forwards ease-in-out',
        fadeIn: 'fadeIn 1s forwards ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
