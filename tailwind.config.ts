import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#212121",
        panelBg: "#333333",
        accentGreen: "#C6FF00",
        textWhite: "#FFFFFF",
        textBody: "#D0D0D0",
        textMuted: "#8C8C8C",
        headingGray: "#CFCFCF",
        borderDark: "#3A3A3A",
        dimText: "#555555",
      },
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

