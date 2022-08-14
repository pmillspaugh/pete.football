import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
