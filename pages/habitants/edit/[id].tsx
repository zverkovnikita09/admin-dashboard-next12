import Layout from "@/application/components/Layout/Layout";
import EditHabitant from "@/application/components/screen/EditHabitant/EditHabitant";
import Head from "next/head";

export default function EditHabitantPage(){
  return <>
    <Head>
      <title>Редактировать данные жильца</title>
    </Head>
    <Layout>
      <EditHabitant title="Редактирование данных жильца"/>
    </Layout>
  </>
}