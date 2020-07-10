import styled from "styled-components";

function H1({ bottomMargin, children }) {
  return <StyledH1 bottomMargin={bottomMargin}>{children}</StyledH1>;
}

const StyledH1 = styled.h1`
  font-weight: normal;
  font-size: 1.7rem;
  margin: ${({ bottomMargin }) => (bottomMargin ? "0 0 2rem 0" : "auto")};
`;

export default H1;
