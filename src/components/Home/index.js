import styled from "styled-components";

const Home = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    flex-direction: row;
  }
`;

export default Home;
