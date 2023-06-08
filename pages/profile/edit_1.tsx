import Layout from "@/application/components/Layout/Layout";
import EditProfile from "@/application/components/screen/EditProfile/EditProfile";
import Tab1 from "@/application/components/screen/EditProfile/ProfileTab1";
import Head from "next/head";

export default function EditPage1(){
  return<>
    <Head>
      <title>Редактирование профиля</title>
    </Head>
    <Layout>
      <EditProfile activeTab={1}>
        <Tab1/>
      </EditProfile>
    </Layout>
  </>
}