import * as Database from "~/src/common/database";

export default async (req, res) => {
  let result = await Database.updateActivity({
    userId: req.body.userId,
    activity: req.body.activity,
  });

  if (!result) {
    return res
      .status(500)
      .send({ error: "Something went wrong with updating an activity. " });
  }

  return res.status(200).send({ result });
};
