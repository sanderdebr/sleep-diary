import styled from "styled-components";

import { H1, H4 } from "~/src/components/shared/Text";
import ScoreCircle from "~/src/components/dashboard/Data/ScoreCircle";

function Data({ ...props }) {
  return (
    <DataStyles {...props}>
      <Left>
        <H4>Monday 13th of July</H4>
        <H1 bottomMargin>Today</H1>
        <ScoreCircle percent={75} />
      </Left>
      <Right>Inputs</Right>
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
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.bgColor};
`;

const Right = styled.div`
  width: 60%;
`;

export default Data;
