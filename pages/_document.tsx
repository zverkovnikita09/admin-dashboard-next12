import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <body>
        <Main />
        <div id='portal'/>
        <NextScript />
      </body>
    </Html>
  )
}
