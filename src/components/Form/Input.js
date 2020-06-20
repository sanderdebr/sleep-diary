import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

function Input({ placeholder = "E-mail address", type = "text" }) {
  let touched = false;
  const ref = useRef();
  const [input, setInput] = useState("");

  const handleChange = ({ target: { value } }) => {
    if (!touched) {
      touched = true;
      ref.current.classList.add("blurred");
    }
    if (value === "") ref.current.classList.remove("blurred");
    setInput(value);
  };

  return (
    <InputEffect>
      <InputStyled
        ref={ref}
        type={type}
        onChange={handleChange}
        value={input}
      />
      <label>{placeholder}</label>
      <FocusBorder></FocusBorder>
    </InputEffect>
  );
}

const InputEffect = styled.div`
  width: 100%;
  margin: 2rem 0;
  position: relative;
`;

const FocusBorder = styled.span``;

const InputStyled = styled.input`
  width: 100%;
  border: 0;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
  background-color: transparent;
  font-family: "Montserrat Alternates", sans-serif;

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
    font-size: 12px;
    color: ${({ theme }) => theme.palette.primaryAction};
    transition: 0.3s;
  }
  &.blurred ~ label {
    top: -16px;
    font-size: 12px;
    color: ${({ theme }) => theme.palette.primaryAction};
  }
`;

export default Input;
