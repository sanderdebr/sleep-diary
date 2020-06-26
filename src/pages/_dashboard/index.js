import Head from "~/src/components/Head";
import Box from "~/src/components/Box";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";

function Page(props) {
  console.log(props);
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Box>
        <Logo />
        <H2>You can only see this authenticated</H2>
      </Box>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    error: ctx.err,
    viewer: ctx.query.viewer,
    data: ctx.query.data,
  };
};

export default Page;
