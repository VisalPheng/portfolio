import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens (see globals.css)
        paper: token("paper"),
        tile: token("tile"),
        ink: token("ink"),
        panel: token("panel"),
        muted: token("muted"),
        line: token("line"),
        accent: "#EBFF00",
        // Legacy palette, still used by the standalone app pages
        light: "#EEEEEE",
        dark: "#171717",
        lighter: "#F2F2F2",
        darker: "#0D0D0D",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
        display: ['"Pixelify Sans"', '"IBM Plex Mono"', "monospace"],
      },
      letterSpacing: {
        label: "1.2px",
      },
      height: {
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        8.5: "34px",
        18: "72px",
        22: "86px",
        23: "88px",
        26: "104px",
        27: "108px",
      },
      width: {
        4.5: "18px",
        5.5: "22px",
        7.5: "30px",
        8.5: "34px",
        18: "72px",
        22: "86px",
        23: "88px",
        26: "104px",
        27: "108px",
      },
      screens: {
        "2xs": "320px",
        "2.5xs": "380px",
        "3xs": "460px",
        xs: "480px",
        "3sm": "700px",
        "2md": "840px",
        "3md": "960px",
        "2lg": "1140px",
        "8xl": "1340px",
      },
      fontSize: {
        "2xs": "13px",
        md: "15px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
