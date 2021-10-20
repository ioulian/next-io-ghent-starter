export const PageViewport = () => {
  return (
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  );
};

/**
 * Add common favicon links to the head.
 *
 * If you wish to update this data, use https://realfavicongenerator.net/.
 */
export const PageFavicons = () => {
  return (
    <>
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
    </>
  );
};
