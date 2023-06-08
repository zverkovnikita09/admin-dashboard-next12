import Head from "next/head";
import Auth from "@/application/components/screen/Auth/Auth";

export default function AuthPage() {
  return <>
    <Head>
      <title>Авторизация</title>
    </Head>
    <Auth/>
  </>
}