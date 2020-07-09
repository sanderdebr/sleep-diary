import styled from "styled-components";
import Link from "next/link";

import { ListItem } from "./ListItem";
import { ListIcon } from "./ListIcon";

function List({ items = [], pathname, open }) {
  return (
    <StyledList open={open}>
      {items.map((item, i) => (
        <Link href={item.title.toLowerCase()} key={i}>
          <a>
            <ListItem active={item.icon === pathname}>
              <ListIcon active={item.icon === pathname} icon={item.icon} />
              {item.title}
            </ListItem>
          </a>
        </Link>
      ))}
      <Link href="/logout">
        <a>
          <Logout open={open}>
            <ListIcon icon="logout" />
            logout
          </Logout>
        </a>
      </Link>
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: ${({ open }) => (open ? "block" : "none")};
  background: ${({ open }) => (open ? "white" : "none")};
  right: ${({ open }) => (open ? "10%" : "0")};
  top: ${({ open }) => (open ? "13%" : "0")};
  position: ${({ open }) => (open ? "absolute" : "inherit")};
  border-radius: ${({ theme }) => theme.general.borderRadius}px;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: block;
  }
`;

const Logout = styled(ListItem)`
  color: ${({ theme }) => theme.palette.secondary};
  position: ${({ open }) => (open ? "inherit" : "absolute")};
  bottom: 2rem;
  svg {
    fill: ${({ theme }) => theme.palette.secondary};
  }
`;

export default List;
