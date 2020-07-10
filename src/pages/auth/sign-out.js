import { useEffect } from "react";

import Head from "~/src/components/shared/Head";
import Box from "~/src/components/shared/Box";
import Logo from "~/src/components/shared/Logo";
import { H2 } from "~/src/components/shared/Text";

function Page() {
  useEffect(() => {
    const jwt = cookies.get(Constants.session.key);
    if (jwt) {
      cookies.remove(Constants.session.key);
      return;
    }
  }, []);
  return (
    <>
      <Head title="Signed Out | SleepDiary" />
      <Box>
        <Logo />
        <H2>Signed out</H2>
      </Box>
    </>
  );
}

export default Page;
