import App from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/common/styles/global";
import theme from "~/common/styles/theme";

import Wrapper from "~/components/Wrapper";
import Container from "~/components/Container";

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
        </Wrapper>
      </ThemeProvider>
    );
  }
}
