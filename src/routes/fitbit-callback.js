import * as Session from "~/src/common/session";

export default async (req, res, app) => {
  const { session } = await Session.getSession(req);

  if (!session || session.error) {
    return app.render(req, res, "/auth/sign-in-error/", { session: null });
  }

  let access_token = req.query.code || null;

  console.log("TOKEN server side: ", access_token);
  console.log("SESSION fitbit callback url: ", session);

  return app.render(req, res, "/dashboard/settings", {
    session,
    access_token,
  });
};
