import styled from "styled-components";

import { H2 } from "~/src/components/shared/Text";
import Topbar from "~/src/components/dashboard/Topbar";
import Data from "~/src/components/dashboard/Data";

function Content({ className }) {
  return (
    <StyledContent>
      <Topbar />
      <StyledMain>
        <TopSection>
          <H2 bottomMargin>Dashboard</H2>
          <Article>
            <Today className={className} />
            <Divider />
            <Tomorrow className={className} />
          </Article>
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
  padding: ${({ theme }) => theme.spacing.inner}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Today = styled(Data)`
  background: lightblue;
`;

const Tomorrow = styled(Data)`
  background: lightcoral;
`;

const Divider = styled.div`
  height: 100%;
  width: 1px;
  background: ${({ theme }) => theme.palette.bgColor};
`;

export default Content;
