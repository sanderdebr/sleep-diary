import React from "react";
import App from "next/app";
import loadFonts from "~/src/common/fonts";

import AppWrapper from "~/src/components/shared/AppWrapper";

export default class MyApp extends App {
  componentDidMount() {
    loadFonts();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}
