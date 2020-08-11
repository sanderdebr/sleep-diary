import * as Session from "~/src/common/session";
import * as Credentials from "~/src/common/credentials";

export default async (req, res, app) => {
  const { session } = await Session.getSession(req);

  if (!session || session.error) {
    return app.render(req, res, "/auth/sign-in-error/", { session: null });
  }

  const authorization_token = req.query.code || null;

  const encoded = Buffer.from(
    `${Credentials.FITBIT_CLIENT_ID}:${Credentials.FITBIT_CLIENT_SECRET}`
  ).toString("base64");

  return app.render(req, res, "/dashboard/settings", {
    session,
    authorization_token,
    encoded,
  });
};
