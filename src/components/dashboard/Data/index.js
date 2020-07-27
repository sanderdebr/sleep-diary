import { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import * as Actions from "~/src/common/actions";
import { useAppContext } from "~/src/state/hooks";

import { H4 } from "~/src/components/shared/Text";
import { Number, Textarea } from "~/src/components/shared/Form";
import ScoreCircle from "~/src/components/dashboard/Data/ScoreCircle";

let defaultActivity = {
  created_at: moment(),
  updated_at: moment(),
  energy: 0,
  feeling: 0,
  total_sleep: 0,
  deep_sleep: 0,
  activities: "",
  adjustments: "",
  day: moment(),
};

function Data({ session, ...props }) {
  const [today, setToday] = useState(defaultActivity);
  const [draftState, setDraftState] = useState(defaultActivity);

  const { activities } = useAppContext();

  const updateActivity = async () => {
    const response = await Actions.updateActivity(session.id, today);
    if (response.error) {
      console.log(response.error);
    }
  };

  const addActivity = async () => {
    const response = await Actions.addActivity(session.id, today);
    if (response.error) {
      console.log(response.error);
    }
  };

  // Check if today is already entered
  useEffect(() => {
    if (activities) {
      const existingRecord = activities.filter(
        (activity) => moment().diff(activity.day, "days") === 0
      );
      console.log(existingRecord);
      if (!existingRecord.length) {
        addActivity();
      } else {
        setToday(existingRecord[0]);
      }
    }
  }, [activities]);

  // Update activity on change
  useEffect(() => {
    updateActivity();
  }, [today]);

  return (
    <DataStyles {...props}>
      <Left>
        <Score>
          <H4>Today</H4>
          <ScoreCircle percent={75} />
        </Score>
        <NumberWrapper>
          <Number
            placeholder="How did you feel on waking up?"
            type="number"
            name="energy"
            state={today}
            setState={setToday}
          />
          <Number
            placeholder="How did you feel today?"
            type="number"
            name="feeling"
            state={today}
            setState={setToday}
          />
          <Number
            placeholder="Total sleep in minutes"
            type="number"
            name="total_sleep"
            state={today}
            setState={setToday}
          />
          <Number
            placeholder="Deep sleep in minutes"
            type="number"
            name="deep_sleep"
            state={today}
            setState={setToday}
          />
        </NumberWrapper>
      </Left>
      <Right>
        <Textarea
          placeholder="Activities during the day..."
          name="activities"
          draftState={draftState}
          setDraftState={setDraftState}
          state={today}
          setState={setToday}
        />
        <Textarea
          placeholder="Adjustments..."
          name="adjustments"
          draftState={draftState}
          setDraftState={setDraftState}
          state={today}
          setState={setToday}
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
  align-items: flex-start;
  justify-content: center;
`;

const Left = styled.div`
  width: 800px;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.inner}px;
  display: flex;
  text-align: center;
  flex-direction: row;
  border-right: 1px solid ${({ theme }) => theme.palette.bgColor};
`;

const Right = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.inner}px;
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
