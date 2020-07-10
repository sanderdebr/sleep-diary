import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Logo from "~/src/components/shared/Logo";
import { H2 } from "~/src/components/shared/Text";

function Page() {
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box>
        <Logo />
        <H2>Error authenticating</H2>
      </Box>
    </>
  );
}

export default Page;
