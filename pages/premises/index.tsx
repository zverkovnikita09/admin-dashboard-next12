import Layout from "@/application/components/Layout/Layout";
import Premises from "@/application/components/screen/Premises/Premises";
import Head from "next/head";

export default function PremisesPage(){
  return <>
  <Head>
    <title>Помещения</title>
  </Head>
  <Layout>
    <Premises/>
  </Layout>
  </>
}