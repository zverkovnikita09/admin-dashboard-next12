import Layout from '@/application/components/Layout/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Личный кабинет УК</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <Layout>
        <main></main>
      </Layout>
      </>
    </>
  )
}
