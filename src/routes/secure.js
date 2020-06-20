import * as Data from "~/common/session";

export default async (req, res, app) => {
  const { viewer } = await Data.getViewer(req);

  if (!viewer || viewer.error) {
    return app.render(req, res, "/sign-in-error", { viewer: null });
  }

  return app.render(req, res, "/secure", { viewer });
};
