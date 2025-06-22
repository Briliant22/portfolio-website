import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        base: {
          black: "#000000",
          white: "#FFFFFF",
          grey: "#D9D9D9",
        },
        primary: {
          "50": "#f3f4fc",
          "100": "#e7e9f7",
          "200": "#cad0ed",
          "300": "#9ba8de",
          "400": "#657acb",
          "500": "#4159b6",
          "600": "#304299",
          "700": "#28357c",
          "800": "#242f68",
          "900": "#05091c",
          "950": "#06070f",
        },
        alert: {
          green: "#34CA7F",
          yellow: "#E2CC05",
          red: "#E21205",
        },
      },
      fontSize: {
        // Heading
        h1: ["4rem", { lineHeight: "4.8rem", fontWeight: "700" }], // 64px / 76.8px
        h2: ["3rem", { lineHeight: "3.6rem", fontWeight: "700" }], // 48px / 57.6px
        h3: ["2rem", { lineHeight: "2.4rem", fontWeight: "700" }], // 32px / 38.4px
        h4: ["1.5rem", { lineHeight: "1.8rem", fontWeight: "700" }], // 24px / 28.8px
        h5: ["1.25rem", { lineHeight: "1.5rem", fontWeight: "700" }], // 20px / 24px
        h6: ["1rem", { lineHeight: "1.2rem", fontWeight: "700" }], // 16px / 19.2px

        // Sub Heading
        s1: ["3rem", { lineHeight: "3.6rem", fontWeight: "600" }], // 48px / 57.6px
        s2: ["2rem", { lineHeight: "2.6rem", fontWeight: "600" }], // 32px / 41.6px
        s3: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }], // 24px / 32px
        s4: ["1.25rem", { lineHeight: "1.6rem", fontWeight: "600" }], // 20px / 25.6px
        s5: ["1rem", { lineHeight: "1.4rem", fontWeight: "600" }], // 16px / 22.4px
        s6: ["0.75rem", { lineHeight: "1rem", fontWeight: "600" }], // 12px / 16px

        // Body
        b1: ["3rem", { lineHeight: "4rem", fontWeight: "400" }], // 48px / 64px
        b2: ["2rem", { lineHeight: "2.8rem", fontWeight: "400" }], // 32px / 44.8px
        b3: ["1.5rem", { lineHeight: "2rem", fontWeight: "400" }], // 24px / 32px
        b4: ["1.25rem", { lineHeight: "1.8rem", fontWeight: "400" }], // 20px / 28.8px
        b5: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }], // 16px / 24px
        b6: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 14px / 20px
        b7: ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }], // 14px / 20px
      },
    },
  },
  plugins: [],
} satisfies Config;
