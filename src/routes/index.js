import signIn from "./sign-in";
import signInCallback from "./sign-in-callback";
import fitbitCallback from "./fitbit-callback";
import dashboard from "./dashboard";
import settings from "./settings";
import apiSignIn from "./api/sign-in";
import getActivities from "./api/get-activities";
import addActivity from "./api/add-activity";
import updateActivity from "./api/update-activity";
import fitbitURL from "./api/fitbit-url";

module.exports = {
  signIn,
  signInCallback,
  fitbitCallback,
  dashboard,
  settings,
  api: {
    signIn: apiSignIn,
    getActivities,
    addActivity,
    updateActivity,
    fitbitURL,
  },
};
