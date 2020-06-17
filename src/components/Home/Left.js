import styled from "styled-components";

const Left = styled.div`
  width: 50%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding: ${({ theme }) => theme.spacing.gutter}px;
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export default Left;
