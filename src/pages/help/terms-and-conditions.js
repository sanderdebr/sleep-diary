import Head from "~/src/components/Head";
import Box from "~/src/components/Box";

import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

import conditionsText from "~/src/common/snippets/conditions";

function Privacy() {
  return (
    <>
      <Head title="Terms and Conditions | SleepDiary" />
      <Box>
        <Logo />
        <H2>Terms and Conditions</H2>
        {conditionsText()}
      </Box>
    </>
  );
}

export default Privacy;
