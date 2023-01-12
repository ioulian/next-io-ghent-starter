import Image from "next/image";
import { NextSeo } from "next-seo";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import sampleSvgSprite from "@tabler/icons/123.svg";
import { useState } from "react";
import { useCallback } from "react";

import { StyledMain, StyledPage } from "@/components/Demo";
import logo from "@/img/logo.png";
import logoSvg from "@/img/logo.svg";
import logoSvgSprite from "@/img/logo-sprite.svg";
import { Counter } from "@/features/counter/Counter";
import SvgSprite from "@/components/common/svg/SvgSprite";
import { requireTranslations } from "@/services/translation.service";
import { requireAnonymous } from "@/features/auth/utilities";
import Heading from "@/components/common/heading/Heading";
import LanguageSwitcher from "@/components/common/language-switcher/LanguageSwitcher";
import Button from "@/components/common/button/Button";

import { wrapper } from "../src/store/store";

import { NextPageWithLayout } from "./_app";

const svgSprite = <SvgSprite src={sampleSvgSprite} title=".svg sprite" />;

const Home: NextPageWithLayout = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  const { t } = useTranslation("app");
  const [, setV] = useState(1);

  const add = useCallback(() => {
    setV((v) => v + 1);
  }, [setV]);

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
          <Heading>{t("title")}</Heading>

          <nav>
            <SvgSprite
              src={sampleSvgSprite}
              title=".svg sprite"
              style={{
                width: 24,
                height: 24,
              }}
            />
            <LanguageSwitcher />
            <Button onClick={add} iconBefore={svgSprite}>
              Test
            </Button>
          </nav>

          <nav>
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
          .then(requireTranslations(locale!, ["app", "common"]))
          .then(({ result }) => {
            resolve(result);
          });
      })
);

export default Home;
