import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Montserrat Alternates', sans-serif;
        margin: 0;
        color: ${({ theme }) => theme.palette.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-display: swap;
    }
    
    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
        transition: 250ms ease;
        &:hover {
            color: ${({ theme }) => theme.palette.primaryAction}
        }
    }

    :focus {
        outline: none;
    }
`;
