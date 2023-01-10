import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

import { InferComponentProps } from "@/types/styled";

import { StyledLanguageSwitcher } from "./LanguageSwitcher.styles";

const LanguageSwitcher: FC<
  InferComponentProps<typeof StyledLanguageSwitcher>
> = ({ ...props }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [_, setCookie] = useCookies(["NEXT_LOCALE"]);

  // These checks are needed when the component is being rendered in storybook
  const locales = router?.locales ?? ["nl", "fr", "en"];
  const currentLocale = router?.locale ?? "nl";

  return (
    <StyledLanguageSwitcher {...props}>
      {locales && (
        <ul>
          {locales.map((locale) => {
            const isActiveLanguage = currentLocale === locale;
            return (
              <li key={locale}>
                <Link
                  href={{
                    pathname: router?.pathname,
                    query: router?.query,
                  }}
                  locale={locale}
                  lang={locale}
                  hrefLang={locale}
                  className={isActiveLanguage ? "active" : undefined}
                  aria-label={
                    isActiveLanguage
                      ? t("languageSwitcher.current", { locale })
                      : undefined
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setCookie("NEXT_LOCALE", locale, {
                      maxAge: 31536000,
                      path: "/",
                    });

                    // @ts-ignore
                    window.location = e.currentTarget.href;
                  }}
                >
                  <abbr
                    // @ts-ignore
                    title={t(`languageSwitcher.locales.${locale}`)}
                  >
                    {locale}
                  </abbr>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
