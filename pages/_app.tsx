import "../scripts/wdyr";

import type { AppProps } from "next/app";
import { ReactElement, useEffect, ReactNode, useMemo } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { SWRConfig } from "swr";
import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { NextPage } from "next";

import GlobalStyle from "@/styles/GlobalStyles";
import { AutoAltLocales, PageFavicons, PageViewport } from "@/lib/page-head";
import { GTMScript, sendPageView } from "@/lib/gtm";
import { getFetcher } from "@/services/api.service";
import theme from "@/components/styled/Theme";

import { wrapper } from "../src/store/store";
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

  const SWRConfigValue = useMemo(
    () => ({
      fetcher: getFetcher(),
      //fetcher: getAuthFetcher(store, router.locale as AppLocale),
      fallback: props.pageProps.fallback,
    }),
    [props],
  );

  return (
    <div>
      <Provider store={store}>
        <PageViewport />
        <PageFavicons />
        <AutoAltLocales />
        <GTMScript />
        <DefaultSeo {...SEO} />
        <Normalize />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SWRConfig value={SWRConfigValue}>
            <NextNprogress showOnShallow color={theme.colors.primary} />
            {getLayout(<Component {...props.pageProps} />)}
          </SWRConfig>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default appWithTranslation(App);
