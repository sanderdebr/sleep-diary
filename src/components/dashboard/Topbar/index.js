import styled, { keyframes } from "styled-components";
import { fadeIn, fadeOut } from "~/src/common/styles/animations";

import Icon from "~/src/components/dashboard/Icon";
import ThemeToggle from "./ThemeToggle";
import Spinner from "./Spinner";

import { useAppContext } from "~/src/state/hooks";

function Topbar() {
  const { user, loading } = useAppContext();

  return (
    <StyledTopbar>
      <Welcome>{user && `Hi, ${user.name}`}</Welcome>
      <Right>
        {loading && <Spinner />}
        <Saved loading={loading}>Saved</Saved>
        <ThemeToggle />
        <TopbarIcon icon="bell" />
      </Right>
    </StyledTopbar>
  );
}

const StyledTopbar = styled.section`
  position: absolute;
  display: flex;
  right: 110px;
  top: 30px;
  border: none;
  background: none;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    position: relative;
    top: auto;
    right: auto;
    background: ${({ theme }) => theme.palette.bg};
    border-bottom: 1px solid ${({ theme }) => theme.palette.bgColor};
    border-top-right-radius: ${({ theme }) => theme.general.borderRadius}px;
    height: 80px;
    width: 100%;
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

const Saved = styled.span`
  display: none;
  margin-right: 1.5rem;
  opacity: 0;
  animation: ${({ loading }) => (loading ? fadeIn : fadeOut)} 1s ease;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: flex;
  }
`;

const TopbarIcon = styled(Icon)`
  display: none;
  margin-left: 2rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.primary};
  transition: 250ms ease transform;

  &:hover {
    transform: rotate(15deg);
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: flex;
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
