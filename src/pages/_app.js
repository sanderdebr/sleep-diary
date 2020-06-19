import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React);
}

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
