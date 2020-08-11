import { useState, useEffect } from "react";
import styled from "styled-components";

import * as Actions from "~/src/common/actions";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";
import Topbar from "~/src/components/dashboard/Topbar";
import { Button, Error } from "~/src/components/shared/Form";

function Settings({ access_token = null }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (access_token.errors) {
    //   setError(access_token.errors[0].message);
    // }
    console.log("access_token", access_token);
  }, [access_token]);

  const getAccess = async () => {
    const result = await Actions.getFitbitURL();

    if (!result.error) {
      const url = result.fitbitURL;
      window.location.href = url;
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <Head title="Settings | SleepDiary" />
      <Box noPadding flex>
        <Sidebar />
        <Wrapper>
          <Topbar />
          <Main>
            <Error>{error}</Error>
            <Button
              onClick={getAccess}
              text="Authorize SleepDiary for your FitBit sleep data"
            />
          </Main>
        </Wrapper>
      </Box>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  let authorization_token = ctx.query.authorization_token || null;
  let encoded = ctx.query.encoded || null;
  let access_token = null;

  if (authorization_token && encoded) {
    access_token = await Actions.getFitbitAccessToken(
      authorization_token,
      encoded
    );
  }

  return {
    props: { authorization_token, access_token },
  };
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    height: 100%;
  }
`;

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing.inner}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-width: 800px;
  }
`;

export default Settings;
