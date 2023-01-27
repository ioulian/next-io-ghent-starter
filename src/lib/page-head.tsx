import Head from "next/head";
import { useRouter } from "next/router";

export const PageViewport = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

/**
 * Add common favicon links to the head.
 *
 * If you wish to update this data, use https://realfavicongenerator.net/.
 * Do not forget to add maskable icon: https://maskable.app/editor. (RFG does not generate it, yet)
 */
export const PageFavicons = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f38a5d" />
      <meta name="msapplication-TileColor" content="#f38a5d" />
      <meta name="theme-color" content="#f38a5d" />
    </Head>
  );
};

export const AutoAltLocales = () => {
  const router = useRouter();
  console.log(router);

  // Do nothing if only one locale is specified
  if (!router.locales || router.locales.length <= 1) {
    return null;
  }

  return (
    <Head>
      {router.locales
        .filter((locale) => locale !== router.locale)
        .map((locale) => (
          <link
            key={locale}
            rel="alternate"
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/${locale}${
              router.asPath !== "/" ? `${router.asPath}` : ""
            }`}
            hrefLang={locale}
          />
        ))}
    </Head>
  );
};
