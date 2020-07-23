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
      const query = await db("users").where("email", email);

      if (!query || query.error) {
        return null;
      }

      if (query[0]) {
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

export const createUser = async ({
  email,
  password,
  salt,
  data = { name: null, verified: null },
}) => {
  return await runQuery({
    label: "CREATE_USER",
    queryFn: async () => {
      const query = await db("users").insert([
        { email, password, salt, name: data.name, verified: data.verified },
      ]);

      // Returns ID of created user
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

export const getActivities = async ({ userId = null }) => {
  return await runQuery({
    label: "GET_ACTIVITIES",
    queryFn: async () => {
      const query = await db("data").where("userId", userId);

      if (!query || query.error) {
        return null;
      }

      if (query) {
        return query;
      }

      return null;
    },
    errorFn: async (err) => {
      return {
        error: "GET_ACTIVITIES",
        source: err,
      };
    },
  });
};

export const addActivity = async ({ userId = null, activity = null }) => {
  return await runQuery({
    label: "ADD_ACTIVITY",
    queryFn: async () => {
      const query = await db("data").insert([
        {
          userId,
          energy: activity.energy,
          feeling: activity.feeling,
          total_sleep: activity.total_sleep,
          deep_sleep: activity.deep_sleep,
          activities: activity.activities,
          adjustments: activity.adjustments,
          day: activity.day,
        },
      ]);

      if (!query || query.error) {
        return null;
      }

      if (query) {
        return query;
      }
    },
    errorFn: async (err) => {
      return {
        error: "ADD_ACTIVITY",
        source: err,
      };
    },
  });
};

export const updateActivity = async ({ userId = null, activity = null }) => {
  return await runQuery({
    label: "UPDATE_ACTIVITY",
    queryFn: async () => {
      const query = await db("data")
        .where({ userId, day: activity.day })
        .update({
          energy: activity.energy,
          feeling: activity.feeling,
          total_sleep: activity.total_sleep,
          deep_sleep: activity.deep_sleep,
          activities: activity.activities,
          adjustments: activity.adjustments,
        });

      if (!query || query.error) {
        return null;
      }

      if (query) {
        return query;
      }
    },
    errorFn: async (err) => {
      return {
        error: "UPDATE_ACTIVITY",
        source: err,
      };
    },
  });
};
