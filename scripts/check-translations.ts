#!/usr/bin/env node

import path from "path";
import fs from "fs";

import i18nextConfig from "./../next-i18next.config";
import {
  getErrorMessage,
  getSimpleErrorMessage,
  getSimpleSuccessMessage,
} from "./utils";

// Colors: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

// const PRIMARY_LOCALE = i18nextConfig.i18n.defaultLocale;
const POSSIBLE_LOCALES = i18nextConfig.i18n.locales;

const getKeysOfObjectRecursively = (object = {}, parentKey = ""): string[] => {
  // @ts-expect-error FIXME:
  return Object.entries(object).reduce((list, [key, value]) => {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      return [...list, ...getKeysOfObjectRecursively(value, currentKey)];
    } else {
      return [...list, currentKey];
    }
  }, []) as string[];
};

const getTranslationFiles = (locale: string): string[] =>
  fs.readdirSync(path.join(__dirname, `./../public/locales/${locale}`));

const getTranslationFile = (
  locale: string,
  name: string,
): Record<string, unknown> | undefined => {
  try {
    const file = fs.readFileSync(
      path.join(__dirname, `./../public/locales/${locale}/${name}`),
    );

    if (!file) {
      return undefined;
    }

    return JSON.parse(file.toString());
  } catch {
    return undefined;
  }
};

const check = async (): Promise<boolean> =>
  new Promise(async (resolve) => {
    let isCorrect = true;

    // Loop through each locale
    for (const primaryLocale of POSSIBLE_LOCALES) {
      // Get all files for current locale
      const primaryTranslationFiles = getTranslationFiles(primaryLocale);

      // Loop through all files inside this locale
      for (const primaryTranslationFileName of primaryTranslationFiles) {
        const primaryTranslationFile = getTranslationFile(
          primaryLocale,
          primaryTranslationFileName,
        );
        const primaryTranslationFileKeys = getKeysOfObjectRecursively(
          primaryTranslationFile,
        );

        // Check the rest of the locales
        for (const locale of POSSIBLE_LOCALES.filter(
          (currentLocale) => currentLocale !== primaryLocale,
        )) {
          const localeTranslationFile = getTranslationFile(
            locale,
            primaryTranslationFileName,
          );

          // Check if the file exists for the locale
          if (!localeTranslationFile) {
            console.error(
              getErrorMessage(
                `\x1b[1m${primaryTranslationFileName}\x1b[0m" is missing for "\x1b[1m${locale}\x1b[0m".`,
                "File",
              ),
            );
            isCorrect = false;
          } else {
            // Check if there are missing keys
            const translationFileKeys = getKeysOfObjectRecursively(
              localeTranslationFile,
            );
            const missingKeys = primaryTranslationFileKeys.filter(
              (key) => !translationFileKeys.includes(key),
            );

            if (missingKeys.length !== 0) {
              missingKeys.forEach((missingKey) => {
                console.error(
                  getErrorMessage(
                    `"\x1b[1m${missingKey}\x1b[0m" from "\x1b[1m${primaryLocale}\x1b[0m" is missing from "\x1b[1m${primaryTranslationFileName}\x1b[0m" for "\x1b[1m${locale}\x1b[0m".`,
                    "Key",
                  ),
                );
              });
              isCorrect = false;
            }
          }
        }
      }
    }

    resolve(isCorrect);
  });

check().then((isCorrect) => {
  console.log("");

  if (!isCorrect) {
    console.error(
      getSimpleErrorMessage(
        "Some errors have been found! You can see them above.",
      ),
    );
    process.exit(1);
  }

  console.log(getSimpleSuccessMessage("Everything checks out!"));
  process.exit(0);
});
