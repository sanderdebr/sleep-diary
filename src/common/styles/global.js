import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
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
        transition: 250ms ease;
        &:hover {
            color: ${({ theme }) => theme.palette.primaryAction}
        }
    }
    
    :focus {
        outline: none;
    }
`;
