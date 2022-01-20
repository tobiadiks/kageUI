import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Kage-UI: Newsletter</title>
        <meta
          name="Description"
          content="A weekly UI component issue"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
