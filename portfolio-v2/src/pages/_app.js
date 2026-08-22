import '@/styles/globals.css'
import '@fontsource/bebas-neue';
import '@fontsource-variable/space-grotesk';
import { Provider } from 'react-redux';
import store from '../store/store';
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Head>
        <meta property="og:url" content="https://www.biolaawoyemi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Abiola Awoyemi | Frontend Developer" />
        <meta property="og:description" content="Frontend Developer with experience creating functional and aesthetic web applications." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Yourgotopyromaniac/Abiola-Awoyemi/main/Portfolio%20Website/images/opengraph.PNG" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abiola Awoyemi | Frontend Developer" />
        <meta name="twitter:description" content="Frontend Developer with experience creating functional and aesthetic web applications." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/Yourgotopyromaniac/Abiola-Awoyemi/main/Portfolio%20Website/images/opengraph.PNG" />
        <meta property="twitter:domain" content="biolaawoyemi.com" />
        <meta property="twitter:url" content="https://www.biolaawoyemi.com" />

        <meta name="description" content="Frontend Developer with experience creating functional and aesthetic web applications." />
        <title>Abiola Awoyemi | Frontend Developer</title>
        <meta name="theme-color" content="#090909" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );

}
