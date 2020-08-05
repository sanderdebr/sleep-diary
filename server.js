import * as Middleware from "~/src/common/middleware";
import * as Routes from "~/src/routes";
import * as Session from "~/src/common/session";

import express from "express";
import next from "next";
import bodyParser from "body-parser";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(Middleware.CORS);
  server.use("/public", express.static("public"));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.post("/api/sign-in", async (req, res) => {
    return await Routes.api.signIn(req, res);
  });

  server.post("/api/add-activity", async (req, res) => {
    return await Routes.api.addActivity(req, res);
  });

  server.post("/api/update-activity", async (req, res) => {
    return await Routes.api.updateActivity(req, res);
  });

  server.post("/api/get-activities", async (req, res) => {
    return await Routes.api.getActivities(req, res);
  });

  server.post("/api/fitbit-url", async (req, res) => {
    return await Routes.api.fitbitURL(req, res);
  });

  server.get("/", async (req, res) => {
    return await Routes.signIn(req, res, app);
  });

  server.get("/auth/sign-in-callback", async (req, res) => {
    return await Routes.signInCallback(req, res, app);
  });

  server.get("/fitbit/fitbit-callback", async (req, res) => {
    return await Routes.fitbit.fitbitCallback(req, res, app);
  });

  server.get("/auth/sign-in-error", async (req, res) => {
    return app.render(req, res, "/auth/sign-in-error", { session: null });
  });

  server.get("/dashboard", Middleware.RequireAuth, async (req, res) => {
    await Routes.dashboard(req, res, app);
  });

  server.get("/settings", Middleware.RequireAuth, async (req, res) => {
    await Routes.settings(req, res, app);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Server running on http://localhost:${port}`);
  });
});
