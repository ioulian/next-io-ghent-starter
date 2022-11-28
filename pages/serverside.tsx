import Image from "next/image";
import { NextSeo } from "next-seo";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import useSWR, { SWRConfig } from "swr";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { StyledMain, StyledPage } from "@/components/styled/Demo";
import logo from "@/img/logo.png";
import { getFetcher } from "@/services/api.service";

import { NextPageWithLayout } from "./_app";

const API = "https://api.github.com/repos/vercel/swr";

const Repo = () => {
  const { data, error } = useSWR(API);

  return (
    <>
      {error && data && <p>Error loading</p>}
      {!error && !data && <p>Loading...</p>}
      {!error && data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong>{" "}
          <strong>✨ {data.stargazers_count}</strong>{" "}
          <strong>🍴 {data.forks_count}</strong>
        </div>
      )}
    </>
  );
};

const ServerSide: NextPageWithLayout = ({
  fallback,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <SWRConfig value={{ fallback }}>
      <NextSeo
        title="Serverside example"
        description="This will be the page meta description"
      />
      <StyledPage>
        <StyledMain>
          <div className="logo">
            <Image
              alt="Logo"
              src={logo}
              layout="fixed"
              width={128}
              height={128}
              quality={90}
              priority
            />
          </div>
          <h1>Server side example</h1>
          <Repo />
        </StyledMain>
      </StyledPage>
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const repoInfo = await getFetcher()(API);

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
      fallback: {
        [API]: repoInfo,
      },
    },
  };
};

export default ServerSide;
