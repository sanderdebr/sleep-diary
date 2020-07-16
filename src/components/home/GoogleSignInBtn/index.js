import React, { useEffect } from "react";
import styled from "styled-components";

function GoogleSignInBtn({ url = null }) {
  return (
    <a href={url}>
      <Wrapper className="stage">
        <GoogleButton>
          <img
            className="google-auth__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          Sign in to Google
        </GoogleButton>
      </Wrapper>
    </a>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleButton = styled.div`
  width: 100%;
  padding: 12px 16px;
  background: ${({ theme }) => theme.palette.bgColor};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 0.22px;
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
  transition: all 100ms ease;

  &:hover {
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  }

  .google-auth__logo {
    display: inline-block;
    margin-right: 16px;
    height: 24px;
    width: 24px;
    line-height: 24px;
    vertical-align: top;
  }

  &.disabled,
  &:disabled {
    background: #eeeeee;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  }
`;

export default GoogleSignInBtn;
