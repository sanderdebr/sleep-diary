import Link from "next/link";
import styled from "styled-components";

import { H3 } from "~/src/components/Text";
import Badge from "./Badge";

function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoWrapper>
          <Badge></Badge>
          <H3>SleepDiary</H3>
        </LogoWrapper>
      </a>
    </Link>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    margin-left: 2.5rem;
    ${({ theme }) =>
      theme.mixins.gradientBg(
        theme.palette.primaryAction,
        theme.palette.secondaryAction
      )}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default Logo;
