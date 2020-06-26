import Head from "next/head";
import Cookies from "universal-cookie";

import { useEffect } from "react";
import * as Constants from "~/src/common/constants";

import Box from "~/src/components/Box";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

const cookies = new Cookies();

function Page(props) {
  useEffect(() => {
    if (props.jwt) {
      cookies.set(Constants.session.key, props.jwt, { path: "/" });
      return;
    }
  }, []);

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box>
        <Logo />
        <H2>Succesfully signed in</H2>
        <a href="/dashboard">View an authenticated page.</a>
      </Box>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    error: ctx.err,
    viewer: ctx.query.viewer,
    jwt: ctx.query.jwt,
    cookie: ctx.query.cookie,
  };
};

export default Page;
