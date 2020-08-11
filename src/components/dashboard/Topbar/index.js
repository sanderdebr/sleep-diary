import { withRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeOut } from "~/src/common/styles/animations";

import Icon from "~/src/components/dashboard/Icon";
import ThemeToggle from "./ThemeToggle";
import Spinner from "./Spinner";
import { H4 } from "~/src/components/shared/Text";
import { useAppContext } from "~/src/state/hooks";

import * as Utilities from "~/src/common/utilities";

function Topbar({ router }) {
  const { user, loading } = useAppContext();

  const title = Utilities.pathToTitle(router.pathname);

  return (
    <StyledTopbar>
      <H4 noMargin>{title}</H4>
      <Right>
        {loading && <Spinner />}
        <Saved loading={loading ? 1 : 0}>Saved</Saved>
        <ThemeToggle />
        <TopbarIcon icon="bell" />
      </Right>
    </StyledTopbar>
  );
}

const StyledTopbar = styled.section`
  position: absolute;
  display: flex;
  right: 90px;
  top: 30px;
  border: none;
  background: none;

  h4 {
    display: none;
  }

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

    h4 {
      display: block;
      color: ${({ theme }) => theme.palette.secondary};
    }
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

export default withRouter(Topbar);
