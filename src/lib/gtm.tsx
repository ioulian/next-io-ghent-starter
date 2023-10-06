import Script from "next/script";
import { CSSProperties, FC, memo, useMemo } from "react";

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const sendPageView = (url: string) => {
  if (
    GTM_ID &&
    typeof window !== "undefined" &&
    // @ts-ignore
    typeof window.dataLayer !== "undefined"
  ) {
    // @ts-ignore
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
};

const GTMScriptComponent: FC = () => {
  const innerHTML = useMemo(
    () => ({
      __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', '${GTM_ID}');
`,
    }),
    [],
  );

  if (!GTM_ID) {
    return null;
  }

  return (
    <Script
      id="GTM"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={innerHTML}
    />
  );
};

export const GTMScript = memo(GTMScriptComponent);

const GTMNoScriptComponent: FC = () => {
  const style = useMemo<CSSProperties>(
    () => ({ display: "none", visibility: "hidden" }),
    [],
  );

  if (!GTM_ID) {
    return null;
  }

  return (
    <noscript>
      <iframe
        title="GTM NoScript Iframe"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={style}
      />
    </noscript>
  );
};

export const GTMNoScript = memo(GTMNoScriptComponent);
