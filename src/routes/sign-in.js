import * as Credentials from "~/src/common/credentials";
import * as Session from "~/src/common/session";

const google = require("googleapis").google;
const OAuth2 = google.auth.OAuth2;

export default async (req, res, app) => {
  const client = new OAuth2(
    Credentials.CLIENT_ID,
    Credentials.CLIENT_SECRET,
    Credentials.REDIRECT_URIS
  );

  // Generates Google Auth URL and provides to homepage
  const googleURL = client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
    prompt: "consent",
  });

  const { session } = await Session.getSession(req);

  if (!session || session.error) {
    return app.render(req, res, "/", { googleURL, session: null });
  }

  // Already signed in
  app.render(req, res, "/dashboard", { session });
};
