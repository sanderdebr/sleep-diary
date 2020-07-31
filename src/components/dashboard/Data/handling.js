import * as Actions from "~/src/common/actions";
import { useAppContext } from "~/src/state/hooks";
import moment from "moment";

export default async function Handler() {
  const { dispatch } = useAppContext();

  const addActivity = async () => {
    dispatch({ type: "toggleLoading", value: true });
    let result = await Actions.addActivity(session.id, today);

    let query = await Actions.getActivities(session.id);
    if (!query.error && !result.error) {
      dispatch({ type: "updateActivities", value: query.result });
    }
  };

  const updateActivity = async () => {
    dispatch({ type: "toggleLoading", value: true });
    let result = await Actions.updateActivity(session.id, today);

    let query = await Actions.getActivities(session.id);
    if (!query.error && !result.error) {
      dispatch({ type: "updateActivities", value: query.result });
    }
  };

  const getActivities = async () => {
    dispatch({ type: "toggleLoading", value: true });

    let query = await Actions.getActivities(session.id);
    if (!query.error) {
      dispatch({ type: "updateActivities", value: query.result });
    }

    const existingRecord = query.result.filter(
      (activity) => moment().diff(activity.day, "days") === 0
    );
    // If not, add activity in DB
    if (!existingRecord.length) {
      addActivity();
    } else {
      // If so, update activity and draft state
      setToday(existingRecord[0]);
      setDraftState(existingRecord[0]);
    }
  };

  return {
    getActivities: 5,
  };
}
