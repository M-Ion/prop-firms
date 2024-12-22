import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #9061F9, #E74694)",
        "gradient-custom-invert": "linear-gradient(to right, #E74694, #9061F9)",
        "gradient-custom-transparent":
          "linear-gradient(to right, rgba(144, 97, 249, 0.1), rgba(231, 70, 148, 0.1))",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          tertiary: "var(--background-tertiary)",
        },
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
