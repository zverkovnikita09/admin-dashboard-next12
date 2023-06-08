import Layout from "@/application/components/Layout/Layout";
import EditRequest from "@/application/components/screen/EditRequest/EditRequest";
import Head from "next/head";

export default function EditRequestPage() {
  return <>
    <Head>
      <title>Редактировать заявку</title>
    </Head>
    <Layout>
      <EditRequest title="Редактирование заявки"/>
    </Layout>
  </>
}