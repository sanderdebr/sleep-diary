import Head from "~/src/components/Head";
import Box from "~/src/components/Box";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

import privacyText from "~/src/common/snippets/privacy";

function Privacy() {
  return (
    <>
      <Head title="Privacy | SleepDiary" />
      <Box>
        <Logo />
        <H2>Privacy</H2>
        {privacyText()}
      </Box>
    </>
  );
}

export default Privacy;
