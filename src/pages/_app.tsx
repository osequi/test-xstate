import type { AppProps } from "next/app";

import { Template } from "../components/Template";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
};

export default MyApp;
