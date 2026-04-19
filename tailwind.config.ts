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
        "surface-dim": "#ddd9d6",
        "surface-container": "#f1edea",
        "inverse-on-surface": "#f4f0ed",
        "outline-variant": "#e3beb5",
        "surface-container-highest": "#e6e2df",
        "secondary-fixed": "#ffd9e4",
        "on-tertiary-fixed": "#261900",
        "outline": "#8f7068",
        "on-primary-fixed-variant": "#802a00",
        "secondary": "#a82d68",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#e6e2df",
        "surface-container-low": "#f7f3f0",
        "on-secondary-fixed-variant": "#890f50",
        "on-error-container": "#93000a",
        "inverse-primary": "#ffb59a",
        "tertiary-fixed": "#ffdea5",
        "on-tertiary-container": "#fffbff",
        "tertiary-fixed-dim": "#e9c176",
        "surface-tint": "#a83900",
        "primary-container": "#cd4700",
        "primary-fixed": "#ffdbcf",
        "on-error": "#ffffff",
        "on-primary": "#ffffff",
        "on-primary-fixed": "#380d00",
        "primary-fixed-dim": "#ffb59a",
        "on-surface": "#1c1b1a",
        "secondary-container": "#ff73ae",
        "primary": "#a43700",
        "background": "#fdf8f5",
        "on-primary-container": "#fffbff",
        "secondary-fixed-dim": "#ffb0cc",
        "on-secondary": "#ffffff",
        "inverse-surface": "#31302e",
        "on-secondary-container": "#740041",
        "error-container": "#ffdad6",
        "on-surface-variant": "#5a413a",
        "tertiary": "#755717",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed": "#3e0020",
        "error": "#ba1a1a",
        "surface": "#fdf8f5",
        "surface-bright": "#fdf8f5",
        "on-tertiary-fixed-variant": "#5d4201",
        "surface-container-high": "#ece7e4",
        "tertiary-container": "#90702e",
        "on-background": "#1c1b1a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Manrope"],
        "label": ["Manrope"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
