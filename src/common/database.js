import db from "~/db";

const runQuery = async ({ queryFn, errorFn, label }) => {
  let response;
  try {
    response = await queryFn();
  } catch (err) {
    response = errorFn(err);
  }

  console.log("[db-query]", { query: label });
  return response;
};

export const getUserByEmail = async ({ email }) => {
  return await runQuery({
    label: "GET_USER_BY_EMAIL",
    queryFn: async () => {
      const query = await db("users").debug().where("email", email);

      if (!query || query.error) {
        return null;
      }

      if (query[0].id) {
        return query[0];
      }

      return null;
    },
    errorFn: async (err) => {
      return {
        error: "GET_USER_BY_EMAIL",
        source: err,
      };
    },
  });
};

export const createUser = async ({ email, password, salt, data = {} }) => {
  return await runQuery({
    label: "CREATE_USER",
    queryFn: async () => {
      const query = await db("users")
        .debug()
        .insert([{ email, password, salt, data }]);

      console.log("RESULT: ", query);

      const index = query ? query.pop() : null;
      return index;
    },
    errorFn: async (err) => {
      return {
        error: "CREATE_USER",
        source: err,
      };
    },
  });
};
