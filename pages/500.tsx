import Layout from "@/application/components/Layout/Layout";
import Error500 from "@/application/components/screen/Error500/Error500";
import Head from "next/head";

export default function Error500Page() {
  return <>
    <Head>
      <title>Ошибка</title>
    </Head>
    <Layout withoutSidebar>
      <Error500 />
    </Layout>
  </>
}