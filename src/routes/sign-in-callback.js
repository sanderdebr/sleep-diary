import * as Credentials from "~/src/common/credentials";
import * as Database from "~/src/common/database";

import JWT from "jsonwebtoken";
import BCrypt from "bcrypt";

const google = require("googleapis").google;
const OAuth2 = google.auth.OAuth2;

export default async (req, res, app) => {
  const client = new OAuth2(
    Credentials.CLIENT_ID,
    Credentials.CLIENT_SECRET,
    Credentials.REDIRECT_URIS
  );

  if (req.query.error) {
    return res.redirect("/auth/sign-in-error");
  }

  // Get OAuth2 token
  client.getToken(req.query.code, async (error, token) => {
    if (error) {
      return res.redirect("/auth/sign-in-error");
    }

    const jwt = JWT.sign(token, Credentials.JWT_SECRET);
    const client = new OAuth2(
      Credentials.CLIENT_ID,
      Credentials.CLIENT_SECRET,
      Credentials.REDIRECT_URIS
    );
    client.credentials = JWT.verify(jwt, Credentials.JWT_SECRET);

    // Check if user exists
    const people = google.people({
      version: "v1",
      auth: client,
    });
    const response = await people.people.get({
      resourceName: "people/me",
      personFields: "emailAddresses,names,organizations,memberships",
    });

    const email = response.data.emailAddresses[0].value;
    const name = response.data.names[0].displayName;

    const password = BCrypt.genSaltSync(10);

    let user = await Database.getUserByEmail({ email });

    if (!user) {
      const salt = BCrypt.genSaltSync(10);
      const hash = BCrypt.hashSync(password, salt);

      //TODO: check JWT hash
      user = await Database.createUser({
        email,
        password: hash,
        salt,
        data: {
          name,
          verified: true,
        },
      });
    }

    if (user.error) {
      console.log("ERROR IN CALLBACK", user.error);
      return app.render(req, res, "/auth/sign-in-error", {
        jwt: null,
        viewer: null,
      });
    }

    const authToken = JWT.sign(
      { user: user.id, email: user.email },
      Credentials.JWT_SECRET
    );

    return app.render(req, res, "/auth/sign-in-callback", {
      jwt: authToken,
      viewer: user,
    });
  });
};
