import { useEffect } from "react";
import Link from "next/link";

import loadFonts from "~/src/common/fonts";
import Head from "~/src/components/Head";
import Home from "~/src/components/Home";
import Left from "~/src/components/Home/Left";
import Right from "~/src/components/Home/Right";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";
import GoogleSignInBtn from "~/src/components/GoogleSignInBtn";

function Page(props) {
  console.log(props);
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Home>
        <Left>
          <Logo />
          <H2>Please login to your account.</H2>
          <Link href="/">
            <a>Create an account through Google.</a>
          </Link>
          <GoogleSignInBtn />
        </Left>
        <Right />
      </Home>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    props: {
      googleURL: ctx.query.googleURL,
    },
  };
};

export default Page;
