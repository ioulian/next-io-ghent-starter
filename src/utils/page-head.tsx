import Head from "next/head";

/**
 * Add page title to the head.
 * Will be suffixed with "NEXT_PUBLIC_HEAD_TITLE" env variable.
 */
export const PageTitle = ({ name }: { name?: string }) => {
  const titleArray = [];

  if (typeof name === "string" && name.trim() !== "") {
    titleArray.push(name);
  }

  if (process.env.NEXT_PUBLIC_HEAD_TITLE) {
    titleArray.push(process.env.NEXT_PUBLIC_HEAD_TITLE);
  }

  return (
    <Head>
      <title>{titleArray.join(" | ")}</title>
    </Head>
  );
};

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
