import { useState } from "react";

import Head from "~/src/components/Head";

import { Home, Left, Right } from "~/src/components/HomeWrapper";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";
import GoogleSignInBtn from "~/src/components/GoogleSignInBtn";
import { FormGroup, Input, Button } from "~/src/components/Form";

function Page({ googleURL = null }) {
  const [auth, setAuth] = useState({ email: "", password: "" });

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Home>
        <Left>
          <Logo />
          <H2>Please login to your account.</H2>
          <GoogleSignInBtn url={googleURL} />
          <FormGroup>
            <Input
              placeholder="E-mail address"
              type="text"
              name="email"
              auth={auth}
              setAuth={setAuth}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              auth={auth}
              setAuth={setAuth}
            />
            <Button />
          </FormGroup>
        </Left>
        <Right />
      </Home>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return {
    googleURL: ctx.query.googleURL,
    viewer: ctx.query.viewer,
    error: ctx.err,
  };
};

export default Page;
