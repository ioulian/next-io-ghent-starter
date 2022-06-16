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
