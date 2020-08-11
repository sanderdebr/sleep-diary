import styled from "styled-components";
import Link from "next/link";
import Cookies from "universal-cookie";

import * as Constants from "~/src/common/constants";

import { ListItem } from "./ListItem";
import { ListIcon } from "./ListIcon";

function List({ items = [], pathname, open }) {
  const logOut = () => {
    const cookies = new Cookies();
    const jwt = cookies.get(Constants.session.key);
    if (jwt) {
      cookies.remove(Constants.session.key, { path: "/" });
    }
    window.location.href = "/";
  };

  return (
    <StyledList open={open}>
      {items.map((item, i) => (
        <a href={item.title.toLowerCase()} key={i}>
          <ListItem active={item.icon === pathname}>
            <ListIcon active={item.icon === pathname} icon={item.icon} />
            {item.title}
          </ListItem>
        </a>
      ))}
      <Logout onClick={logOut} open={open}>
        <ListIcon icon="logout" />
        logout
      </Logout>
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  background: ${({ open, theme }) => (open ? theme.palette.bg : "none")};
  right: ${({ open }) => (open ? "10%" : "0")};
  top: ${({ open }) => (open ? "13%" : "0")};
  position: ${({ open }) => (open ? "absolute" : "inherit")};
  border-radius: ${({ theme }) => theme.general.borderRadius}px;
  z-index: 3;
  box-shadow: 10px 10px 96px -44px rgba(0, 0, 0, 0.75);

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: block;
    box-shadow: none;
  }
`;

const Logout = styled(ListItem)`
  color: ${({ theme }) => theme.palette.primary};
  position: ${({ open }) => (open ? "inherit" : "absolute")};
  bottom: 2rem;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export default List;
