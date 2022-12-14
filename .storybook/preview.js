import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { theme } from "./../src/components/styled/Theme";
import { GlobalStyle } from "./../src/components/styled/GlobalStyles";
import i18n from "./i18next.js";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

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

// Global wrapper to apply Global style
addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));

// Add theme support
addDecorator(withThemesProvider([theme], ThemeProvider));

export const parameters = {
  i18n,
  locale: "nl",
  locales: {
    fr: "Français",
    nl: "Nederlands",
    en: "English",
  },
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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
