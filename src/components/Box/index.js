import styled from "styled-components";

const Box = styled.section`
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding-left: 8%;
    padding-right: 8%;
  }
`;

export default Box;
