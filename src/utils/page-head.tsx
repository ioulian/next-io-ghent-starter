import Head from "next/head";

export const PageTitle = ({ name }: { name?: string }) => {
  const titleArray = [];

  if (typeof name === "string" && name.trim() !== "") {
    titleArray.push(name);
  }

  if (process.env.NEXT_PUBLIC_HEAD_TITLE) {
    titleArray.push(process.env.NEXT_PUBLIC_HEAD_TITLE);
  }

  return (
    <Head>
      <title>{titleArray.join(" | ")}</title>
    </Head>
  );
};
