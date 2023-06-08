import Layout from "@/application/components/Layout/Layout";
import EditProfile from "@/application/components/screen/EditProfile/EditProfile";
import Tab3 from "@/application/components/screen/EditProfile/ProfileTab3";
import Head from "next/head";

export default function EditPage1() {
  return <>
    <Head>
      <title>Редактирование профиля</title>
    </Head>
    <Layout>
      <EditProfile activeTab={3}>
        <Tab3/>
      </EditProfile>
    </Layout>
  </>
}