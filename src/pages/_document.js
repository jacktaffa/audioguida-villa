import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Villa Selvatico - audioguida</title>
        <link rel="icon"  href="/images/iconx256.jpg" />
      <link rel='manifest' href='/manifest.webmanifest' />


        </Head>
      <body className='text-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
