import Script from "next/script";

import Layout from "../components/Layout";

import "../styles/globals.css";
import "../styles/index.css";
import "../styles/curation.css";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
