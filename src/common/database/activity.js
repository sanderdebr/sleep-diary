import db from "~/db";
import { runQuery } from "./";

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
