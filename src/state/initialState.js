import theme from "~/src/common/styles/theme";
import { defaultActivity } from "~/src/common/constants";

export const initialState = {
  appName: "sleepdiary",
  theme: theme.day,
  session: {
    user: null,
  },
  activities: null,
  currentActivity: defaultActivity,
  loading: false,
};

export default initialState;
