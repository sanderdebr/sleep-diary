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

  server.use("/public", express.static("public"));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  server.post("/api/sign-in", async (req, res) => {
    return await Routes.api.signIn(req, res);
  });

  server.get("/", async (req, res) => {
    return await Routes.signIn(req, res, app);
  });

  server.get("/auth/sign-in-callback", async (req, res) => {
    return await Routes.signInCallback(req, res, app);
  });

  server.get("/auth/sign-in-error", async (req, res) => {
    return app.render(req, res, "/auth/sign-in-error", { session: null });
  });

  //TODO: add protected routes
  server.get("/dashboard", Middleware.RequireAuth, async (req, res) => {
    return await Routes.dashboard(req, res, app);
  });

  server.get("/auth/sign-out", async (req, res) => {
    const { session } = await Session.getSession(req);

    if (!session || session.error) {
      return app.render(req, res, "/auth/sign-in-error", { session: null });
    }

    return app.render(req, res, "/auth/sign-out", { session });
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
