import * as Utilities from "./utilities";
import * as Database from "./database";
import * as Credentials from "./credentials";

import JWT from "jsonwebtoken";

export const RequireAuth = async (req, res, next) => {
  if (Utilities.isEmpty(req.headers.cookie)) {
    return res.redirect("/sign-in-error");
  }

  const token = req.headers.cookie.replace(
    /(?:(?:^|.*;\s*)WEB_SERVICE_SESSION_KEY\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  try {
    let decoded = JWT.verify(token, Credentials.JWT_SECRET);
    const user = await Database.getUserByEmail({ email: decoded.email });

    if (!user || user.error) {
      return res.redirect("/sign-in-error");
    }
  } catch (err) {
    console.warn(err);
    return res.redirect("/sign-in-error");
  }

  next();
};
