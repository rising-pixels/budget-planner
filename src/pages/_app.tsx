import React from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalToken, theme } from "antd";

const { useToken } = theme;

declare module "@emotion/react" {
  export interface Theme extends GlobalToken {}
}

function App({ Component, pageProps }) {
  const { token } = useToken();

  return (
    <ThemeProvider theme={token}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
