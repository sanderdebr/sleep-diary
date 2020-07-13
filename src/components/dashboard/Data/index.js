import styled from "styled-components";

import { H1, H4 } from "~/src/components/shared/Text";
import ScoreCircle from "~/src/components/dashboard/Data/ScoreCircle";

function Data({ ...props }) {
  return (
    <DataStyles {...props}>
      <Left>
        <H4>Monday 13th of July</H4>
        <H1>Today</H1>
        <ScoreCircle percent={75} />
      </Left>
      <Right></Right>
    </DataStyles>
  );
}

const DataStyles = styled.section`
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 50%;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Right = styled.div`
  width: 50%;
`;

export default Data;
