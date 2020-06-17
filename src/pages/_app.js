import App from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/src/common/styles/global";
import theme from "~/src/common/styles/theme";

import Wrapper from "~/src/components/Wrapper";
import Container from "~/src/components/Container";
import Wave from "~/src/components/Wave";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Container>
            <Component {...pageProps} />
          </Container>
          <Wave />
        </Wrapper>
      </ThemeProvider>
    );
  }
}
