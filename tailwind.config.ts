import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', "sans-serif"], 
        script: ['"Dancing Script"', "cursive"], 
        pt: ['"PT Sans"', "sans-serif"], 
      },
    },
  },
  plugins: [],
} satisfies Config;
