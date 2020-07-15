import { useState } from "react";
import styled from "styled-components";

import { H4 } from "~/src/components/shared/Text";
import { Input, Number } from "~/src/components/shared/Form";
import ScoreCircle from "~/src/components/dashboard/Data/ScoreCircle";

function Data({ ...props }) {
  const [today, setToday] = useState({
    energy: 7,
    feeling: 7,
  });

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
            min="1"
            max="10"
            step="1"
            name="energy"
            state={today}
            setState={setToday}
          />
          <Number
            placeholder="How did you feel today?"
            type="number"
            min="1"
            max="10"
            step="1"
            name="feeling"
            state={today}
            setState={setToday}
          />
          <Number
            placeholder="How did you feel on waking up?"
            type="number"
            min="1"
            max="10"
            step="1"
            name="energy"
            state={today}
            setState={setToday}
          />
          <Number
            placeholder="How did you feel today?"
            type="number"
            min="1"
            max="10"
            step="1"
            name="feeling"
            state={today}
            setState={setToday}
          />
        </NumberWrapper>
      </Left>
      <Right>Right</Right>
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
  padding: 0 ${({ theme }) => theme.spacing.inner}px;
  display: flex;
  text-align: center;
  flex-direction: row;
  border-right: 1px solid ${({ theme }) => theme.palette.bgColor};
`;

const Right = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.inner}px;
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
  margin-left: 0.75rem;
`;

export default Data;
