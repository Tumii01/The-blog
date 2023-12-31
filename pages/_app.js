import Head from 'next/head';

import "../styles/globals.css";
import Layout from "../components/layout/layout";
function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport'  content="width=device-width, intial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
