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

function Dashboard({ session, jwt, activities }) {
  const { dispatch } = useAppContext();

  // Update activities based on DB API result
  useEffect(() => {
    dispatch({ type: "updateActivities", value: activities.result });
  }, [activities]);

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

export const getServerSideProps = async (ctx) => {
  let session = ctx.query.session || null;
  let jwt = ctx.query.jwt || null;
  let activities = null;

  if (session) {
    activities = await Actions.getActivities(session.id, ctx.req);
  }

  return {
    props: { session, jwt, activities },
  };
};

export default Dashboard;
