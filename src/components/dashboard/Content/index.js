import styled from "styled-components";
import moment from "moment";

import { H2 } from "~/src/components/shared/Text";
import Topbar from "~/src/components/dashboard/Topbar";
import Data from "~/src/components/dashboard/Data";
import Graphs from "~/src/components/dashboard/Graphs";

function Content({ className, session, activities }) {
  // Check activity with no day difference
  const todaysActivity = activities.filter(
    (activity) => moment().diff(activity.day, "days") === 0
  );

  return (
    <StyledContent>
      <Topbar />
      <StyledMain>
        <TopSection>
          <H2 bottomMargin>Dashboard</H2>
          <Article>
            <Today
              className={className}
              session={session}
              todaysActivity={todaysActivity ? todaysActivity[0] : null}
            />
          </Article>
        </TopSection>
        <BottomSection>
          <Article>
            <Graphs activities={activities} />
          </Article>
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
  height: 325px;
  padding: ${({ theme }) => theme.spacing.gutter}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    height: 325px;
  }
`;

const BottomSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.gutter}px;
`;

const Article = styled.article`
  background: transparent;
  height: 100%;
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
