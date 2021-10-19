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

import { PageTitle } from "@/utils/page-head";

const Home: NextPage = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <PageTitle name="Home" />
      <div>
        <main>
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
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Home;
