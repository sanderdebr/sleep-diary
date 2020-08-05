import * as Session from "~/src/common/session";

export default async (req, res, app) => {
  const { session } = await Session.getSession(req);

  if (!session || session.error) {
    return app.render(req, res, "/auth/sign-in-error/", { session: null });
  }

  let code = req.query.code;

  return app.render(req, res, "/dashboard", {
    session,
    fitbit: code,
  });
};
