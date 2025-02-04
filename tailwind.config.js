// tailwind.config.js
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      marquee: "marquee 10s linear infinite",
    },
  },
};
export const plugins = [];
