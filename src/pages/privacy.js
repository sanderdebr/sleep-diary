import Head from "~/src/components/Head";
import Box from "~/src/components/Box";

import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

function Privacy() {
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box>
        <Logo />
        <H2>Privacy</H2>
      </Box>
    </>
  );
}

export default Privacy;
