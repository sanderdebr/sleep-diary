import * as Credentials from "~/src/common/credentials";
import * as Utilities from "~/src/common/utilities";

import JWT from "jsonwebtoken";

export const getViewer = async (req, exisitingToken = undefined) => {
  let viewer = null;

  try {
    // Retrieve JWT token from cookies

    let token = exisitingToken;
    if (!token) {
      token = Utilities.getToken(req);
    }
    let decode = JWT.verify(token, Credentials.JWT_SECRET);
    // viewer = await getUserByEmail({ email: decode.email });
  } catch (err) {
    console.log("error: ", err);
  }

  if (!viewer || viewer.error) {
    viewer = null;
  }

  return { viewer };
};
