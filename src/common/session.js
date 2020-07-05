import * as Credentials from "./credentials";
import * as Utilities from "./utilities";
import * as Database from "./database";

import JWT from "jsonwebtoken";

export const getViewer = async (req, existingToken = undefined) => {
  let viewer = null;

  try {
    let token = existingToken;
    if (!token) {
      try {
        token = Utilities.getToken(req);
      } catch (err) {
        return err;
      }
    }

    //TODO: JWT error handling

    let decode = JWT.verify(token, Credentials.JWT_SECRET);
    viewer = await Database.getUserByEmail({ email: decode.email });
  } catch (err) {
    console.log("err token", err);
    return err;
  }

  if (!viewer || viewer.error) {
    viewer = null;
  }

  return { viewer };
};
