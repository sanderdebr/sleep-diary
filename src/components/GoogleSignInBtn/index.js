import React, { useEffect } from "react";

function GoogleSignInBtn() {
  function onSuccess(googleUser) {
    console.log("Logged in as: " + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    alert();
    gapi.signin2.render("my-signin2", {
      scope: "profile email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  }

  useEffect(() => {
    // renderButton();
  });

  return <div id="my-signin2"></div>;
}

export default GoogleSignInBtn;
