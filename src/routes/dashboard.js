import * as Session from "~/src/common/session";

export default async (req, res, app) => {
  const { viewer } = await Session.getViewer(req);

  if (!viewer || viewer.error) {
    console.log("no viewer");
    return app.render(req, res, "/auth/sign-in-error/", { viewer: null });
  }

  return app.render(req, res, "/dashboard", { viewer });
};
