import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React);
}

import App from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "~/src/common/styles/global";
import theme from "~/src/common/styles/theme";
import loadFonts from "~/src/common/fonts";

import AppWrapper from "~/src/components/shared/AppWrapper";

export default class MyApp extends App {
  componentDidMount() {
    loadFonts();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
