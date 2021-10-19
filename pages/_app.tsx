import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { SWRConfig } from "swr";

import { GlobalStyle, theme } from "@/styles/GlobalStyles";
import { PageFavicons, PageViewport } from "@/utils/page-head";
import { fetcher } from "@/utils/swr";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageViewport />
      <PageFavicons />
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher,
          }}
        >
          <NextNprogress showOnShallow={true} color={theme.colors.primary} />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
