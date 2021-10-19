import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";

import { GlobalStyle, theme } from "@/styles/GlobalStyles";
import { PageFavicons, PageViewport } from "@/utils/page-head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageViewport />
      <PageFavicons />
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NextNprogress showOnShallow={true} color={theme.colors.primary} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
