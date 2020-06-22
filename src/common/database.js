import JWT from "jsonwebtoken";
import knex from "knex";
import { google } from "googleapis";

import configs from "~/knexfile";
import * as Credentials from "~/src/common/credentials";
import * as Utilities from "~/src/common/utilities";

const envConfig = configs[process.env.NODE_ENV];
const db = knex(envConfig);

const runQuery = async ({ queryFn, errorFn, label }) => {
  let response;
  try {
    response = await queryFn();
  } catch (err) {
    response = errorFn(err);
  }

  console.log("[db-query]", { query: label });
  return response;
};

export const getViewer = async (req, existingToken = undefined) => {
  let viewer = null;

  try {
    let token = existingToken;
    if (!token) {
      token = Utilities.getToken(req);
    }

    let decode = JWT.verify(token, Credentials.JWT_SECRET);
    viewer = await getUserByEmail({ email: decode.email });
  } catch (err) {
    if (!viewer || viewer.error) {
      viewer = null;
    }

    return { viewer };
  }
};

export const getUserByEmail = async ({ email }) => {
  return await runQuery({
    label: "GET_USER_BY_EMAIL",
    queryFn: async () => {
      const query = await db("users").debug().where({ email: email });

      if (!query || query.error) {
        return null;
      }

      //TODO: return first result
      if (query.id) {
        return query;
      }

      return null;
    },
    errorFn: async (err) => {
      return {
        error: "GET_USER_BY_EMAIL",
        source: err,
      };
    },
  });
};

// TODO: only email s coming in
export const createUser = async ({ email, password, salt, data = {} }) => {
  console.log("EMAIL: ", email);
  return await runQuery({
    label: "CREATE_USER",
    queryFn: async () => {
      const query = await db("users")
        .debug()
        .insert([{ email }, { password }, { salt }, { data }]);

      const index = query ? query.pop() : null;
      return index;
    },
    errorFn: async (err) => {
      return {
        error: "CREATE_USER",
        source: err,
      };
    },
  });
};
