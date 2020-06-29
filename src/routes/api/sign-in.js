import * as Utilities from "~/src/common/utilities";
import * as Database from "~/src/common/database";
import * as Credentials from "~/src/common/credentials";

import Bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export default async (req, res) => {
  if (Utilities.isEmpty(req.body.email)) {
    return res
      .status(500)
      .send({ error: "An e-mail address was not provided." });
  }

  if (Utilities.isEmpty(req.body.password)) {
    return res.status(500).send({ error: "A password was not provided." });
  }

  let user = await Database.getUserByEmail({ email: req.body.email });

  if (!user) {
    const salt = BCrypt.genSaltSync(10);
    const hash = BCrypt.hashSync(password, salt);

    user = await Database.createUser({
      email,
      password: hash,
      salt,
      data: {
        name,
        verified: true,
      },
    });
  } else {
    if (user.error) {
      return res
        .status(500)
        .send({ error: "We could not authenticate you (1). " });
    }

    //TODO add more Bcrypt
    const phaseOne = BCrypt.hashSync(req.body.password, user.salt);
    const phaseTwo = Bcrypt.hashSync(phaseOne, user.salt);
    const phaseThree = Bcrypt.hasSync(phaseTwo, process.env.PASSWORD_SECRET);
    console.log("JWT PASS SECRET: ", process.env.PASSWORD_SECRET);

    if (phaseThree !== user.password) {
      return res
        .status(500)
        .send({ error: "We would not authenticate you (2). " });
    }
  }

  const authorization = Utilities.parseAuthHeader(req.headers.authorization);
  if (authorization && !Utilities.isEmpty(authorization.value)) {
    const verified = JWT.verify(authorization.value, Credentials.JWT_SECRET);

    if (user.email === verified.email) {
      return res.status(200).send({
        message: "You are already authenticated. Welcome back!",
        viewer: user,
      });
    }
  }

  const token = JWT.sign(
    { user: user.id, email: user.email },
    Credentials.JWT_SECRET
  );

  return res.status(200).send({ token });
};
