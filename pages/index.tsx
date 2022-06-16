import Image from "next/image";
import { NextSeo } from "next-seo";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import { StyledMain, StyledPage } from "@/components/styled/Demo";

import logo from "@/img/logo.png";
import logoSvg from "@/img/logo.svg";
import logoSvgSprite from "@/img/logo-sprite.svg";
import { Counter } from "@/features/counter/Counter";
import { wrapper } from "src/store/store";
import { counterSlice } from "src/features/counter/counterSlice";
import { SvgSprite } from "@/components/styled/SvgSpite";

const Home: NextPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
              layout="fixed"
              width={128}
              height={128}
              quality={90}
              priority
              title=".png image"
            />
            <Image
              alt="Logo"
              src={logoSvg.src}
              layout="fixed"
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
                  <Link href={router.route} locale={locale}>
                    <a
                      onClick={() => {
                        document.cookie = `NEXT_LOCALE=${locale}`;
                      }}
                    >
                      {locale}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
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
  (store) =>
    async ({ locale }: GetStaticPropsContext) => {
      await store.dispatch(counterSlice.actions.incrementByAmount(5));

      return {
        props: {
          ...(await serverSideTranslations(locale as string, ["common"])),
        },
      };
    }
);

export default Home;
