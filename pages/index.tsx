import Image from "next/image";
import { NextSeo } from "next-seo";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import { StyledMain, StyledPage } from "@/components/Demo";
import logo from "@/img/logo.png";
import logoSvg from "@/img/logo.svg";
import logoSvgSprite from "@/img/logo-sprite.svg";
import { Counter } from "@/features/counter/Counter";
import { SvgSprite } from "@/components/common/svg/SvgSprite";
import { requireTranslations } from "@/services/translation.service";
import { requireAnonymous } from "@/features/auth/utilities";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/common/floating/tooltip/Tooltip";

import { wrapper } from "../src/store/store";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Home"
        description="This will be the page meta description"
      />
      <StyledPage>
        <StyledMain>
          <div className="logo">
            <SvgSprite src={logoSvgSprite} title=".svg sprite" />
            <Image
              alt="Logo"
              src={logo}
              width={128}
              height={128}
              quality={90}
              priority
              title=".png image"
            />
            <Image
              alt="Logo"
              src={logoSvg.src}
              width={128}
              height={128}
              quality={90}
              priority
              title=".svg image"
            />
          </div>
          <h1>{t("title")}</h1>

          <nav>
            <ul>
              {router.locales?.map((locale) => (
                <li key={locale}>
                  <Link
                    href={router.route}
                    locale={locale}
                    onClick={() => {
                      document.cookie = `NEXT_LOCALE=${locale}`;
                    }}
                  >
                    {locale}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <Tooltip>
              <TooltipTrigger>My trigger</TooltipTrigger>
              <TooltipContent className="Tooltip">My tooltip</TooltipContent>
            </Tooltip>
            <Link
              href={{
                pathname: "/serverside",
              }}
            >
              Go to server side example
            </Link>
          </nav>

          <div>
            <Counter />
          </div>
        </StyledMain>
      </StyledPage>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () =>
    ({ locale }: GetStaticPropsContext) =>
      new Promise((resolve) => {
        requireAnonymous()
          .then(requireTranslations(locale!, ["common"]))
          .then(({ result }) => {
            resolve(result);
          });
      })
);

export default Home;
