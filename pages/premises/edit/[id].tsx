import Layout from "@/application/components/Layout/Layout";
import EditPremises from "@/application/components/screen/EditPremises/EditPremises";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EditPremisesPage() {
  const { query } = useRouter();
  return <>
    <Head>
      <title>Редактировать помещение</title>
    </Head>
    <Layout>
      <EditPremises title="Редактирование помещения" />
    </Layout>
  </>
}