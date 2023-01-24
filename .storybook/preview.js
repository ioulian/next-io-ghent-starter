import theme from "./../src/components/styled/Theme";
import GlobalStyle from "./../src/components/styled/GlobalStyles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n as i18nConfig } from "../next-i18next.config";

import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

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
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </>
  ),

  (Story, Context) => {
    const ns = ["common"];
    const supportedLngs = i18nConfig.locales;
    const resources = ns.reduce((acc, n) => {
      supportedLngs.forEach((lng) => {
        if (!acc[lng]) acc[lng] = {};
        acc[lng] = {
          ...acc[lng],
          [n]: require(`../public/locales/${lng}/${n}.json`),
        };
      });
      return acc;
    }, {});

    i18n.use(initReactI18next).init({
      lng: i18nConfig.defaultLocale,
      fallbackLng: i18nConfig.defaultLocale,
      defaultNS: "common",
      ns,
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      supportedLngs,
      resources,
    });

    return <Story />;
  },
];
