import styled from "styled-components";

function Graphs() {
  return <Wrapper>Graph</Wrapper>;
}

const Wrapper = styled.section`
  background: ${({ theme }) => theme.palette.bg};
  padding: ${({ theme }) => theme.spacing.inner}px;
  width: 100%;
  height: 100%;
`;

export default Graphs;
