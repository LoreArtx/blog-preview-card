import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow:'#F4D04E',
        darkGray:'#111111',
        lightGray:'#6B6B6B'
      },
      spacing:{
        '50':'4px',
        '100':'8px',
        '150':'12px',
        '300':'24px'
      },
      boxShadow:{
        custom:'8px 8px 0px 0px rgba(0,0,0,0)'
      }
    },
  },
  plugins: [],
} satisfies Config;
