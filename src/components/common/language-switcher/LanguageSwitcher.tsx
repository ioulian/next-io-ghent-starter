import { FC, memo, MouseEvent as ReactMouseEvent, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useCookies } from "react-cookie";

import { InferComponentProps } from "@/types/styled";

import { StyledLanguageSwitcher } from "./LanguageSwitcher.styles";

// TODO: fix locale typing in whole project
const LanguageSwitcher: FC<
  Omit<InferComponentProps<typeof StyledLanguageSwitcher>, "children">
> = ({ ...props }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [, setCookie] = useCookies(["NEXT_LOCALE"]);

  // These checks are needed when the component is being rendered in storybook
  const locales = router?.locales ?? ["nl-BE", "fr-BE", "en-GB"];
  const currentLocale = router?.locale ?? "nl-BE";

  const changeLanguage = useMemo(
    () =>
      (locale: string) =>
      (e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        setCookie("NEXT_LOCALE", locale, {
          maxAge: 31536000,
          path: "/",
        });

        window.location.href = e.currentTarget.href;
      },
    [setCookie],
  );

  const href = useMemo(
    () => ({
      pathname: router?.pathname,
      query: router?.query,
    }),
    [router?.pathname, router?.query],
  );

  return (
    <StyledLanguageSwitcher {...props}>
      {locales ? (
        <ul>
          {locales.map((locale) => {
            const isActiveLanguage = currentLocale === locale;
            return (
              <li key={locale}>
                <Link
                  href={href}
                  locale={locale}
                  lang={locale}
                  hrefLang={locale}
                  className={isActiveLanguage ? "active" : undefined}
                  aria-label={
                    isActiveLanguage
                      ? (t("languageSwitcher.current", {
                          // @ts-expect-error Is dynamic
                          locale: t(`languageSwitcher.locales.${locale}`),
                        }) as string)
                      : // @ts-expect-error Is dynamic
                        (t(`languageSwitcher.locales.${locale}`) as string)
                  }
                  onClick={changeLanguage(locale)}
                >
                  <abbr
                    // @ts-expect-error Is dynamic
                    title={t(`languageSwitcher.locales.${locale}`)}
                  >
                    {locale}
                  </abbr>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </StyledLanguageSwitcher>
  );
};

if (process.env.NODE_ENV === "development") {
  LanguageSwitcher.whyDidYouRender = true;
}

export default memo(LanguageSwitcher);
