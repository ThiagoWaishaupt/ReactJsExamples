import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    min-height: 100%;
}

body {
    background: #22272C ;
    -webkit-font-smoothing: antialiased !important;
}

body, input, button {
    color: #222;
    font-size: 14px;
    font-family:sans-serif;
}

button {
    cursor: pointer;
}

h1, span, p , strong{
    cursor: default;
}

`;
