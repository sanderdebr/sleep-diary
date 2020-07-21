import * as Database from "~/src/common/database";

export default async (req, res) => {
  let result = await Database.addActivity({
    userId: req.body.id,
    activity: req.body.activity,
  });

  return res.status(200);
};
