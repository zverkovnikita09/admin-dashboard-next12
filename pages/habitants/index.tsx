import Layout from "@/application/components/Layout/Layout";
import Habitants from "@/application/components/screen/Habitants/Habitants";
import Head from "next/head";

export default function HabitantsPage(){
  return <>
  <Head>
    <title>Жильцы</title>
  </Head>
  <Layout>
    <Habitants/>
  </Layout>
  </>
}