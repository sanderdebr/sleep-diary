import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React);
}

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
