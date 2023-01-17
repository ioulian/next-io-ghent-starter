import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | iO Ghent",
  defaultTitle: "iO Ghent",
  openGraph: {
    type: "website",
    site_name: "iO Ghent",
  },
};

export default config;
