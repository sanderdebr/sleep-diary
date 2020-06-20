import { withRouter } from "next/router";
import styled from "styled-components";

import Note from "./Note";

function Container({ children, router }) {
  const { pathname } = router;
  return (
    <ContainerWrapper path={pathname}>
      {children}
      <Note />
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.main`
  z-index: 1;
  width: 80vw;
  height: 100%;
  background-color: #fff;
  margin-top: ${({ theme }) => theme.spacing.gutter}px;
  margin-bottom: ${({ theme }) => theme.spacing.gutter}px;
  box-shadow: ${({ theme }) => theme.mixins.boxShadow};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    height: ${({ path }) => (path === "/" ? "80vw" : "auto")};
    max-width: 1200px;
    max-height: ${({ path }) => (path === "/" ? "600px" : "auto")};
  }
`;

export default withRouter(Container);
