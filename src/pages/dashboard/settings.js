import styled from "styled-components";

import * as Actions from "~/src/common/actions";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Sidebar from "~/src/components/dashboard/Sidebar";
import Topbar from "~/src/components/dashboard/Topbar";
import { Button, Error } from "~/src/components/shared/Form";

function Settings({ access_token = null }) {
  let error = null;

  console.log("access_token: ", access_token);

  const getAccess = async () => {
    const result = await Actions.getFitbitURL();

    if (!result.error) {
      const url = result.fitbitURL;
      window.location.href = url;
    } else {
      error = result.error;
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
  let access_token = ctx.query.access_token || null;

  return {
    props: { access_token },
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
