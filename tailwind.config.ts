import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "netflix-red": "#DB202C",
        "netflix-black": "#000000",
        "netflix-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Inter", "Roboto", "Arial", "sans-serif"],
        netflix: ["Helvetica Neue", "Inter", "Roboto", "Arial", "sans-serif"],
      },
    },
  },
};

export default config;