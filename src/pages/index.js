import { useEffect } from "react";

import loadFonts from "~/src/common/fonts";

import Head from "~/src/components/Head";
import { Home, Left, Right } from "~/src/components/HomeWrapper";
import Logo from "~/src/components/Logo";
import { H2 } from "~/src/components/Text";
import GoogleSignInBtn from "~/src/components/GoogleSignInBtn";
import { FormGroup, Input, Button } from "~/src/components/Form";

function Page() {
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
          <GoogleSignInBtn />
          <FormGroup>
            <Input placeholder="E-mail address" type="text" />
            <Input placeholder="Password" type="password" />
            <Button />
          </FormGroup>
        </Left>
        <Right />
      </Home>
    </>
  );
}

export default Page;
