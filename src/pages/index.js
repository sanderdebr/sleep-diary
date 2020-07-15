import { useState } from "react";
import Head from "~/src/components/shared/Head";

import * as Actions from "~/src/common/actions";

import GoogleSignInBtn from "~/src/components/home/GoogleSignInBtn";
import { Home, Left, Right } from "~/src/components/home/HomeWrapper";
import Logo from "~/src/components/shared/Logo";
import { H2 } from "~/src/components/shared/Text";
import { FormGroup, Input, Button } from "~/src/components/shared/Form";

function Page({ googleURL = null }) {
  const [auth, setAuth] = useState({ email: "", password: "" });

  return (
    <>
      <Head title="Home | SleepDiary" />
      <Home>
        <Left>
          <Logo />
          <H2 bottomMargin>Please login to your account.</H2>
          <GoogleSignInBtn url={googleURL} />
          <FormGroup
            onSubmit={(e) => {
              e.preventDefault();
              Actions.localSignIn(auth);
            }}
          >
            <Input
              placeholder="E-mail address"
              type="text"
              name="email"
              state={auth}
              setState={setAuth}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              state={auth}
              setState={setAuth}
            />
            <Button text="Sign in or create account" />
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
