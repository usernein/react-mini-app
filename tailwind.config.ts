import rippleui from "rippleui";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        viewportStable: "var(--tg-viewport-stable-height)",
        viewport: "var(--tg-viewport-height)",
      },
      colors: {
        background: "var(--tg-theme-bg-color)",
        text: "var(--tg-theme-text-color)",
        hint: "var(--tg-theme-hint-color)",
        link: "var(--tg-theme-link-color)",
        button: "var(--tg-theme-button-color)",
        buttonText: "var(--tg-theme-button-text-color)",
        secondaryBg: "var(--tg-theme-secondary-bg-color)",
      },
    },
  },
  plugins: [rippleui()],
} as Config;
