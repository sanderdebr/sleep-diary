import styled from "styled-components";

const Container = styled.main`
  z-index: 1;
  width: 70vw;
  height: 70vh;
  background-color: #fff;
  margin: ${({ theme }) => theme.spacing.gutter}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-width: 1200px;
    max-height: 600px;
  }
`;

export default Container;
