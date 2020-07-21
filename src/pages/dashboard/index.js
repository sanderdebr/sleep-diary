import Cookies from "universal-cookie";
import { useEffect } from "react";

import * as Constants from "~/src/common/constants";

import { useAppContext } from "~/src/state/hooks";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";
import Content from "~/src/components/dashboard/Content";

const cookies = new Cookies();

function Dashboard({ session = null, jwt = null, activities = null }) {
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

  // Set cookie if GoogleSignin
  if (jwt) {
    useEffect(() => {
      cookies.set(Constants.session.key, jwt, { path: "/" });
      return;
    }, []);
  }

  // Get activities
  if (activities) {
    useEffect(() => {
      dispatch({ type: "updateActivities", value: activities });
    }, [activities]);
  }

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box noPadding flex>
        <Sidebar />
        <Content session={session} activities={activities} />
      </Box>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let session = null,
    jwt = null,
    activities = null;

  if (ctx.query.session) {
    session = ctx.query.session;
  }
  if (ctx.query.jwt) {
    jwt = ctx.query.jwt;
  }
  if (ctx.query.activities) {
    activities = ctx.query.activities;
  }

  return {
    props: { session, jwt, activities },
  };
}

export default Dashboard;
