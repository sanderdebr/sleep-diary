import Cookies from "universal-cookie";
import { useEffect } from "react";

import * as Constants from "~/src/common/constants";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";

const cookies = new Cookies();

function Page(props) {
  console.log("dashboard PROPS: ", props);
  useEffect(() => {
    if (props.jwt) {
      cookies.set(Constants.session.key, props.jwt, { path: "/" });
      return;
    }
  }, []);

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box noPadding>
        <Sidebar />
      </Box>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    error: ctx.err,
    viewer: ctx.query.viewer,
    data: ctx.query.data,
    jwt: ctx.query.jwt,
    cookie: ctx.query.cookie,
  };
};

export default Page;
