import styled from "styled-components";

function H2({ children, ...props }) {
  return <StyledH2 {...props}>{children}</StyledH2>;
}

const StyledH2 = styled.h2`
  font-weight: normal;
  font-size: 1.3rem;
  margin: ${({ bottomMargin, noMargin }) => {
    if (bottomMargin) {
      return "0 0 2rem 0";
    } else if (noMargin) {
      return "0";
    } else {
      return "auto";
    }
  }};
`;

export default H2;
