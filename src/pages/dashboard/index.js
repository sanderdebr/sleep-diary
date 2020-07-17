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

function Dashboard({ session = null, jwt = null }) {
  const {
    session: { user },
    dispatch,
  } = useAppContext();

  // Update session user data
  if (session) {
    useEffect(() => {
      console.log("dashboard user: ", user);
      dispatch({
        type: "updateUser",
        value: { ...session },
      });
    }, [session]);
  }

  // Set cookie if GoogleSignin
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

export async function getServerSideProps(ctx) {
  let session = null;
  let jwt = null;

  if (ctx.query.session) {
    session = ctx.query.session;
  }
  if (ctx.query.jwt) {
    jwt = ctx.query.jwt;
  }

  return {
    props: { session, jwt },
  };
}

// Dashboard.getInitialProps = async (ctx) => {
//   return {
//     error: ctx.err,
//     session: ctx.query.session,
//     jwt: ctx.query.jwt,
//     cookie: ctx.query.cookie,
//   };
// };

export default Dashboard;
