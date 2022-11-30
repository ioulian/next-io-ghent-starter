import type { AppProps } from "next/app";
import Script from "next/script";
import { ReactElement, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { SWRConfig } from "swr";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { NextPage } from "next";

import { wrapper } from "src/store/store";

import { GlobalStyle } from "@/styles/GlobalStyles";
import { PageFavicons, PageViewport } from "@/lib/page-head";
import { GTM_ID, sendPageView } from "@/lib/gtm";
import { getFetcher } from "@/services/api.service";
import { theme } from "@/components/styled/Theme";

import SEO from "../next-seo.config";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, ...rest }: AppPropsWithLayout) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", sendPageView);
    return () => {
      router.events.off("routeChangeComplete", sendPageView);
    };
  }, [router.events]);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      <Provider store={store}>
        <PageViewport />
        <PageFavicons />
        {GTM_ID ? (
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
        ) : undefined}
        <DefaultSeo {...SEO} />
        <Normalize />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              fetcher: getFetcher(),
              //fetcher: getAuthFetcher(store, router.locale as AppLocale),
              fallback: props.pageProps.fallback,
            }}
          >
            <NextNprogress showOnShallow={true} color={theme.colors.primary} />
            {getLayout(<Component {...props.pageProps} />)}
          </SWRConfig>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default appWithTranslation(App);
