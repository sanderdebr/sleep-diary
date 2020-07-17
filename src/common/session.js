import * as Credentials from "./credentials";
import * as Utilities from "./utilities";
import * as Database from "./database";

import JWT from "jsonwebtoken";

export const getSession = async (req, existingToken = undefined) => {
  let session = null;

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

    session = await Database.getUserByEmail({ email: decode.email });
  } catch (err) {
    return err;
  }

  if (!session || session.error) {
    session = null;
  }

  let { id, name, email, verified } = session;

  return { session: { id, name, email, verified } };
};
