import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageTitle } from "@/utils/page-head";
import { fetcher } from "@/utils/swr";
import useSWR, { SWRConfig } from "swr";

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

const ServerSide: NextPage = ({
  fallback,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PageTitle name="Server side example" />
      <div>
        <main>
          <h1>Server side example</h1>
          <Repo />
        </main>
      </div>
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const repoInfo = await fetcher(API);
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      fallback: {
        [API]: repoInfo,
      },
    },
  };
};

export default ServerSide;
