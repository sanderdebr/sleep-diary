import styled from "styled-components";

const Left = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;
  background: ${({ theme }) => theme.palette.bg};
  border-radius: ${({ theme }) => theme.general.borderRadius}px 0 0
    ${({ theme }) => theme.general.borderRadius}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    width: 50%;
    padding: ${({ theme }) => theme.spacing.gutter}px;
    padding-left: 8%;
    padding-right: 8%;
  }
`;

export default Left;
