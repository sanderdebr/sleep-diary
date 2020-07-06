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
        <Container path={pathname}>{children}</Container>
        <Wave />
      </WrapperStyles>
    </AppContext.Provider>
  );
}

const WrapperStyles = styled.div`
  width: 100%;
  height: ${({ path }) => (path.indexOf("help") !== -1 ? "auto" : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(Wrapper);
