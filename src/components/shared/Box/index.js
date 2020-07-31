import styled from "styled-components";

function Box({ children, ...props }) {
  return <StyledBox {...props}>{children}</StyledBox>;
}

const StyledBox = styled.section`
  height: 100%;
  width: 100%;
  display: ${({ flex }) => (flex ? "flex" : "block")};
  flex-direction: column;
  position: relative;
  padding: ${(props) => (props.noPadding ? "0" : props.theme.spacing.gutter)}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding-left: ${({ noPadding }) => (noPadding ? "0" : "8%")};
    padding-right: ${({ noPadding }) => (noPadding ? "0" : "8%")};
    flex-direction: row;
  }
`;

export default Box;
