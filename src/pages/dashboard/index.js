import Cookies from "universal-cookie";
import { useEffect } from "react";

import { useAppContext } from "~/src/state/hooks";

import * as Constants from "~/src/common/constants";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";
import Content from "~/src/components/dashboard/Content";

const cookies = new Cookies();

function Dashboard(props) {
  const { session, dispatch } = useAppContext();
  console.log("session: ", session);

  if (props.session) {
    useEffect(() => {
      dispatch({ type: "updateSession", value: props.session });

      if (props.jwt) {
        cookies.set(Constants.session.key, props.jwt, { path: "/" });
        return;
      }
    }, []);
  }

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box noPadding flex>
        <Sidebar />
        <Content session={props.session} />
      </Box>
    </>
  );
}

Dashboard.getInitialProps = async (ctx) => {
  return {
    error: ctx.err,
    session: ctx.query.session,
    jwt: ctx.query.jwt,
    cookie: ctx.query.cookie,
  };
};

export default Dashboard;
