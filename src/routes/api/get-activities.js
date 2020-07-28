import * as Database from "~/src/common/database/activity";

export default async (req, res) => {
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
