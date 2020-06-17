import styled from "styled-components";

import { H3 } from "~/src/components/Text";
import Badge from "./Badge";

function Logo() {
  return (
    <LogoWrapper>
      <Badge></Badge>
      <H3>SleepDiary</H3>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`;

export default Logo;
