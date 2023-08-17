import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

      <Head />
      <meta name="description" content="Awoyemi Abiola - Frontend Developer" />
      <title>Abiola Awoyemi | Frontend Developer</title>
      <meta name="theme-color" content="#090909" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abiola Awoyemi | Frontend Developer" />
      <meta name="twitter:description" content="Awoyemi Abiola - Frontend Developer" />
      <meta name="twitter:image" content="/opengraph.png" />
      <meta property="twitter:domain" content="biolaawoyemi.com" />
      <meta property="twitter:url" content="https://www.biolaawoyemi.com/" />

        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
