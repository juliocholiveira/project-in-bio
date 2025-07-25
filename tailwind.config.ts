import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#0F0F10",
        "background-tertiary": "#19191A",
        "content-body": "#CDCBCB",
        "content-placeholder": "#82707F",
        "content-headline": "#B2B2B2",
        "border-primary": "#19191A",
        "border-secondary": "#323234",
        "border-tertiary": "#97979B",
        "accent-purple": "#842BD0",
        "accent-green": "#87B28D",
        "accent-pink": "#B5446B",
      },
    },
  },
  plugins: [],
};
export default config;
