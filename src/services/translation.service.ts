import { Namespace } from "i18next";
import merge from "lodash/merge";
import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { RequireResult } from "./serverSideProps.service";

type ArrayElementOrSelf<T> = T extends Array<infer U> ? U[] : T[];

export const getTranslations = async (
  locale: string,
  nameSpaces: ArrayElementOrSelf<Namespace> | undefined
): Promise<SSRConfig> => {
  const i18nLocal = await serverSideTranslations(locale as string, nameSpaces);
  return i18nLocal;
};

export const requireTranslations =
  (locale: string, nameSpaces: ArrayElementOrSelf<Namespace> | undefined) =>
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
          })
        );
      });
    });