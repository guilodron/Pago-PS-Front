import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #1A1A1A;
        --accent: #7CA431;
        --negative: #A43131;
        --main: #2A2A2A;
        --light-text: #A9A9A9;
        --light-background: #2A2A2A;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        background-color: #1A1A1A;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden !important;
        width: 100%;
        height: 100%;
    }


`;