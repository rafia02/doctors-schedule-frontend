import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-smooth': 'spin 2s linear infinite',  // Smooth outer circle rotation
        'pulse': 'pulse 2s ease-in-out infinite',  // Inner pulse effect
      },
      colors: {
        // #415da1
        // #415DA1
        // #E6EFFE
        // #39394a
        primary: "#415da1",
        secondery: "#e9f0ff",
        textDark: "#121229",
        textLight: "#39394A",
        btnClr: "#5477ce",
        btnHover: "#496bc2",
      },
      fontFamily: {
        // roboto: ['"Roboto"', 'sans-serif'],
        // jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
