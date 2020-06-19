import * as Credentials from "~/src/common/credentials";

import JWT from "jsonwebtoken";

const google = require("googleapis").google;
const OAuth2 = google.auth.OAuth2;

export default async (req, res, app) => {
  const client = new OAuth2(
    Credentials.CLIENT_ID,
    Credentials.CLIENT_SECRET,
    Credentials.REDIRECT_URIS
  );

  if (req.query.error) {
    console.log("ERROR: ", req.query.error);
  }

  client.getToken(req.query.code, async (error, token) => {
    if (error) {
      console.log("ERROR: ", error);
    }

    const jwt = JWT.sign(token, Credentials.JWT_SECRET);
    const client = new OAuth2(
      Credentials.CLIENT_ID,
      Credentials.CLIENT_SECRET,
      Credentials.REDIRECT_URIS
    );
    client.credentials = JWT.verify(jwt, Credentials.JWT_SECRET);

    console.log("Got token: ", client.credentials);

    const authToken = JWT.sign(
      { user: "berend", email: "email" },
      Credentials.JWT_SECRET
    );

    return app.render(req, res, "/sign-in-callback", { jwt: authToken });
  });
};
