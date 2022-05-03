#!/usr/bin/env node

import path from "path";
import fs from "fs";
import i18nextConfig from "./../next-i18next.config";

const PRIMARY_LOCALE = i18nextConfig.i18n.defaultLocale;
const POSSIBLE_LOCALES = i18nextConfig.i18n.locales.filter(
  (locale) => locale !== PRIMARY_LOCALE
);

const getKeysOfObjectRecursively = (object = {}, parentKey = ""): string[] => {
  // @ts-ignore
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

const getTranslationFile = (locale: string, name: string): {} | undefined => {
  try {
    const file = fs.readFileSync(
      path.join(__dirname, `./../public/locales/${locale}/${name}`)
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
    const primaryTranslationFiles = getTranslationFiles(PRIMARY_LOCALE);

    for (const primaryTranslationFileName of primaryTranslationFiles) {
      const primaryTranslationFile = getTranslationFile(
        PRIMARY_LOCALE,
        primaryTranslationFileName
      );
      const primaryTranslationFileKeys = getKeysOfObjectRecursively(
        primaryTranslationFile
      );
      for (const locale of POSSIBLE_LOCALES) {
        const localeTranslationFile = getTranslationFile(
          locale,
          primaryTranslationFileName
        );

        if (!localeTranslationFile) {
          console.error(
            `Translation file "${primaryTranslationFileName}" is missing for "${locale}".`
          );
          isCorrect = false;
        } else {
          const translationFileKeys = getKeysOfObjectRecursively(
            localeTranslationFile
          );
          const missingKeys = primaryTranslationFileKeys.filter(
            (key) => !translationFileKeys.includes(key)
          );

          if (missingKeys.length !== 0) {
            missingKeys.forEach((missingKey) => {
              console.error(
                `Translation key "${missingKey}" is missing from "${primaryTranslationFileName}" for "${locale}".`
              );
            });
            isCorrect = false;
          }
        }
      }
    }

    resolve(isCorrect);
  });

console.log(
  "We assume primary locale is fully filled in (all files are set + all keys are set)."
);
console.log(
  "We don't check if there are more files or more keys in non-primary locales."
);
console.log("");

check().then((isCorrect) => {
  console.log("");

  if (!isCorrect) {
    console.log("Some errors have been found! You can see them above.");
    process.exit(1);
  }

  console.log("Everything checks out!");
  process.exit(0);
});
