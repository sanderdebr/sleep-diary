import { useState } from "react";

import styled from "styled-components";
import { withRouter } from "next/router";

import { menuItems } from "~/src/common/constants";

import Icon from "~/src/components/dashboard/Icon";
import List from "~/src/components/dashboard/List";

function Nav({ router }) {
  const [open, setOpen] = useState(false);
  const pathname = router.pathname.slice(router.pathname.indexOf("/") + 1);

  return (
    <StyledNav>
      <ToggleWrapper onClick={() => setOpen(!open)}>
        <Toggle icon={open ? "close" : "menu"} />
      </ToggleWrapper>
      <List items={menuItems} pathname={pathname} open={open} />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    flex-direction: column;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1rem 0 1rem 3rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.palette.primary};
    }
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: none;
  }
`;

const Toggle = styled(Icon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.palette.secondaryAction};
  transition: fill 250ms ease;
`;

export default withRouter(Nav);
