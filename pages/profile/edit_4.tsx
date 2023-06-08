import Layout from "@/application/components/Layout/Layout";
import EditProfile from "@/application/components/screen/EditProfile/EditProfile";
import Tab4 from "@/application/components/screen/EditProfile/ProfileTab4";
import Head from "next/head";

export default function EditPage1() {
  return <>
    <Head>
      <title>Редактирование профиля</title>
    </Head>
    <Layout>
      <EditProfile activeTab={4}>
        <Tab4/>
      </EditProfile>
    </Layout>
  </>
}