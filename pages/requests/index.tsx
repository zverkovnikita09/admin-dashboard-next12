import Layout from "@/application/components/Layout/Layout";
import Requests from "@/application/components/screen/Requests/Requests";
import Head from "next/head";

export default function RequestsPage(){
  return <>
    <Head>
      <title>Заявки</title>
    </Head>
    <Layout>
      <Requests/>
    </Layout>
  </>
}