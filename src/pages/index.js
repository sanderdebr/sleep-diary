import Head from "~/src/components/Head";
import Home from "~/src/components/Home";
import Left from "~/src/components/Home/Left";
import Right from "~/src/components/Home/Right";

import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";
import GoogleSignInBtn from "~/src/components/GoogleSignInBtn";

function Page() {
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Home>
        <Left>
          <Logo />
          <H2>Please login to your account.</H2>
          <GoogleSignInBtn />
        </Left>
        <Right />
      </Home>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      name: "berend",
    },
  };
};

export default Page;
