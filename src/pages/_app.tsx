import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "antd";
import { Layout } from "../common/Layout";

const { useToken } = theme;

function App({ Component, pageProps }) {
  const { token } = useToken();

  return (
    <ThemeProvider theme={token}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
