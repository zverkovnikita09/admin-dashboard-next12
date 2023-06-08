import Layout from "@/application/components/Layout/Layout";
import EditRequest from "@/application/components/screen/EditRequest/EditRequest";
import Head from "next/head";

export default function NewRequestPage(){
  return <>
  <Head>
    <title>Добавить заявку</title>
  </Head>
  <Layout>
    <EditRequest title="Добавление заявки"/>
  </Layout>
  </>
}