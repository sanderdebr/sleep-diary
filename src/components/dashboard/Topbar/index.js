import styled from "styled-components";

import Icon from "~/src/components/dashboard/Icon";
import ThemeToggle from "./ThemeToggle";

import { useAppContext } from "~/src/state/hooks";

function Topbar() {
  const { session } = useAppContext();
  let name;

  console.log(session);

  if (session.user) {
    name = session.user.name.split(" ")[0];
  }

  return (
    <StyledTopbar>
      {<Welcome>Hi, {name}</Welcome>}
      <Right>
        <ThemeToggle />
        <TopbarIcon icon="bell" />
      </Right>
    </StyledTopbar>
  );
}

const StyledTopbar = styled.section`
  display: none;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.bgColor};
  background: ${({ theme }) => theme.palette.bg};
  border-top-right-radius: ${({ theme }) => theme.general.borderRadius}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.gutter}px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarIcon = styled(Icon)`
  margin-left: 2rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.primary};
  transition: 250ms ease transform;

  &:hover {
    transform: rotate(15deg);
  }
`;

const Welcome = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.palette.secondary};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: flex;
  }
`;

export default Topbar;
