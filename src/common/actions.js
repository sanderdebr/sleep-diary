import Cookies from "universal-cookie";

import * as Constants from "~/src/common/constants";

const cookies = new Cookies();

const REQUEST_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const SERVER_PATH = "";

const getHeaders = () => {
  const jwt = cookies.get(Constants.session.key);

  if (jwt) {
    return {
      ...REQUEST_HEADERS,
      authorization: `Bearer ${jwt}`,
    };
  }

  return REQUEST_HEADERS;
};

export const localSignIn = async (auth) => {
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({ ...auth }),
  };

  const response = await fetch(`${SERVER_PATH}/api/sign-in`, options);
  const json = await response.json();

  if (json.error) {
    return json.error;
  }

  if (json.token) {
    cookies.set(Constants.session.key, json.token, { path: "/" });
  }

  window.location.href = "/dashboard";
};

export const addActivity = async (id, activity) => {
  console.log("ADD ACTIVITY: ", id, activity);
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({ id, activity }),
  };

  const response = await fetch(`${SERVER_PATH}/api/add-activity`, options);
  const json = await response.json();

  console.log("RESPONSE ADD ACTIVITY:", json);
};
