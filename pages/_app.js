import { ThemeProvider } from "styled-components";

import Sidebar from "@/components/Sidebar";
import GlobalStyle from "@/styles/globals";
import theme from "@/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sidebar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
