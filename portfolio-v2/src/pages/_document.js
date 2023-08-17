import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">

      <Head>
        <meta property="og:url" content="https://portfolio-v2-zeta-seven.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abiola Awoyemi | Frontend Developer" />
        <meta property="og:description" content="Awoyemi Abiola - Frontend Developer" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Yourgotopyromaniac/Abiola-Awoyemi/main/Portfolio%20Website/images/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abiola Awoyemi | Frontend Developer" />
        <meta name="twitter:description" content="Awoyemi Abiola - Frontend Developer" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Yourgotopyromaniac/Abiola-Awoyemi/main/Portfolio%20Website/images/og-image.png" />
        <meta property="twitter:domain" content="portfolio-v2-zeta-seven.vercel.app" />
        <meta property="twitter:url" content="https://portfolio-v2-zeta-seven.vercel.app" />

        <meta name="description" content="Awoyemi Abiola - Frontend Developer" />
        <title>Abiola Awoyemi | Frontend Developer</title>
        <meta name="theme-color" content="#090909" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
