import styled from "styled-components";

import Icon from "~/src/components/dashboard/Icon";

export const ListIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-right: 18px;
  fill: ${(props) =>
    props.active
      ? props.theme.palette.secondaryAction
      : props.theme.palette.primary};
`;
