import styled from "styled-components";

function Number({ state, setState, ...props }) {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const add = ({ name = props.name }) => {
    setState({ ...state, [name]: state[name] + 1 });
  };

  const subtract = ({ name = props.name }) => {
    setState({ ...state, [name]: state[name] - 1 });
  };

  return (
    <Wrapper>
      <Label>{props.placeholder}</Label>
      <Right>
        <StyledNumber
          value={state[props.name]}
          onChange={handleChange}
          {...props}
        ></StyledNumber>
        <Controls>
          <Add onClick={add}>+</Add>
          <Subtract onClick={subtract}>-</Subtract>
        </Controls>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: block;
  margin-right: 0.75rem;
  font-size: 90%;
`;

const Controls = styled.div``;

const Add = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  background: ${({ theme }) => theme.palette.tertiaryAction};
  color: white;
  opacity: 0.25;
  transition: all 250ms ease;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 0;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.palette.aurora.green};
  }
`;

const Subtract = styled(Add)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;

  &:hover {
    background: ${({ theme }) => theme.palette.aurora.red};
  }
`;

const StyledNumber = styled.input`
  border: none;
  background: ${({ theme }) => theme.palette.bgColor};
  border-right: none;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary};
  width: 45px;
  border-radius: 3px 0 0 3px;

  &::-webkit-inner-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export default Number;
