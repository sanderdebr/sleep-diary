import * as Utilities from "./utilities";
import * as Database from "./database/user";
import * as Credentials from "./credentials";

import JWT from "jsonwebtoken";

export const RequireAuth = async (req, res, next) => {
  if (Utilities.isEmpty(req.headers.cookie)) {
    return res.redirect("/auth/sign-in-error");
  }

  const token = req.headers.cookie.replace(
    /(?:(?:^|.*;\s*)WEB_SERVICE_SESSION_KEY\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  if (!token) {
    return res.redirect("/auth/sign-in-error");
  }

  try {
    let decoded = JWT.verify(token, Credentials.JWT_SECRET);
    const user = await Database.getUserByEmail({ email: decoded.email });

    if (!user || user.error) {
      return res.redirect("/auth/sign-in-error");
    }
  } catch (err) {
    return res.redirect("/auth/sign-in-error");
  }

  next();
};
