import React, { useEffect } from "react";
import styled from "styled-components";

function GoogleSignInBtn() {
  function onSuccess(googleUser) {
    console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }

  useEffect(() => {
    gapi.signin2.render("my-signin2", {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  });

  return <ButtonStyles id="my-signin2"></ButtonStyles>;
}

const ButtonStyles = styled.div`
  font-family: inherit;
`;

export default GoogleSignInBtn;
