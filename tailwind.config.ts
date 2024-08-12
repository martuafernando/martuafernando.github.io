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
        'black': '#303030',
        'black-400': '#5e5e5e',
        'white': '#ffffff',
        'primary': '#333333',
        'secondary': '#708090',
        'background': '#fffffff',
      }
    },
  },
  plugins: [],
};
export default config;
