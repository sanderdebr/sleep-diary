import Cookies from "universal-cookie";
import { useEffect } from "react";

import { useAppContext } from "~/src/state/hooks";

import * as Constants from "~/src/common/constants";
// import * as Database from "~/src/common/database";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";
import Content from "~/src/components/dashboard/Content";

const cookies = new Cookies();

function Dashboard({ session, jwt }) {
  const { dispatch } = useAppContext();

  // Update session user data
  if (session) {
    useEffect(() => {
      dispatch({
        type: "updateUser",
        value: { ...session },
      });
    }, [session]);
  }

  // Set cookie
  if (jwt) {
    useEffect(() => {
      cookies.set(Constants.session.key, jwt, { path: "/" });
      return;
    }, []);
  }

  // Get activities
  // if (!session.activities && session) {
  //   useEffect(async () => {
  //     const activities = 5; //await Database.getActivities({ id: session.user.id });
  //     dispatch({ type: "getActivities", value: activities });
  //   }, [session]);
  // }

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box noPadding flex>
        <Sidebar />
        <Content session={session} />
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
