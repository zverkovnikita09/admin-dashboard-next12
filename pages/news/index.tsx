import Layout from "@/application/components/Layout/Layout";
import News from "@/application/components/screen/News/News";
import Head from "next/head";

export default function NewsPage() {
  return <>
    <Head>
      <title>Новости</title>
    </Head>
    <Layout>
      <News />
    </Layout>
  </>
}