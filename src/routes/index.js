import signIn from "./sign-in";
import signInCallback from "./sign-in-callback";
import dashboard from "./dashboard";
import apiSignIn from "./api/sign-in";
import addActivity from "./api/add-activity";

module.exports = {
  signIn,
  signInCallback,
  dashboard,
  api: {
    signIn: apiSignIn,
    addActivity,
  },
};
