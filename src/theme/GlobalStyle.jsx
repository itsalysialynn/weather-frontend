import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.ocean};
    font-family: 'PT Sans', sans-serif;
    overflow: hidden;
  }

  h1, h2, h3, h4, p, ul, li {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
