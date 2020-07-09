import styled from "styled-components";

import Icon from "~/src/components/dashboard/Icon";
import ThemeToggle from "./ThemeToggle";

function Topbar() {
  return (
    <StyledTopbar>
      <ThemeToggle />
      <TopbarIcon icon="bell" />
    </StyledTopbar>
  );
}

const StyledTopbar = styled.section`
  display: none;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.bgColor};
  background: ${({ theme }) => theme.palette.bg};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.gutter}px;
  }
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

export default Topbar;
