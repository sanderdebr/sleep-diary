import { useEffect } from "react";
import Cookies from "universal-cookie";
import { Link } from "next/link";

import * as Constants from "~/src/common/constants";

import Head from "~/src/components/Head";
import Box from "~/src/components/Box";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

function Page(props) {
  useEffect(() => {
    const cookies = new Cookies();
    console.log("jwt: ", props.jwt);
    if (props.jwt) {
      cookies.set(Constants.session.key, props.jwt);
      return;
    }
  }, []);
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box>
        <Logo />
        <H2>Succesfully signed in</H2>
        <Link href="../dashboard">
          <a>Go to dashboard</a>
        </Link>
      </Box>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    error: ctx.err,
    viewer: ctx.query.viewer,
    jwt: ctx.query.jwt,
  };
};

export default Page;
