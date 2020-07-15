import styled from "styled-components";

function Number({ state, setState, ...props }) {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
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
          <Item>+</Item>
          <Item>-</Item>
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
  padding: 0 0.25rem;
  display: flex;
`;

const Label = styled.label`
  display: block;
  margin-right: 0.75rem;
  font-size: 90%;
`;

const StyledNumber = styled.input`
  border: none;
  background: ${({ theme }) => theme.palette.bgColor};
  border-right: none;
  text-align: center;
  pointer-events: none;

  &::-webkit-inner-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const Controls = styled.div``;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem;
  background: ${({ theme }) => theme.palette.tertiaryAction};
  color: white;
`;

export default Number;
