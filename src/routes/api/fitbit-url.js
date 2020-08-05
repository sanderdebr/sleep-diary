import * as Credentials from "~/src/common/credentials";
import * as Utilities from "~/src/common/utilities";

export default async (req, res) => {
  const authorization = Utilities.parseAuthHeader(req.headers.authorization);

  if (!authorization) {
    return res.status(500).send({ error: "No authorization" });
  }

  let redirect_uri = "https://www.sleepdiary.nl/fitbit-callback";

  let fitbitURL = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${Credentials.FITBIT_CLIENT_ID}&redirect_uri=${redirect_uri}&scope=sleep`;

  return res.status(200).send({ fitbitURL });
};
