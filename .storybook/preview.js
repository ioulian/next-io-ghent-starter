import theme from "./../src/components/styled/Theme";
import GlobalStyle from "./../src/components/styled/GlobalStyles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { ThemeProvider } from "styled-components";

// https://github.com/vercel/next.js/issues/36417#issuecomment-1117360509
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, "default", {
//   configurable: true,
//   value: (props) =>
//     typeof props.src === "string" ? (
//       <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//     ) : (
//       <OriginalNextImage {...props} unoptimized />
//     ),
// });

// Object.defineProperty(NextImage, "__esModule", {
//   configurable: true,
//   value: true,
// });

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  // Global wrapper to apply Global style and theme
  (storyFn) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  ),
];
