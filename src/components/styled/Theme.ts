import { DefaultTheme } from "styled-components";
import { Source_Sans_Pro } from "@next/font/google";

const sourceSansPro = Source_Sans_Pro({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// Use types
export const theme: DefaultTheme = {
  colors: {
    white: "#fff",
    black: "#000",
    primary: "#f38a5d",
    body: "#3C4346",
  },
  fonts: {
    familyRegular: "Arial, sans-serif",
    familyHeadings: sourceSansPro.style.fontFamily,
  },
  breakpoints: {
    xsUp: "min-width: 481px",
    smUp: "min-width: 769px",
    mdUp: "min-width: 1025px",
    lgUp: "min-width: 1201px",
  },
  container: {
    maxWidth: 1200,
    gap: 16,
  },
  timings: {
    fast: 100,
    normal: 250,
    slow: 400,
  },
};
