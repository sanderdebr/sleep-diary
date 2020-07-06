import styled from "styled-components";

function Box({ children, lessMargin }) {
  return <StyledBox lessMargin={lessMargin}>{children}</StyledBox>;
}

const StyledBox = styled.section`
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding-left: ${({ lessMargin }) => (lessMargin ? "auto" : "8%")};
    padding-right: 8%;
  }
`;

export default Box;
