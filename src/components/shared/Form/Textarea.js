import styled from "styled-components";

function Textarea({
  state = "",
  setState,
  draftState,
  setDraftState,
  ...props
}) {
  const handleBlur = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDraftState({ ...state, [name]: value });
  };

  return (
    <StyledTextarea
      onChange={handleChange}
      onBlur={handleBlur}
      value={draftState[props.name]}
      {...props}
    />
  );
}

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.inner}px;
  border: none;
  background: ${({ theme }) => theme.palette.bgColor};
  color: ${({ theme }) => theme.palette.primary};
  font-family: inherit;
  resize: none;
  margin-bottom: 0.75rem;
  height: 95px;
`;

export default Textarea;
