import { DefaultTheme } from "styled-components";
import { Source_Sans_3 } from "next/font/google";

const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// Use types
const theme: DefaultTheme = {
  name: "Default",
  allowBlur: true,
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
    smallPhone: 320,
    phone: 375,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1440,
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
  floating: {
    tooltip: {
      offset: 10,
    },
    popover: {
      offset: 10,
    },
    dropdown: {
      offset: 10,
    },
    floater: {
      shift: 5,
      flip: 5,
      arrow: {
        size: 10,
        padding: 10,
      },
    },
  },
  zIndex: {
    contextMenu: 100,
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
        border: "#f38a5d",
        background: "#f38a5d",
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
  fileProgress: {
    progressBackground: "#eee",
    states: {
      idle: {
        main: "#737575",
        accent: "#909090",
      },
      failed: {
        main: "#B30000",
        accent: "#D12626",
      },
      loading: {
        main: "#0059A1",
        accent: "#0073CF",
      },
      succeeded: {
        main: "#00BE62",
        accent: "#00E375",
      },
    },
  },
};

export default theme;
