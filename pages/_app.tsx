import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { SWRConfig } from "swr";
import { DefaultSeo } from "next-seo";

import { GlobalStyle, theme } from "@/styles/GlobalStyles";
import { PageFavicons, PageViewport } from "@/lib/page-head";

import SEO from "../next-seo.config";
import { GTM_ID, sendPageView } from "@/lib/gtm";
import { wrapper } from "src/store/store";
import { getFetcher } from "@/services/api.service";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", sendPageView);
    return () => {
      router.events.off("routeChangeComplete", sendPageView);
    };
  }, [router.events]);

  // TODO: make GTM tree-shakable
  return (
    <>
      <PageViewport />
      <PageFavicons />
      {GTM_ID && (
        <Script
          id="GTM"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
          }}
        />
      )}
      <DefaultSeo {...SEO} />
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: getFetcher(),
            fallback: pageProps.fallback,
            // const { store } = useContext(ReactReduxContext);
            // fetcher: getAuthFetcher(store),
          }}
        >
          <NextNprogress showOnShallow={true} color={theme.colors.primary} />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
