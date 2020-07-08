import styled from "styled-components";
import Link from "next/link";

import { menuItems } from "~/src/common/constants";

import Icon from "~/src/components/dashboard/Icon";

function Nav() {
  return (
    <Wrapper>
      <List>
        {menuItems.map((item, i) => (
          <Link href={item.title.toLowerCase()}>
            <a>
              <ListItem key={i}>
                <ListIcon icon={item.icon} />
                {item.title}
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
      <Logout>Logout</Logout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  &:hover {
    background: yellow;
  }
`;

const ListIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-right: 18px;
  fill: ${({ theme }) => theme.palette.primary};
`;

const Logout = styled.p`
  position: absolute;
  bottom: 0;
  padding: 1rem 2rem;
`;

export default Nav;
