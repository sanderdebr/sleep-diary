import styled from "styled-components";

import { H2 } from "~/src/components/shared/Text";
import Topbar from "~/src/components/dashboard/Topbar";
import Data from "~/src/components/dashboard/Data";
import Graphs from "~/src/components/dashboard/Graphs";

function Content({ className, session }) {
  return (
    <StyledContent>
      <Topbar />
      <StyledMain>
        <TopSection>
          <Article>
            <Today className={className} session={session} />
          </Article>
        </TopSection>
        <BottomSection>
          <Article>
            <Graphs />
          </Article>
        </BottomSection>
      </StyledMain>
    </StyledContent>
  );
}

const StyledContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    height: 100%;
  }
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 0 0 ${({ theme }) => theme.general.borderRadius}px 0;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.section`
  width: 100%;
  height: auto;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding: ${({ theme }) => theme.spacing.gutter}px;
  }
`;

const BottomSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding: ${({ theme }) => theme.spacing.gutter}px;
    padding-top: 0;
  }
`;

const Article = styled.article`
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    flex-direction: row;
  }
`;

const Today = styled(Data)`
  background: ${({ theme }) => theme.palette.bg};
  border-right: 1px solid ${({ theme }) => theme.palette.bgColor};
`;

export default Content;
