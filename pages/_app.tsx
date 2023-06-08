import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({
  weight: ['400', '600', '700'],
  subsets: ['cyrillic']
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  </>
}
