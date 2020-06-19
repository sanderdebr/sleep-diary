import styled from "styled-components";

import Note from "./Note";

function Container({ children }) {
  return (
    <ContainerWrapper>
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
  margin-top: ${({ theme }) => theme.spacing.gutter * 2}px;
  box-shadow: ${({ theme }) => theme.mixins.boxShadow};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    height: 80vh;
    margin: 0;
    max-width: 1200px;
    max-height: 600px;
  }
`;

export default Container;
