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

export const getActivities = async (userId, req) => {
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: JSON.stringify({ userId }),
  };

  const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  const response = await fetch(`${baseUrl}/api/get-activities`, options);
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

export const getFitbitURL = async () => {
  const options = {
    method: "POST",
    headers: getHeaders(),
    credentials: "include",
    body: null,
  };

  const response = await fetch(`${SERVER_PATH}/api/fitbit-url`, options);
  const json = await response.json();

  if (json.error) {
    return json.error;
  }

  return json;
};

export const getFitbitAccessToken = async (code = null, encoded = null) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: `Basic ${encoded}`,
    },
    body: `client_id=22BWK3&grant_type=authorization_code&redirect_uri=http://localhost:8000/fitbit-callback&code=${code}`,
    // body: JSON.stringify({
    //   code,
    //   grant_type: "authorization_code",
    //   client_id: "22BWK3",
    //   redirect_uri: "localhost:8000/fitbit-callback?access",
    //   state: "accessed",
    //   expires_in: 3600,
    // }),
  };

  const response = await fetch(`https://api.fitbit.com/oauth2/token`, options);
  const json = await response.json();

  return json;
};
