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
    return json;
  }

  if (json.token) {
    cookies.set(Constants.session.key, json.token, { path: "/" });
  }

  window.location.href = "/dashboard";
};

export const getActivities = async (userId) => {
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({ userId }),
  };

  const response = await fetch(`${SERVER_PATH}/api/get-activities`, options);
  const json = await response.json();

  if (json.error) {
    return json.error;
  }

  return json;
};

export const addActivity = async (userId, activity) => {
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({ userId, activity }),
  };

  const response = await fetch(`${SERVER_PATH}/api/add-activity`, options);
  const json = await response.json();

  if (json.error) {
    return json.error;
  }

  return json;
};

export const updateActivity = async (userId, activity) => {
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({ userId, activity }),
  };

  const response = await fetch(`${SERVER_PATH}/api/update-activity`, options);
  const json = await response.json();

  if (json.error) {
    return json.error;
  }

  return json;
};
