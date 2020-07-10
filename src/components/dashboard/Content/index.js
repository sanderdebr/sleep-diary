import styled from "styled-components";

import { H1 } from "~/src/components/shared/Text";
import Topbar from "~/src/components/dashboard/Topbar";

function Content() {
  return (
    <StyledContent>
      <Topbar />
      <StyledMain>
        <TopSection>
          <H1 bottomMargin>Dashboard</H1>
          <Article>Graphs</Article>
        </TopSection>
        <BottomSection>
          <Article>Graphs</Article>
        </BottomSection>
      </StyledMain>
    </StyledContent>
  );
}

const StyledContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 0 0 ${({ theme }) => theme.general.borderRadius}px 0;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.gutter}px;
`;

const TopSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;
`;

const BottomSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;
`;

const Article = styled.article`
  background: ${({ theme }) => theme.palette.bg};
  padding: ${({ theme }) => theme.spacing.gutter}px;
  height: 100%;
`;

export default Content;
