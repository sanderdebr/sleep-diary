import styled from "styled-components";

import Logo from "~/src/components/shared/Logo";
import Nav from "./Nav";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo lessMargin />
      <ProfileImg></ProfileImg>
      <Nav />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.section`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.bgColor};
  padding: ${({ theme }) => theme.spacing.gutter}px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    width: 250px;
    height: 100%;
    position: relative;
    border-right: 1px solid ${({ theme }) => theme.palette.bgColor};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProfileImg = styled.div`
  width: 100%;
  height: 200px;
  display: none;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.secondary};
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: flex;
  }
`;

export default Sidebar;
