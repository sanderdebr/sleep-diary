import styled from "styled-components";

const Container = styled.main`
  width: 70vw;
  height: 70vh;
  background-color: #fff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  padding: ${({ theme }) => theme.spacing.gutter}px;
  margin: ${({ theme }) => theme.spacing.gutter}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    max-width: 1200px;
    max-height: 600px;
  }
`;

export default Container;
