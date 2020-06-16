import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.bgColor};

  &::after {
    content: "";
    background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#7847f3" fill-opacity="1" d="M0,320L40,272C80,224,160,128,240,106.7C320,85,400,139,480,160C560,181,640,171,720,149.3C800,128,880,96,960,80C1040,64,1120,64,1200,64C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg>');
    position: absolute;
    top: 100%;
    height: 20px;
  }
`;

export default Wrapper;
