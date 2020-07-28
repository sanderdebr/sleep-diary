import styled, { keyframes } from "styled-components";
import { rotate } from "~/src/common/styles/animations";

import Icon from "~/src/components/dashboard/Icon";

function Spinner() {
  return (
    <SpinnerStyles>
      <SpinnerIcon icon="spinner" />
    </SpinnerStyles>
  );
}

const SpinnerStyles = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
`;

const SpinnerIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  animation: ${rotate} 500ms linear infinite;

  circle {
    stroke: ${({ theme }) => theme.palette.secondaryAction};
  }
`;

export default Spinner;
