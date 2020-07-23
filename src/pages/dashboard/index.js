import Cookies from "universal-cookie";
import { useEffect } from "react";

import * as Constants from "~/src/common/constants";
import * as Actions from "~/src/common/actions";

import { useAppContext } from "~/src/state/hooks";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";
import Content from "~/src/components/dashboard/Content";

const cookies = new Cookies();

function Dashboard({ session = null, jwt = null }) {
  const { activities, dispatch } = useAppContext();

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

  // Get activities if none in app state context yet
  useEffect(() => {
    const getActivities = async () => {
      const response = await Actions.getActivities(session.id);
      dispatch({ type: "updateActivities", value: response.result });
    };

    getActivities();
  }, []);

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
    jwt = null;

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

export default Dashboard;
