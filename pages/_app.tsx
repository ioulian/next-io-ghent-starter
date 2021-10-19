import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import NextNprogress from "nextjs-progressbar";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

import { GlobalStyle, theme } from "@/styles/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
