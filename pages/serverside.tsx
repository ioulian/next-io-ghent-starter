import Image from "next/image";
import { NextSeo } from "next-seo";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import useSWR from "swr";
import merge from "lodash/merge";

import { StyledMain, StyledPage } from "@/components/Demo";
import logo from "@/img/logo.png";
import { getFetcher } from "@/services/api.service";
import { requireAnonymous } from "@/features/auth/utilities";
import { requireTranslations } from "@/services/translation.service";
import { catchServerSideProps } from "@/services/serverSideProps.service";

import { wrapper } from "../src/store/store";

import { NextPageWithLayout } from "./_app";

const API = "https://api.github.com/repos/vercel/swr";

const Repo = () => {
  const { data, error } = useSWR(API);

  return (
    <>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      {!!error && !!data && <p>Error loading</p>}
      {/* eslint-disable-next-line i18next/no-literal-string */}
      {!error && !data && <p>Loading...</p>}
      {!error && !!data && (
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

const ServerSide: NextPageWithLayout = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  return (
    <>
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
              width={128}
              height={128}
              quality={90}
              priority
            />
          </div>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          <h1>Server side example</h1>
          <Repo />
        </StyledMain>
      </StyledPage>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) =>
      ({ locale, resolvedUrl, res }: GetServerSidePropsContext) =>
        new Promise((resolve, reject) => {
          requireAnonymous()
            .then(requireTranslations(locale!, ["common"]))
            .then(async ({ result }) => {
              const repoInfo = await getFetcher()(API);

              return {
                result: merge(result, {
                  props: {
                    fallback: {
                      [API]: repoInfo,
                    },
                  },
                }),
                response: repoInfo,
              };
            })
            .then(({ result }) => {
              resolve(result);
            })
            .catch(
              catchServerSideProps(resolve, reject, store, resolvedUrl, res),
            );
        }),
  );

export default ServerSide;
