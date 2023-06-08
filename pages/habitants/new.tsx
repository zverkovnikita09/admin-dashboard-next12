import Layout from "@/application/components/Layout/Layout";
import EditHabitant from "@/application/components/screen/EditHabitant/EditHabitant";
import Head from "next/head";

export default function NewHabitans() {
  return <>
    <Head>
      <title>Добавить жильца</title>
    </Head>
    <Layout>
      <EditHabitant allPremisesList={[
        {id: 1, floor: 3, number: '321', square: '225 кв. м.'},
        {id: 2, floor: 2, number: '257', square: '15 кв. м.'},
        {id: 3, floor: 4, number: '480', square: '50 кв. м.'}
      ]} title="Добавление нового жильца"/>
    </Layout>
  </>
}