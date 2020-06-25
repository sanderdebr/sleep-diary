import styled from "styled-components";

function FormGroup({ text = "OR", children }) {
  return (
    <GroupStyles>
      <Title>{text}</Title>
      {children}
    </GroupStyles>
  );
}

const GroupStyles = styled.form`
  margin-top: 3rem;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.secondary};
  opacity: 0.7;
  position: relative;
  margin: 2rem 0 1.5rem 0;

  &:before,
  &:after {
    position: absolute;
    width: 40%;
    content: "";
    height: 1px;
    background-color: ${({ theme }) => theme.palette.secondary};
    opacity: 0.7;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;

export default FormGroup;
