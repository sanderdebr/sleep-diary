import styled from "styled-components";

export const ListItem = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: padding 250ms ease-in-out;
  color: ${(props) =>
    props.active
      ? props.theme.palette.secondaryAction
      : props.theme.palette.primary};

  &:hover {
    padding-left: 1.5rem;
  }
`;
