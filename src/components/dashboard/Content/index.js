import styled from "styled-components";

import Topbar from "~/src/components/dashboard/Topbar";

function Content() {
  return (
    <StyledContent>
      <Topbar />
      <StyledMain></StyledMain>
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
`;

export default Content;
