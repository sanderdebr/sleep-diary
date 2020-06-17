import styled from "styled-components";

const Container = styled.main`
  z-index: 1;
  width: 80vw;
  height: 80vh;
  background-color: #fff;
  margin: ${({ theme }) => theme.spacing.gutter}px;
  box-shadow: ${({ theme }) => theme.mixins.boxShadow};

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-width: 1200px;
    max-height: 600px;
  }
`;

export default Container;
