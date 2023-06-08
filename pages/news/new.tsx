import Layout from "@/application/components/Layout/Layout";
import EditNews from "@/application/components/screen/EditNews/EditNews";
import Head from "next/head";

export default function NewNews(){
  return <>
  <Head>
    <title>Добавить новость</title>
  </Head>
  <Layout>
    <EditNews title="Добавить новость"/>
  </Layout>
  </>
}