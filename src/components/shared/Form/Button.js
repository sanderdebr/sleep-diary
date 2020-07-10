import styled from "styled-components";

function Button({ text, props }) {
  return (
    <Wrapper>
      <ButtonStyles {...props}>
        <span>{text}</span>
      </ButtonStyles>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const ButtonStyles = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
  display: inline-block;
  font-size: 17px;
  letter-spacing: 0.03em;
  color: white;
  position: relative;
  font-family: "Montserrat", sans-serif;

  &:before,
  span {
    background-color: ${({ theme }) => theme.palette.tertiaryAction};
  }

  &:before {
    content: "";
    display: inline-block;
    height: 40px;
    position: absolute;
    bottom: -5px;
    left: 30px;
    right: 30px;
    z-index: -1;
    border-radius: 30em;
    filter: blur(20px) brightness(0.95);
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
  }

  span {
    width: 100%;
    display: inline-block;
    padding: 18px 60px;
    position: relative;
    z-index: 2;
    will-change: transform, filter;
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
  }

  &:focus,
  &:active {
    color: #ffffff;
  }

  &:hover {
    color: #ffffff;

    span {
      filter: brightness(1.05) contrast(1.05);
      transform: scale(0.95);
    }
    &:before {
      bottom: 0;
      filter: blur(10px) brightness(0.95);
    }
  }
`;

export default Button;
