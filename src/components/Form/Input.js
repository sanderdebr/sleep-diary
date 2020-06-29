import React, { useRef } from "react";
import styled from "styled-components";

function Input({ placeholder, auth, setAuth, ...props }) {
  let touched = false;
  const ref = useRef();

  const handleStyling = () => {
    if (!touched) {
      touched = true;
      ref.current.classList.add("blurred");
    }
    if (ref.current.value == "") ref.current.classList.remove("blurred");
  };

  const handleChange = ({ target }) => {
    handleStyling();
    const { name, value } = target;
    setAuth({ ...auth, [name]: value });
  };

  return (
    <InputEffect>
      <InputStyled
        ref={ref}
        value={auth[props.name]}
        onChange={handleChange}
        {...props}
      />
      <label>{placeholder}</label>
      <FocusBorder></FocusBorder>
    </InputEffect>
  );
}

const InputEffect = styled.div`
  width: 100%;
  margin: 1.5rem 0 2.5rem 0;
  position: relative;
`;

const FocusBorder = styled.span``;

const InputStyled = styled.input`
  width: 100%;
  border: 0;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.primary};
  background-color: transparent;
  font-family: "Montserrat", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.p}px;

  & ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.primaryAction};
    transition: 0.4s;
  }
  &:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }
  & ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: ${({ theme }) => theme.palette.secondary};
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  &:focus ~ label {
    top: -16px;
    color: ${({ theme }) => theme.palette.primaryAction};
    transition: 0.3s;
    font-size: 12px;
  }
  &.blurred ~ label {
    top: -16px;
    color: ${({ theme }) => theme.palette.primaryAction};
    font-size: 12px;
  }
`;

export default Input;
