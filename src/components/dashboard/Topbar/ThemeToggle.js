import styled from "styled-components";

import { useAppContext } from "~/src/state/hooks";

function ThemeToggle() {
  const { theme, dispatch } = useAppContext();

  const themeToggle = () => {
    dispatch({ type: "toggleTheme" });
  };

  return (
    <>
      <StyledText>{theme.id}</StyledText>
      <StyledLabel>
        <StyledInput
          onChange={themeToggle}
          type="checkbox"
          checked={theme.id === "Night"}
        />
        <StyledSpan />
      </StyledLabel>
    </>
  );
}

const StyledLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 27px;
`;

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.secondary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 26px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const StyledText = styled.div`
  margin-right: 1.5rem;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${StyledSpan} {
    background-color: ${({ theme }) => theme.palette.tertiaryAction};
  }

  &:focus + ${StyledSpan} {
    box-shadow: 0 0 1px ${({ theme }) => theme.palette.tertiaryAction};
  }

  &:checked + ${StyledSpan}:before {
    transform: translateX(22px);
  }
`;

export default ThemeToggle;
