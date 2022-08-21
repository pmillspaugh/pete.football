import type { AppProps } from "next/app";
import Layout from "../components/library/Layout";
import { CSSReset, GlobalStyles } from "../styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CSSReset />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
