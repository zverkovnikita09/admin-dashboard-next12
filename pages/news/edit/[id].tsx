import Layout from "@/application/components/Layout/Layout";
import EditNews from "@/application/components/screen/EditNews/EditNews";
import Head from "next/head";

export default function EditNewsPage(){
  return <>
    <Head>
      <title>Редактировать новость</title>
    </Head>
    <Layout>
      <EditNews title="Редактирование новости"/>
    </Layout>
  </>
}