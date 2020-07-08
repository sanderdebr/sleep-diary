import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        color: ${({ theme }) => theme.palette.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-display: swap;
    }

    #__next {
        height: 100%;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({ theme }) => theme.palette.primary};
        transition: all 250ms ease;
    }
    
    :focus {
        outline: none;
    }
`;
