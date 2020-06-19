import { withRouter } from "next/router";
import styled from "styled-components";

import Container from "./Container";
import Wave from "./Wave";

function Wrapper({ children, router }) {
  const { pathname } = router;

  return (
    <WrapperStyles path={pathname}>
      <Container>{children}</Container>
      <Wave />
    </WrapperStyles>
  );
}

const WrapperStyles = styled.div`
  position: ${({ path }) => (path === "/" ? "absolute" : "relative")};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.bgColor};
`;

export default withRouter(Wrapper);
