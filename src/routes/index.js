import signIn from "./sign-in";
import signInCallback from "./sign-in-callback";
import dashboard from "./dashboard";
import apiSignIn from "./api/sign-in";
import getActivities from "./api/get-activities";
import addActivity from "./api/add-activity";
import updateActivity from "./api/update-activity";

module.exports = {
  signIn,
  signInCallback,
  dashboard,
  api: {
    signIn: apiSignIn,
    getActivities,
    addActivity,
    updateActivity,
  },
};
