import Link from "next/link";
import styled from "styled-components";

import { H3 } from "~/src/components/shared/Text";
import Badge from "./Badge";

import { useAppContext } from "~/src/state/hooks";

function Logo({ lessMargin }) {
  const { appName } = useAppContext();

  return (
    <Link href="/">
      <a>
        <LogoWrapper lessMargin={lessMargin}>
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
  margin: ${({ lessMargin }) => (lessMargin ? "0" : "1.75rem 0")};

  h3 {
    margin: 0 0 0 2.5rem;
    color: ${({ theme }) => theme.palette.primaryAction};
    font-weight: bold;
  }
`;

export default Logo;
