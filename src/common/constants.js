import moment from "moment";

export const session = {
  key: "WEB_SERVICE_SESSION_KEY",
};

export const menuItems = [
  { title: "Dashboard", icon: "dashboard" },
  { title: "Settings", icon: "settings" },
];

export const defaultActivity = {
  created_at: moment(),
  updated_at: moment(),
  energy: 0,
  feeling: 0,
  total_sleep: 0,
  deep_sleep: 0,
  activities: "",
  adjustments: "",
  day: moment(),
};
