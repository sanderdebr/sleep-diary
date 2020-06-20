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
  // TODO: add error routes
  if (req.query.error) {
    console.log("ERROR: ", req.query.error);
  }

  // Get OAuth2 token
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
    const password = BCrypt.getSaltSync(10);

    let user = await Database.getUserByEmail({ email });

    const authToken = JWT.sign(
      { user: "berend", email: "email" },
      Credentials.JWT_SECRET
    );

    return app.render(req, res, "/sign-in-callback", { jwt: authToken });
  });
};
