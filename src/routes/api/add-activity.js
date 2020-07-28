import * as Database from "~/src/common/database/activity";

export default async (req, res) => {
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
