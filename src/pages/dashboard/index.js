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

function Dashboard({ session, jwt }) {
  const { dispatch } = useAppContext();

  // Update activities
  useEffect(() => {
    const fetchActivities = async () => {
      dispatch({ type: "toggleLoading", value: true });

      let query = await Actions.getActivities(session.id);
      if (!query.error) {
        dispatch({ type: "updateActivities", value: query.result });
      }
    };

    fetchActivities();
  }, []);

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
      if (!window.location.pathname.includes("dashboard")) {
        window.history.pushState("", "", "/dashboard");
      }
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

  return {
    props: { session, jwt },
  };
};

export default Dashboard;
