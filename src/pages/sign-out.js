import Head from "~/src/components/Head";
import Box from "~/src/components/Box";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

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
