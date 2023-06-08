import Layout from "@/application/components/Layout/Layout";
import Information from "@/application/components/screen/Information/Information";
import { InformationType } from "@/application/types/formTypes";
import Head from "next/head";

export default function information() {
   const information: InformationType = {address: 'Воронеж, ул. Куколкина, 18', email: 'otdel-prodazh@glch.ru', phone: '+7 (473) 261–99–99', messenger:'+79100419999'}
   return <>
      <Head>
         <title>Информация об УК</title>
      </Head>
      <Layout>
         <Information defaultValues={information}/>
      </Layout>
   </>
}
