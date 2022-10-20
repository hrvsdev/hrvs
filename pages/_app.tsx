import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Harsh Vyas | Web & Mobile Dev</title>
        <meta
          name="description"
          content="I'm Harsh, a passionate web and mobile developer who loves building better apps."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
