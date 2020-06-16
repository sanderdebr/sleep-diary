import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Montserrat Alternates', sans-serif;
        display: block !important;
        box-sizing: border-box;
        margin: 0;
        color: ${({ theme }) => theme.palette.primary};
    }
`;
