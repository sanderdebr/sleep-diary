import styled from "styled-components";

import Container from "./Container";
import Wave from "./Wave";

function Wrapper({ children }) {
  return (
    <WrapperStyles>
      <Container>{children}</Container>
      <Wave />
    </WrapperStyles>
  );
}

const WrapperStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.bgColor};
`;

export default Wrapper;
