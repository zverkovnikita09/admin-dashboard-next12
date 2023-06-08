import Layout from "@/application/components/Layout/Layout";
import EditPremises from "@/application/components/screen/EditPremises/EditPremises";
import Head from "next/head";

export default function NewPremises() {
  return <>
    <Head>
      <title>Добавить помещение</title>
    </Head>
    <Layout>
      <EditPremises title="Добавление нового помещения" defaultHabitants={[{ email: 'petrov@ya.com', phone: '+79000000000', name: 'Петр', surname: 'Петров', id: 1 }]} allHabitantsList={[
        { email: 'petrov@ya.com', phone: '+79000000000', name: 'Петр', surname: 'Петров', id: 1 },
        { email: 'petrov@ya.com', phone: '+79000000000', name: 'Иван', surname: 'Иванов', id: 2 },
        { email: 'petrov@ya.com', phone: '+79000000000', name: 'Федор', surname: 'Федоров', id: 3 }
      ]} />
    </Layout>
  </>
}