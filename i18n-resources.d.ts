import "react-i18next";

// TODO: add more namespaces if needed
import common from "./public/locales/nl/common.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "common";
    // custom resources type
    resources: {
      common: typeof common;
    };
  }
}
