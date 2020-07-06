import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Logo from "~/src/components/shared/Logo";
import { H2 } from "~/src/components/shared/Text";

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
