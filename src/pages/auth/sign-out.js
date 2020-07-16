import { useEffect } from "react";

import * as Constants from "~/src/common/constants";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Logo from "~/src/components/shared/Logo";
import { H2 } from "~/src/components/shared/Text";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Page(props) {
  useEffect(() => {
    const jwt = cookies.get(Constants.session.key);

    if (jwt) {
      cookies.remove(Constants.session.key, { path: "/" });
      window.location.href = "/";
      return;
    }
  }, []);
  return (
    <>
      <Head title="Signed Out | SleepDiary" />
      <Box>
        <Logo />
        <H2>Signed out</H2>
      </Box>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    error: ctx.err,
    session: ctx.query.session,
    jwt: ctx.query.jwt,
  };
};

export default Page;
