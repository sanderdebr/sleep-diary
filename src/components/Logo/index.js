import Link from "next/link";
import styled from "styled-components";

import { H3 } from "~/src/components/Text";
import Badge from "./Badge";

function Logo() {
  return (
    <Link href="/">
      <LogoWrapper>
        <Badge></Badge>
        <H3>SleepDiary</H3>
      </LogoWrapper>
    </Link>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    margin-left: 2.5rem;
  }
`;

export default Logo;
