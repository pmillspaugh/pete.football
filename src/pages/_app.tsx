import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "../components/library/Layout";
import { CSSReset, GlobalStyles } from "../styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "659601c3710f4a01aacef8ae1f39132a"}'
        />
      </Layout>
    </>
  );
}

export default App;
