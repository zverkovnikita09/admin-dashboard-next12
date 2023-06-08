import Layout from "@/application/components/Layout/Layout";
import EditProfile from "@/application/components/screen/EditProfile/EditProfile";
import Tab2 from "@/application/components/screen/EditProfile/ProfileTab2";
import Head from "next/head";

export default function EditPage1() {
  return <>
    <Head>
      <title>Редактирование профиля</title>
    </Head>
    <Layout>
      <EditProfile activeTab={2}>
        <Tab2/>
      </EditProfile>
    </Layout>
  </>
}