import Layout from "@/application/components/Layout/Layout";
import Error404 from "@/application/components/screen/Error404/Error404";
import Head from "next/head";

export default function Error404Page() {
  return <>
    <Head>
      <title>Страница не найдена</title>
    </Head>
    <Layout withoutSidebar>
      <Error404 />
    </Layout>
  </>
}