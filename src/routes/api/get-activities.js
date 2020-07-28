import * as Database from "~/src/common/database/activity";
import * as Utilities from "~/src/common/utilities";

export default async (req, res) => {
  if (Utilities.isEmpty(req.body.userId)) {
    return res.status(500).send({ error: "No userId is provided. " });
  }

  let result = await Database.getActivities({
    userId: req.body.userId,
  });

  if (!result) {
    return res
      .status(500)
      .send({ error: "Something went wrong with fetching activities. " });
  }

  return res.status(200).send({ result });
};
