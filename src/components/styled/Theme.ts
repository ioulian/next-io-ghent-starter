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
    familyHeadings:
      sourceSansPro.style?.fontFamily ?? '"Source Sans Pro", sans-serif',
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
  borderRadius: {
    normal: 4,
  },
  contextMenu: {
    arrowSize: 12,
    arrowPadding: 7,
    offset: [14, 14],
    windowPadding: 14,
  },
  zIndex: {
    contextMenu: 100,
    overlay: 200,
  },
  form: {
    input: {
      color: "#000",
      border: "rgba(0, 0, 0, 0.6)",
      background: "rgba(239, 242, 243, 0.2)",
      shadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    },
    select: {
      indicator: "rgba(0, 0, 0, 0.6)",
    },
    asterisk: {
      color: "#b30000",
    },
    outline: {
      color: "#000",
    },
    checkbox: {
      checked: {
        border: "#b30000",
        background: "#b30000",
        color: "#fff",
      },
    },
    requiredMessage: {
      color: "#b30000",
    },
    error: {
      color: "#b30000",
    },
  },
};
