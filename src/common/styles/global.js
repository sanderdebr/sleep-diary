import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Montserrat Alternates', sans-serif;
        display: block !important;
        margin: 0;
        color: ${({ theme }) => theme.palette.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
