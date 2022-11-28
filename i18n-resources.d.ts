import "i18next";

import common from "./public/locales/nl/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "common";
    // custom resources type
    resources: {
      common: typeof common;
    };
  }
}
