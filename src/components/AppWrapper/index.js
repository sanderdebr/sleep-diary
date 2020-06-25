import { createContext, useReducer } from "react";
import { withRouter } from "next/router";
import styled from "styled-components";

import { initialState, reducer } from "~/src/state";

import Container from "./Container";
import Wave from "./Wave";

export const AppContext = createContext();

function Wrapper({ children, router }) {
  const { pathname } = router;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <WrapperStyles path={pathname}>
        <Container>{children}</Container>
        <Wave />
      </WrapperStyles>
    </AppContext.Provider>
  );
}

const WrapperStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.bgColor};
`;

export default withRouter(Wrapper);
