import * as Database from "~/src/common/database/activity";
import * as Utilities from "~/src/common/utilities";

export default async (req, res) => {
  const authorization = Utilities.parseAuthHeader(req.headers.authorization);

  if (!authorization) {
    return res.status(500).send({ error: "No authorization" });
  }

  if (
    Utilities.isEmpty(req.body.userId) ||
    Utilities.isEmpty(req.body.activity)
  ) {
    return res
      .status(500)
      .send({ error: "No correct userId and activity are provided. " });
  }

  let result = await Database.addActivity({
    userId: req.body.userId,
    activity: req.body.activity,
  });

  if (!result) {
    return res
      .status(500)
      .send({ error: "Something went wrong with adding an activity. " });
  }

  return res.status(200).send({ result });
};
