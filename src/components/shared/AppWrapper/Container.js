import styled from "styled-components";

import Note from "./Note";

function Container({ children, path }) {
  return (
    <ContainerWrapper path={path}>
      {children}
      <Note />
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.main`
  z-index: 1;
  width: 85vw;
  height: 100%;
  box-shadow: ${({ theme }) => theme.mixins.boxShadow};
  margin-top: 2em;
  margin-bottom: 2em;
  border-radius: ${({ theme }) => theme.general.borderRadius}px;
  background: ${({ theme }) => theme.palette.bg};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-width: ${({ path }) =>
      path.indexOf("dashboard") !== -1 ? "85vw" : "1200px"};
    max-height: ${({ path }) =>
      path.indexOf("help") !== -1 ? "auto" : "600px"};
    max-height: ${({ path }) => path.indexOf("dashboard") !== -1 && "85vh"};
  }
`;

export default Container;
