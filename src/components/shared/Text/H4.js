import styled from "styled-components";

function H4({ children, ...props }) {
  return <StyledH4 {...props}>{children}</StyledH4>;
}

const StyledH4 = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.primary};

  margin: ${({ bottomMargin, noMargin }) => {
    if (bottomMargin) {
      return "0 0 2rem 0";
    } else if (noMargin) {
      return "0";
    } else {
      return "0.5rem 0 1.5rem 0";
    }
  }};
`;

export default H4;
