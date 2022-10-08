import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/Layout";
import "../styles/globals.css";


export default function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <link rel="icon" type="image/x-icon" href="/img/fav_icon.png"></link>
          <title>Fine Line Tattoo | Inked by Miki</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
