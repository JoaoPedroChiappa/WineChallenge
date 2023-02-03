import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";
import Data from "../data/data.json";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Wine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { wineProducts } = Data;
  return {
    props: {
      data: wineProducts,
    },
  };
}
