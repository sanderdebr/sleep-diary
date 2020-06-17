import App from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/src/common/styles/global";
import theme from "~/src/common/styles/theme";

import Wrapper from "~/src/components/Wrapper";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    );
  }
}
