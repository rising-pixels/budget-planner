import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "antd";

const { useToken } = theme;

function App({ Component, pageProps }) {
  const { token } = useToken();

  return (
    <ThemeProvider theme={token}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
