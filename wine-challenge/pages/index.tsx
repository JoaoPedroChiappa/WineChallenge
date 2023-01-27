import Head from "next/head";
import { HomePage } from "../src/components/home/home-page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
