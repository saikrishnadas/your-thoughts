import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Your Thoughts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
