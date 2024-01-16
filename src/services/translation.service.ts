import { Namespace } from "i18next";
import merge from "lodash/merge";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { RequireResult } from "./serverSideProps.service";

// From node_modules/next-i18next/dist/types/serverSideTranslations.d.ts
type ArrayElementOrSelf<T> = T extends ReadonlyArray<infer U> ? U[] : T[];

export const getTranslations = async (
  locale: string,
  nameSpaces: ArrayElementOrSelf<Namespace> | string | string[] | undefined,
): Promise<SSRConfig> => {
  return await serverSideTranslations(locale as string, nameSpaces);
};

export const requireTranslations =
  (
    locale: string,
    nameSpaces: ArrayElementOrSelf<Namespace> | string | string[] | undefined,
  ) =>
  (result: RequireResult) =>
    new Promise<RequireResult>((resolve) => {
      getTranslations(locale, nameSpaces).then((translations) => {
        resolve(
          merge(result, {
            result: {
              props: {
                ...translations,
              },
            },
          }),
        );
      });
    });
