import Link from "next/link";
import styled from "styled-components";

import { H3 } from "~/src/components/Text";
import Badge from "./Badge";

import { useAppContext } from "~/src/state/hooks";

function Logo() {
  const { appName } = useAppContext();

  return (
    <Link href="/">
      <a>
        <LogoWrapper>
          <Badge></Badge>
          <H3>{appName}</H3>
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
    color: ${({ theme }) => theme.palette.secondaryAction};
    font-weight: bold;
  }
`;

export default Logo;
