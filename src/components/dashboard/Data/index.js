import { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import * as Actions from "~/src/common/actions";
import { useAppContext } from "~/src/state/hooks";

import { H1 } from "~/src/components/shared/Text";
import { Number, Textarea } from "~/src/components/shared/Form";
import { defaultActivity } from "~/src/common/constants";
import ScoreCircle from "~/src/components/dashboard/Data/ScoreCircle";

function Data({ session, ...props }) {
  const { activities, currentActivity, dispatch } = useAppContext();

  const [current, setCurrent] = useState(currentActivity);
  // Draft state for textarea only update DB onBlur
  const [draftState, setDraftState] = useState(defaultActivity);

  // Load global state into local state when graph has been clicked
  useEffect(() => {
    // Find matching activity when day has been clicked
    if (currentActivity && activities) {
      const match = activities.filter((x) => {
        const day = moment(x.day).date().toString();
        return day === currentActivity.day;
      });
      if (match.length) {
        setCurrent(match[0]);
        setDraftState(match[0]);
      }
    }
  }, [currentActivity]);

  const addActivity = async () => {
    dispatch({ type: "toggleLoading", value: true });
    let result = await Actions.addActivity(session.id, current);

    let query = await Actions.getActivities(session.id);
    if (!query.error && !result.error) {
      dispatch({
        type: "updateActivities",
        value: { activities: query.result, currentActivity: current },
      });
    }
  };

  const updateActivity = async () => {
    dispatch({ type: "toggleLoading", value: true });
    let result = await Actions.updateActivity(session.id, current);

    let query = await Actions.getActivities(session.id);
    if (!query.error && !result.error) {
      dispatch({
        type: "updateActivities",
        value: { activities: query.result, currentActivity: current },
      });
    }
  };

  // Check if today is already entered
  useEffect(() => {
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
        setCurrent(existingRecord[0]);
        setDraftState(existingRecord[0]);
      }
    };

    getActivities();
  }, []);

  // Update activity on change in DB
  useEffect(() => {
    updateActivity();
  }, [current]);

  return (
    <DataStyles {...props}>
      <Left>
        <Score>
          <H1>Today</H1>
          <ScoreCircle percent={75} />
        </Score>
        <NumberWrapper>
          <Number
            placeholder="How did you feel on waking up?"
            type="number"
            name="energy"
            state={current}
            setState={setCurrent}
          />
          <Number
            placeholder="How did you feel today?"
            type="number"
            name="feeling"
            state={current}
            setState={setCurrent}
          />
          <Number
            placeholder="Total sleep in minutes"
            type="number"
            name="total_sleep"
            state={current}
            setState={setCurrent}
          />
          <Number
            placeholder="Deep sleep in minutes"
            type="number"
            name="deep_sleep"
            state={current}
            setState={setCurrent}
          />
        </NumberWrapper>
      </Left>
      <Right>
        <Textarea
          placeholder="Activities during the day..."
          name="activities"
          draftState={draftState}
          setDraftState={setDraftState}
          state={current}
          setState={setCurrent}
        />
        <Textarea
          placeholder="Adjustments..."
          name="adjustments"
          draftState={draftState}
          setDraftState={setDraftState}
          state={current}
          setState={setCurrent}
        />
      </Right>
    </DataStyles>
  );
}

const DataStyles = styled.section`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.inner}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.inner}px 0;
  display: flex;
  text-align: center;
  flex-direction: row;
  border-right: 1px solid ${({ theme }) => theme.palette.bgColor};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding: 0 ${({ theme }) => theme.spacing.inner}px;
    width: 800px;
  }
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.inner}px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  textarea:last-child {
    margin-top: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding: 0 ${({ theme }) => theme.spacing.inner}px;
  }
`;

const Score = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-left: 0.75rem;
`;

export default Data;
