import { createGlobalStyle } from "styled-components";
import font from "../Fonts/TTNorms-Medium.woff";

const GlobalStyle = createGlobalStyle`
   @font-face {
     font-family: 'TT Norms';
    src: url(${font}) format('woff2'),
       url(${font}) format('woff');
    }
    * {
    margin: 0;
    padding: 0;
    font-family: 'TT Norms', sans-serif;
    outline: none;
    text-decoration: none;
    }
    a,
    label,
    input,
    button { 
        cursor: pointer;
        z-index: 2;
    }
    .container {
        max-width: 1260px;
        margin: 0 auto;
    }
    `;

export default GlobalStyle;
