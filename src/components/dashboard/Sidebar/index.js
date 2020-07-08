import styled from "styled-components";

import Logo from "~/src/components/shared/logo";
import Nav from "./Nav";

function Sidebar() {
  return (
    <Wrapper>
      <Logo lessMargin />
      <ProfileImg></ProfileImg>
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 250px;
  height: 100%;
  position: relative;
  border-right: 1px solid grey;
`;

const ProfileImg = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: yellow;
  }
`;

export default Sidebar;
