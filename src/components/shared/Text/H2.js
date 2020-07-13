import styled from "styled-components";

function H2({ bottomMargin, children }) {
  return <StyledH2 bottomMargin={bottomMargin}>{children}</StyledH2>;
}

const StyledH2 = styled.h2`
  font-weight: normal;
  font-size: 1.3rem;
  margin: ${({ bottomMargin }) => (bottomMargin ? "0 0 2rem 0" : "auto")};
`;

export default H2;
